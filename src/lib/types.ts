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
	| 'anc_indus'
	| 'anc_aegean'
	| 'cls_rome'
	| 'cls_han'
	| 'cls_india'
	| 'cls_persia'
	| 'cls_mesoamerica'
	| 'cls_africa'
	| 'cls_yayoi'
	| 'med_europe'
	| 'med_islam'
	| 'med_china'
	| 'med_japan'
	| 'med_india'
	| 'med_west_africa'
	| 'med_east_africa'
	| 'med_mesoamerica'
	| 'med_andes'
	| 'med_southeast_asia'
	| 'em_edo'
	| 'em_china'
	| 'em_mughal_india'
	| 'em_europe'
	| 'em_west_africa'
	| 'em_caribbean'
	| 'em_andes'
	| 'em_mesoamerica'
	| 'em_north_america'
	| 'ind_europe'
	| 'ind_north_america'
	| 'ind_japan'
	| 'ind_china'
	| 'ind_india'
	| 'ind_southeast_asia'
	| 'ind_russia'
	| 'ind_egypt'
	| 'ind_congo'
	| 'ind_latin_america'
	| 'mod_japan'
	| 'mod_china'
	| 'mod_taiwan'
	| 'mod_korea'
	| 'mod_south_asia'
	| 'mod_southeast_asia'
	| 'mod_subsaharan_africa'
	| 'mod_mena'
	| 'mod_europe'
	| 'mod_north_america'
	| 'mod_latin_america'
	| 'mod_russia_cis'
	| 'med_britain'
	| 'med_france'
	| 'med_germany'
	| 'med_italy'
	| 'em_britain'
	| 'em_france'
	| 'em_germany'
	| 'em_italy'
	| 'ind_britain'
	| 'ind_france'
	| 'ind_germany'
	| 'ind_italy'
	| 'mod_britain'
	| 'mod_france'
	| 'mod_germany'
	| 'mod_italy'
	| 'ind_usa'
	| 'ind_canada'
	| 'mod_usa'
	| 'mod_canada'
	| 'ind_mexico'
	| 'ind_brazil'
	| 'ind_argentina'
	| 'ind_peru'
	| 'mod_brazil'
	| 'mod_mexico'
	| 'mod_argentina'
	| 'mod_colombia'
	| 'mod_india'
	| 'mod_pakistan'
	| 'mod_bangladesh'
	| 'mod_indonesia'
	| 'mod_philippines'
	| 'mod_thailand'
	| 'mod_vietnam'
	| 'mod_malaysia'
	| 'mod_nigeria'
	| 'mod_ghana'
	| 'mod_kenya'
	| 'mod_congo'
	| 'mod_senegal'
	| 'mod_south_africa'
	| 'mod_egypt'
	| 'mod_iraq'
	| 'mod_jordan'
	| 'mod_tunisia'
	| 'mod_libya'
	| 'mod_russia'
	| 'mod_ukraine'
	| 'mod_belarus'
	| 'mod_kazakhstan'
	| 'ind_malaya'
	| 'ind_java'
	| 'em_netherlands'
	| 'mod_syria'
	| 'med_iraq'
	| 'med_egypt'
	| 'med_andalus'
	| 'med_central_asia'
;
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

export type CountryId = 'netherlands' | 'syria' | 'spain' | 'argentina' | 'bangladesh' | 'belarus' | 'brazil' | 'britain' | 'canada' | 'china' | 'colombia' | 'congo' | 'egypt' | 'ethiopia' | 'france' | 'germany' | 'ghana' | 'india' | 'indonesia' | 'iraq' | 'italy' | 'japan' | 'jordan' | 'kazakhstan' | 'kenya' | 'korea' | 'libya' | 'malaysia' | 'mexico' | 'nigeria' | 'pakistan' | 'persia' | 'peru' | 'philippines' | 'russia' | 'senegal' | 'south_africa' | 'taiwan' | 'thailand' | 'tunisia' | 'ukraine' | 'usa' | 'vietnam';
export type RegionStatistic = 'birthWeight' | 'infantMortality' | 'under5Mortality' | 'lifeExpectancyAt15' | 'literacyRate' | 'urbanizationRate' | 'gdpPerCapitaPPP' | 'gini' | 'annualBaseIncomeUnit' | 'modernFeelJpy';
export interface StatisticProvenance {
 status: 'estimated' | 'inherited' | 'sourced';
 period: [number, number];
 sourceIds: string[];
 note: string;
 inheritedFrom?: RegionId;
}

