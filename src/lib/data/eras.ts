import type { EraSpec, EraId } from '../types';

export const ERAS: Record<EraId, EraSpec> = {
	ancient: {
		id: 'ancient',
		name: '古代文明期',
		shortName: '古代',
		yearStart: -3000,
		yearEnd: -501,
		periodLabel: 'B.C. 3000 〜 B.C. 500',
		cumulativeBirthsOku: 105,
		birthSharePercent: 16.2,
		summary: 'メソポタミア・エジプト・黄河・インダス。9割以上が農民か奴隷。文字が読めるだけで超特権階級。',
		survivalWall: '圧倒的な乳幼児死亡率（半数が5歳未満で死亡）、飢饉、部族・都市国家抗争、寄生虫・赤痢。',
		worldviewSummary: '世界は神々の気まぐれで動き、病は呪いか悪霊の仕業。天動説以前、大地は神が支える平板。',
		accentColor: '#9C6238'
	},
	classical: {
		id: 'classical',
		name: '帝国・古典期',
		shortName: '古典',
		yearStart: -500,
		yearEnd: 499,
		periodLabel: 'B.C. 500 〜 A.D. 500',
		cumulativeBirthsOku: 85,
		birthSharePercent: 13.1,
		summary: 'ローマ帝国、秦・漢、マウリヤ・グプタ朝。大規模灌漑・街道網・貨幣経済と世界宗教（仏教・キリスト教）の台頭。',
		survivalWall: 'アントニヌスの疫病などの帝国型パンデミック、徴兵・重労働、塩害による凶作。',
		worldviewSummary: '四体液説・五行思想。大地は世界の中心であり、天球が人の運命を支配する。',
		accentColor: '#8C283B'
	},
	medieval: {
		id: 'medieval',
		name: '中世・封建期',
		shortName: '中世',
		yearStart: 500,
		yearEnd: 1499,
		periodLabel: 'A.D. 500 〜 A.D. 1500',
		cumulativeBirthsOku: 115,
		birthSharePercent: 17.7,
		summary: 'ヨーロッパ封建社会、イスラム黄金期、モンゴル帝国の征服、宋・明の繁栄、日本の荘園と武士。',
		survivalWall: '14世紀のペスト（黒死病）で人口の3分の1が消滅。モンゴル騎馬隊の蹂躙、寒冷化と大飢饉。',
		worldviewSummary: '瘴気説（悪臭が病を運ぶ）。信仰が法であり世界観。天動説は揺るぎなき絶対真理。',
		accentColor: '#4A3B63'
	},
	early_modern: {
		id: 'early_modern',
		name: '近世・大航海期',
		shortName: '近世',
		yearStart: 1500,
		yearEnd: 1799,
		periodLabel: 'A.D. 1500 〜 A.D. 1800',
		cumulativeBirthsOku: 95,
		birthSharePercent: 14.6,
		summary: '大航海時代、新旧大陸の病気・作物交換（コロンブスの交換）、銃火器の普及、江戸時代の泰平。',
		survivalWall: 'アメリカ大陸の天然痘壊滅、大西洋奴隷貿易、小氷期による世界飢饉、三十年戦争。',
		worldviewSummary: '錬金術と初期近代科学の混在。瀉血が最高峰の医療。銀と香辛料が富のすべて。',
		accentColor: '#0F6E68'
	},
	industrial: {
		id: 'industrial',
		name: '近代・産業革命',
		shortName: '近代',
		yearStart: 1800,
		yearEnd: 1944,
		periodLabel: 'A.D. 1800 〜 A.D. 1945',
		cumulativeBirthsOku: 140,
		birthSharePercent: 21.5,
		summary: '蒸気機関、鉄道、工場労働、急激な都市化と人口爆発。帝国主義と二度の世界大戦。',
		survivalWall: '煤煙とスラム街の結核・コレラ、過酷な児童労働、第一次・第二次世界大戦の大量殺戮兵器。',
		worldviewSummary: '細菌説の登場（手洗いの普及）。資本主義と国家主義。地球の全容が地図で埋まる。',
		accentColor: '#2B4A6F'
	},
	modern: {
		id: 'modern',
		name: '現代',
		shortName: '現代',
		yearStart: 1945,
		yearEnd: 2026,
		periodLabel: 'A.D. 1945 〜 A.D. 2026',
		cumulativeBirthsOku: 110,
		birthSharePercent: 16.9,
		summary: '抗生物質とワクチンの世界普及、爆発的人口増加（25億→80億人）、教育の義務化、デジタル革命。',
		survivalWall: '冷戦と局地紛争、新興感染症、生活習慣病、富の偏在、メンタルヘルス。乳幼児死亡率は歴史上最低。',
		worldviewSummary: '科学的医学・DNA解析・宇宙探査。人は自らの意志で運命を選べると信じられる初めての時代。',
		accentColor: '#1A6F50'
	}
};

export const ERA_ORDER: EraId[] = [
	'ancient',
	'classical',
	'medieval',
	'early_modern',
	'industrial',
	'modern'
];

export const TOTAL_CUMULATIVE_BIRTHS_OKU = 650; // 紀元前3000年以降の推計出生総数（約650億人）
