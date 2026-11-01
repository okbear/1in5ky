import { makeName, contextFor, usedFamilyGivenNames, formatPersonalName, applyMarriedNames, updateFamilyNames } from '#lib/engine/names';
import type { SimulationWorld } from '#lib/engine/world';
import { countryForBirth, updateEnvironment } from '#lib/engine/environment';
import type { CharacterState, ChoiceOption, DecisionEvent } from '#lib/types';
import { financeTick } from '#lib/engine/economy';
import { makeIncome, pushFeed } from '#lib/engine/character';
import { familyTick, spawnChild } from '#lib/engine/family';
import { chronicleTick } from '#lib/engine/history';
import { selectDecision } from '#lib/engine/events';
import { MAX_AGE, ageGroup, clamp, formatYear, hazard, pick, type Rng } from '#lib/engine/util';


export interface StepResult {
	died: boolean;
	ended: boolean;
	decision?: DecisionEvent;
}

const deathContextFor = (c: CharacterState, rng: Rng): string =>
	pick(c.environment.region.commonDeathCauses[ageGroup(c.age)], rng);

export const die = (c: CharacterState, cause: string): void => {
	c.alive = false;
	c.deathCause = cause;
	pushFeed(c, `${c.age}歳で亡くなった。死因：${cause}。`, 'death');
	c.epitaph = buildEpitaph(c);
};

const buildEpitaph = (c: CharacterState): string =>
	`${c.region.name}の${c.socialClass.name}、${c.name}。${formatYear(c.birthYear)}生まれ、${c.age}歳で没。` +
	(c.age < 5 ? '名を呼ばれる前に、世を去った。' : c.literate ? '文字を知る者であった。' : '名もなき日々を生きた。');

const flavor = (c: CharacterState, rng: Rng): { text: string; fact?: string } | null => {
	const { age } = c;
	const { region, socialClass } = c.environment;
	if (age === 3) return { text: `${c.place}で、${region.dietStaple}を日々の糧として育つ。` };
	if (age === 6)
		return { text: `家の手伝いが始まった。${socialClass.id === 'peasant' ? '畑仕事や水汲みが毎日の日課になった。' : '周囲の大人の仕事を横目に見て覚えていく。'}` };
	if (age === 10 && !c.literate) {
		const litChance = clamp((region.literacyRate * 0.65 + socialClass.literacyBonus * 0.5) / 100, 0.01, 0.99);
		if (rng() < litChance) {
			c.literate = true;
			c.knowledge = clamp(c.knowledge + 15, 0, 100);
			return { text: '文字の読み書きを教わった。', fact: `この時代・地域の識字率は約${region.literacyRate}%。` };
		}
	}
	if (age === 14)
		return { text: '地域の祭礼や行事に、大人のひとりとして加わるようになった。', fact: region.beliefSystem };
	if (age === 20)
		return { text: `${c.occupation}として本格的に日々の暮らしを支えるようになる。`, fact: region.worldviewCommonSense };
	if (age === 26)
		return { text: '周囲でも病や怪我で倒れる者が少なくないが、この時代のやり方でしのいでいる。', fact: region.medicalCommonSense };
	if (age >= 15 && rng() < 0.16) {
		const lines = [
			`${c.occupation}として、${c.place}で一年を過ごした。`,
			`季節が巡り、${c.place}での日々が続いた。`,
			`周囲の者と支え合いながら、${c.place}で暮らしている。`,
			`${region.dietStaple}で日々の糧を得ながら、また一年が過ぎた。`
		];
		const line = pick(lines, rng);
		if (c.feed[0]?.text !== line) return { text: line };
	}
	return null;
};

const FOCUS_EFFECT: Record<CharacterState['focus'], { health?: number; happiness?: number; knowledge?: number; relations?: number; income?: number }> = {
	survival: { health: 1.2 },
	labor: { income: 0.02, health: -0.3 },
	family: { relations: 1.5, happiness: 0.5 },
	learning: { knowledge: 1.5 },
	faith: { happiness: 1.2, relations: 0.4 }
};

