import { makeName, namingPolicy, withSurname, formatPersonalName, type NamingContext } from '#lib/engine/names';
export { pickUniqueName } from '#lib/engine/names';
import type { SimulationWorld } from '#lib/engine/world';
import { annualMortalityProfile, countryForBirth } from '#lib/engine/environment';
import { ERAS, ERA_ORDER } from '#lib/data/eras';
import type { CharacterState, EraId, FamilyMember, FeedEntry, PersonalName, RegionProfile } from '#lib/types';
import { ERA_GROWTH_RATIO, formatYear, pick, weighted, type Rng } from '#lib/engine/util';
import { chronicleTick } from '#lib/engine/history';

const rollBirthYear = (eraId: EraId, rng: Rng): number => {
	const era = ERAS[eraId];
	const span = era.yearEnd - era.yearStart;
	const k = Math.log(ERA_GROWTH_RATIO[eraId]);
	const t = Math.log(1 + rng() * (Math.exp(k) - 1)) / k;
	return Math.min(era.yearEnd, era.yearStart + Math.floor(t * (span + 1)));
};

const makeFamily = (
 context: NamingContext, playerName: PersonalName, usedNames: Set<string>, birthYear: number, rng: Rng
): FamilyMember[] => {
 const fatherName = makeName(context, 'M', usedNames, rng, playerName.familyName);
 const motherBirthName = makeName(context, 'F', usedNames, rng);
 const motherName = namingPolicy(context).marriedSurname === 'shared' && fatherName.familyName
  ? withSurname(motherBirthName, fatherName.familyName) : motherBirthName;
 const fam: FamilyMember[] = [
  { id: 'father', relation: '父', name: formatPersonalName(fatherName), nameParts: fatherName,
   birthYear: birthYear - (20 + Math.floor(rng() * 16)), status: 'alive' },
  { id: 'mother', relation: '母', name: formatPersonalName(motherName), nameParts: motherName,
   birthYear: birthYear - (16 + Math.floor(rng() * 14)), status: 'alive' }
 ];
 const siblings = Math.floor(rng() * (context.region.under5Mortality > 200 ? 5 : 3));
 for (let i = 0; i < siblings; i++) {
  const sex = rng() < 0.5 ? 'M' : 'F';
  const nameParts = makeName(context, sex, usedNames, rng, playerName.familyName);
  const siblingBirthYear = birthYear - (Math.floor(rng() * 8) - 4);
  fam.push({ id: `sibling-${i}`, relation: sex === 'M' ? '兄弟' : '姉妹', name: formatPersonalName(nameParts),
   nameParts, birthYear: siblingBirthYear, status: siblingBirthYear > birthYear ? 'unborn' : 'alive' });
 }
 return fam;
};

export const makeIncome = (c: CharacterState): void => {
	c.annualIncomeUnits = Math.round(c.environment.region.annualBaseIncomeUnit * c.environment.socialClass.incomeMultiplier * c.incomeMultiplier);
	c.modernFeelJpy = Math.round(c.environment.region.modernFeelJpy * c.environment.socialClass.incomeMultiplier * c.incomeMultiplier);
};

export const pushFeed = (
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

export const createCharacter = (
	rng: Rng,
	eraId: EraId,
	world: SimulationWorld
): CharacterState => {
	const era = ERAS[eraId];
	let region = weighted(world.regions.filter((region) => region.eraId === eraId), (r) => r.birthWeight, rng);
	const socialClass = weighted(region.classes, (x) => x.share, rng);
	const sex: 'M' | 'F' = rng() < 0.512 ? 'M' : 'F';
	const birthYear = rollBirthYear(eraId, rng);
	const isUrban = rng() * 100 < region.urbanizationRate;
	const place = isUrban ? pick(region.cities, rng) : pick(region.ruralAreas, rng);
	region = annualMortalityProfile(region, countryForBirth(region, place), birthYear, world.mortality);
	const usedNames = new Set<string>();
	const namingContext: NamingContext = { region, country: countryForBirth(region, place), year: birthYear, socialClassId: socialClass.id };
	const nameParts = makeName(namingContext, sex, usedNames, rng);
	const playerName = formatPersonalName(nameParts);
	const c: CharacterState = {
		id: rng === Math.random && typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : Math.floor(rng() * 1e9).toString(36),
		name: playerName,
		birthName: playerName,
		nameParts,
		sex,
		era,
		region,
		birthYear,
		birthPlace: place,
		birthCountry: countryForBirth(region, place),
		currentCountry: countryForBirth(region, place),
		environment: { era, region, socialClass, coverage: 'matched' },
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
		incomeMultiplier: 1,
		savings: socialClass.id === 'elite' ? 2 : socialClass.id === 'enslaved' ? 0 : 0.25,
		hardshipYears: 0,
		lastFinanceEventAge: -3,
		modernFeelJpy: 0,
		focus: 'survival',
		alive: true,
		family: makeFamily(namingContext, nameParts, usedNames, birthYear, rng),
		feed: [],
		chronicle: [],
		triggeredEventIds: [],
		epitaph: ''
	};
	makeIncome(c);
	pushFeed(
		c,
		`${formatYear(birthYear)}、${region.name}の${place}に、${socialClass.name}の子として生まれた。`,
		'milestone',
		`この時代の乳児死亡率は出生1,000人あたり約${region.infantMortality}人。5歳までに${Math.round(region.under5Mortality / 10)}%が亡くなる。`
	);
	chronicleTick(c, rng, true, world);
	return c;
};

