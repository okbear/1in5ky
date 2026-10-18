import { ERAS, ERA_ORDER } from '../data/eras';
import { regionsForEra } from '../data/regions';
import { ALL_EVENTS } from '../data/events';
import { ERA_CHRONICLES, OVERTURNED_BELIEFS, WORLD_TIMELINE } from '../data/timeline';
import type {
	CharacterState,
	ChoiceOption,
	DecisionEvent,
	EraId,
	FamilyMember,
	FeedEntry,
	PostMortemEvent,
	RegionProfile,
	SocialClassSpec
} from '../types';
import {
	ERA_GROWTH_RATIO,
	HORIZON_YEAR,
	ageGroup,
	clamp,
	formatYear,
	hazard,
	pick,
	weighted,
	type Rng
} from './util';


const EVENTS = ALL_EVENTS;
// ---------------------------------------------------------------------------
// 誕生ガチャ
// ---------------------------------------------------------------------------

const rollBirthYear = (eraId: EraId, rng: Rng): number => {
	const era = ERAS[eraId];
	const span = era.yearEnd - era.yearStart;
	const k = Math.log(ERA_GROWTH_RATIO[eraId]);
	const t = Math.log(1 + rng() * (Math.exp(k) - 1)) / k;
	return Math.min(era.yearEnd, era.yearStart + Math.floor(t * (span + 1)));
};

const pickUniqueName = (pool: readonly string[], used: Set<string>, rng: Rng): string => {
	const avail = pool.filter((n) => !used.has(n));
	let chosen = pick(avail.length > 0 ? avail : pool, rng);
	let seq = 2;
	while (used.has(chosen)) {
		chosen = `${pool[seq % pool.length]}（${seq}）`;
		seq += 1;
	}
	used.add(chosen);
	return chosen;
};


const makeFamily = (r: RegionProfile, usedNames: Set<string>, rng: Rng): FamilyMember[] => {
	const fam: FamilyMember[] = [
		{ relation: '父', name: pickUniqueName(r.maleNames, usedNames, rng), ageAtPlayerBirth: 20 + Math.floor(rng() * 16), alive: true },
		{ relation: '母', name: pickUniqueName(r.femaleNames, usedNames, rng), ageAtPlayerBirth: 16 + Math.floor(rng() * 14), alive: true }
	];
	const sibs = Math.floor(rng() * (r.under5Mortality > 200 ? 5 : 3));
	for (let i = 0; i < sibs; i++) {
		const sex = rng() < 0.5;
		fam.push({
			relation: sex ? '兄弟' : '姉妹',
			name: pickUniqueName(sex ? r.maleNames : r.femaleNames, usedNames, rng),
			ageAtPlayerBirth: Math.floor(rng() * 8) - 4,
			alive: true
		});
	}
	return fam;
};

export const makeIncome = (c: CharacterState): void => {
	c.annualIncomeUnits = Math.round(c.region.annualBaseIncomeUnit * c.socialClass.incomeMultiplier * c.wealth);
	c.modernFeelJpy = Math.round(c.region.modernFeelJpy * c.socialClass.incomeMultiplier * c.wealth);
};

const push = (
	c: CharacterState,
	text: string,
	type: FeedEntry['type'] = 'normal',
	fact?: string
): void => {
	c.feed.unshift({
		id: `${c.feed.length}-${c.age}`,
		age: c.age,
		year: c.currentYear,
		text,
		type,
		fact
	});
};

const chronicleTick = (c: CharacterState, rng: Rng, force = false): void => {
	const usedTitles = new Set(c.chronicle.map((x) => x.title));
	const exact = WORLD_TIMELINE.find((e) => e.year === c.currentYear && !usedTitles.has(e.title));
	if (exact) {
		c.chronicle.push({
			id: `ch-${c.chronicle.length}-${c.age}`,
			year: c.currentYear,
			age: c.age,
			regionTag: exact.category === 'science' ? '科学・技術' : '世界史',
			title: exact.title,
			description: exact.description
		});
		return;
	}
	if (!force && rng() >= 0.3) return;
	const pool = ERA_CHRONICLES[c.era.id].filter((x) => !usedTitles.has(x.title));
	if (pool.length === 0) return;
	const item = pick(pool, rng);
	c.chronicle.push({
		id: `ch-${c.chronicle.length}-${c.age}`,
		year: c.currentYear,
		age: c.age,
		regionTag: item.regionTag,
		title: item.title,
		description: item.description
	});
};

