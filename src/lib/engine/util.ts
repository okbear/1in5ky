import type { EraId, RegionProfile } from '../types';

export const formatYear = (y: number): string => (y < 0 ? `紀元前${-y}年` : `${y}年`);

export const formatYen = (n: number): string => {
	if (n >= 1e8) return `${(n / 1e8).toFixed(1)}億円`;
	if (n >= 1e4) return `${Math.round(n / 1e4).toLocaleString('ja-JP')}万円`;
	return `${Math.round(n).toLocaleString('ja-JP')}円`;
};

export const clamp = (v: number, lo: number, hi: number): number => Math.min(hi, Math.max(lo, v));

export type Rng = () => number;

export const pick = <T>(arr: readonly T[], rng: Rng): T => arr[Math.floor(rng() * arr.length)];

export const weighted = <T>(items: readonly T[], weight: (t: T) => number, rng: Rng): T => {
	const total = items.reduce((s, i) => s + weight(i), 0);
	let r = rng() * total;
	for (const it of items) {
		r -= weight(it);
		if (r <= 0) return it;
	}
	return items[items.length - 1];
};

/** 人類全体での時代ごとの人口増加比（時代の始まり→終わり）。リアル統計モードの出生年重みづけに使う。 */
export const ERA_GROWTH_RATIO: Record<EraId, number> = {
	ancient: 7,
	classical: 2,
	medieval: 2.2,
	early_modern: 2.2,
	industrial: 2.3,
	modern: 3.5
};

// ---------------------------------------------------------------------------
// 年別の死亡ハザード（生命表）
// ---------------------------------------------------------------------------

export const MAX_AGE = 110;

/** この年齢未満で死んだときだけ「息を吹き返す」ことができる（60歳以上の死は確定） */
export const REVIVE_MAX_AGE = 60;

/** 1〜4歳の年間死亡確率: 0〜4歳累積死亡率が under5Mortality になるよう逆算 */
const q1to4 = (r: RegionProfile): number => {
	const imr = r.infantMortality / 1000;
	const u5 = r.under5Mortality / 1000;
	return 1 - Math.pow((1 - u5) / (1 - imr), 1 / 4);
};

const gompertzB = (r: RegionProfile): number => (r.lifeExpectancyAt15 < 55 ? 0.07 : 0.09);

const adultHazard = (A: number, B: number, age: number): number =>
	Math.min(0.98, A * Math.exp(B * (age - 15)));

/** 15歳生存者の平均余命が lifeExpectancyAt15 - 15 になるよう Gompertz の A を二分探索で較正 */
const calibrate = (r: RegionProfile): number => {
	const target = r.lifeExpectancyAt15 - 15;
	const B = gompertzB(r);
	const remaining = (A: number): number => {
		let s = 1;
		let sum = 0;
		for (let a = 15; a < MAX_AGE; a++) {
			const q = adultHazard(A, B, a);
			sum += s * (1 - q / 2);
			s *= 1 - q;
		}
		return sum;
	};
	let lo = 1e-6;
	let hi = 0.3;
	for (let i = 0; i < 60; i++) {
		const mid = Math.sqrt(lo * hi);
		if (remaining(mid) > target) lo = mid;
		else hi = mid;
	}
	return Math.sqrt(lo * hi);
};

const calibrationCache = new Map<string, number>();
const adultA = (r: RegionProfile): number => {
	let a = calibrationCache.get(r.id);
	if (a === undefined) {
		a = calibrate(r);
		calibrationCache.set(r.id, a);
	}
	return a;
};

/** 年齢 age の1年間に死亡する基礎確率（階級・健康の補正前） */
export const baseHazard = (r: RegionProfile, age: number): number => {
	if (age === 0) return r.infantMortality / 1000;
	if (age < 5) return q1to4(r);
	if (age < 15) return Math.max(0.002, (r.under5Mortality / 1000) * 0.04);
	return adultHazard(adultA(r), gompertzB(r), age);
};

export const hazard = (
	r: RegionProfile,
	age: number,
	classMortalityMultiplier: number,
	health: number
): number => {
	const healthMult = 1.5 - 0.0075 * clamp(health, 0, 100); // 0→1.5, 100→0.75
	return clamp(baseHazard(r, age) * classMortalityMultiplier * healthMult, 0, 0.98);
};


export const ageGroup = (age: number): 'infant' | 'child' | 'youth' | 'adult' | 'elder' =>
	age < 1 ? 'infant' : age < 15 ? 'child' : age < 30 ? 'youth' : age < 60 ? 'adult' : 'elder';

/** 理論上の平均寿命（基礎ハザードで積分）: テスト・表示用 */
export const expectedLifespan = (r: RegionProfile, classMortalityMultiplier = 1): number => {
	let s = 1;
	let sum = 0;
	for (let a = 0; a < MAX_AGE; a++) {
		const q = hazard(r, a, classMortalityMultiplier, 50);
		sum += s * (1 - q / 2);
		s *= 1 - q;
	}
	return sum;
};

/** 同じ時代・地域に生まれた人のうち、年齢 age 歳まで生存する割合（0〜1、生命表 l_x） */
export const survivalRateAtAge = (r: RegionProfile, age: number): number => {
	let s = 1;
	const end = clamp(Math.floor(age), 0, MAX_AGE);
	for (let a = 0; a < end; a++) {
		s *= 1 - baseHazard(r, a);
	}
	return s;
};
