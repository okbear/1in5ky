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
		src: "/images/babies/anc_aegean.webp",
		caption: "エーゲ海世界",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
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
		src: "/images/babies/cls_persia.webp",
		caption: "ペルシア・中央アジア",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	cls_mesoamerica: {
		src: "/images/babies/cls_mesoamerica.webp",
		caption: "古典期メソアメリカ",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	cls_africa: {
		src: "/images/babies/cls_africa.webp",
		caption: "アクスム・紅海沿岸",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	cls_yayoi: {
		src: "/images/babies/cls_yayoi.webp",
		caption: "弥生時代の日本",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
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
		src: "/images/babies/med_india.webp",
		caption: "中世南アジア",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	med_west_africa: {
		src: "/images/babies/med_west_africa.webp",
		caption: "中世西アフリカ",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	med_east_africa: {
		src: "/images/babies/med_east_africa.webp",
		caption: "スワヒリ海岸",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	med_mesoamerica: {
		src: "/images/babies/med_mesoamerica.webp",
		caption: "中世メソアメリカ",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	med_andes: {
		src: "/images/babies/med_andes.webp",
		caption: "中世アンデス",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	med_southeast_asia: {
		src: "/images/babies/med_southeast_asia.webp",
		caption: "アンコール・大陸東南アジア",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
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
		src: "/images/babies/em_west_africa.webp",
		caption: "近世西アフリカ",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	em_caribbean: {
		src: "/images/babies/em_caribbean.webp",
		caption: "カリブ海・ブラジル農園地帯",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	em_andes: {
		src: "/images/babies/em_andes.webp",
		caption: "近世アンデス植民地",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	em_mesoamerica: {
		src: "/images/babies/em_mesoamerica.webp",
		caption: "近世メソアメリカ植民地",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	em_north_america: {
		src: "/images/babies/em_north_america.webp",
		caption: "北米大西洋岸・ハドソン湾交易圏",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},

	// === 近代 (industrial) ===
	ind_europe: {
		src: '/images/babies/ind_europe_us.jpg',
		caption: "近代ヨーロッパの出生風景",
		sceneDetail: 'レースの洗礼ガウンと真鍮ベビーベッド。'
	},
	ind_north_america: {
		src: "/images/babies/ind_north_america.webp",
		caption: "近代北米",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
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
		src: "/images/babies/ind_southeast_asia.webp",
		caption: "近代東南アジア",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	ind_russia: {
		src: "/images/babies/ind_russia.webp",
		caption: "近代ロシア",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	ind_egypt: {
		src: "/images/babies/ind_egypt.webp",
		caption: "近代エジプト",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	ind_congo: {
		src: "/images/babies/ind_congo.webp",
		caption: "近代コンゴ",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
	},
	ind_latin_america: {
		src: "/images/babies/ind_latin_america.webp",
		caption: "近代ラテンアメリカ",
		sceneDetail: '布のおくるみに包まれ、住居の寝床で静かに眠る。'
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
		src: "/images/babies/mod_korea.webp",
		caption: "現代韓国",
		sceneDetail: '柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。'
	},
	mod_taiwan: {
		src: "/images/babies/mod_taiwan.webp",
		caption: "現代台湾",
		sceneDetail: '柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。'
	},
	mod_south_asia: {
		src: "/images/babies/mod_south_asia.webp",
		caption: "現代南アジア",
		sceneDetail: '柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。'
	},
	mod_southeast_asia: {
		src: "/images/babies/mod_southeast_asia.webp",
		caption: "現代東南アジア",
		sceneDetail: '柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。'
	},
	mod_subsaharan_africa: {
		src: "/images/babies/mod_subsaharan_africa.webp",
		caption: "現代サハラ以南アフリカ",
		sceneDetail: '柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。'
	},
	mod_mena: {
		src: "/images/babies/mod_mena.webp",
		caption: "現代中東・北アフリカ",
		sceneDetail: '柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。'
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
	},
	med_britain: {"src": "/images/babies/med_britain.webp", "caption": "中世ブリテン", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	med_france: {"src": "/images/babies/med_france.webp", "caption": "中世フランス", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	med_germany: {"src": "/images/babies/med_germany.webp", "caption": "中世ドイツ地域", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	med_italy: {"src": "/images/babies/med_italy.webp", "caption": "中世イタリア地域", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	em_britain: {"src": "/images/babies/em_britain.webp", "caption": "近世ブリテン", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	em_france: {"src": "/images/babies/em_france.webp", "caption": "近世フランス", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	em_germany: {"src": "/images/babies/em_germany.webp", "caption": "近世ドイツ地域", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	em_italy: {"src": "/images/babies/em_italy.webp", "caption": "近世イタリア地域", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_britain: {"src": "/images/babies/ind_britain.webp", "caption": "近代ブリテン", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_france: {"src": "/images/babies/ind_france.webp", "caption": "近代フランス", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_germany: {"src": "/images/babies/ind_germany.webp", "caption": "近代ドイツ地域", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_italy: {"src": "/images/babies/ind_italy.webp", "caption": "近代イタリア地域", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	mod_britain: {"src": "/images/babies/mod_britain.webp", "caption": "現代ブリテン", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_france: {"src": "/images/babies/mod_france.webp", "caption": "現代フランス", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_germany: {"src": "/images/babies/mod_germany.webp", "caption": "現代ドイツ地域", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_italy: {"src": "/images/babies/mod_italy.webp", "caption": "現代イタリア地域", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	ind_usa: {"src": "/images/babies/ind_usa.webp", "caption": "近代アメリカ合衆国", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_canada: {"src": "/images/babies/ind_canada.webp", "caption": "近代カナダ", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	mod_usa: {"src": "/images/babies/mod_usa.webp", "caption": "現代アメリカ合衆国", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_canada: {"src": "/images/babies/mod_canada.webp", "caption": "現代カナダ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	ind_mexico: {"src": "/images/babies/ind_mexico.webp", "caption": "近代メキシコ", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_brazil: {"src": "/images/babies/ind_brazil.webp", "caption": "近代ブラジル", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_argentina: {"src": "/images/babies/ind_argentina.webp", "caption": "近代アルゼンチン", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_peru: {"src": "/images/babies/ind_peru.webp", "caption": "近代ペルー", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	mod_brazil: {"src": "/images/babies/mod_brazil.webp", "caption": "現代ブラジル", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_mexico: {"src": "/images/babies/mod_mexico.webp", "caption": "現代メキシコ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_argentina: {"src": "/images/babies/mod_argentina.webp", "caption": "現代アルゼンチン", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_colombia: {"src": "/images/babies/mod_colombia.webp", "caption": "現代コロンビア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_india: {"src": "/images/babies/mod_india.webp", "caption": "現代インド", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_pakistan: {"src": "/images/babies/mod_pakistan.webp", "caption": "現代パキスタン", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_bangladesh: {"src": "/images/babies/mod_bangladesh.webp", "caption": "現代バングラデシュ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_indonesia: {"src": "/images/babies/mod_indonesia.webp", "caption": "現代インドネシア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_philippines: {"src": "/images/babies/mod_philippines.webp", "caption": "現代フィリピン", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_thailand: {"src": "/images/babies/mod_thailand.webp", "caption": "現代タイ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_vietnam: {"src": "/images/babies/mod_vietnam.webp", "caption": "現代ベトナム", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_malaysia: {"src": "/images/babies/mod_malaysia.webp", "caption": "現代マレーシア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_nigeria: {"src": "/images/babies/mod_nigeria.webp", "caption": "現代ナイジェリア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_ghana: {"src": "/images/babies/mod_ghana.webp", "caption": "現代ガーナ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_kenya: {"src": "/images/babies/mod_kenya.webp", "caption": "現代ケニア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_congo: {"src": "/images/babies/mod_congo.webp", "caption": "現代コンゴ民主共和国", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_senegal: {"src": "/images/babies/mod_senegal.webp", "caption": "現代セネガル", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_south_africa: {"src": "/images/babies/mod_south_africa.webp", "caption": "現代南アフリカ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_egypt: {"src": "/images/babies/mod_egypt.webp", "caption": "現代エジプト", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_iraq: {"src": "/images/babies/mod_iraq.webp", "caption": "現代イラク", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_jordan: {"src": "/images/babies/mod_jordan.webp", "caption": "現代ヨルダン", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_tunisia: {"src": "/images/babies/mod_tunisia.webp", "caption": "現代チュニジア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_libya: {"src": "/images/babies/mod_libya.webp", "caption": "現代リビア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_russia: {"src": "/images/babies/mod_russia.webp", "caption": "現代ロシア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_ukraine: {"src": "/images/babies/mod_ukraine.webp", "caption": "現代ウクライナ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_belarus: {"src": "/images/babies/mod_belarus.webp", "caption": "現代ベラルーシ", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	mod_kazakhstan: {"src": "/images/babies/mod_kazakhstan.webp", "caption": "現代カザフスタン", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	ind_malaya: {"src": "/images/babies/ind_malaya.webp", "caption": "近代マレー半島", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	ind_java: {"src": "/images/babies/ind_java.webp", "caption": "近代ジャワ", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	mod_syria: {"src": "/images/babies/mod_syria.webp", "caption": "現代シリア", "sceneDetail": "柔らかな布のおくるみに包まれ、明るい部屋で静かに眠る。"},
	med_iraq: {"src": "/images/babies/med_iraq.webp", "caption": "中世イラク", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	med_egypt: {"src": "/images/babies/med_egypt.webp", "caption": "中世エジプト", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	med_andalus: {"src": "/images/babies/med_andalus.webp", "caption": "中世アンダルス", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	med_central_asia: {"src": "/images/babies/med_central_asia.webp", "caption": "中世中央アジア", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
	em_netherlands: {"src": "/images/babies/em_netherlands.webp", "caption": "近世ネーデルラント", "sceneDetail": "布のおくるみに包まれ、住居の寝床で静かに眠る。"},
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
