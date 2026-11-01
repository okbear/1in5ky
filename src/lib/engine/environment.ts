import type { AnnualMortality } from '#lib/engine/world';
import { ERAS, eraForYear } from '#lib/data/eras';
import type { CharacterState, CountryId, RegionProfile } from '#lib/types';

const PLACE_COUNTRIES: Record<string, CountryId> = {
 'ローマ': 'italy', 'ポンペイ': 'italy', 'イタリアの農村': 'italy', 'ガリアの農園': 'france',
 'アレクサンドリア': 'egypt', 'エジプトの穀倉地': 'egypt',
 'デリー': 'india', 'アーグラ': 'india', 'スーラト': 'india', 'ガンジス川流域の村': 'india', 'デカン高原の集落': 'india',
 'ラホール': 'pakistan', 'ダッカ': 'bangladesh',
 'モヘンジョ・ダロ': 'pakistan', 'ハラッパー': 'pakistan', 'タクシラ': 'pakistan',
 'パータリプトラ': 'india', 'ウッジャイン': 'india',
 'サルヴァドール': 'brazil'
};

export const countryForBirth = (region: RegionProfile, place: string): CountryId | null =>
 PLACE_COUNTRIES[place] ?? region.country ?? null;

/** Never substitute an unrelated country's table when no successor profile is available. */
export function updateEnvironment(c: CharacterState, regions: readonly RegionProfile[], mortality?: AnnualMortality): boolean {
 const era = ERAS[eraForYear(c.currentYear)];
 const candidates = regions.filter((r) => r.eraId === era.id && c.currentCountry !== null && r.country === c.currentCountry);
 const base = c.region.eraId === era.id ? c.region : candidates.length === 1 ? candidates[0] : c.region;
 const region = annualMortalityProfile(base, c.currentCountry, c.currentYear, mortality);
 const socialClass = region.classes.find((entry) => entry.id === c.socialClass.id)
  ?? region.classes.find((entry) => entry.id === 'peasant') ?? region.classes[0];
 const changed = c.environment.era.id !== era.id || c.environment.region.id !== region.id;
 c.environment = { era, region, socialClass, coverage: region.eraId === era.id ? 'matched' : 'retained' };
 // A change of city name is not a move. Keep birthPlace for the historical record.
 if (c.currentYear >= 1868 && c.place === '江戸') c.place = '東京';
 if (c.currentYear >= 1868 && c.place === '大坂') c.place = '大阪';
 if (c.currentYear >= 1949 && c.place === 'バタヴィア') c.place = 'ジャカルタ';
 return changed;
}

/** Annual child-mortality estimates only; never treat e0 as life expectancy at age 15. */
export function annualMortalityProfile(
 profile: RegionProfile, country: CountryId | null, year: number, series?: AnnualMortality
): RegionProfile {
 const points = country && series?.[country];
 if (!points) return profile;
 const years = Object.keys(points).map(Number).sort((a, b) => a - b);
 const last = years[years.length - 1];
 // Do not invent historical annual values before the first observation.
 const sourceYear = points[String(year)] ? year : year > last ? last : undefined;
 if (sourceYear === undefined) return profile;
 const [infantMortality, under5Mortality] = points[String(sourceYear)];
 if (!(0 <= infantMortality && infantMortality <= under5Mortality && under5Mortality < 1000)) return profile;
 const observed = sourceYear === year;
 const note = observed ? `${sourceYear}年のWorld Bank / UN IGME年次推計。`
  : `${sourceYear}年の推計を${year}年に据え置く仮定。将来の観測値ではない。`;
 const provenance = (sourceId: string): RegionProfile['statistics']['infantMortality'] => ({
  status: observed ? 'sourced' : 'inherited', period: [sourceYear, sourceYear], sourceIds: [sourceId], note
 });
 return { ...profile, infantMortality, under5Mortality, statistics: {
  ...profile.statistics, infantMortality: provenance('wb-infant-mortality'), under5Mortality: provenance('wb-under5-mortality')
 }};
}