export interface RegionProfile {
	id: RegionId;
	eraId: EraId;
	country: CountryId | null;
	statistics: Record<RegionStatistic, StatisticProvenance>;
	name: string;
	subName: string;
	polity: string;
	cities: string[];
	ruralAreas: string[];
	birthWeight: number; // Share within the era (sums to 100 per era)
	infantMortality: number; // per 1,000 live births (age 0)
	under5Mortality: number; // per 1,000 live births (ages 0-4 cumulative)
	lifeExpectancyAt15: number; // Expected age at death conditional on survival to 15, not remaining years
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
	survivalModel?: 'health-adjusted' | 'fixed'; // fixed preserves an explicitly calibrated event probability
	maternalRisk?: true; // national maternal-risk approximation, not a hospital-specific treatment effect
	deathCause?: string;
	effects: {
		health?: number;
		happiness?: number;
		knowledge?: number;
		relations?: number;
		wealthDelta?: number; // one-off balance change, % of current annual household income
		incomeDelta?: number; // lasting % change in earning capacity
		occupationChange?: string;
		locationChange?: string;
		literate?: boolean;
		addChild?: boolean;
		marry?: boolean;
		killSpouseChance?: number;
	};
	outcomeText: string; // 生き延びたときに記録される結果
	recordType?: 'decision' | 'loss';
	deathText?: string; // survivalChance の判定に敗れたときに記録される結果（survivalChance があれば必須）
}

export type InstitutionId = 'english-ordeal' | 'manorial-marriage-dues' | 'english-hunting-privilege' | 'roman-slavery' | 'edo-gonin-gumi';

export interface DecisionEventSpec {
	id: string;
	title: string;
	category: 'historical_wave' | 'common_sense' | 'livelihood';
	eraIds?: EraId[];
	/** Optional exact place restriction within the allowed regions. */
	places?: string[];
	/** Every named institution must be supported at the current place and year. */
	requiresInstitutions?: [InstitutionId, ...InstitutionId[]];
	classIds?: SocialClassId[];
	sex?: 'M' | 'F';
	requiresSpouse?: boolean;
	requiresUnmarried?: boolean;
	isUrban?: boolean;
	repeatable?: boolean;
	isLifecycle?: boolean;
	lifecycleKind?: 'childbirth' | 'marriage' | 'career' | 'retirement' | 'other';
	cooldownYears?: number;
	maxChildren?: number;
	isFamilyLoss?: boolean;
	minAge: number;
	maxAge: number;
	yearRange?: [number, number]; // specific historical window
	isHistoricalWave?: boolean;
	historicalYearLabel?: string;
	description: string;
	factBox: string;
	choices: ChoiceOption[];
}

/** Explicitly opt into shared events; regional events must name at least one region. */
export type DecisionEvent = DecisionEventSpec & (
	| { regionIds: [RegionId, ...RegionId[]]; allRegions?: never }
	| { allRegions: true; regionIds?: never }
);

export interface FeedEntry {
	id: string;
	age: number;
	year: number;
	text: string;
	fact?: string;
	type: 'normal' | 'historical' | 'decision' | 'milestone' | 'danger' | 'warm' | 'loss' | 'death';
}


/** Structured independently of the display string; unknown traditions remain name-only. */
export interface PersonalName {
	givenName: string;
	familyName?: string;
	birthFamilyName?: string;
	convention: 'personal-only' | 'chinese' | 'japanese' | 'korean';
}

export type FamilyRelation = '父' | '母' | '兄' | '姉' | '弟' | '妹' | '妻' | '夫' | '子';
export interface FamilyMember {
	id: string;
	relation: FamilyRelation;
	name: string;
	nameParts?: PersonalName;
	birthYear: number;
	status: 'unborn' | 'alive' | 'dead';
	deathYear?: number;
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

export interface Environment {
	era: EraSpec;
	region: RegionProfile;
	socialClass: SocialClassSpec;
	coverage: 'matched' | 'retained';
}

export interface CharacterState {
	id: string;
	name: string;
	birthName: string;
	nameParts: PersonalName;
	sex: 'M' | 'F';
	era: EraSpec;
	region: RegionProfile;
	birthYear: number;
	birthPlace: string;
	birthCountry: CountryId | null;
	currentCountry: CountryId | null;
	environment: Environment;
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
	incomeMultiplier: number; // earning capacity; 1 = class baseline
	savings: number; // household reserves minus debt, in class-baseline annual income equivalents
	hardshipYears: number;
	lastFinanceEventAge: number;
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
