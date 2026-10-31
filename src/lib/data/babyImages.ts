import type { RegionId } from '#lib/types';

export interface BabyImageInfo {
	src: string | null;
	caption: string;
	sceneDetail: string;
}

export const BABY_IMAGES: Record<RegionId, BabyImageInfo> = {
	// === 古代 (ancient) ===
	anc_mesopotamia: {
		src: '/images/babies/anc_mesopotamia.jpg',
		caption: 'メソポタミアの日干しレンガ住居',
		sceneDetail: '葦の籠に粗い羊毛と麻を敷いて眠る。'
	},
	anc_egypt: {
		src: '/images/babies/anc_egypt.jpg',
		caption: '古代エジプトのナイル河畔',
		sceneDetail: 'パピルス籠と薄いリネンに包まれて。'
	},
	anc_china: {
		src: '/images/babies/anc_china.jpg',
		caption: '古代黄河流域の土壁の家',
		sceneDetail: '竹籠に藁を敷き、粗い麻布に包まれて。'
	},
	anc_indus: {
		src: '/images/babies/anc_indus_other.jpg',
		caption: "インダス流域の出生風景",
		sceneDetail: '木彫りの揺りかごと未漂白の木綿布。'
	},
	anc_aegean: {
		src: null,
		caption: "エーゲ海世界",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},

	// === 古典期 (classical) ===
	cls_rome: {
		src: '/images/babies/cls_rome.jpg',
		caption: 'ローマ帝国のアトリウム',
		sceneDetail: '伝統的な帯状おくるみと木製クレードル。'
	},
	cls_han: {
		src: '/images/babies/cls_han.jpg',
		caption: '漢帝国の四合院住居',
		sceneDetail: '朱塗りの揺りかごと吉祥の絹布。'
	},
	cls_india: {
		src: '/images/babies/cls_india.jpg',
		caption: '古代インドの砂岩の中庭',
		sceneDetail: '薄手の木綿モスリンと木彫りベッド。'
	},
	cls_persia: {
		src: null,
		caption: "ペルシア・中央アジア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	cls_mesoamerica: {
		src: null,
		caption: "古典期メソアメリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	cls_africa: {
		src: null,
		caption: "アクスム・紅海沿岸",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	cls_yayoi: {
		src: null,
		caption: "弥生時代の日本",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},

	// === 中世 (medieval) ===
	med_europe: {
		src: '/images/babies/med_europe.jpg',
		caption: '中世ヨーロッパの暖炉の前',
		sceneDetail: '帯状おくるみ（スワドリング）と木製揺りかご。'
	},
	med_islam: {
		src: '/images/babies/med_islam.jpg',
		caption: 'イスラム黄金期の都市住宅',
		sceneDetail: '幾何学刺繍の錦布と真鍮ランプの灯り。'
	},
	med_china: {
		src: '/images/babies/med_china.jpg',
		caption: '宋代中国の格子窓の部屋',
		sceneDetail: '吉祥刺繍の綿入り絹布団に包まれて。'
	},
	med_japan: {
		src: '/images/babies/med_japan.jpg',
		caption: '中世日本の囲炉裏端',
		sceneDetail: '麻の葉模様の産着と藁編みの籠（えじこ）。'
	},
	med_india: {
		src: null,
		caption: "中世南アジア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	med_west_africa: {
		src: null,
		caption: "中世西アフリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	med_east_africa: {
		src: null,
		caption: "スワヒリ海岸",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	med_mesoamerica: {
		src: null,
		caption: "中世メソアメリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	med_andes: {
		src: null,
		caption: "中世アンデス",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	med_southeast_asia: {
		src: null,
		caption: "アンコール・大陸東南アジア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},

	// === 近世 (early_modern) ===
	em_edo: {
		src: '/images/babies/em_edo.jpg',
		caption: '江戸の長屋と障子の光',
		sceneDetail: '藍染めの木綿産着と藁のえじこ。'
	},
	em_china: {
		src: '/images/babies/em_china_asia.jpg',
		caption: '明清時代の伝統邸宅',
		sceneDetail: '金糸刺繍の綿入り錦布と紫檀ベッド。'
	},
	em_mughal_india: {
		src: '/images/babies/ind_india.jpg',
		caption: 'ムガル帝国のハヴェーリー（中庭邸宅）',
		sceneDetail: '精緻な綿織物のおくるみと銀の魔除け鈴。'
	},
	em_europe: {
		src: '/images/babies/em_europe.jpg',
		caption: '近世ヨーロッパの邸宅',
		sceneDetail: 'レースのリネン産着と彫刻ベッド。'
	},
	em_west_africa: {
		src: null,
		caption: "近世西アフリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	em_caribbean: {
		src: null,
		caption: "カリブ海・ブラジル農園地帯",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	em_andes: {
		src: null,
		caption: "近世アンデス植民地",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	em_mesoamerica: {
		src: null,
		caption: "近世メソアメリカ植民地",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	em_north_america: {
		src: null,
		caption: "北米大西洋岸・ハドソン湾交易圏",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},

	// === 近代 (industrial) ===
	ind_europe: {
		src: '/images/babies/ind_europe_us.jpg',
		caption: "近代ヨーロッパの出生風景",
		sceneDetail: 'レースの洗礼ガウンと真鍮ベビーベッド。'
	},
	ind_north_america: {
		src: null,
		caption: "近代北米",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	ind_japan: {
		src: '/images/babies/ind_japan.jpg',
		caption: '明治・大正日本の畳部屋',
		sceneDetail: '藍絣の着物産着と綿布団、行灯の光。'
	},
	ind_china: {
		src: '/images/babies/ind_china.jpg',
		caption: '近代中国の伝統家屋',
		sceneDetail: '花柄の綿入りキルトと割竹の揺りかご。'
	},
	ind_india: {
		src: '/images/babies/ind_india.jpg',
		caption: "英領インドの出生風景",
		sceneDetail: '純白のカーディー木綿と小さな寝台。'
	},
	ind_southeast_asia: {
		src: null,
		caption: "近代東南アジア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	ind_russia: {
		src: null,
		caption: "近代ロシア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	ind_egypt: {
		src: null,
		caption: "近代エジプト",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	ind_congo: {
		src: null,
		caption: "近代コンゴ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	ind_latin_america: {
		src: null,
		caption: "近代ラテンアメリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},

	// === 現代 (modern) ===
	mod_japan: {
		src: '/images/babies/mod_japan.jpg',
		caption: '現代日本の産科クリニック',
		sceneDetail: 'オーガニックコットン肌着と透明コット。'
	},
	mod_china: {
		src: '/images/babies/mod_china_ea.jpg',
		caption: "現代中国の出生風景",
		sceneDetail: '柔らかなパステルブランケットとベビーベッド。'
	},
	mod_korea: {
		src: null,
		caption: "現代韓国",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	mod_taiwan: {
		src: null,
		caption: "現代台湾",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	mod_south_asia: {
		src: null,
		caption: "現代南アジア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	mod_southeast_asia: {
		src: null,
		caption: "現代東南アジア",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	mod_subsaharan_africa: {
		src: null,
		caption: "現代サハラ以南アフリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	mod_mena: {
		src: null,
		caption: "現代中東・北アフリカ",
		sceneDetail: 'この地域に対応する肖像画は準備中です。'
	},
	mod_europe: {
		src: '/images/babies/mod_west.jpg',
		caption: '現代欧州のバースクリニック',
		sceneDetail: '清潔な産科クリニックのコットと柔らかな綿のおくるみ。'
	},
	mod_north_america: {
		src: '/images/babies/mod_west.jpg',
		caption: '現代北米のバーススイート',
		sceneDetail: '病院定番のストライプおくるみとニット帽。'
	},
	mod_latin_america: {
		src: '/images/babies/mod_west.jpg',
		caption: '現代ラテンアメリカの産院',
		sceneDetail: '家族総出で駆けつけた公立病院の病室。'
	},
	mod_russia_cis: {
		src: '/images/babies/mod_west.jpg',
		caption: '現代ロシア・東欧の産科病院',
		sceneDetail: '厳重に保温された厚手のキルティング毛布とおくるみ。'
	}
};

export function getBabyImage(regionId: RegionId): BabyImageInfo {
	return (
		BABY_IMAGES[regionId] ?? {
			src: null,
			caption: '出生時の様子',
			sceneDetail: '健やかに生まれた新しい命。'
		}
	);
}
