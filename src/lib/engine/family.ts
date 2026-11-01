import { makeName, contextFor, usedFamilyGivenNames, childSurname, formatPersonalName } from '#lib/engine/names';
import type { CharacterState, DecisionEvent, FamilyMember } from '#lib/types';
import { pushFeed } from '#lib/engine/character';
import { MAX_AGE, clamp, hazard, type Rng } from '#lib/engine/util';

export const spawnChild = (c: CharacterState, rng: Rng): void => {
	const isBoy = rng() < 0.5;
	const nameParts = makeName(contextFor(c), isBoy ? 'M' : 'F', usedFamilyGivenNames(c), rng, childSurname(c));
	const child: FamilyMember = {
		id: `child-${c.family.filter((f) => f.relation === '子').length}`,
		relation: '子',
		name: formatPersonalName(nameParts),
		nameParts,
		birthYear: c.currentYear,
		status: 'alive'
	};
	c.family.push(child);
	c.happiness = clamp(c.happiness + 6, 0, 100);
	pushFeed(c, `子の${child.name}が生まれた。`, 'warm');
};

const makeFamilyDeathEvent = (c: CharacterState, f: FamilyMember, childAge?: number): DecisionEvent => {
	const isChild = f.relation === '子';
	const isParent = f.relation === '父' || f.relation === '母';
	const isSpouse = f.relation === '妻' || f.relation === '夫';

	let title = `${f.relation}の死（${f.name}）`;
	let description = '';
	let factBox = '';
	let choiceLabel = '';
	let choiceSubLabel = '';
	let outcomeText = '';
	if (isChild && childAge !== undefined) {
		title = `我が子の死（${f.name}）`;
		description = `${childAge}歳になった子の${f.name}が、急な熱病に冒されて小さな息を引き取った。家族とともに亡骸を抱きしめ、早すぎる別れを涙とともに見送った。`;
		factBox = `この時代・地域（${c.environment.region.name}）の5歳未満児死亡率は約${Math.round(c.environment.region.under5Mortality / 10)}%。子どもの死亡判定にもこの地域の年齢別生命表を用いる。`;
		choiceLabel = '亡骸を埋葬し、静かに祈りを捧げる';
		choiceSubLabel = '深い悲しみを抱えながらも前を向く';
		outcomeText = `冷たくなった${f.name}を土に還し、名もなき小石を墓標として置いた。悲しみを抱えながらも残された家族のために立ち上がった。`;
	} else if (isParent) {
		description = `これまで家を支えてくれた${f.relation}の${f.name}が病に倒れ、息を引き取った。家族皆で枕元に集まり、長年の感謝と別れを告げた。`;
		factBox = `この時代・地域（${c.environment.region.name}）で15歳まで生存した人の平均到達年齢は約${c.environment.region.lifeExpectancyAt15}歳。医療環境は現在年に対応する地域プロファイルを用いている。`;
		choiceLabel = `${f.relation}の教えを胸に、弔いを執り行う`;
		choiceSubLabel = '親の遺志を受け継ぎ、家の役目を引き継ぐ';
		outcomeText = `${f.relation}の${f.name}を弔い、家族とともに別れを惜しんだ。自分自身が家を支える番になったことを強く自覚した。`;
	} else if (isSpouse) {
		description = `苦楽をともにしてきた${f.relation}の${f.name}が病に倒れ、帰らぬ人となった。一人残された部屋に深い静寂が広がる。`;
		factBox = `過酷な労働環境や栄養状態、感染症により、人生の盛りの時期に配偶者に先立たれることは決して珍しくなかった。`;
		choiceLabel = `${f.relation}との日々を胸に刻み、見送る`;
		choiceSubLabel = '喪失の痛みに耐え、残された日々を生きる';
		outcomeText = `${f.relation}の${f.name}を静かに見送った。ぽっかりと心に空いた穴を抱えながらも、残された日々を懸命に生きることを誓った。`;
	} else {
		description = `幼い頃からともに育ってきた${f.relation}の${f.name}が亡くなった。過酷な暮らしのなかで、またひとりの身内が世を去った。`;
		factBox = `兄弟姉妹も、親や配偶者、子どもと同じように、実際の年齢と現在の医療環境に応じた死亡判定を受ける。`;
		choiceLabel = '思い出を胸に、静かに手を合わせる';
		choiceSubLabel = '生きていく厳しさを噛み締め、冥福を祈る';
		outcomeText = `${f.relation}の${f.name}を埋葬し、静かに手を合わせた。幼き日の面影を胸に抱きながら、その冥福を祈った。`;
	}

	return {
		id: `family_loss_${f.relation}_${f.name}_${c.age}`,
		allRegions: true,
		title,
		category: 'livelihood',
		isFamilyLoss: true,
		minAge: 0,
		maxAge: 99,
		description,
		factBox,
		choices: [
			{
				id: 'mourn_and_continue',
				recordType: 'loss',
				label: choiceLabel,
				subLabel: choiceSubLabel,
				effects: {},
				outcomeText
			}
		]
	};
};

/** All relatives use the hazard for the age at the start of the completed year. */
export const familyTick = (c: CharacterState, rng: Rng): DecisionEvent | null => {
	let firstLossEvent: DecisionEvent | null = null;
	for (const f of c.family) {
		if (f.status === 'unborn') {
			if (f.birthYear <= c.currentYear) {
				f.status = 'alive';
				pushFeed(c, `${f.relation}の${f.name}が生まれた。`, 'warm');
			}
			continue;
		}
		if (f.status !== 'alive') continue;
		const age = c.currentYear - 1 - f.birthYear;
		if (age < 0) continue;
		if (age < MAX_AGE && rng() >= hazard(c.environment.region, age, 1, 50)) continue;
		f.status = 'dead';
		f.deathYear = c.currentYear;
		const isChild = f.relation === '子';
		c.happiness = clamp(c.happiness - (isChild ? 18 : 8), 0, 100);
		c.relations = clamp(c.relations - 8, 0, 100);
		pushFeed(c, `${f.relation}の${f.name}を、${age}歳で亡くした。`, 'loss');
		firstLossEvent ??= makeFamilyDeathEvent(c, f, isChild ? age : undefined);
	}
	return firstLossEvent;
};
