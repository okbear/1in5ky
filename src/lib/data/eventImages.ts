import type { RegionId } from '#lib/types';

export interface EventImageInfo {
	src: string;
	alt: string;
	caption?: string;
	regionIds?: readonly [RegionId, ...RegionId[]]; // The depicted culture can be narrower than the event's scope.
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
	anc_meso_canal_repair: {
		src: '/images/events/anc_meso_canal_repair.jpg',
		alt: '炎天下のメソポタミア、灌漑用水路の泥を木鍬や葦籠で掻き出し堤防を築く工夫たちと、粘土板に記録を刻む神殿の書記',
		caption: 'メソポタミアの大麦運河浚渫普請'
	},
	anc_meso_beer_ration: {
		src: '/images/events/anc_meso_beer_ration.jpg',
		alt: '日干しレンガの神殿醸造所前で、配給の大麦ビールの枡目減りを巡り神殿監督官に抗議する工夫たち',
		caption: '神殿の大麦ビール配給'
	},
	anc_meso_debt_slavery: {
		src: '/images/events/anc_meso_debt_slavery.jpg',
		alt: '塩害で白く結晶化した大麦畑で、天秤ばかりと銀貨を手にした商人・書記を前に頭を抱え絶望する農民一家',
		caption: '大麦畑の塩害と債務奴隷'
	},
	anc_meso_sandstorm_fever: {
		src: '/images/events/anc_meso_sandstorm_fever.jpg',
		alt: '赤黒い熱風シムーンが吹き荒れる中、油灯の灯る土室でトラコーマに目を腫らし高熱の子を抱く母と扉を閉ざす男',
		caption: '熱風シムーンとトラコーマ'
	},

