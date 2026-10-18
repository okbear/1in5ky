import type { RegionId } from '#lib/types';

export interface BabyImageInfo {
	src: string;
	caption: string;
	sceneDetail: string;
}

export const BABY_IMAGES: Record<RegionId, BabyImageInfo> = {
	// === 古代 (ancient) ===
	anc_mesopotamia: {
		src: '/images/babies/anc_mesopotamia.jpg',
		caption: 'メソポタミア・日干しレンガの住居にて',
		sceneDetail: '乾燥したユーフラテス河畔の mud-brick 住居。泥と藁で固めた床の上に葦（あし）の籠が置かれ、未染色の粗い羊毛と亜麻布（リネン）にくるまれて静かに眠っています。'
	},
	anc_egypt: {
		src: '/images/babies/anc_egypt.jpg',
		caption: '古代エジプト・ナイル河畔の朝',
		sceneDetail: 'ナイルの氾濫原の涼しい日干しレンガの家。パピルスで編んだ揺りかごの中に薄いリネンの布を敷き、灼熱の陽光を遮る木漏れ日の中で生まれたばかりの命を守っています。'
	},
	anc_china: {
		src: '/images/babies/anc_china.jpg',
		caption: '中原・黄土の土壁の家にて',
		sceneDetail: '黄河流域の土壁と藁葺きの住居。竹で編んだ籠の中に藁を敷き詰め、粗い麻布と生糸の布でくるまれた東アジアの新生児。かまどの煙と乾いた土の匂いが漂います。'
	},
	anc_indus_other: {
		src: '/images/babies/anc_indus_other.jpg',
		caption: 'インダス流域・焼成レンガの都市にて',
		sceneDetail: '整然と区画されたインダス文明の都市家屋。木彫りの揺りかごの中に、古代世界でいち早く普及した未漂白の柔らかな綿布（コットン）に包まれて横たわっています。'
	},

	// === 古典期 (classical) ===
	cls_rome: {
		src: '/images/babies/cls_rome.jpg',
		caption: 'ローマ帝国・中庭の差し込む光',
		sceneDetail: 'ドムス（邸宅）のテラコッタタイル敷きのアトリウム。地中海の習慣に従い、骨格を真っ直ぐ育てるため亜麻と羊毛の包帯状の布（帯状おくるみ）できつく巻かれています。'
	},
	cls_han: {
		src: '/images/babies/cls_han.jpg',
		caption: '漢帝国・朱塗りの揺りかご',
		sceneDetail: '中庭を囲む伝統的な四合院づくりの家。魔除けと多幸を祈る朱色の絹と綿のおくるみに包まれ、漆塗りの木製クレードルの中で静かに息づいています。'
	},
	cls_india: {
		src: '/images/babies/cls_india.jpg',
		caption: '古代インド・砂岩の中庭',
		sceneDetail: 'マウリヤ・グプタ期の風通しの良い砂岩の住まい。極薄の最高級木綿（モスリン）にふんわりと包まれ、真鍮細工の施された木彫りの揺りかごで微睡んでいます。'
	},
	cls_other: {
		src: '/images/babies/cls_other.jpg',
		caption: '北方ユーラシア・丸太小屋の暖炉脇',
		sceneDetail: '深い森の丸太小屋、赤々と燃える炉火のそば。寒冷な気候から守るため、丸太をくり抜いた揺りかごに羊毛や毛皮を敷き詰め、厚いフェルトのおくるみに包まれています。'
	},

	// === 中世 (medieval) ===
	med_europe: {
		src: '/images/babies/med_europe.jpg',
		caption: '中世ヨーロッパ・石造りの暖炉の前',
		sceneDetail: '石造りの壁と梁がむき出しの木組みの部屋。中世伝統の「スワドリング・バンド（帯巻き）」で全身を包まれ、暖炉の薪がはぜる音を聞きながら木製ロッキングクレードルで揺られています。'
	},
	med_islam: {
		src: '/images/babies/med_islam.jpg',
		caption: 'イスラム黄金期・真鍮ランプの微光',
		sceneDetail: 'バグダードやカイロの都市住宅。幾何学模様のアラベスク刺繍が施された錦布に包まれ、ペルシャ絨毯の上に置かれた柔らかなクッション敷きの木製ベッドで眠ります。'
	},
	med_china: {
		src: '/images/babies/med_china.jpg',
		caption: '宋代中国・格子窓の朝光',
		sceneDetail: '精緻な木製格子窓から柔らかな光が差し込む部屋。吉祥文様が刺繍された綿入りの絹布団にくるまれ、線香の香りがかすかに漂う中で安らかに寝息を立てています。'
	},
	med_japan: {
		src: '/images/babies/med_japan.jpg',
		caption: '中世日本・藁籠（えじこ）と麻の産着',
		sceneDetail: '板間や畳敷きの古民家、囲炉裏の炭火のぬくもり。赤子の健やかな成長を願う「麻の葉模様」の麻布でくるまれ、保温と安全のための藁編みの籠（えじこ）に寝かされています。'
	},
	med_other: {
		src: '/images/babies/med_other.jpg',
		caption: '熱帯・手編みハンモックのゆりかご',
		sceneDetail: '熱帯の風が通り抜ける土壁と茅葺きの住まい。通気性に優れた手織りの綿網ハンモックに包まれ、木々のざわめきと鳥の声の中で心地よく揺られています。'
	},

	// === 近世 (early_modern) ===
	em_edo: {
		src: '/images/babies/em_edo.jpg',
		caption: '江戸・長屋の障子と行灯',
		sceneDetail: '畳の上に敷かれた小さな木綿の産着と藁のえじこ。障子越しに差す柔らかな日差しの中、藍染めの木綿着物に包まれ、下町の静かな生活音に囲まれて眠っています。'
	},
	em_china_asia: {
		src: '/images/babies/em_china_asia.jpg',
		caption: '明清東アジア・紅絹の錦包み',
		sceneDetail: '紫檀の重厚な家具が並ぶ邸宅。赤と金の花鳥文様が織り込まれた豪奢な綿入り錦布に包まれ、家族の繁栄を象徴する彫刻が施された木製ベッドの中にいます。'
	},
	em_europe: {
		src: '/images/babies/em_europe.jpg',
		caption: '近世ヨーロッパ・レースのリネンと天蓋',
		sceneDetail: 'フェルメールやレンブラントの絵画を思わせる陰影の美しい部屋。繊細なレース刺繍の施されたリネンの産着をまとい、彫刻されたマホガニーのベビーベッドに横たわっています。'
	},
	em_atlantic: {
		src: '/images/babies/em_atlantic.jpg',
		caption: '大西洋世界・パッチワークキルトの温もり',
		sceneDetail: '素朴な木造小屋。母や祖母たちが端切れを縫い合わせて作った愛情あふれるパッチワークキルトに包まれ、粗削りの木製ゆりかごで穏やかにまどろんでいます。'
	},

	// === 近代 (industrial) ===
	ind_europe_us: {
		src: '/images/babies/ind_europe_us.jpg',
		caption: 'ヴィクトリア朝・真鍮のベビーベッド',
		sceneDetail: '産業革命期の都市住宅。繊細なピンタックとレースがあしらわれた長丈の綿製クリスニングガウンを身にまとい、アンティークな真鍮製ベビーベッドで眠っています。'
	},
	ind_japan: {
		src: '/images/babies/ind_japan.jpg',
		caption: '明治・大正日本・絣（かすり）の産着',
		sceneDetail: 'ガス灯や石油ランプの光がほのかに揺れる日本家屋。紺絣（こんがすり）の小さな着物を着せられ、綿入りの布団の上ですやすやと寝息を立てています。'
	},
	ind_china: {
		src: '/images/babies/ind_china.jpg',
		caption: '近代中国・花柄の綿入りおくるみ',
		sceneDetail: '煉瓦造りの伝統家屋。色鮮やかな花柄のキルティング綿布にすっぽりと包まれ、頑丈な割竹で編まれたゆりかごの中で守られています。'
	},
	ind_india: {
		src: '/images/babies/ind_india.jpg',
		caption: '英領インド・木漏れ日のベランダ',
		sceneDetail: '熱帯の陽光を遮るコロニアル風ベランダ。通気性の良い純白の手織り木綿（カーディー）にふんわりと包まれ、ジュートで編まれた小さな寝台（チャルパイ）に横たわっています。'
	},
	ind_other: {
		src: '/images/babies/ind_other.jpg',
		caption: '東欧・手刺繍のリネンとウールショール',
		sceneDetail: 'ぬくもりのある木造ログハウス（イズバ）。伝統的な幾何学刺繍が施されたリネンと手編みのウールショールに包まれ、フォークアート風に彩色された揺りかごで微睡んでいます。'
	},

	// === 現代 (modern) ===
	mod_japan: {
		src: '/images/babies/mod_japan.jpg',
		caption: '現代日本・産科クリニックのコット',
		sceneDetail: '清潔で静かな産婦人科の新生児室。肌触りの良い純白のオーガニックコットン肌着をまとい、透明なアクリル製新生児コットの柔らかな毛布の中で生まれたての命が輝いています。'
	},
	mod_china_ea: {
		src: '/images/babies/mod_china_ea.jpg',
		caption: '現代東アジア・パステルカラーのブランケット',
		sceneDetail: '近代的な総合病院の病室。柔らかなペールイエローのコットンブランケットに優しく包まれ、温かい午後の自然光が差し込むベビーコットで安心しきって眠っています。'
	},
	mod_asia: {
		src: '/images/babies/mod_asia.jpg',
		caption: '現代南アジア・清潔な産科病棟',
		sceneDetail: 'エアコンの効いた快適なマタニティクリニック。ミントグリーンと白の柔らかなベビーネストの中で、すこやかな寝息を立てています。'
	},
	mod_africa_me: {
		src: '/images/babies/mod_africa_me.jpg',
		caption: '現代アフリカ・中東・陽光あふれる新生児室',
		sceneDetail: '日差しが降り注ぐ明るい現代のクリニック。鮮やかで温かみのある幾何学柄の柔らかなコットンおくるみに包まれ、穏やかな時間を過ごしています。'
	},
	mod_west: {
		src: '/images/babies/mod_west.jpg',
		caption: '現代欧米・医療用ストライプのおくるみ',
		sceneDetail: '近代的な総合病院のバーススイート。医療現場で定番のピンクとブルーのストライプが入った清潔なコットンブランケットとお揃いのニット帽を身につけ、アクリルコットで眠っています。'
	}
};

export function getBabyImage(regionId: RegionId): BabyImageInfo {
	return (
		BABY_IMAGES[regionId] ?? {
			src: '/images/babies/med_japan.jpg',
			caption: '出生時の様子',
			sceneDetail: '健やかに生まれた新しい命。'
		}
	);
}

