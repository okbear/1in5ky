import type { RegionId, RegionProfile } from '#lib/types';
export type NationalVariants = Partial<Record<RegionId, (Pick<RegionProfile, 'id' | 'country' | 'name' | 'birthWeight' | 'cities' | 'ruralAreas' | 'currencyUnit' | 'maleNames' | 'femaleNames' | 'dietStaple' | 'beliefSystem'>)[]>>;

export const expandRegion = (region: RegionProfile, definitions: NationalVariants = {}): RegionProfile[] => {
 const variants = definitions[region.id];
 if (!variants) return [region];
 return variants.map((variant) => ({
  ...region, ...variant,
  subName: variant.name, polity: variant.name,
  statistics: Object.fromEntries(Object.entries(region.statistics).map(([key, value]) => [key, {
   ...value, status: 'inherited', inheritedFrom: region.id,
   sourceIds: key === 'birthWeight' ? ['provisional-national-split'] : value.sourceIds,
   note: key === 'birthWeight' ? '親地域の出生配分を暫定分割。国別出生数の実測値ではない。' : 'この国の数値は、より広い地域の期間平均からの推定です。'
  }])) as RegionProfile['statistics']
 }));
};
