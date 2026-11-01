import { ERAS } from '#lib/data/eras';
import type { RegionId, RegionProfile, RegionStatistic } from '#lib/types';

export const STATISTIC_KEYS: RegionStatistic[] = [
 'birthWeight', 'infantMortality', 'under5Mortality', 'lifeExpectancyAt15',
 'literacyRate', 'urbanizationRate', 'gdpPerCapitaPPP', 'gini', 'annualBaseIncomeUnit', 'modernFeelJpy'
];

/** A source is not evidence for a numeric value until that value is explicitly marked sourced. */
export const STATISTIC_SOURCES = {
 'legacy-game-model': { title: '既存ゲームモデルの推定値', url: null, note: '個別数値の原典・対象年は未確認。公的統計の転載値として扱わない。' },
 'provisional-national-split': { title: '国・政体別の暫定出生配分', url: null, note: '旧地域のウェイト合計を維持するゲーム上の配分。国別出生統計ではない。' },
 'un-wpp-2024': { title: 'UN World Population Prospects 2024', url: 'https://population.un.org/wpp/', note: '1950年以降の国・地域別推計と将来推計。古代・中世の根拠には使用しない。' },
 'wb-under5-mortality': { title: 'World Bank / UN IGME 5歳未満死亡率', url: 'https://databank.worldbank.org/metadataglossary/world-development-indicators/series/SH.DYN.MORT', note: '出生から5歳の誕生日までに死亡する確率、出生1,000人当たり。' },
 'wb-infant-mortality': { title: 'World Bank / UN IGME 乳児死亡率', url: 'https://databank.worldbank.org/metadataglossary/world-development-indicators/series/SP.DYN.IMRT.IN', note: '1歳の誕生日より前に死亡する確率、出生1,000人当たり。平均寿命や15歳時平均余命の代用にはしない。' }
} as const;

export function estimatedStatistics(id: RegionId, eraId: import('#lib/types').EraId): RegionProfile['statistics'] {
 return Object.fromEntries(STATISTIC_KEYS.map((key) => [key, {
  status: 'estimated', period: [ERAS[eraId].yearStart, ERAS[eraId].yearEnd], sourceIds: ['legacy-game-model'],
  note: 'この時代・地域の期間平均による推定値です。年次・国別の観測統計ではありません。'
 }])) as RegionProfile['statistics'];
}