export const rollBirth = (
	rng: Rng = Math.random,
	forceEra?: EraId
): CharacterState => {
	const eraId = forceEra ?? weighted(ERA_ORDER, (id) => ERAS[id].birthSharePercent, rng);
	const era = ERAS[eraId];
	const region = weighted(regionsForEra(eraId), (r) => r.birthWeight, rng);
	const socialClass = weighted(region.classes, (x) => x.share, rng);
	const sex: 'M' | 'F' = rng() < 0.512 ? 'M' : 'F';
	const birthYear = rollBirthYear(eraId, rng);
	const isUrban = rng() * 100 < region.urbanizationRate;
	const place = isUrban ? pick(region.cities, rng) : pick(region.ruralAreas, rng);
	const usedNames = new Set<string>();
	const playerName = pickUniqueName(sex === 'M' ? region.maleNames : region.femaleNames, usedNames, rng);
	const c: CharacterState = {
		id: Math.floor(rng() * 1e9).toString(36),
		name: playerName,
		sex,
		era,
		region,
		birthYear,
		currentYear: birthYear,
		age: 0,
		place,
		isUrban,
		socialClass,
		occupation: pick(socialClass.occupations, rng),
		literate: false,
		health: 60 + Math.floor(rng() * 20),
		happiness: 55,
		knowledge: socialClass.literacyBonus > 50 ? 40 : 10,
		relations: 60,
		annualIncomeUnits: 0,
		wealth: 1,
		ongoing: false,
		modernFeelJpy: 0,
		focus: 'survival',
		alive: true,
		family: makeFamily(region, usedNames, rng),
		feed: [],
		chronicle: [],
		triggeredEventIds: [],
		epitaph: ''
	};
	makeIncome(c);
	push(
		c,
		`${formatYear(birthYear)}、${region.name}の${place}に、${socialClass.name}の子として生まれた。`,
		'normal',
		`この時代の乳児死亡率は出生1,000人あたり約${region.infantMortality}人。5歳までに${Math.round(region.under5Mortality / 10)}%が亡くなる。`
	);
	chronicleTick(c, rng, true);
	return c;
};

// ---------------------------------------------------------------------------
// 1年を進める
// ---------------------------------------------------------------------------

export interface StepResult {
	died: boolean;
	ended: boolean; // 死亡または2026年到達
	decision?: DecisionEvent;
}

const deathContextFor = (c: CharacterState, rng: Rng): string => {
	const g = ageGroup(c.age);
	if (c.sex === 'F' && c.age >= 17 && c.age <= 38 && c.family.some((f) => f.relation === '夫' && f.alive) && rng() < 0.22) {
		return '産褥熱・難産';
	}
	return pick(c.region.commonDeathCauses[g], rng);
};

export const die = (c: CharacterState, cause: string, context = ''): void => {
	c.alive = false;
	c.deathCause = cause;
	c.deathContext = context;
	push(c, `${c.age}歳で亡くなった。死因：${cause}。`, 'death');
	c.epitaph = buildEpitaph(c);
};

const buildEpitaph = (c: CharacterState): string =>
	`${c.region.name}の${c.socialClass.name}、${c.name}。${formatYear(c.birthYear)}生まれ、${c.age}歳で没。` +
	(c.age < 5 ? '名を呼ばれる前に、世を去った。' : c.literate ? '文字を知る者であった。' : '名もなき日々を生きた。');

