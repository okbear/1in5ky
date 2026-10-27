export interface EventImageInfo {
	src: string;
	alt: string;
	caption?: string;
}

export const EVENT_IMAGES: Record<string, EventImageInfo> = {
	// === 婚姻・縁談（全時代・全地域対応：過酷な大地に寄り添う二輪の野花） ===
	marriage: {
		src: '/images/events/marriage.jpg',
		alt: '過酷な大地の黄昏、風に吹かれながらも寄り添って根を張る二輪の野花',
		caption: '寄り添う野花'
	},
	marriage_serf_merchet: {
		src: '/images/events/marriage.jpg',
		alt: '過酷な大地の黄昏、風に吹かれながらも寄り添って根を張る二輪の野花',
		caption: '寄り添う野花'
	},
	marriage_modern: {
		src: '/images/events/marriage.jpg',
		alt: '過酷な大地の黄昏、風に吹かれながらも寄り添って根を張る二輪の野花',
		caption: '寄り添う野花'
	},

	// === 出産・新しい命（全時代・全地域対応：暗い土から光を浴びて芽吹く双葉） ===
	childbirth_old: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},
	childbirth_father_old: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},
	childbirth_modern: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},
	childbirth_father_modern: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},

	// === 青年の仕事始め・一人前への門出（夜明けの道具と大地へ続く小道） ===
	work_choice_youth: {
		src: '/images/events/work_choice.jpg',
		alt: '朝露の野原、石段の上に置かれた使い古しの農具と遠くへ続く一本の小道',
		caption: '仕事始めの朝'
	},

	// === 重税と困窮（空の穀物袋と秤） ===
	tax_burden: {
		src: '/images/events/tax_burden.jpg',
		alt: '薄暗い石床に倒れた空の麻袋と秤、わずかにこぼれ落ちた麦の粒',
		caption: '空の倉と秤'
	},
	midlife_crisis_30s: {
		src: '/images/events/tax_burden.jpg',
		alt: '薄暗い石床に倒れた空の麻袋と秤、わずかにこぼれ落ちた麦の粒',
		caption: '飢えと困窮'
	},

	// === 老いと世代交代（夕暮れの杖と秋の枯葉） ===
	elder_passing_torch: {
		src: '/images/events/elder_torch.jpg',
		alt: '夕暮れの長い影が伸びる石のベンチに立てかけられた手彫りの杖と秋の枯葉',
		caption: '人生の黄昏'
	},

	// === 古代メソポタミア ===
	anc_meso_cuneiform_scribe: {
		src: '/images/events/anc_meso_scribe.jpg',
		alt: '日干しレンガの神殿の部屋で、粘土板に葦のペンで楔形文字を刻む少年と書記',
		caption: '神殿の書記学校'
	},

	// === 古代エジプト ===
	anc_egypt_tomb_robbery: {
		src: '/images/events/anc_egypt_tomb.jpg',
		alt: '油灯の炎が揺れる王家の谷の墓道で、鮮やかな壁画を背に石を削る職人たち',
		caption: '王家の谷の墓所'
	},

	// === 古代中国・殷代 ===
	anc_china_oracle_sacrifice: {
		src: '/images/events/anc_china_oracle.jpg',
		alt: '青銅器の煙が立ち上る神殿で、熱した青銅棒を亀甲に当て神意を占う殷の卜官',
		caption: '殷王の甲骨卜占'
	},

	// === インダス文明 ===
	anc_indus_seal_carver: {
		src: '/images/events/anc_indus_seal.jpg',
		alt: '日当たりの良いレンガ工房で、一角獣の印章を彫刻刀で細工するインダスの職人',
		caption: '滑石の印章彫刻'
	},

	// === 古代ローマ ===
	cls_rome_insula_fire: {
		src: '/images/events/cls_rome_insula_fire.jpg',
		alt: '夜のローマ市街、炎に包まれる木造高層アパート（インスラ）と逃げ惑う群衆、消火にあたる自警団',
		caption: 'スブラ地区のインスラ大火'
	},

	// === 漢帝国 ===
	cls_han_corvee_great_wall: {
		src: '/images/events/cls_han_great_wall.jpg',
		alt: '黄塵吹き荒れるゴビ砂漠の烽火台の上、木簡を握りしめ長城の彼方を凝視する漢代の戍卒',
		caption: '北方長城の戍卒'
	},

	// === 古典期インド（マウリヤ朝） ===
	cls_india_ashoka_edicts_hearing: {
		src: '/images/events/cls_india_ashoka_pillar.jpg',
		alt: '陽光照らす街道沿い、獅子柱頭が輝くアショーカ王の法勅石柱と法話を聴く人々',
		caption: 'アショーカ王の法勅石柱'
	},

	// === 古典期その他の世界（弥生日本） ===
	cls_other_yayoi_bronze_bell: {
		src: '/images/events/cls_other_yayoi_bell.jpg',
		alt: '朝靄煙る尾根の神聖な穴に、祈りと共に埋納される流水文の巨大な銅鐸',
		caption: '弥生ムラの銅鐸埋納'
	},

	// === 中世ヨーロッパ ===
	med_eur_cathedral_quarry: {
		src: '/images/events/med_eur_cathedral.jpg',
		alt: '天を突くゴシック大聖堂の工事現場、木製クレーンで巨石を引き揚げる工夫と石工たち',
		caption: 'ゴシック大聖堂の普請'
	},

	// === 中世イスラム世界 ===
	med_islam_madrasa_scholar: {
		src: '/images/events/med_islam_madrasa.jpg',
		alt: 'モザイクタイルのマドラサで、アストロラーベを傍らに良質な紙へ書物を清書する若き学者',
		caption: 'マドラサの学問と写本'
	},

	// === 中世中国（宋代） ===
	med_china_canal_grain_fleet: {
		src: '/images/events/med_china_canal.jpg',
		alt: '朝靄の大運河、ぬかるみの曳道で麻縄を肩に掛け、米を満載した巨大な漕船を引く工夫たち',
		caption: '京杭大運河の漕船曳き'
	},

	// === 中世日本（鎌倉・室町） ===
	med_jpn_biwa_heike_recite: {
		src: '/images/events/med_jpn_biwa_recite.jpg',
		alt: '辻堂の油灯の揺れる光の下、平家物語を語り爪弾く盲目の琵琶法師と聴き入る村人たち',
		caption: '琵琶法師の平家鎮魂'
	},

	// === 近世日本（江戸） ===
	em_edo_machibikeshi_ladder: {
		src: '/images/events/em_edo_machibikeshi.jpg',
		alt: '冬の強風が吹き荒れる江戸神田の大火、立ち上る火の粉と猛煙の中、瓦屋根の棟に立ち纏を振る町火消の鳶職と引き倒しを行う仲間たち',
		caption: '江戸町火消の破壊消火と纏'
	},

	// === 近世アジア（清代・広州十三行） ===
	em_asia_canton_cohong_silver: {
		src: '/images/events/em_asia_canton_silver.jpg',
		alt: '18世紀広州十三行の商館で、弁髪に清朝の長袍をまとった商人と書記が天秤ばかりと試金石でスペイン銀貨や銀錠を検定する執務風景',
		caption: '広州十三行の銀貨鑑定'
	},

	// === 近世ヨーロッパ（啓蒙思想の地下出版） ===
	em_eur_underground_press: {
		src: '/images/events/em_eur_underground_press.jpg',
		alt: '18世紀パリの薄暗い地下室で、蝋燭の灯火のもと手動木製印刷機と活字ケースを前に禁書のパンフレットを密かに印刷・製本する職人たち',
		caption: '啓蒙期パリの地下印刷所'
	},

	// === 近世大西洋世界（カリブ海サトウキビ農園） ===
	em_atl_sugar_cane_machete: {
		src: '/images/events/em_atl_sugar_cane.jpg',
		alt: '灼熱の太陽が照りつける18世紀カリブ海の農園、重い鉈でサトウキビを刈り倒すアフリカ人労働者たちと馬上から監視する監督官',
		caption: 'カリブ海砂糖農園の収穫'
	},

	// === 産業革命期ヨーロッパ・アメリカ（マンチェスター木綿工場） ===
	ind_eur_mill_loom_crush: {
		src: '/images/events/ind_eur_mill_loom.jpg',
		alt: '煤煙と綿埃が舞う19世紀マンチェスターの木綿紡績工場、高速回転する蒸気力織機と革ベルトの隙間で糸屑を取り除く少年労働者',
		caption: 'マンチェスター力織機工場'
	},

	// === 近代日本（信州岡谷の製糸工場） ===
	ind_jpn_spinning_girl_night: {
		src: '/images/events/ind_jpn_silk_reeling.jpg',
		alt: '熱湯の湯気が立ち込める明治期の岡谷製糸工場、絣の着物に襷掛けで繭から生糸を繰り出す若き工女たち',
		caption: '信州岡谷の器械製糸'
	}
};

export function getEventImage(eventId: string): EventImageInfo | undefined {
	return EVENT_IMAGES[eventId];
}