	// === 古代エジプト ===
	anc_egypt_tomb_robbery: {
		src: '/images/events/anc_egypt_tomb.jpg',
		alt: '油灯の炎が揺れる王家の谷の墓道で、鮮やかな壁画を背に石を削る職人たち',
		caption: '王家の谷の墓所'
	},
	anc_egypt_nile_flood_level: {
		src: '/images/events/anc_egypt_nilometer.jpg',
		alt: 'エレファンティネ島の石造ナイロメーター室内、刻まれた目盛りを指差し低増水の凶作を憂える神官とパピルスに記録する書記',
		caption: 'エレファンティネのナイロメーター測定'
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
	cls_rome_gladiator_ticket: {
		src: '/images/events/cls_rome_colosseum_beast.jpg',
		alt: '満員の観衆が見下ろすローマのコロッセウム、砂埃舞う闘技場で猛獣の豹に槍を構えて対峙する闘獣士（ウェナトル）',
		caption: 'コロッセウムの闘獣興行'
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

	// === 中世〜近世共通・大厄災（黒死病・モンゴル襲来） ===
	plague_1347: {
		src: '/images/events/plague_1347.jpg',
		alt: '1347年メッシーナ港、病み衰えた船員を乗せたジェノヴァ船の入港と、布で鼻口を覆い恐れおののく修道士や港の民',
		caption: '黒死病の船とメッシーナ港'
	},
	mongol_1220: {
		src: '/images/events/mongol_cavalry.jpg',
		alt: '城壁の上から砂塵巻き起こる地平線を凝視する守備兵と、平原を埋め尽くして進軍するモンゴル軍の無数の騎馬隊',
		caption: '地平線を埋めるモンゴル騎馬軍団'
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
	},

	// === 近代中国（上海外灘の苦力） ===
	ind_chn_bund_coolie_labor: {
		src: '/images/events/ind_chn_bund_coolie.jpg',
		alt: '19世紀末の上海外灘の黄浦江波止場、停泊する蒸気船から一本の天秤棒で重い綿花俵を担ぎ出す苦力たちと帳簿を手にした親方',
		caption: '上海外灘波止場の苦力'
	},

	// === 近代インド（ベンガルの藍工場） ===
	ind_ind_indigo_planter_coercion: {
		src: '/images/events/ind_ind_indigo_planter.jpg',
		alt: '19世紀半ばの英領インド・ベンガルの藍工場、巨大な石造りの浸出槽で深い藍色の液体を踏み揉む過酷な労働と英国人プランターの監視',
		caption: 'ベンガル藍農園の強制労働'
	},

	// === 近代その他の地域（スエズ運河開削） ===
	ind_oth_suez_canal_digging: {
		src: '/images/events/ind_oth_suez_canal.jpg',
		alt: '1860年代のスエズ運河開削現場、灼熱の砂漠地峡でツルハシと籐籠を手に溝を掘り進めるエジプト人農民夫たちの過酷な人海戦術',
		caption: 'スエズ運河開削の人海戦術'
	},

	// === 産業革命〜近代共通（コレラ・世界大戦動員・スペインかぜ） ===
	cholera_1850: {
		src: '/images/events/cholera_london.jpg',
		alt: '1854年ロンドンのブロード・ストリート、煤煙と冷雨の石畳で公共手押しポンプの水を汲む人々と、道端で倒れ込むコレラ患者',
		caption: 'ロンドンのブロード・ストリート井戸とコレラ'
	},
	ww1_1914: {
		src: '/images/events/ww1_mobilization.jpg',
		alt: '1914年夏の薄暗い農家の食卓、総動員令の召集令状を沈痛な面持ちで見つめる青年と涙に暮れる家族、戸口を行進するフランス兵',
		caption: '1914年総動員令と出征の報'
	},
	flu_1918: {
		src: '/images/events/flu_1918.jpg',
		alt: '1918年スペインかぜの臨時野戦病院、白い防護マスクを着けた医師と看護師がベッドで高熱に苦しむ若い兵士を手当てする病棟',
		caption: '1918年スペインかぜの隔離病棟'
	},

	// === 現代日本（深夜残業と過労死） ===
	mod_jpn_karoshi_midnight_train: {
		src: '/images/events/mod_jpn_karoshi.jpg',
		alt: '昭和末期からバブル期の深夜の東京、ネオン揺れる終電後のプラットフォームのベンチで書類鞄を抱えて力尽き眠り込むビジネスマン',
		caption: '深夜残業と過労死の影'
	},

	// === 現代ヨーロッパ（ベルリンの壁崩壊） ===
	mod_eur_berlin_wall_fall: {
		src: '/images/events/mod_eur_berlin_wall.jpg',
		alt: '1989年11月の夜、投光器の光を浴びグラフィティに覆われたベルリンの壁の上によじ登りハンマーを振り下ろす若者たちと歓喜の群衆',
		caption: 'ベルリンの壁崩壊の夜'
	},

	// === 現代中国（大躍進の裏庭製鉄） ===
	mod_chn_backyard_steel_melt: {
		src: '/images/events/mod_chn_backyard_furnace.jpg',
		alt: '1958年大躍進期の中国農村、夜空を赤く焦がす無数の土法炉に鉄鍋や農具を投げ込み鞴を踏む人民公社の農民たち',
		caption: '大躍進の土法炉と鍋釜供出'
	},

	// === 現代アジア（ダッカ縫製工場） ===
	mod_asia_dhaka_sewing_collapse: {
		src: '/images/events/mod_asia_dhaka_sweatshop.jpg',
		alt: 'ダッカの巨大縫製工場、太いコンクリート柱に走る不気味な亀裂と、ミシンの前で不安げに見つめる女性工員と怒鳴り散らす監督官',
		caption: 'ダッカ縫製工場の構造亀裂と工員'
	},

	// === 現代アフリカ（コンゴ手掘りコバルト） ===
	mod_afr_cobalt_hand_dug_pit: {
		src: '/images/events/mod_afr_cobalt_pit.jpg',
		alt: 'コンゴ民主共和国の赤土が広がる露天採掘坑、手作りの梯子とツルハシで危険な縦穴からコバルト原石の麻袋を運び出す手掘り鉱夫たち',
		caption: 'コンゴの手掘りコバルト採掘坑'
	},

	// === 現代北米（ラストベルト工場閉鎖） ===
	mod_na_rustbelt_factory_closure: {
		src: '/images/events/mod_na_rustbelt_closure.jpg',
		alt: '錆びた鉄扉に操業停止の看板が掲げられたラストベルトの自動車工場前、私物を詰めた段ボール箱を抱えて立ち尽くす熟練労働者',
		caption: 'ラストベルトの工場閉鎖と解雇'
	},

	// === 現代中南米（アマゾン熱帯雨林伐採） ===
	mod_lat_amazon_deforestation_conflict: {
		src: '/images/events/mod_lat_amazon_conflict.jpg',
		alt: '煙と炎が立ち上るアマゾン熱帯雨林の伐採前線、鎖で木々を倒す大型重機を前に拳を掲げる先住民と鉈を手にした入植農民',
		caption: 'アマゾン森林伐採と境界の対立'
	},

	// === 古代エジプト（ナイルの暮らしと手仕事） ===
	anc_egypt_crocodile_crossing: {
		src: '/images/events/anc_egypt_crocodile_crossing.jpg',
		alt: '大麦とタマネギを積んだ葦舟で、ワニが浮かぶナイル川を渡る古代エジプトの人々',
		caption: 'ナイルの渡し舟とワニ'
	},
	anc_egypt_linen_weave: {
		src: '/images/events/anc_egypt_linen_weave.jpg',
		alt: '古代エジプトの日干しレンガの工房で、床に張った織機で白い亜麻布を織り、糸を紡ぐ女性たち',
		caption: '神殿へ納める白いリンネル'
	},
	anc_egypt_eye_kohl_remedy: {
		src: '/images/events/anc_egypt_eye_kohl_remedy.jpg',
		alt: '古代エジプトの家で、孔雀石の顔料や石の乳鉢を前に、娘の目の縁へコホルを塗る母親',
		caption: '眼病とコホルの手当て'
	},

	// === 古代中国（黄河の治水と手仕事） ===
	anc_china_yellow_river_flood: {
		src: '/images/events/anc_china_yellow_river_flood.jpg',
		alt: '黄褐色の濁流が迫る古代中国の村で、土を籠で運び木の突き棒で堤防を固める住民たち',
		caption: '黄河の濁流と築堤'
	},
	anc_china_bronze_smelt_burn: {
		src: '/images/events/anc_china_bronze_smelt_burn.jpg',
		alt: '殷代の鋳造工房で、炉の火が燃えるなか土製の鋳型へ溶けた青銅を注ぐ職人たち',
		caption: '殷の青銅器鋳造'
	},
	anc_china_sericulture_plague: {
		src: '/images/events/anc_china_sericulture_plague.jpg',
		alt: '古代中国の桑畑で害虫を手で取り除く女性と、籠の桑葉や棚の蚕を世話する家族',
		caption: '桑の葉を守る養蚕農家'
	},
	anc_china_ancestral_millet: {
		src: '/images/events/anc_china_ancestral_millet.jpg',
		alt: '周代中国の宗族の集まりで、粟の供物と青銅の酒器を並べた卓を前に若者へ語りかける長老',
		caption: '粟の収穫と祖先への供物'
	},

	// === インダス文明（都市の生産と水） ===
	anc_indus_brick_kiln: {
		src: '/images/events/anc_indus_brick_kiln.jpg',
		alt: 'インダス文明の都市を背に、焼きレンガを積んだ窯場で薪をくべる職人と煙を避ける労働者',
		caption: 'インダスの焼きレンガ窯'
	},
	anc_indus_bead_trade: {
		src: '/images/events/anc_indus_bead_trade.jpg',
		alt: 'インダス文明の焼きレンガの工房で、石の研磨具と弓錐を前に紅玉髄ビーズを磨き、首飾りを組む職人たち',
		caption: '紅玉髄ビーズの研磨と交易'
	},
	anc_indus_great_bath_hygiene: {
		src: '/images/events/anc_indus_great_bath_hygiene.jpg',
		alt: 'モヘンジョ・ダロの焼きレンガの階段と壁に囲まれた大浴場で、緑がかった水面を見つめる人々',
		caption: 'モヘンジョ・ダロの大浴場'
	},
	anc_indus_monsoon_failure: {
		src: '/images/events/anc_indus_monsoon_failure.jpg',
		alt: '干上がり始めた川を背に、焼きレンガの井戸のそばでわずかな水と土器を見つめるインダス文明末期の家族',
		caption: '流路の変化と水源の枯渇'
	},

	// === 古典期ローマ（暮らしと市民のつながり） ===
	cls_rome_lead_poisoning: {
		src: '/images/events/cls_rome_lead_poisoning.jpg',
		alt: 'ローマの台所で腹を押さえて座る男性と妻、甘味料を煮詰める鉛色の器と陶器の酒器',
		caption: '鉛の器と原因不明の腹痛'
	},
	cls_rome_patron_morning_client: {
		src: '/images/events/cls_rome_patron_morning_client.jpg',
		alt: 'ローマの邸宅前でトガ姿の市民が列を作り、施しを待つ客人へ厳しく語りかけるパトロン',
		caption: '夜明けのサリュタティオ'
	},

	cls_rome_grain_dole_fraud: {
		src: '/images/events/cls_rome_grain_dole_fraud.jpg',
		alt: '小麦袋の並ぶローマの給付所で、木製の受給票を役人に示し隣人について訴える市民たち',
		caption: '穀物給付の受給資格調査'
	},

	// === 漢代中国（生業と徴税、災害と交易） ===
	cls_han_salt_iron_monopoly: {
		src: '/images/events/cls_han_salt_iron_monopoly.jpg',
		alt: '漢代の村の市場で、折れた鉄製農具を手にする農民と塩の包みを持つ商人',
		caption: '塩鉄専売と農民の負担'
	},

	cls_han_local_official_bribe: {
		src: '/images/events/cls_han_local_official_bribe.jpg',
		alt: '漢代の農家の前で、銭と布と穀物を前に徴税役人と向き合う一家と、木簡に記録する書記',
		caption: '算賦を取り立てる役人'
	},

	cls_han_locust_plague: {
		src: '/images/events/cls_han_locust_plague.jpg',
		alt: 'バッタの群れに覆われた漢代の小麦畑で、傷んだ穂を調べ、網と籠で虫を集める農民たち',
		caption: '蝗害に襲われた小麦畑'
	},

	cls_han_silk_road_caravan: {
		src: '/images/events/cls_han_silk_road_caravan.jpg',
		alt: '布包みの荷を背負うフタコブラクダを引き、砂塵の道から遠いオアシスを目指す漢代の隊商',
		caption: '河西回廊のラクダ隊商'
	},

	// === 古典期インド（水と医療、香辛料交易） ===
	cls_india_ganges_monsoon_fever: {
		src: '/images/events/cls_india_ganges_monsoon_fever.jpg',
		alt: '濁水に囲まれたガンジス川流域の村で、軒下の炉で水を煮る女性と筵で休む病人',
		caption: '雨期の氾濫と村の熱病'
	},

	cls_india_caste_boundary: {
		src: '/images/events/cls_india_caste_boundary.jpg',
		alt: '旱魃の村の井戸で、空の水壺を持って離れて待つ夫婦と、水汲みを制限する井戸の管理人',
		caption: '共同井戸の身分の境界'
	},

	cls_india_ayurveda_herbs: {
		src: '/images/events/cls_india_ayurveda_herbs.jpg',
		alt: '薬草と石の乳鉢、ギーの器を並べ、筵に座る村人を診る古典期インドの医師',
		caption: '村を訪れたヴァイディヤ'
	},

	cls_india_pepper_cultivation: {
		src: '/images/events/cls_india_pepper_cultivation.jpg',
		alt: '木に絡む胡椒の蔓から実を採る南インドの人々と、莚に実を広げる女性',
		caption: 'マラバールの黒胡椒収穫'
	},

	// === メソアメリカ（黒曜石の採掘） ===
	cls_other_teotihuacan_obsidian: {
		src: '/images/events/cls_other_teotihuacan_obsidian.jpg',
		alt: '松明で照らされたパチューカの坑内で、石と木の道具で黒曜石を掘り、天井を警戒する鉱夫たち',
		caption: '緑色黒曜石の採掘坑'
	},

	// === 古典期オアシス・ペルシア・草原 ===
	cls_other_silk_oasis_tax: {
		src: '/images/events/cls_other_silk_oasis_tax.jpg',
		alt: 'タリム盆地クチャの日干しレンガ隊商宿で、天秤ばかりと絹織物を前に割増し関税を迫る徴税官と抗議するソグド商人',
		caption: 'クチャ隊商宿の関税徴収'
	},
	cls_other_desert_qanat_collapse: {
		src: '/images/events/cls_other_desert_qanat_collapse.jpg',
		alt: '砂漠の地下深くを貫くカナートの暗闇で、縦穴から差す光のもと泥を掻き出し亀裂の入った支保工を警戒する工夫たち',
		caption: '地下水路カナートの浚渫'
	},
	cls_other_steppes_nomad_raid: {
		src: '/images/events/cls_other_steppes_nomad_raid.jpg',
		alt: '月光と炎が交錯する夜のステップ草原で、燃えるユルタと家畜を守るため弓と短剣を構える遊牧民一家と襲撃する騎兵',
		caption: 'ステップ草原の夜襲と家畜防衛'
	},

	// === 古代〜古典期共通・軍事と労役 ===
	ancient_corvee: {
		regionIds: ['anc_mesopotamia'],
		src: '/images/events/ancient_corvee.jpg',
		alt: '灼熱の太陽のもと、巨大な日干しレンガ神殿の普請現場で木製ソリに乗せた巨石を引く農民工夫たちと粘土板を持つ監督官',
		caption: '神殿大工事の労役普請'
	},
	ancient_chariot_war: {
		regionIds: ['anc_mesopotamia'],
		src: '/images/events/ancient_chariot_war.jpg',
		alt: '灌漑水路の堤防沿いで、牛皮の盾と青銅槍を構える農民歩兵密集陣と四輪戦車、涙で見送る家族たち',
		caption: '境界水路の戦車戦と歩兵徴集'
	},
	classical_plague_war: {
		src: '/images/events/classical_plague_war.jpg',
		alt: 'アントニヌスの疫病が蔓延するローマの街道で、布で口を覆う市民の葬列とバシリカ前で辺境派兵を命じる百人隊長',
		caption: 'アントニヌスの疫病と徴兵'
	},
	classical_great_wall_frontier: {
		src: '/images/events/classical_great_wall_frontier.jpg',
		alt: '晩秋の冷風が吹きすさぶ農家の庭で、長城守備への徴兵木簡を呆然と見つめる前漢の青年と遠くに見える烽火台',
		caption: '長城警備への徴兵木簡'
	},
	classical_punic_legion_siege: {
		regionIds: ['cls_rome'],
		src: '/images/events/classical_punic_legion_siege.jpg',
		alt: '街道を進軍するローマ軍団の砂塵の下、農家から冬越しの穀物甕や家畜を強引に奪い去る輜重兵と泣き崩れる農民一家',
		caption: '軍団進軍と食料強制徴発'
	},
	trial_by_ordeal: {
		src: '/images/events/trial_by_ordeal.jpg',
		alt: 'ロマネスク教会の前庭で、十字架を掲げる司祭の祈りのもと煮えたぎる大釜から素手で石を拾い出そうとする農民の青年',
		caption: '熱湯の神判'
	},

	// === 中世ヨーロッパ（封建領主と教会、農民の受難） ===
	med_eur_tithe_dispute: {
		src: '/images/events/med_eur_tithe_dispute.jpg',
		alt: 'ぬかるんだ農家の庭で、小麦俵と子羊を教会へ差し出すよう迫る教区司祭と冬の食糧を案じ跪いて懇願する農奴',
		caption: '十分の一税の納入'
	},
	med_eur_ergot_poisoning: {
		src: '/images/events/med_eur_ergot_poisoning.jpg',
		alt: '薄暗い土室の藁ベッドで、黒い麦角パンによる手足の灼熱痛に悶える若者と薬草を当てる老婆、幻覚に怯える村人',
		caption: 'ライ麦の麦角中毒'
	},
	med_eur_manor_bakehouse: {
		src: '/images/events/med_eur_manor_bakehouse.jpg',
		alt: '石造りの領主専売パン焼き窯の炎の前で、高い手数料を巻き上げるパン焼き役人と隠し石臼に手を伸ばす農民',
		caption: '領主の専売窯とバナリテ'
	},
	med_eur_leper_crossing: {
		src: '/images/events/med_eur_leper_crossing.jpg',
		alt: '霧深き城壁外の街道で、鳴子と物乞いの木椀を手にした頭巾姿の癩病患者と、布で口元を覆い距離を置いて通り過ぎる旅人たち',
		caption: '街道の鳴子と癩病隔離所'
	},

	// === 中世イスラム世界（市場・巡礼・病院・製紙） ===
	med_islam_suq_muhtasib: {
		src: '/images/events/med_islam_suq_muhtasib.jpg',
		alt: '日差しが差し込むバグダードの屋根付き市場（スーク）で、香辛料や干し果物の店を前に天秤ばかりと分銅を厳しく検定する市場監督官（ムフタシブ）',
		caption: 'スークの市場監督官と天秤検定'
	},
	med_islam_hajj_caravan_heat: {
		src: '/images/events/med_islam_hajj_caravan_heat.jpg',
		alt: '熱風サムーンが吹き荒れる灼熱の砂漠で、空になりかけた革の水袋を傾けながら聖地を目指す巡礼隊商とラクダ引き',
		caption: '砂漠の熱風と巡礼隊商'
	},
	med_islam_bimaristan_care: {
		src: '/images/events/med_islam_bimaristan_care.jpg',
		alt: '石造りアーチと中庭の光が満ちる公立病院（ビマースターン）で、高熱の患者を診察するターバン姿の医師と薬壺を抱える助手',
		caption: 'ビマースターンでの無償医療'
	},
	med_islam_papermill_gear: {
		src: '/images/events/med_islam_papermill_gear.jpg',
		alt: 'ダマスカスの水力製紙所で、水車の動力を伝える巨大歯車と麻布を叩き潰す木槌の激しい上下運動を見守る工匠たち',
		caption: '水車製紙所の破砕機'
	},

	// === 中世中国・宋代（製鉄・紙幣・青磁・科挙） ===
	med_china_song_iron_blast: {
		src: '/images/events/med_china_song_iron_blast.jpg',
		alt: '石炭の猛煙が立ち上る北宋の巨大製鉄溶鉱炉で、赤く輝く溶けた銑鉄を砂型へと流し込む屈強な工夫たち',
		caption: '宋代の石炭製鉄溶鉱炉'
	},
	med_china_jiaozi_inflation: {
		src: '/images/events/med_china_jiaozi_inflation.jpg',
		alt: '成都の帳場で、価値の下落した紙幣「交子」を手に困惑する商人とおびただしい銅銭の束',
		caption: '交子の減価と銅銭'
	},
	med_china_celadon_kiln_glaze: {
		src: '/images/events/med_china_celadon_kiln_glaze.jpg',
		alt: '山裾に連なる竜泉窯の登り窯の前で、薪をくべる炎の合間に翡翠のように透き通る青磁の仕上がりを確かめる陶工',
		caption: '竜泉窯の登り窯と青磁'
	},
	med_china_jinshi_cram_exam: {
		src: '/images/events/med_china_jinshi_cram_exam.jpg',
		alt: '深夜の書斎で油灯の明かりのもと、四書五経の経典と答案の山に囲まれ頭を抱えて苦悩する若き科挙受験生',
		caption: '科挙の重圧と深夜の独習'
	},

	// === 中世日本・鎌倉室町（荘園・警備・徳政一揆） ===
	med_jpn_shoen_annual_tribute: {
		src: '/images/events/med_jpn_shoen_annual_tribute.jpg',
		alt: '秋の刈田が広がる荘園の畔で、年貢の割増しを冷徹に告げる荘園代官と泥に額づいて免除を乞う百姓夫婦',
		caption: '荘園代官の検見と年貢'
	},
	med_jpn_kamakura_shugosho_night: {
		src: '/images/events/med_jpn_kamakura_shugosho_night.jpg',
		alt: '鎌倉街道の宿場で、燃え盛る篝火の光を浴びながら槍を構えて闇夜の悪党の襲撃に備える宿場警備の武士たち',
		caption: '鎌倉街道のかがり火警備'
	},
	med_jpn_tokusei_ikki_pawn: {
		src: '/images/events/med_jpn_tokusei_ikki_pawn.jpg',
		alt: '燃え上がる松明と竹槍を掲げて土倉（質屋）に押し入り、借用証文を篝火に投じて気勢を上げる徳政一揆の群衆',
		caption: '室町の徳政一揆と土倉焼き討ち'
	},

	// === 歴史的決断イベント（戦乱・包囲戦・天災・近世近現代の過酷な試練） ===
	medieval_feudal_war_famine: {
		regionIds: ['med_britain', 'med_france', 'med_germany', 'med_italy'],
		src: '/images/events/medieval_feudal_war_famine.jpg',
		alt: '冷たい長雨が降り続くぬかるみの麦畑で、戦乱に踏み荒らされ腐敗した作物を前に立ち尽くす中世ヨーロッパの農民一家',
		caption: '戦乱の荒廃と長雨の凶作'
	},
	mongol_baghdad_1258: {
		regionIds: ['med_iraq'],
		src: '/images/events/mongol_baghdad_1258.jpg',
		alt: '1258年、ティグリス川沿いの城壁と中庭から、バグダードを包囲するモンゴル軍の投石機と立ち上る黒煙を怯え見つめるアッバース朝の家族',
		caption: 'モンゴル軍のバグダード包囲'
	},
	medieval_ashigaru_levy: {
		regionIds: ['med_japan'],
		src: '/images/events/medieval_ashigaru_levy.jpg',
		alt: '秋の霧煙る農村で、陣夫として若者を強制連行する足軽隊と、実りかけの稲を青刈りして強奪する刈田狼藉の兵たち',
		caption: '陣夫狩りと刈田狼藉'
	},
	medieval_crusade_siege: {
		regionIds: ['med_britain', 'med_france', 'med_germany', 'med_italy', 'med_iraq', 'med_egypt', 'med_andalus', 'med_central_asia'],
		src: '/images/events/medieval_crusade_siege.jpg',
		alt: '包囲された中世の城塞都市で、投石機の火壺が城壁に降り注ぐなか、枯渇した水槽の濁水を分け合い革を煮て飢えを凌ぐ籠城の人々',
		caption: '籠城戦の飢餓と投石攻撃'
	},
	early_modern_little_ice_age: {
		regionIds: ['em_britain', 'em_france', 'em_germany', 'em_italy', 'em_netherlands', 'em_north_america'],
		src: '/images/events/early_modern_little_ice_age.jpg',
		alt: '17世紀小氷期の極寒のなか、凍結した川と雪に埋もれた村の小道で、病気の家族をそりに乗せて運ぶ毛皮と毛織物姿の人々',
		caption: '小氷期の厳冬と疫病'
	},
	smallpox_1520: {
		regionIds: ['em_caribbean', 'em_andes', 'em_mesoamerica'],
		src: '/images/events/smallpox_1520.jpg',
		alt: '1520年の中米・先住民の集落で、筵の上に倒れ伏す天然痘の高熱患者たちに薬草水や香を捧げて介抱する母と祈祷師',
		caption: '新大陸の未知の疫病（天然痘）'
	},
	tenmei_1783: {
		regionIds: ['em_edo'],
		src: '/images/events/tenmei_1783.jpg',
		alt: '浅間山大噴火の火山灰が昼なお暗く空を覆い、降灰と冷夏で全滅した水田を前に立ち尽くす天明の大飢饉の農民一家',
		caption: '天明の大飢饉と浅間山の火山灰'
	},
	early_modern_thirty_years_mercenary: {
		regionIds: ['em_germany'],
		src: '/images/events/early_modern_thirty_years_mercenary.jpg',
		alt: '三十年戦争のドイツ農村で、火縄銃や長槍を手に家々を叩き壊して食料や家畜を略奪する荒れ狂った傭兵隊と怯える農民',
		caption: '三十年戦争の傭兵略奪'
	},
	witch_scapegoat: {
		regionIds: ['med_britain', 'med_france', 'med_germany', 'med_italy', 'em_britain', 'em_france', 'em_germany', 'em_italy', 'em_netherlands'],
		src: '/images/events/witch_scapegoat.jpg',
		alt: '疫病が続くヨーロッパの村で、松明と熊手を掲げた群衆と執行官に小屋の壁際へ追い詰められ、魔女の疑いをかけられる薬草摘みの老女',
		caption: '疫病下の魔女裁判・スケープゴート'
	},
	industrial_phossy_pollution: {
		regionIds: ['ind_britain', 'ind_france', 'ind_germany', 'ind_italy', 'ind_usa', 'ind_canada'],
		src: '/images/events/industrial_phossy_pollution.jpg',
		alt: '薄暗いヴィクトリア朝のマッチ工場で、立ち込める有毒な白リン蒸気のなか、リン顎症で腫れ上がった顎を押さえて苦悶する女工たち',
		caption: 'マッチ工場の白リン中毒（リン顎症）'
	},
	london_blitz_1940: {
		regionIds: ['ind_britain'],
		src: '/images/events/london_blitz_1940.jpg',
		alt: '1940年のロンドン大空襲の夜、炎上する街とサーチライトが交差する夜空の下、ガスマスク箱を抱えて地下鉄防空壕へ急ぐ市民たち',
		caption: 'ロンドン空襲（ザ・ブリッツ）'
	},
	med_jpn_onrui_fire_kyoto: {
		regionIds: ['med_japan'],
		src: '/images/events/med_jpn_onrui_fire_kyoto.jpg',
		alt: '応仁の乱の業火に包まれる京都洛中で、煙と火の粉が舞い上がるなか家財を積んだ荷車を引いて都落ちを急ぐ庶民一家と戦乱を見つめる僧侶',
		caption: '応仁の乱と京都洛中の炎上'
	},
	med_other_trans_sahara_salt: {
		regionIds: ['med_west_africa'],
		src: '/images/events/med_other_trans_sahara_salt.jpg',
		alt: 'サハラ砂漠を横断する隊商、岩塩板を運ぶラクダと藍染めのトゥアレグ族の導き手',
		caption: 'サハラ砂漠の岩塩隊商'
	},
	med_other_chinampa_mud_harvest: {
		regionIds: ['med_mesoamerica'],
		src: '/images/events/med_other_chinampa_mud_harvest.jpg',
		alt: 'テスココ湖のチナンパで泥をすくいトウモロコシや唐辛子を育てるアステカの農民たち',
		caption: 'テスココ湖の浮島農園'
	},
	med_other_andes_quipu_tribute: {
		regionIds: ['med_andes'],
		src: '/images/events/med_other_andes_quipu_tribute.jpg',
		alt: 'アンデスの段々畑の村で、結び目縄（キープ）を手に貢納と備蓄を査定するインカ帝国の巡察官',
		caption: 'インカ帝国のキープ記録'
	},
	med_other_angkor_reservoir_breach: {
		regionIds: ['med_southeast_asia'],
		src: '/images/events/med_other_angkor_reservoir_breach.jpg',
		alt: 'アンコール巨大貯水池の堤防決壊に立ち向かい、濁流の中で泥嚢や石を積むクメールの工夫たち',
		caption: 'アンコール貯水池の堤防決壊'
	},
	med_other_swahili_dhow_sail: {
		regionIds: ['med_east_africa'],
		src: '/images/events/med_other_swahili_dhow_sail.jpg',
		alt: 'スワヒリ海岸キルワの港で、三角帆のダウ船に象牙や木材を積み込み季節風を待つ船乗りたち',
		caption: 'スワヒリ海岸のダウ船貿易'
	},
	em_edo_mizunomi_peasant_work: {
		regionIds: ['em_edo'],
		src: '/images/events/em_edo_mizunomi_peasant_work.jpg',
		alt: '貧農の我が家を後に、送り手形を手に江戸下町へと日雇い出稼ぎに出る水呑百姓の青年',
		caption: '水呑百姓の江戸出稼ぎ'
	},
	em_edo_sumptuary_edict: {
		regionIds: ['em_edo'],
		src: '/images/events/em_edo_sumptuary_edict.jpg',
		alt: '幕府の奢侈禁止令のもと、地味な木綿羽織の裏地に鮮やかな絹縮緬を縫い込む江戸町人の裏勝り',
		caption: '奢侈禁止令と裏勝りの美学'
	},
	em_edo_terakoya_calligraphy: {
		regionIds: ['em_edo'],
		src: '/images/events/em_edo_terakoya_calligraphy.jpg',
		alt: '柔らかな光差す寺子屋の畳の上で、師匠に見守られながら筆を走らせる町人の子どもたち',
		caption: '寺子屋の手習い風景'
	},
	em_edo_dojima_rice_exchange: {
		regionIds: ['em_edo'],
		src: '/images/events/em_edo_dojima_rice_exchange.jpg',
		alt: '米価高騰に怒り狂う町衆が米問屋に押し寄せ、米俵を引き裂く打ちこわしの騒乱',
		caption: '飢饉下の米屋打ちこわし'
	},
	em_chn_qing_queue_edict: {
		regionIds: ['em_china'],
		src: '/images/events/em_chn_qing_queue_edict.jpg',
		alt: '清朝の八旗兵が見張る広場で、剃髪令に従い無念の面持ちで頭髪を剃られる漢民族の文人',
		caption: '清朝の剃髪令と辮髪強制'
	},
	em_chn_canton_cohong_silver: {
		regionIds: ['em_china'],
		src: '/images/events/em_asia_canton_silver.jpg',
		alt: '18世紀広州十三行の商館で、弁髪に清朝の長袍をまとった商人と書記が天秤ばかりと試金石でスペイン銀貨や銀錠を検定する執務風景',
		caption: '広州十三行の銀貨鑑定'
	},
	em_chn_white_lotus_gathering: {
		regionIds: ['em_china'],
		src: '/images/events/em_chn_white_lotus_gathering.jpg',
		alt: '土壁の農家で灯火を囲み、無生老母の経文を前に密かに集う白蓮教徒の農民たち',
		caption: '白蓮教の夜間秘密集会'
	},
	em_chn_keju_examination_cubicle: {
		regionIds: ['em_china'],
		src: '/images/events/em_chn_keju_examination_cubicle.jpg',
		alt: '貢院の狭小な独房（号舎）で蝋燭の光を頼りに答案と向き合い、袖口の微細文字カンニング布に苦悩する科挙受験生',
		caption: '科挙郷試の号舎とカンニングの葛藤'
	},
	em_chn_literary_inquisition: {
		regionIds: ['em_china'],
		src: '/images/events/em_chn_literary_inquisition.jpg',
		alt: '清朝官憲の捜索が迫る深夜、先祖の詩文や日記を火鉢の炎に投じて必死に焼き捨てる漢人知識人',
		caption: '文字の獄と詩文の隠滅'
	},
	em_ind_mughal_mansab_cavalry: {
		regionIds: ['em_mughal_india'],
		src: '/images/events/em_ind_mughal_mansab_cavalry.jpg',
		alt: '朝靄と砂埃の舞う宿営地で、鎖帷子と板金甲冑をまとった騎兵と軍馬を査定・点呼する下級マンサブダール',
		caption: 'ムガル帝国の騎兵維持と軍馬査定'
	},
	em_ind_calico_cotton_weaving: {
		regionIds: ['em_mughal_india'],
		src: '/images/events/em_ind_calico_cotton_weaving.jpg',
		alt: '光が差し込むスーラトの工房で手織機を操り白綿布を織る職人と、布地を吟味する東インド会社の商人',
		caption: 'スーラトのキャラコ機織り工房'
	},

	em_ind_taj_mahal_quarry_labor: {
		src: '/images/events/em_ind_taj_mahal_quarry_labor.jpg',
		alt: '白大理石の塊を載せた牛車を押し、アーグラの造営現場へ運ぶムガル時代の労働者たち',
		caption: 'タージ・マハル造営の大理石運搬'
	},

	em_ind_akbar_sulahkul_debate: {
		src: '/images/events/em_ind_akbar_sulahkul_debate.jpg',
		alt: '赤砂岩の広間で、異なる宗教の学者やイエズス会士の議論に耳を傾けるアクバル帝',
		caption: 'アクバルの宗教討論館'
	},

	em_ind_monsoon_famine_relief: {
		src: '/images/events/em_ind_monsoon_famine_relief.jpg',
		alt: 'ひび割れた土の上に列を作り、城砦近くの炊き出しで粥を受け取るデカンの人々',
		caption: 'デカン大飢饉の施粥所'
	},

	em_atl_maroon_mountain_escape: {
		src: '/images/events/em_atl_maroon_mountain_escape.jpg',
		alt: 'ジャマイカの霧深い山道を登り、尾根の見張りの合図を受ける農園から逃れた二人',
		caption: 'ブルーマウンテンのマルーン共同体'
	},

	em_atl_slave_ship_middle_passage: {
		src: '/images/events/em_atl_slave_ship_middle_passage.jpg',
		alt: '低い梁と板張りの船底で、狭い明かり取りの下に身を寄せる大西洋奴隷船の囚われた人々',
		caption: '中間航路の船底'
	},

	em_atl_potosi_quicksilver: {
		src: '/images/events/em_atl_potosi_quicksilver.jpg',
		alt: 'セロ・リコを背にした精錬場で、石造りの浅い槽の鉱泥を素足で踏むアンデスの労働者たち',
		caption: 'ポトシ銀山の水銀精錬'
	},

	em_atl_beaver_fur_trap: {
		src: '/images/events/em_atl_beaver_fur_trap.jpg',
		alt: '雪に覆われた針葉樹林の小川で、氷の穴に罠を仕掛けるクリーの猟師たち',
		caption: 'ハドソン湾岸のビーバー猟'
	},

	collective_punishment: {
		src: '/images/events/collective_punishment.jpg',
		alt: '江戸の農村の民家で、帳面と米俵を前に隣家の年貢不足を話し合う村人たち',
		caption: '五人組と年貢の連帯負担'
	},

	window_salt_tax: {
		src: '/images/events/window_salt_tax.jpg',
		alt: 'イングランドの煉瓦造りの家で、窓税の負担を減らすために窓を煉瓦で塞ぐ職人',
		caption: '窓税と塞がれる窓'
	},

	french_salt_tax: {
		src: '/images/events/french_salt_tax.jpg',
		alt: 'パリの塩売り場で、天秤で量られた塩の代金を払う女性と係員',
		caption: 'パリの塩税ガベル'
	},

	em_eur_pressgang_navy: {
		src: '/images/events/em_eur_pressgang_navy.jpg',
		alt: 'ロンドン港の酒場で、出入口を押さえる徴募隊と、海軍への乗船を迫られる船員',
		caption: 'ロンドン港の酒場と強制徴募'
	},

	press_gang_conscription: {
		src: '/images/events/press_gang_conscription.jpg',
		alt: '日暮れの英国の波止場で、腕を押さえられ、徴募隊から呼び止められた船員',
		caption: '波止場での海軍強制徴募'
	},

	em_eur_witch_accusation_panic: {
		regionIds: ['em_germany'],
		src: '/images/events/em_eur_witch_accusation_panic.jpg',
		alt: '枯れたブドウ棚のそばで、薬草を持つ女性に詰め寄る近世ドイツの村人たち',
		caption: '冷害の村と魔女の告発'
	},

	em_eur_smallpox_variolation: {
		regionIds: ['em_britain'],
		src: '/images/events/em_eur_smallpox_variolation.jpg',
		alt: '近世イングランドの室内で、袖をまくった患者が小さなランセットを持つ施術者と話し合う',
		caption: '天然痘を前に人痘接種を考える'
	},

	em_eur_guild_entry_fee: {
		regionIds: ['em_france'],
		src: '/images/events/em_eur_guild_entry_fee.jpg',
		alt: '止まった手織り機のそばに集まり、独立への道を閉ざされた不満を親方に訴えるフランスの職人たち',
		caption: '毛織物工房と徒弟たちの抗議'
	},

	rural_lord_hunt: {
		src: '/images/events/rural_lord_hunt.jpg',
		alt: '折れた柵のそばで、馬と猟犬が収穫前の麦畑を横切るのを見つめる中世イングランドの農民',
		caption: '領主の狩猟隊に踏み荒らされた畑'
	},

	serf_master_whim: {
		src: '/images/events/serf_master_whim.jpg',
		alt: '蝋板を前に売買を取り決める二人のそばで、荷物を抱えて住み慣れた家を振り返る奴隷身分の人物',
		caption: '古代ローマで売られ、住まいを離れる'
	},

	ww1_italy_1915: {
		src: '/images/events/ww1_italy_1915.jpg',
		alt: '第一次世界大戦期のイタリアの駅で、兵士が列車に乗り込むのを見つめる労働者',
		caption: 'イタリアの戦時動員と仕事'
	},

	ww1_usa_1917: {
		src: '/images/events/ww1_usa_1917.jpg',
		alt: '1917年の米国で、機械工場の入口に立ち、軍服姿の新兵を見送る作業着の男性',
		caption: '米国の戦時動員と軍需工場'
	},

	industrial_conscription_order: {
		src: '/images/events/industrial_conscription_order.jpg',
		alt: '木造家屋の玄関で赤い召集令状を受け取った男性を、不安そうに見守る家族',
		caption: '家に届いた戦時召集令状'
	},

	industrial_total_war_air_raid: {
		src: '/images/events/industrial_total_war_air_raid.jpg',
		alt: '木造家屋が燃える東京の夜、荷物を抱えて狭い路地から避難する家族',
		caption: '1945年、東京の空襲'
	},

	modern_cold_war_conflict: {
		src: '/images/events/modern_cold_war_conflict.jpg',
		alt: '1971年、荷物や炊事道具を抱えて水田の間の道を進む東ベンガルの避難民',
		caption: '1971年、東ベンガルからの避難'
	},

	ind_jpn_ashio_copper_pollution: {
		src: '/images/events/ind_jpn_ashio_copper_pollution.jpg',
		alt: '渡良瀬川のほとりで、枯れた稲を手に取り、被害を話し合う明治期の農民たち',
		caption: '渡良瀬川沿いの足尾鉱毒被害'
	},

	ind_jpn_chiteki_blood_tax: {
		src: '/images/events/ind_jpn_chiteki_blood_tax.jpg',
		alt: '明治初期の農村で、淡い紙の徴兵検査通知を受け取り、家族と顔を見合わせる若者',
		caption: '明治の徴兵検査通知'
	},

	ind_jpn_rice_riot_store: {
		src: '/images/events/ind_jpn_rice_riot_store.jpg',
		alt: '米袋を抱えた女性と人々が、煙の上がる神戸の商社倉庫前で群衆に巻き込まれる',
		caption: '1918年、神戸の米騒動'
	},

	ind_jpn_chikuho_coal_mine: {
		src: '/images/events/ind_jpn_chikuho_coal_mine.jpg',
		alt: '狭い坑内で夫がつるはしで石炭を掘り、妻が浅い運搬板で石炭を引き出す',
		caption: '筑豊炭鉱の切羽で働く夫婦'
	},

	ind_chn_opium_den_addiction: {
		src: '/images/events/ind_chn_opium_den_addiction.jpg',
		alt: '上海の薄暗い部屋で、肩を痛めた荷役労働者に仲間が盆の上の長い煙管を示す',
		caption: '上海の阿片窟で勧められた煙管'
	},

	ind_chn_boxer_bullet_storm: {
		src: '/images/events/ind_chn_boxer_bullet_storm.jpg',
		alt: '灰色の煉瓦壁に身を寄せ、赤い帯を締めた義和団の一団が教会方面へ向かうのを見つめる市民',
		caption: '1900年、北京の教会包囲'
	},

	ind_chn_may_fourth_protest: {
		src: '/images/events/ind_chn_may_fourth_protest.jpg',
		alt: '天安門前に集まり、紙を手に仲間へ呼びかける1919年の学生たち',
		caption: '1919年、北京の五四運動'
	},

	ind_chn_warlord_grain_requisition: {
		src: '/images/events/ind_chn_warlord_grain_requisition.jpg',
		alt: '収穫した穀物を兵士が荷車に積むそばで、農民が代わりの紙の手形を受け取る',
		caption: '軍閥の徴糧と紙の手形'
	},

	ind_ind_famine_relief_labor: {
		src: '/images/events/ind_ind_famine_relief_labor.jpg',
		alt: '干ばつの中、配給を受けるために鉄道の盛土で石を割り、籠で運ぶ南インドの労働者',
		caption: '大飢饉の救済工事'
	},

	ind_ind_calcutta_jute_mill: {
		src: '/images/events/ind_ind_calcutta_jute_mill.jpg',
		alt: '窓からの光に黄麻の粉塵が浮かぶ工場で、ベルト駆動の紡績機を扱う労働者',
		caption: 'カルカッタのジュート紡績工場'
	},

	ind_ind_dandi_salt_gathering: {
		src: '/images/events/ind_ind_dandi_salt_gathering.jpg',
		alt: '1930年のボンベイの海辺で、塩を前に集まる手織り綿布姿の非暴力運動の参加者',
		caption: 'ボンベイの塩の不服従運動'
	},

	ind_oth_russian_mir_redemption: {
		src: '/images/events/ind_oth_russian_mir_redemption.jpg',
		alt: '木造家屋で帳面と硬貨を囲み、土地の償納金の負担を話し合うロシアの農民たち',
		caption: '農奴解放と村の償納金'
	},

	ind_oth_congo_rubber_terror: {
		src: '/images/events/ind_oth_congo_rubber_terror.jpg',
		alt: '森林に近い集落で、武装した見張りの前に天然ゴムを持ち寄る人々',
		caption: 'コンゴ自由国のゴム供出'
	},

	ind_oth_trans_siberian_blizzard: {
		src: '/images/events/ind_oth_trans_siberian_blizzard.jpg',
		alt: 'バイカル湖畔の崖沿いで、吹雪のなか長い鉄棒を使ってレールを枕木に据える労働者たち',
		caption: '吹雪のバイカル湖畔で敷く鉄路'
	},

	ind_eur_broad_street_pump: {
		regionIds: ['ind_britain'],
		src: '/images/events/ind_eur_broad_street_pump.jpg',
		alt: '1854年のロンドンで、水差しを手に井戸ポンプへ向かった女性に医師が話しかける',
		caption: 'ブロード・ストリートの井戸ポンプ'
	},

	ind_eur_sweatshop_garment: {
		regionIds: ['ind_britain'],
		src: '/images/events/ind_eur_sweatshop_garment.jpg',
		alt: 'ガス灯がともる狭い地下室で、コートのボタン付けや裾縫いに追われる労働者たち',
		caption: 'ロンドン東部の縫製作業場'
	},

	ind_eur_tenement_consumption: {
		src: '/images/events/ind_eur_tenement_consumption.jpg',
		alt: 'ほとんど光の入らない狭い部屋に並ぶ寝床と、枕元の布や水差し',
		caption: '過密長屋の病床'
	},

	ind_eur_coal_pit_explosion: {
		src: '/images/events/ind_eur_coal_pit_explosion.jpg',
		alt: '薄暗い坑道で、倒れたカナリアの籠と、奥から押し寄せる粉塵を見つめる炭鉱労働者',
		caption: '炭鉱の奥で聞いた爆発'
	},

	ind_ind_malaya_rubber_tapping: {
		regionIds: ['ind_malaya'],
		src: '/images/events/ind_ind_malaya_rubber_tapping.jpg',
		alt: '薄暗いゴム園で、タミル系の労働者が幹に切り込みを入れ、樹液を小さな器に受ける',
		caption: '夜明け前のマレー半島のゴム園'
	},

	ind_oth_mexican_peon_debt: {
		regionIds: ['ind_mexico'],
		src: '/images/events/ind_oth_mexican_peon_debt.jpg',
		alt: 'メキシコの大農園の売店で、トウモロコシ袋を前に係員が帳面へ負債を記すのを見守る農民',
		caption: 'アシエンダの農場売店と借金'
	},

	mod_jpn_minamata_mercury_fish: {
		src: '/images/events/mod_jpn_minamata_mercury_fish.jpg',
		alt: '不知火海沿岸の漁村の家で、魚の皿を前に自分の手を見つめる男性と心配そうな家族',
		caption: '不知火海の魚と水俣病'
	},

	mod_jpn_bubble_land_speculation: {
		src: '/images/events/mod_jpn_bubble_land_speculation.jpg',
		alt: '1980年代末の東京の古い家で、集合住宅の図面を広げる銀行員の話を聞く住人',
		caption: 'バブル期の土地投資の勧誘'
	},

	mod_jpn_great_quake_liquefaction: {
		src: '/images/events/mod_jpn_great_quake_liquefaction.jpg',
		alt: '泥水がにじむひび割れた道路を背に、東北の沿岸集落から高台へ向かう家族',
		caption: '2011年、東北沿岸から高台へ'
	},

	mod_jpn_covid_isolation: {
		src: '/images/events/mod_jpn_covid_isolation.jpg',
		alt: '弁当と水が置かれたホテルの一室で、指先にパルスオキシメーターを付けて座る療養者',
		caption: 'ホテルでの宿泊療養'
	},

	mod_chn_foxconn_assembly_night: {
		src: '/images/events/mod_chn_foxconn_assembly_night.jpg',
		alt: '冷たい照明の下、流れ作業のラインでスマートフォンの小さな基板を扱う工員たち',
		caption: '深圳の電子機器工場の夜勤'
	},

	mod_chn_hukou_registration_barrier: {
		src: '/images/events/mod_chn_hukou_registration_barrier.jpg',
		alt: '上海の窓口で戸籍の冊子と書類を持ち、子どもを連れて入学手続きの説明を聞く親',
		caption: '上海の戸籍と入学手続き'
	},

	mod_chn_pm25_smog_winter: {
		src: '/images/events/mod_chn_pm25_smog_winter.jpg',
		alt: '黄灰色の煙霧で建物やバスの輪郭がかすむ冬の北京で、マスクをしてバスを待つ人',
		caption: '冬の北京を覆うスモッグ'
	},

	mod_chn_zero_covid_lockdown: {
		src: '/images/events/mod_chn_zero_covid_lockdown.jpg',
		alt: '封鎖された上海の団地の柵越しに、防護服の係員から野菜の袋を受け取る住民',
		caption: '上海の団地封鎖と食料の配給'
	},

	mod_asia_manila_smokey_mountain: {
		regionIds: ['mod_philippines'],
		src: '/images/events/mod_asia_manila_smokey_mountain.jpg',
		alt: 'くすぶる処分場で袋を持ち、売却できる容器を拾い集めるマニラの人々',
		caption: 'マニラの廃棄物回収'
	},

	mod_asia_bangkok_flood_sandbag: {
		regionIds: ['mod_thailand'],
		src: '/images/events/mod_asia_bangkok_flood_sandbag.jpg',
		alt: '泥水が工業団地に迫るなか、工場の入口に土嚢を運んで積むタイの労働者たち',
		caption: 'タイ中部の洪水と土嚢'
	},

	mod_asia_palm_oil_slash_burn: {
		regionIds: ['mod_indonesia'],
		src: '/images/events/mod_asia_palm_oil_slash_burn.jpg',
		alt: '黄灰色の煙が集落を覆うなか、学校の窓を閉め、煙の上がる泥炭地を見やる住民',
		caption: 'スマトラの泥炭火災と煙害'
	},

	mod_asia_indian_ocean_tsunami: {
		regionIds: ['mod_indonesia'],
		src: '/images/events/mod_asia_indian_ocean_tsunami.jpg',
		alt: '海が沖へ引き、漁船が浅瀬に取り残されたアチェの海岸から、足早に離れる住民たち',
		caption: '2004年、アチェの海岸から避難'
	},

	mod_afr_desert_locust_swarm: {
		regionIds: ['mod_kenya'],
		src: '/images/events/mod_afr_desert_locust_swarm.jpg',
		alt: 'バッタの群れが飛ぶケニアの畑で、食い荒らされたトウモロコシを手に取る農民',
		caption: '東アフリカのバッタの大群'
	},

	mod_afr_mediterranean_smuggler: {
		regionIds: ['mod_libya'],
		src: '/images/events/mod_afr_mediterranean_smuggler.jpg',
		alt: '暗い海の上で、船外機が止まったゴムボートに身を寄せ、遠くの灯を見つめる人々',
		caption: '夜の地中海で止まったボート'
	},

	mod_afr_ebola_containment: {
		src: '/images/events/mod_afr_ebola_containment.jpg',
		alt: '白い隔離テントの前で、防護服の医療従事者と距離を保って話す家族',
		caption: 'エボラ対策の隔離テント'
	},

	mod_afr_sahel_drought_water: {
		regionIds: ['mod_senegal'],
		src: '/images/events/mod_afr_sahel_drought_water.jpg',
		alt: '乾いた地面に列を作り、黄色い容器を持って給水車の順番を待つサヘルの住民たち',
		caption: 'サヘルの村に来た給水車'
	},

	mod_eur_heatwave_stone_apartment: {
		src: '/images/events/mod_eur_heatwave_stone_apartment.jpg',
		alt: '熱帯夜の石造りの部屋で、窓を開け、手に持った紙で顔をあおぐ住人',
		caption: '熱のこもる石造りの部屋'
	},

	mod_eur_schengen_migrant_crisis: {
		regionIds: ['mod_germany'],
		src: '/images/events/mod_eur_schengen_migrant_crisis.jpg',
		alt: 'ドイツの鉄道駅で、長旅を終えた人にボランティアが水を手渡す',
		caption: '2015年、駅での避難者支援'
	},

	mod_eur_yellow_vests_fuel_tax: {
		src: '/images/events/mod_eur_yellow_vests_fuel_tax.jpg',
		alt: 'フランスの環状交差点で、黄色い安全ベストを着て集まった抗議参加者',
		caption: '燃料税に抗議する黄色いベスト'
	},

	mod_eur_pension_reform_general_strike: {
		src: '/images/events/mod_eur_pension_reform_general_strike.jpg',
		alt: '年金改革をめぐるストライキで閉まった駅の入口に、労働者と通勤客が立つ',
		caption: '年金改革への抗議と運休'
	},

	mod_na_opioid_painkiller_habit: {
		src: '/images/events/mod_na_opioid_painkiller_habit.jpg',
		alt: '作業着の人物が腰に手を当て、食卓に置いた処方薬の容器を見つめる',
		caption: '腰痛と処方鎮痛薬'
	},

	mod_na_california_wildfire_smoke: {
		src: '/images/events/mod_na_california_wildfire_smoke.jpg',
		alt: '煙で空が橙色に染まるカリフォルニアの住宅街で、携帯電話を見ながら車に荷物を積む住民',
		caption: '山火事の煙と避難通知'
	},

	mod_na_subprime_mortgage_foreclosure: {
		src: '/images/events/mod_na_subprime_mortgage_foreclosure.jpg',
		alt: '米国の住宅の玄関先で、荷造りの箱と鍵のそばに座り、届いた通知を読む住人',
		caption: '住宅ローン破綻と立ち退き通知'
	},

	mod_na_hurricane_katrina_levee: {
		src: '/images/events/mod_na_hurricane_katrina_levee.jpg',
		alt: '堤防決壊で通りが水没したニューオーリンズで、玄関先から救助のボートを見つめる住民',
		caption: 'カトリーナ後のニューオーリンズ'
	},

	mod_lat_favela_police_raid: {
		src: '/images/events/mod_lat_favela_police_raid.jpg',
		alt: 'リオデジャネイロの丘の住宅で、窓の外に装甲車が見えるなか、壁際に身を伏せる住民',
		caption: 'ファヴェーラの警察突入'
	},

	mod_lat_hyperinflation_currency: {
		regionIds: ['mod_argentina'],
		src: '/images/events/mod_lat_hyperinflation_currency.jpg',
		alt: 'アルゼンチンの食料品店で、店員が値札を替えるそばで紙幣を数える客',
		caption: '急激なインフレと買い出し'
	},

	mod_lat_military_dictatorship_curfew: {
		regionIds: ['mod_argentina'],
		src: '/images/events/mod_lat_military_dictatorship_curfew.jpg',
		alt: '夜のアルゼンチンの街で、カーテン越しに街灯の下の無標識の車を見つめる住人',
		caption: '軍事政権下の夜間外出禁止令'
	},

	mod_lat_mexico_cartel_checkpoint: {
		src: '/images/events/mod_lat_mexico_cartel_checkpoint.jpg',
		alt: '停車した長距離バスの乗客が、窓越しに車の前照灯と検問所の人影を見つめる',
		caption: '夜の高速道路の私設検問'
	},

	mod_rus_chernobyl_fallout: {
		src: '/images/events/mod_rus_chernobyl_fallout.jpg',
		alt: '平穏に見える集合住宅の庭で、携帯型の放射線測定器を確認する作業員と住民',
		caption: 'チェルノブイリ事故後の測定'
	},

	mod_rus_ussr_collapse_voucher: {
		src: '/images/events/mod_rus_ussr_collapse_voucher.jpg',
		alt: 'ソ連崩壊後のロシアの市場で、パンを前に民営化バウチャーを手にする人',
		caption: '民営化バウチャーと日々のパン'
	},

	mod_rus_chechen_war_draft: {
		src: '/images/events/mod_rus_chechen_war_draft.jpg',
		alt: '冬の出発場所で、荷物を持った若い徴兵兵士が心配そうな母親を振り返る',
		caption: 'チェチェン紛争へ送られる徴兵兵士'
	},

	mod_rus_siberian_blizzard_district_heating: {
		src: '/images/events/mod_rus_siberian_blizzard_district_heating.jpg',
		alt: '窓が凍りついたシベリアの集合住宅で、防寒着を着たまま暖房器に手を当てる住人',
		caption: '暖房が止まったシベリアの団地'
	},

	mod_rus_90s_gangster_extortion: {
		src: '/images/events/mod_rus_90s_gangster_extortion.jpg',
		alt: '自動車修理工場で、作業着の店主と向かい合い、金銭を要求する革ジャン姿の男たち',
		caption: '修理工場に来たみかじめ料の要求'
	},

	modern_green_antibiotics: {
		src: '/images/events/modern_green_antibiotics.jpg',
		alt: '戦後の診療所の机に並ぶ薬瓶と小瓶。窓の外には新しい建物が立つ',
		caption: '戦後の診療所と新しい薬'
	},

	modern_digital_wave: {
		src: '/images/events/modern_digital_wave.jpg',
		alt: '夜の窓辺で、使い込んだ手帳のそばに置かれた手がスマートフォンを持つ',
		caption: '手のひらから世界へ'
	},

	modern_structural_trap: {
		src: '/images/events/modern_structural_trap.jpg',
		alt: '食卓に請求書と電卓、わずかな硬貨の入った瓶が並び、手が書類の上で止まっている',
		caption: '重なる生活費と家計'
	},

	fever_premodern: {
		src: '/images/events/fever_premodern.jpg',
		alt: '薄暗い枕元に、水を入れた素焼きの器と畳まれた布が置かれている',
		caption: '熱が続く夜の枕元'
	},

	minor_scratch_tetanus: {
		src: '/images/events/minor_scratch_tetanus.jpg',
		alt: '粗い木の板の上に、指先に布を巻いた手と小さな木片がある',
		caption: '小さな棘と指の傷'
	},

	rotten_tooth_infection: {
		src: '/images/events/rotten_tooth_infection.jpg',
		alt: '水の入った素焼きの器のそばで、顎を手で押さえる人',
		caption: '奥歯の痛みと手つかずの水'
	},

	spoiled_grain_ergot: {
		src: '/images/events/spoiled_grain_ergot.jpg',
		alt: '粗い布の上に置かれた麦の穂に、粒の代わりに黒紫色の細長い塊が混じっている',
		caption: '長雨のあとに残った穀物'
	},

	mercury_lead_remedy: {
		src: '/images/events/mercury_lead_remedy.jpg',
		alt: '薄暗い場所に置かれた素焼きの皿に、灰色と赤色の丸薬が並ぶ',
		caption: '万能薬と称された丸薬'
	},

	urban_filth_fire: {
		src: '/images/events/urban_filth_fire.jpg',
		alt: '狭い路地に水甕が残され、奥から火の光と煙が迫る',
		caption: '密集した住居に広がる火'
	},

	modern_youth_path: {
		src: '/images/events/modern_youth_path.jpg',
		alt: '朝の光が差す机に、開いたノートと鉛筆、使い込まれた作業用の手袋が並ぶ',
		caption: '学びと仕事のあいだ'
	},

	child_labor: {
		src: '/images/events/child_labor.jpg',
		alt: '粗い机に、数枚の硬貨と小さな石板、布に包まれた昼食が置かれている',
		caption: 'わずかな賃金と通えない学校'
	},

	vaccine_modern: {
		src: '/images/events/vaccine_modern.jpg',
		alt: '診療所の机に、折り畳まれた案内状とトレーに載った小瓶が置かれている',
		caption: '新しいワクチンの案内'
	},

	near_future_heat_crisis: {
		src: '/images/events/near_future_heat_crisis.jpg',
		alt: '強い日差しが照りつける通りを背に、日陰の避難所で水差しのそばに座る人々',
		caption: '架空の近未来：猛暑の避難所'
	},

	near_future_caldera_eruption: {
		src: '/images/events/near_future_caldera_eruption.jpg',
		alt: '灰色の空の下、曇った温室で、霜に傷んだ作物と残った苗を調べる人々',
		caption: '架空の近未来：火山の冬の温室'
	},

	near_future_solar_superflare: {
		src: '/images/events/near_future_solar_superflare.jpg',
		alt: '街の明かりが消えた窓辺で、ランタンのそばに電源の入らない携帯電話とラジオが置かれている',
		caption: '架空の近未来：都市の大停電'
	},

	near_future_ocean_rise: {
		src: '/images/events/near_future_ocean_rise.jpg',
		alt: '水が建物の低層階に達した沿岸都市を背に、荷物を抱えて高台の道を進む人々',
		caption: '架空の近未来：水没した沿岸都市'
	},

	near_future_asteroid_nearmiss: {
		src: '/images/events/near_future_asteroid_nearmiss.jpg',
		alt: '灰色の外光を背に、荷物を持って照明のともる地下通路へ階段を下りる人々',
		caption: '架空の近未来：地下避難区画へ'
	},

	near_future_water_monopoly: {
		src: '/images/events/near_future_water_monopoly.jpg',
		alt: '赤い表示灯のついた蛇口の下に、空のコップが置かれている',
		caption: '架空の近未来：止められた水道'
	},

	near_future_algorithmic_layoff: {
		src: '/images/events/near_future_algorithmic_layoff.jpg',
		alt: '赤い表示灯のついた入館ゲートの前で、携帯電話を見つめる仕事用バッグ姿の人',
		caption: '架空の近未来：AIの解雇通知'
	},

	near_future_synthetic_meat_sickness: {
		src: '/images/events/near_future_synthetic_meat_sickness.jpg',
		alt: 'ペースト状の配給食が残る食卓で、喉に手を当てた人を隣の人が心配して見ている',
		caption: '架空の近未来：配給食の異変'
	}
};

export function getEventImage(eventId: string, regionId: RegionId): EventImageInfo | undefined {
	const image = EVENT_IMAGES[eventId];
	return image && (!image.regionIds || image.regionIds.includes(regionId)) ? image : undefined;
}
