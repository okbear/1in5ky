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
	}
};

export function getEventImage(eventId: string, regionId: RegionId): EventImageInfo | undefined {
	const image = EVENT_IMAGES[eventId];
	return image && (!image.regionIds || image.regionIds.includes(regionId)) ? image : undefined;
}