export const stepYear = (c: CharacterState, rng: Rng, world: SimulationWorld): StepResult => {
	if (!c.alive) return { died: true, ended: true };
	updateEnvironment(c, world.regions, world.mortality);
	const namingChange = updateFamilyNames(c, rng);
	if (namingChange) pushFeed(c, namingChange, 'milestone');

	// 当年の死亡判定（0歳の乳児死亡率を含む）および天寿上限
	if (c.age >= MAX_AGE || rng() < hazard(c.environment.region, c.age, c.environment.socialClass.mortalityMultiplier, c.health)) {
		die(c, c.age >= MAX_AGE ? '老衰' : deathContextFor(c, rng));
		return { died: true, ended: true };
	}

	c.age += 1;
	c.currentYear += 1;
	const nextNamingChange = updateFamilyNames(c, rng);
	if (nextNamingChange) pushFeed(c, nextNamingChange, 'milestone');
	if (updateEnvironment(c, world.regions, world.mortality)) {
		pushFeed(c, `${c.currentYear}年。暮らしの制度・医療環境を${c.environment.region.name}の期間推定値で更新した。`, 'milestone', c.environment.region.statistics.infantMortality.note);
	}

	// 状態の自然変化＋重点
	const f = FOCUS_EFFECT[c.focus];
	c.health = clamp(c.health + (f.health ?? 0) - (c.age > 40 ? (c.age - 40) * 0.05 : 0), 0, 100);
	c.happiness = clamp(c.happiness + (f.happiness ?? 0) + (50 - c.happiness) * 0.03, 0, 100);
	c.knowledge = clamp(c.knowledge + (f.knowledge ?? 0), 0, 100);
	c.relations = clamp(c.relations + (f.relations ?? 0) - 0.3, 0, 100);
	if (c.age >= 15) c.incomeMultiplier += f.income ?? 0;
	makeIncome(c);
	financeTick(c, rng);

	// 2026年マイルストーン（現実の現代を突破し、未知の近未来へ）
	if (c.currentYear === 2026) {
		pushFeed(c, '2026年。現実の現代を突破し、人類は未知の近未来へ足を踏み入れた。', 'milestone');
	}

	if (!c.literate && c.focus === 'learning' && c.age >= 12 && c.knowledge >= 35) {
		c.literate = true;
		pushFeed(c, '学びを重ね、文字の読み書きができるようになった。', 'milestone');
	}

	const fl = flavor(c, rng);
	if (fl) pushFeed(c, fl.text, 'normal', fl.fact);

	const familyDeath = familyTick(c, rng);
	if (familyDeath) {
		return { died: false, ended: false, decision: familyDeath };
	}
	chronicleTick(c, rng, false, world);

	const decision = selectDecision(c, rng, world.events);
	return { died: false, ended: false, ...(decision ? { decision } : {}) };
};

export interface ResolveResult {
	died: boolean;
	text: string;
}

export const resolveChoice = (
	c: CharacterState,
	choice: ChoiceOption,
	rng: Rng = Math.random
): ResolveResult => {
	const fx = choice.effects;
	c.health = clamp(c.health + (fx.health ?? 0), 0, 100);
	c.happiness = clamp(c.happiness + (fx.happiness ?? 0), 0, 100);
	c.knowledge = clamp(c.knowledge + (fx.knowledge ?? 0), 0, 100);
	c.relations = clamp(c.relations + (fx.relations ?? 0), 0, 100);
	c.savings += (fx.wealthDelta ?? 0) / 100 * c.incomeMultiplier;
	if (fx.incomeDelta) c.incomeMultiplier = Math.max(0.05, c.incomeMultiplier * (1 + fx.incomeDelta / 100));
	if (fx.occupationChange) c.occupation = fx.occupationChange;
	if (fx.locationChange) {
		const toUrban = fx.locationChange === 'urban';
		c.place = toUrban ? pick(c.environment.region.cities, rng) : fx.locationChange;
		c.isUrban = toUrban || c.environment.region.cities.includes(c.place);
		c.currentCountry = countryForBirth(c.environment.region, c.place) ?? c.currentCountry;
	}
	if (fx.literate) c.literate = true;
	makeIncome(c);

	if (choice.survivalChance !== undefined) {
		const p = choice.survivalModel === 'fixed'
			? clamp(choice.survivalChance, 0, 1)
			: clamp(choice.survivalChance + (c.health - 50) / 500, 0.02, 0.99);
		if (rng() >= p) {
			const deathText = choice.deathText ?? choice.outcomeText;
			pushFeed(c, `▸ 「${choice.label}」を選んだ。${deathText}`, 'danger');
			die(c, choice.deathCause ?? '不慮の死');
			return { died: true, text: deathText };
		}
	}
	if (choice.recordType === 'loss') {
		pushFeed(c, `▸ ${choice.label}。${choice.outcomeText}`, 'loss');
	} else {
		pushFeed(c, `▸ 「${choice.label}」を選んだ。${choice.outcomeText}`, 'decision');
	}

	if (fx.marry && !c.family.some((m) => (m.relation === '妻' || m.relation === '夫') && m.status === 'alive')) {
		const spouseRel = c.sex === 'M' ? '妻' : '夫';
		const nameParts = makeName(contextFor(c), c.sex === 'M' ? 'F' : 'M', usedFamilyGivenNames(c), rng);
		const spouse: import('#lib/types').FamilyMember = {
			id: `spouse-${c.family.length}`, relation: spouseRel, name: formatPersonalName(nameParts), nameParts,
			birthYear: c.birthYear, status: 'alive'
		};
		const previousName = c.name;
		applyMarriedNames(c, spouse);
		c.family.push(spouse);
		if (previousName !== c.name) pushFeed(c, `結婚に伴い、${previousName}から${c.name}へ名前が変わった。`, 'milestone');
		const spouseName = spouse.name;
		pushFeed(c, `${spouseRel}の${spouseName}と所帯を持った。`, 'warm');
	}
	if (fx.addChild) {
		spawnChild(c, rng);
	}
	if (fx.killSpouseChance && rng() < fx.killSpouseChance) {
		const sp = c.family.find((f) => (f.relation === '妻' || f.relation === '夫') && f.status === 'alive');
		if (sp) {
			sp.status = 'dead';
			sp.deathYear = c.currentYear;
			c.happiness = clamp(c.happiness - 22, 0, 100);
			c.relations = clamp(c.relations - 10, 0, 100);
			pushFeed(c, `${sp.relation}の${sp.name}が、産後の肥立ちが悪く亡くなった。`, 'loss', '妊娠・出産に関連する死亡には、出血や感染などがあり、医療や介助へのアクセスによって危険は異なる。');
		}
	}
	return { died: false, text: choice.outcomeText };
};
