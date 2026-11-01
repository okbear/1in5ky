import type { InstitutionId, RegionId } from '#lib/types';

interface InstitutionScope {
 regionIds: readonly RegionId[];
 yearRange: readonly [number, number];
 places?: readonly string[];
 sourceUrls: readonly string[];
 note: string;
}

/** Conservative scenario coverage, not a complete history of each institution. */
export const INSTITUTIONS: Record<InstitutionId, InstitutionScope> = {
 'edo-gonin-gumi': {
  regionIds: ['em_edo'], yearRange: [1643, 1799],
  sourceUrls: ['https://www.pref.gunma.jp/site/monjyokan/130131.html', 'https://adeac.jp/koshigaya-city-digital-archives/texthtml/d000010/mp000010-100010/ht001990'],
  note: '五人組の連帯納税を扱う江戸期農村のシナリオ。1643年は参照法令が確認できる採用下限、1799年は近世区分の終端。制度の成立・廃止年ではない。近代区分の江戸末期や組ごとの差は未対応。'
 },
 'english-hunting-privilege': {
  regionIds: ['med_britain'], yearRange: [1100, 1499],
  sourceUrls: ['https://historicengland.org.uk/research/results/reports/5427/TheForestofDeanMappingProjectGloucestershire_AReportfortheNationalMappingProgramme'],
  note: 'イングランドの狩猟権を背景とする農村シナリオ。全封建社会で同じ権利・刑罰・補償制度があったとは仮定しない。森林法の法域単位は未対応。'
 },
 'roman-slavery': {
  regionIds: ['cls_rome'], places: ['ローマ'], yearRange: [1, 400],
  sourceUrls: ['https://www.northeastmuseums.org.uk/segedunum/learning/life-as-a-slave'],
  note: 'ローマの奴隷身分の売買を扱うシナリオ。農奴・自由農民と同一視しない。範囲はゲームの採用期間で、奴隷制の成立・廃止年ではない。'
 },
 'english-ordeal': {
  regionIds: ['med_britain'], places: ['ロンドン'], yearRange: [1100, 1214],
  sourceUrls: ['https://blogs.loc.gov/law/2022/02/swimming-a-witch-evidence-in-17th-century-english-witchcraft-trials/'],
  note: '英国全土の同一制度を仮定せず、ロンドンのシナリオに限定。1215年の聖職者参加禁止以前を採用する。1100年は制度の創設年ではない。'
 },
 'manorial-marriage-dues': {
  regionIds: ['med_britain'], yearRange: [1000, 1499],
  sourceUrls: ['https://www.nationalarchives.gov.uk/archives-sector/finding-records-in-discovery-and-other-databases/manorial-documents-register/a-guide-to-manorial-documents/'],
  note: '婚姻納付金を扱う荘園のシナリオ。年範囲は採用範囲であり、全荘園での施行・廃止年ではない。自由身分と隷属身分の個人差は未対応。'
 }
};