const flavor = (c: CharacterState, rng: Rng): { text: string; fact?: string } | null => {
	const { age, region, socialClass } = c;
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

const FOCUS_EFFECT: Record<CharacterState['focus'], { health?: number; happiness?: number; knowledge?: number; relations?: number; wealth?: number }> = {
	survival: { health: 1.2 },
	labor: { wealth: 0.02, health: -0.3 },
	family: { relations: 1.5, happiness: 0.5 },
	learning: { knowledge: 1.5 },
	faith: { happiness: 1.2, relations: 0.4 }
};

const eligible = (c: CharacterState, e: DecisionEvent): boolean => {
	if (!e.repeatable && c.triggeredEventIds.includes(e.id)) return false;
	if (e.repeatable) {
		const cooldown = e.id.startsWith('childbirth_') ? 2 : 4;
		for (let a = c.age - cooldown; a <= c.age; a++) {
			if (c.triggeredEventIds.includes(`${e.id}@${a}`)) return false;
		}
	}
	if (c.age < e.minAge || c.age > e.maxAge) return false;
	if (e.eraIds && !e.eraIds.includes(c.era.id)) return false;
	if (e.regionIds && !e.regionIds.includes(c.region.id)) return false;
	if (e.classIds && !e.classIds.includes(c.socialClass.id)) return false;
	if (e.sex && e.sex !== c.sex) return false;
	if (e.isUrban !== undefined && e.isUrban !== c.isUrban) return false;
	if (e.requiresSpouse && !c.family.some((f) => (f.relation === '妻' || f.relation === '夫') && f.alive)) return false;
	if (e.requiresUnmarried && c.family.some((f) => (f.relation === '妻' || f.relation === '夫') && f.alive)) return false;
	if (e.id.startsWith('childbirth_') && c.family.filter((f) => f.relation === '子').length >= 6) return false;
	if (e.yearRange && (c.currentYear < e.yearRange[0] || c.currentYear > e.yearRange[1])) return false;
	return true;
};


const spawnChild = (c: CharacterState, rng: Rng): void => {
	const isBoy = rng() < 0.5;
	const pool = isBoy ? c.region.maleNames : c.region.femaleNames;
	const child: FamilyMember = {
		relation: '子',
		name: pickUniqueName(pool, new Set([c.name, ...c.family.map((f) => f.name)]), rng),
		birthPlayerAge: c.age,
		alive: true
	};
	c.family.push(child);
	c.happiness = clamp(c.happiness + 6, 0, 100);
	push(c, `子の${child.name}が生まれた。`, 'warm');
};

const familyTick = (c: CharacterState, rng: Rng): void => {
	for (const f of c.family) {
		if (!f.alive) continue;
		if (f.relation === '子' && f.birthPlayerAge !== undefined) {
			const childAge = c.age - f.birthPlayerAge;
			if (childAge >= 1 && childAge <= 15 && rng() < hazard(c.region, childAge - 1, 1, 50)) {
				f.alive = false;
				f.deathPlayerAge = c.age;
				c.happiness = clamp(c.happiness - 18, 0, 100);
				c.relations = clamp(c.relations - 8, 0, 100);
				push(c, `子の${f.name}を、${childAge - 1}歳で亡くした。`, 'loss', `当時の5歳未満児死亡率は約${Math.round(c.region.under5Mortality / 10)}%。`);
			}
			continue;
		}
		const refAge = f.ageAtPlayerBirth !== undefined ? f.ageAtPlayerBirth + c.age : f.birthPlayerAge !== undefined ? 20 + (c.age - f.birthPlayerAge) : null;
		if (refAge === null || refAge < 15) continue;
		if (rng() < hazard(c.region, refAge, 1, 50)) {
			f.alive = false;
			f.deathPlayerAge = c.age;
			c.relations = clamp(c.relations - 8, 0, 100);
			c.happiness = clamp(c.happiness - 8, 0, 100);
			push(c, `${f.relation}の${f.name}が亡くなった。`, 'loss');
		}
	}

};

export const stepYear = (c: CharacterState, rng: Rng = Math.random): StepResult => {
	if (!c.alive) return { died: true, ended: true };

	// 当年の死亡判定（0歳の乳児死亡率を含む）
	if (rng() < hazard(c.region, c.age, c.socialClass.mortalityMultiplier, c.health)) {
		die(c, deathContextFor(c, rng));
		return { died: true, ended: true };
	}

	c.age += 1;
	c.currentYear += 1;

	// 状態の自然変化＋重点
	const f = FOCUS_EFFECT[c.focus];
	c.health = clamp(c.health + (f.health ?? 0) - (c.age > 40 ? (c.age - 40) * 0.05 : 0), 0, 100);
	c.happiness = clamp(c.happiness + (f.happiness ?? 0) + (50 - c.happiness) * 0.03, 0, 100);
	c.knowledge = clamp(c.knowledge + (f.knowledge ?? 0), 0, 100);
	c.relations = clamp(c.relations + (f.relations ?? 0) - 0.3, 0, 100);
	c.wealth = Math.max(0.05, c.wealth + (f.wealth ?? 0));
	makeIncome(c);

	// 2026年の地平線
	if (c.currentYear >= HORIZON_YEAR) {
		c.ongoing = true;
		push(c, `${HORIZON_YEAR}年。この人生は、いまも続いている。`, 'milestone');
		return { died: false, ended: true };
	}

	if (!c.literate && c.focus === 'learning' && c.age >= 12 && c.knowledge >= 35) {
		c.literate = true;
		push(c, '学びを重ね、文字の読み書きができるようになった。', 'milestone');
	}

	const fl = flavor(c, rng);
	if (fl) push(c, fl.text, 'normal', fl.fact);

	familyTick(c, rng);
	chronicleTick(c, rng);

	// 歴史の大波（確定年代イベントは高確率、時代共通イベントは適度な確率で発生）
	// 1. 歴史の大波（確定年代イベントは高確率、時代共通イベントは適度な確率で発生）
	const wave = EVENTS.find(
		(e) => e.isHistoricalWave && eligible(c, e) && (e.yearRange ? rng() < 0.8 : rng() < 0.14)
	);
	if (wave) {
		c.triggeredEventIds.push(wave.id, `${wave.id}@${c.age}`);
		push(c, `【${wave.historicalYearLabel ?? formatYear(c.currentYear)}】${wave.title}`, 'historical', wave.factBox);
		return { died: false, ended: false, decision: wave };
	}

	// 2. ライフイベント（進路・結婚・出産：必ず決断を挟む）
	const lifePool = EVENTS.filter((e) => e.isLifecycle && eligible(c, e));
	if (lifePool.length > 0 && rng() < 0.36) {
		const e = weighted(lifePool, (x) => (x.regionIds ? 4 : 1), rng);
		c.triggeredEventIds.push(e.id, `${e.id}@${c.age}`);
		push(c, e.title, 'decision', e.factBox);
		return { died: false, ended: false, decision: e };
	}

	// 3. 時代・地域・環境の理不尽イベント
	const pool = EVENTS.filter((e) => !e.isHistoricalWave && !e.isLifecycle && eligible(c, e));
	if (pool.length > 0 && rng() < 0.38) {
		const e = weighted(pool, (x) => (x.regionIds ? 3.5 : x.isUrban !== undefined ? 2.5 : x.classIds ? 1.8 : 1), rng);
		c.triggeredEventIds.push(e.id, `${e.id}@${c.age}`);
		push(c, e.title, 'decision', e.factBox);
		return { died: false, ended: false, decision: e };
	}

	return { died: false, ended: false };
};

// ---------------------------------------------------------------------------
// 決断の解決
// ---------------------------------------------------------------------------

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
	if (fx.wealthDelta) c.wealth = Math.max(0.05, c.wealth * (1 + fx.wealthDelta / 100));
	if (fx.occupationChange) c.occupation = fx.occupationChange;
	if (fx.locationChange) {
		c.place = fx.locationChange === 'urban' ? pick(c.region.cities, rng) : fx.locationChange;
		c.isUrban = true;
	}
	if (fx.literate) c.literate = true;
	makeIncome(c);

	if (choice.survivalChance !== undefined) {
		const p = clamp(choice.survivalChance + (c.health - 50) / 500, 0.02, 0.99);
		if (rng() >= p) {
			push(c, `▸ 「${choice.label}」を選んだ。${choice.outcomeText}`, 'danger');
			die(c, choice.deathCause ?? '不慮の死', choice.outcomeText);
			return { died: true, text: choice.outcomeText };
		}
	}
	push(c, `▸ 「${choice.label}」を選んだ。${choice.outcomeText}`, 'normal');

	if (fx.marry && !c.family.some((m) => (m.relation === '妻' || m.relation === '夫') && m.alive)) {
		const spouseRel = c.sex === 'M' ? '妻' : '夫';
		const pool = c.sex === 'M' ? c.region.femaleNames : c.region.maleNames;
		const spouseName = pickUniqueName(pool, new Set([c.name, ...c.family.map((f) => f.name)]), rng);
		c.family.push({
			relation: spouseRel,
			name: spouseName,
			birthPlayerAge: c.age,
			alive: true
		});
		push(c, `${spouseRel}の${spouseName}と所帯を持った。`, 'warm');
	}
	if (fx.addChild) {
		spawnChild(c, rng);
	}
	if (fx.killSpouseChance && rng() < fx.killSpouseChance) {
		const sp = c.family.find((f) => (f.relation === '妻' || f.relation === '夫') && f.alive);
		if (sp) {
			sp.alive = false;
			sp.deathPlayerAge = c.age;
			c.happiness = clamp(c.happiness - 22, 0, 100);
			c.relations = clamp(c.relations - 10, 0, 100);
			push(c, `${sp.relation}の${sp.name}が、産後の肥立ちが悪く亡くなった。`, 'loss', '近代以前、産褥熱や難産による母体死亡は日常的な悲劇だった。');
		}
	}
	return { died: false, text: choice.outcomeText };
};

// ---------------------------------------------------------------------------
// 死後
// ---------------------------------------------------------------------------

export interface PostMortem {
	events: PostMortemEvent[];
	belief?: { belief: string; overturned: string };
}

export const postMortem = (c: CharacterState): PostMortem => {
	const after = WORLD_TIMELINE.filter((e) => e.year > c.currentYear).sort((a, b) => a.year - b.year);
	const near = after.slice(0, 3);
	const science = after.filter((e) => e.category === 'science' && !near.includes(e)).slice(0, 1);
	const events = [...near, ...science]
		.sort((a, b) => a.year - b.year)
		.map((e) => ({ ...e, yearsAfterDeath: e.year - c.currentYear }));
	const b = OVERTURNED_BELIEFS.find((x) => c.currentYear < x.until);
	return { events, belief: b ? { belief: b.belief, overturned: b.overturned } : undefined };
};
