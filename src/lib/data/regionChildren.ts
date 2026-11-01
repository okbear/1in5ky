import type { RegionId, DecisionEvent } from '#lib/types';
export const REGION_CHILDREN: Partial<Record<RegionId, RegionId[]>> = {
  "mod_europe": [
    "mod_britain",
    "mod_france",
    "mod_germany",
    "mod_italy"
  ],
  "mod_north_america": [
    "mod_usa",
    "mod_canada"
  ],
  "mod_latin_america": [
    "mod_brazil",
    "mod_mexico",
    "mod_argentina",
    "mod_colombia"
  ],
  "mod_south_asia": [
    "mod_india",
    "mod_pakistan",
    "mod_bangladesh"
  ],
  "mod_southeast_asia": [
    "mod_indonesia",
    "mod_philippines",
    "mod_thailand",
    "mod_vietnam",
    "mod_malaysia"
  ],
  "mod_subsaharan_africa": [
    "mod_nigeria",
    "mod_ghana",
    "mod_kenya",
    "mod_congo",
    "mod_senegal",
    "mod_south_africa"
  ],
  "mod_mena": [
    "mod_egypt",
    "mod_iraq",
    "mod_jordan",
    "mod_tunisia",
    "mod_libya",
    "mod_syria"
  ],
  "mod_russia_cis": [
    "mod_russia",
    "mod_ukraine",
    "mod_belarus",
    "mod_kazakhstan"
  ],
  "med_europe": [
    "med_britain",
    "med_france",
    "med_germany",
    "med_italy"
  ],
  "med_islam": [
    "med_iraq",
    "med_egypt",
    "med_andalus",
    "med_central_asia"
  ],
  "em_europe": [
    "em_britain",
    "em_france",
    "em_germany",
    "em_italy",
    "em_netherlands"
  ],
  "ind_europe": [
    "ind_britain",
    "ind_france",
    "ind_germany",
    "ind_italy"
  ],
  "ind_north_america": [
    "ind_usa",
    "ind_canada"
  ],
  "ind_latin_america": [
    "ind_mexico",
    "ind_brazil",
    "ind_argentina",
    "ind_peru"
  ],
  "ind_southeast_asia": [
    "ind_malaya",
    "ind_java"
  ]
};

const EXACT_REGIONS: Record<string, [RegionId, ...RegionId[]]> = {
  "window_salt_tax": [
    "em_britain"
  ],
  "press_gang_conscription": [
    "em_britain",
    "ind_britain"
  ],
  "early_modern_thirty_years_mercenary": [
    "em_germany"
  ],
  "mod_rus_ussr_collapse_voucher": [
    "mod_russia"
  ],
  "mod_rus_chechen_war_draft": [
    "mod_russia"
  ],
  "mod_rus_siberian_blizzard_district_heating": [
    "mod_russia"
  ],
  "mod_rus_90s_gangster_extortion": [
    "mod_russia"
  ],
  "mod_rus_chernobyl_fallout": [
    "mod_ukraine",
    "mod_belarus"
  ],
  "mongol_1220": [
    "med_iraq",
    "med_central_asia",
    "med_china"
  ],
  "mod_eur_berlin_wall_fall": [
    "mod_germany"
  ],
  "mod_eur_schengen_migrant_crisis": [
    "mod_france",
    "mod_germany",
    "mod_italy"
  ],
  "mod_eur_yellow_vests_fuel_tax": [
    "mod_france"
  ],
  "mod_eur_pension_reform_general_strike": [
    "mod_france"
  ],
  "mod_na_rustbelt_factory_closure": [
    "mod_usa"
  ],
  "mod_na_california_wildfire_smoke": [
    "mod_usa"
  ],
  "mod_na_subprime_mortgage_foreclosure": [
    "mod_usa"
  ],
  "mod_na_hurricane_katrina_levee": [
    "mod_usa"
  ],
  "mod_lat_favela_police_raid": [
    "mod_brazil"
  ],
  "mod_lat_hyperinflation_currency": [
    "mod_brazil",
    "mod_argentina"
  ],
  "mod_lat_military_dictatorship_curfew": [
    "mod_brazil",
    "mod_argentina"
  ],
  "mod_lat_amazon_deforestation_conflict": [
    "mod_brazil"
  ],
  "mod_lat_mexico_cartel_checkpoint": [
    "mod_mexico"
  ]
};

const EXACT_PLACES: Record<string, string[]> = {
 mod_eur_berlin_wall_fall: ['ベルリン'],
 mod_eur_yellow_vests_fuel_tax: ['パリ', 'リヨン'],
 mod_na_california_wildfire_smoke: ['ロサンゼルス', 'カリフォルニアの町'],
 mod_na_hurricane_katrina_levee: ['ニューオーリンズ'],
 mod_na_rustbelt_factory_closure: ['シカゴ', 'オハイオ州の工業都市'],
 mod_lat_favela_police_raid: ['リオデジャネイロ'],
 mod_lat_amazon_deforestation_conflict: ['アマゾン流域の村'],
 mod_rus_siberian_blizzard_district_heating: ['シベリアの集落'],
 plague_1347: ['ロンドン', 'マルセイユ', 'ジェノヴァ', 'メッシーナ', 'アレクサンドリア']
};
const EXACT_YEARS: Record<string, [number, number]> = {
 mod_eur_berlin_wall_fall: [1989, 1990], mod_eur_yellow_vests_fuel_tax: [2018, 2020],
 mod_na_hurricane_katrina_levee: [2005, 2005], mod_na_subprime_mortgage_foreclosure: [2007, 2010],
 mod_rus_chernobyl_fallout: [1986, 1986], mod_rus_ussr_collapse_voucher: [1992, 1994],
 mod_rus_chechen_war_draft: [1994, 2009], mod_rus_90s_gangster_extortion: [1991, 1999],
 mod_chn_backyard_steel_melt: [1958, 1962], mod_chn_zero_covid_lockdown: [2020, 2022],
 mod_asia_dhaka_sewing_collapse: [2013, 2013], mod_asia_indian_ocean_tsunami: [2004, 2004]
};

export function expandEventScope(event: DecisionEvent): DecisionEvent {
 const regionIds = EXACT_REGIONS[event.id] ?? event.regionIds?.flatMap((id) => REGION_CHILDREN[id] ?? [id]);
 return {
  ...event,
  ...(regionIds ? { regionIds: regionIds as [RegionId, ...RegionId[]], allRegions: undefined } : {}),
  ...(EXACT_PLACES[event.id] ? { places: EXACT_PLACES[event.id] } : {}),
  ...(EXACT_YEARS[event.id] ? { yearRange: EXACT_YEARS[event.id] } : {})
 } as DecisionEvent;
}
