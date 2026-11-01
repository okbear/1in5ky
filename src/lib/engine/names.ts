import type { CharacterState, CountryId, PersonalName, RegionProfile, SocialClassId } from '#lib/types';
import { pick, type Rng } from '#lib/engine/util';

const CHINESE_SURNAMES = ['王', '李', '張', '劉', '陳', '趙', '楊', '周', '呉', '黄', '孫', '徐', '朱', '胡', '林', '何', '郭', '馬', '羅', '鄭', '司馬', '欧陽', '諸葛', '上官'];
const JAPANESE_SURNAMES = ['佐藤', '鈴木', '高橋', '田中', '伊藤', '渡辺', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本', '井上', '木村', '林', '清水', '山崎'];
const JAPANESE_HISTORICAL_SURNAMES = ['源', '平', '藤原', '橘', '佐々木', '三浦', '千葉', '畠山'];
const KOREAN_SURNAMES = ['金', '李', '朴', '崔', '鄭', '姜', '趙', '尹', '張', '任'];

export interface NamingContext {
 region: RegionProfile;
 country: CountryId | null;
 year: number;
 socialClassId: SocialClassId;
}
export interface NamingPolicy {
 convention: PersonalName['convention'];
 surnames: readonly string[];
 marriedSurname: 'retain' | 'shared';
}

export function namingPolicy(context: NamingContext): NamingPolicy {
 const { region, country, year, socialClassId } = context;
 // Shang/Zhou clan names and titles cannot be treated as modern hereditary surnames.
 if ((country === 'china' && region.id !== 'anc_china') || country === 'taiwan') {
  return { convention: 'chinese', surnames: CHINESE_SURNAMES, marriedSurname: 'retain' };
 }
 if (country === 'korea') return { convention: 'korean', surnames: KOREAN_SURNAMES, marriedSurname: 'retain' };
 if (country === 'japan' && (year >= 1875 || (year >= 1000 && (socialClassId === 'elite' || socialClassId === 'warrior')))) {
  return { convention: 'japanese', surnames: year >= 1875 ? JAPANESE_SURNAMES : JAPANESE_HISTORICAL_SURNAMES,
   marriedSurname: year >= 1898 ? 'shared' : 'retain' };
 }
 // Display-only fallback is not a claim that other cultures have no surnames.
 return { convention: 'personal-only', surnames: [], marriedSurname: 'retain' };
}

export function pickUniqueName(pool: readonly string[], used: Set<string>, rng: Rng): string {
 const available = pool.filter((name) => !used.has(name));
 let chosen = pick(available.length ? available : pool, rng);
 let sequence = 2;
 while (used.has(chosen)) chosen = `${pool[sequence++ % pool.length]}（${sequence - 1}）`;
 used.add(chosen);
 return chosen;
}

export const formatPersonalName = (name: PersonalName): string =>
 name.familyName ? `${name.familyName}${name.convention === 'japanese' ? ' ' : ''}${name.givenName}` : name.givenName;

export function makeName(
 context: NamingContext, sex: 'M' | 'F', usedGivenNames: Set<string>, rng: Rng, inheritedSurname?: string
): PersonalName {
 const policy = namingPolicy(context);
 const familyName = policy.surnames.length ? inheritedSurname ?? pick(policy.surnames, rng) : undefined;
 return { givenName: pickUniqueName(sex === 'M' ? context.region.maleNames : context.region.femaleNames, usedGivenNames, rng),
  familyName, birthFamilyName: familyName, convention: policy.convention };
}

export function withSurname(name: PersonalName, familyName: string, convention = name.convention): PersonalName {
 return { ...name, familyName, convention };
}

export const contextFor = (c: CharacterState): NamingContext => ({
 // Cultural inheritance stays attached to the birth family, even after a change of era or residence.
 region: c.region, country: c.birthCountry, year: c.currentYear, socialClassId: c.socialClass.id
});

export const usedFamilyGivenNames = (c: CharacterState): Set<string> =>
 new Set([c.nameParts.givenName, ...c.family.map((f) => f.nameParts?.givenName ?? f.name)]);

export function childSurname(c: CharacterState): string | undefined {
 const spouse = c.family.find((f) => (f.relation === '妻' || f.relation === '夫') && f.status === 'alive');
 return c.sex === 'M' ? c.nameParts.familyName : spouse?.nameParts?.familyName ?? c.nameParts.familyName;
}

/** Shared surnames affect the new couple, never the player's parents and siblings. */
export function applyMarriedNames(c: CharacterState, spouse: NonNullable<CharacterState['family'][number]>): void {
 const policy = namingPolicy(contextFor(c));
 if (policy.marriedSurname !== 'shared' || !spouse.nameParts) return;
 // Default household model follows the husband's name; exceptions are not inferred from strings.
 const surname = c.sex === 'M' ? c.nameParts.familyName : spouse.nameParts.familyName;
 if (!surname) return;
 c.nameParts = withSurname(c.nameParts, surname, policy.convention);
 c.name = formatPersonalName(c.nameParts);
 spouse.nameParts = withSurname(spouse.nameParts, surname, policy.convention);
 spouse.name = formatPersonalName(spouse.nameParts);
}

/** Apply public-name adoption and household-name transitions without retroactively renaming the dead. */
export function updateFamilyNames(c: CharacterState, rng: Rng): string | undefined {
 const context = contextFor(c);
 const policy = namingPolicy(context);
 if (context.country !== 'japan' || policy.convention !== 'japanese') return;
 const before = c.name;
 const previousFamilyNames = c.family.map((f) => f.name).join('\n');
 let adopted = false;
 if (!c.nameParts.familyName) {
  adopted = true;
  const birthSurname = pick(policy.surnames, rng);
  c.nameParts = withSurname(c.nameParts, birthSurname, 'japanese');
  for (const f of c.family) {
   if (f.status === 'dead' || !f.nameParts || f.nameParts.familyName) continue;
   const birthRelative = f.relation === '父' || f.relation === '兄' || f.relation === '姉' || f.relation === '弟' || f.relation === '妹';
   f.nameParts = withSurname(f.nameParts, birthRelative ? birthSurname : pick(policy.surnames, rng), 'japanese');
   f.name = formatPersonalName(f.nameParts);
  }
  c.name = formatPersonalName(c.nameParts);
  // Children belong to the player's current household, which may differ from the birth household.
  const surname = childSurname(c);
  if (surname) for (const f of c.family) if (f.relation === '子' && f.status !== 'dead' && f.nameParts) {
   f.nameParts = withSurname(f.nameParts, surname, 'japanese'); f.name = formatPersonalName(f.nameParts);
  }
 }
 if (policy.marriedSurname === 'shared') {
  const father = c.family.find((f) => f.relation === '父' && f.status === 'alive');
  const mother = c.family.find((f) => f.relation === '母' && f.status === 'alive');
  if (father?.nameParts?.familyName && mother?.nameParts) {
   mother.nameParts = withSurname(mother.nameParts, father.nameParts.familyName, 'japanese');
   mother.name = formatPersonalName(mother.nameParts);
  }
  const spouse = c.family.find((f) => (f.relation === '妻' || f.relation === '夫') && f.status === 'alive');
  if (spouse) applyMarriedNames(c, spouse);
 }
 return adopted ? `${c.currentYear}年。名字を公称し、${c.name}と名乗るようになった。`
  : before !== c.name ? `${c.currentYear}年。家の氏に合わせ、${before}から${c.name}へ名前が変わった。`
  : previousFamilyNames !== c.family.map((f) => f.name).join('\n') ? `${c.currentYear}年。家族の氏の扱いが変わり、夫婦は家の氏を用いるようになった。` : undefined;
}

export function namingDescription(c: CharacterState): string {
 const policy = namingPolicy(contextFor(c));
 if (policy.convention === 'chinese' || policy.convention === 'korean') return 'この家族では父系の姓を継ぎ、夫婦はそれぞれの姓を保持しています。';
 if (policy.convention === 'japanese' && policy.marriedSurname === 'shared') return '婚姻後は夫婦で同じ姓を用います。出生時の名前は記録に残ります。';
 if (policy.convention === 'japanese') return '親子の姓は継承しますが、妻の姓は生家のものを保持する形で表示しています。';
 return '個人名で表示しています。地域や時代によっては、姓・氏族名の扱いが異なります。';
}
