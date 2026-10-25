export type EraId =
	| 'ancient'
	| 'classical'
	| 'medieval'
	| 'early_modern'
	| 'industrial'
	| 'modern';

export type RegionId =
	| 'anc_mesopotamia'
	| 'anc_egypt'
	| 'anc_china'
	| 'anc_indus_other'
	| 'cls_rome'
	| 'cls_han'
	| 'cls_india'
	| 'cls_other'
	| 'med_europe'
	| 'med_islam'
	| 'med_china'
	| 'med_japan'
	| 'med_other'
	| 'em_edo'
	| 'em_china_asia'
	| 'em_europe'
	| 'em_atlantic'
	| 'ind_europe_us'
	| 'ind_japan'
	| 'ind_china'
	| 'ind_india'
	| 'ind_other'
	| 'mod_japan'
	| 'mod_china_ea'
	| 'mod_asia'
	| 'mod_africa_me'
	| 'mod_west';
export type SocialClassId =
	| 'enslaved'
	| 'peasant'
	| 'artisan'
	| 'warrior'
	| 'clergy_scholar'
	| 'elite';

export interface SocialClassSpec {
	id: SocialClassId;
	name: string;
	share: number; // 0-100 percentage in this era/region
	incomeMultiplier: number;
	mortalityMultiplier: number;
	literacyBonus: number;
	occupations: string[];
}

export interface RegionProfile {
	id: RegionId;
	eraId: EraId;
	name: string;
	subName: string;
	polity: string;
	cities: string[];
	ruralAreas: string[];
	birthWeight: number; // Share within the era (sums to 100 per era)
	infantMortality: number; // per 1,000 live births (age 0)
	under5Mortality: number; // per 1,000 live births (ages 0-4 cumulative)
	lifeExpectancyAt15: number; // if surviving childhood
	literacyRate: number; // 0-100%
	urbanizationRate: number; // 0-100%
	gdpPerCapitaPPP: number; // Maddison 2011 int$ approximation
	gini: number;
	currencyUnit: string;
	annualBaseIncomeUnit: number;
	modernFeelJpy: number; // Annual equivalent feel in JPY for a median peasant/worker
	dietStaple: string;
	beliefSystem: string;
	medicalCommonSense: string;
	worldviewCommonSense: string;
	maleNames: string[];
	femaleNames: string[];
	classes: SocialClassSpec[];
	commonDeathCauses: {
		infant: string[];
		child: string[];
		youth: string[];
		adult: string[];
		elder: string[];
	};
	sceneTheme: {
		skyTop: string;
		skyBottom: string;
		ground: string;
		accent: string;
		architecture: 'ziggurat' | 'pyramid' | 'classical' | 'medieval' | 'edo' | 'industrial' | 'modern';
	};
}

export interface EraSpec {
	id: EraId;
	name: string;
	shortName: string;
	yearStart: number; // negative for B.C.
	yearEnd: number;
	periodLabel: string;
	cumulativeBirthsOku: number; // 紀元前3000年以降の出生数（単位：億人、合計650億人）
	birthSharePercent: number; // % of all humans born since 3000 BC
	summary: string;
	survivalWall: string;
	worldviewSummary: string;
	accentColor: string;
}

export interface ChoiceOption {
	id: string;
	label: string;
	subLabel: string;
	survivalChance?: number; // 0-1, if risk of immediate/near death
	deathCause?: string;
	effects: {
		health?: number;
		happiness?: number;
		knowledge?: number;
		relations?: number;
		wealthDelta?: number; // % change
		occupationChange?: string;
		locationChange?: string;
		literate?: boolean;
		addChild?: boolean;
		marry?: boolean;
		killSpouseChance?: number;
	};
	outcomeText: string; // 生き延びたときに記録される結果
	deathText?: string; // survivalChance の判定に敗れたときに記録される結果（survivalChance があれば必須）
}

export interface DecisionEvent {
	id: string;
	title: string;
	category: 'historical_wave' | 'common_sense' | 'livelihood';
	eraIds?: EraId[];
	regionIds?: RegionId[];
	classIds?: SocialClassId[];
	sex?: 'M' | 'F';
	requiresSpouse?: boolean;
	requiresUnmarried?: boolean;
	isUrban?: boolean;
	repeatable?: boolean;
	isLifecycle?: boolean;
	minAge: number;
	maxAge: number;
	yearRange?: [number, number]; // specific historical window
	isHistoricalWave?: boolean;
	historicalYearLabel?: string;
	description: string;
	factBox: string;
	choices: ChoiceOption[];
}

export interface FeedEntry {
	id: string;
	age: number;
	year: number;
	text: string;
	fact?: string;
	type: 'normal' | 'historical' | 'decision' | 'milestone' | 'danger' | 'warm' | 'loss' | 'death';
}


export interface FamilyMember {
	relation: string;
	name: string;
	ageAtPlayerBirth?: number; // for parents/siblings
	birthPlayerAge?: number; // for spouse/children
	alive: boolean;
	deathPlayerAge?: number;
}

export interface FocusOption {
	id: 'survival' | 'labor' | 'family' | 'learning' | 'faith';
	label: string;
	sub: string;
}

export interface PostMortemEvent {
	year: number;
	yearsAfterDeath: number;
	title: string;
	description: string;
	category: 'world' | 'science' | 'region';
}

export interface ChronicleEntry {
	id: string;
	year: number;
	age: number;
	regionTag: string;
	title: string;
	description: string;
}

/** 右カラム「世界の出来事」に流れる世界史トピック。yearRange 内の年にのみ出現する（省略時は時代全体） */
export interface ChronicleTopic {
	regionTag: string;
	title: string;
	description: string;
	yearRange?: [number, number];
}

export interface MemorialRecord {
	id: string;
	name: string;
	sex: 'M' | 'F';
	eraId: EraId;
	eraName: string;
	regionName: string;
	place: string;
	birthYear: number;
	deathYear: number;
	deathAge: number;
	socialClass: string;
	occupation: string;
	deathCause: string;
	epitaph: string;
	summaryLine: string;
	createdAt: number;
}

export interface CharacterState {
	id: string;
	name: string;
	sex: 'M' | 'F';
	era: EraSpec;
	region: RegionProfile;
	birthYear: number;
	currentYear: number;
	age: number;
	place: string;
	isUrban: boolean;
	socialClass: SocialClassSpec;
	occupation: string;
	literate: boolean;
	health: number;
	happiness: number;
	knowledge: number;
	relations: number;
	annualIncomeUnits: number;
	wealth: number; // 1.0 = class baseline; changed by decisions
	modernFeelJpy: number;
	focus: FocusOption['id'];
	alive: boolean;
	deathCause?: string;
	family: FamilyMember[];
	feed: FeedEntry[];
	chronicle: ChronicleEntry[];
	triggeredEventIds: string[];
	epitaph: string;
}
