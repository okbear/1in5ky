import type { CharacterState } from '#lib/types';

/** Currency history is a label; it never converts an uncalibrated income amount. */
export function incomePresentation(c: CharacterState) {
 const region = c.environment.region;
 const year = c.currentYear;
 let currency = region.currencyUnit;
 let periodExample = true;
 if (region.country === 'japan' && c.currentCountry === 'japan' && year >= 1603
  && (region.eraId === 'early_modern' || region.eraId === 'industrial' || region.eraId === 'modern')) {
  currency = year < 1871 ? '金銀銭貨（両・匁・文など）'
   : year === 1871 ? '円の導入・旧金銀銭貨との移行期' : '円';
  periodExample = false;
 }
 if (region.eraId === 'modern' && region.country === c.currentCountry && year >= 1945) {
  const country = c.currentCountry;
  if (country === 'france' || country === 'italy' || (country === 'germany' && year >= 1990)) {
   const previous = country === 'france' ? 'フランス・フラン' : country === 'italy' ? 'イタリア・リラ' : 'ドイツ・マルク';
   currency = year >= 2002 ? 'ユーロ' : year >= 1999 ? `${previous}（現金）・ユーロ（帳簿）` : previous;
   periodExample = false;
  } else if (country === 'germany') {
   currency = '東西・占領地域により異なる通貨';
  }
 }
 const statistic = region.statistics.annualBaseIncomeUnit;
 // A sourced base amount alone is insufficient after changing its unit label.
 const nominal = statistic.status === 'sourced' && year >= statistic.period[0] && year <= statistic.period[1]
  && currency === region.currencyUnit && !/・|旧|現地/.test(currency)
  ? { amount: c.annualIncomeUnits, unit: currency } : undefined;
 return { currency, periodExample, nominal, modeledIncome: { amount: c.annualIncomeUnits, unit: currency },
  note: nominal ? statistic.note : '当時の名目年収は換算未整備。生活実感はゲーム上の推定です。' };
}
