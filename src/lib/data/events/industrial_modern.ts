import type { DecisionEvent } from '../../types';

/** 近代・現代の歴史的大波・戦争・公害・構造的格差イベント */
export const INDUSTRIAL_MODERN_EVENTS: DecisionEvent[] = [
	{
		id: 'cholera_1850',
		title: '井戸の水を飲んだ者が死ぬ',
		category: 'historical_wave',
		regionIds: ['ind_europe_us', 'ind_japan', 'ind_china', 'ind_india'],
		yearRange: [1831, 1866],
		minAge: 10,
		maxAge: 99,
		isHistoricalWave: true,
		historicalYearLabel: '19世紀中頃',
		description: '同じ通りの井戸を使う家で、次々と激しい下痢で人が死んでいる。医者は「悪い空気のせい」だと言う。',
		factBox: '1854年ロンドン、ジョン・スノウは汚染された井戸のポンプの把手を外させ、水が感染源だと示した。',
		choices: [
			{
				id: 'boil',
				label: '水を沸かしてから飲む',
				subLabel: '理由は分からないが、年寄りの知恵',
				survivalChance: 0.85,
				deathCause: 'コレラ',
				effects: { knowledge: 3 },
				outcomeText: '燃料代はかさんだが、家族は誰も倒れなかった。',
				deathText: 'コレラにより、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'miasma',
				label: '悪臭を避けて窓を閉ざす',
				subLabel: '当時の医師の勧めに従う',
				survivalChance: 0.5,
				deathCause: 'コレラ',
				effects: { health: -5 },
				outcomeText: '悪い空気を避けたが、同じ井戸の水を飲み続けた。',
				deathText: 'コレラにより、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'ww1_1914',
		title: '召集令状が届いた',
		category: 'historical_wave',
		regionIds: ['ind_europe_us', 'ind_other'],
		sex: 'M',
		yearRange: [1914, 1918],
		minAge: 18,
		maxAge: 42,
		isHistoricalWave: true,
		historicalYearLabel: '1914年',
		description: '「クリスマスまでには帰れる」と誰もが言った。塹壕は、冬になっても終わらなかった。',
		factBox: '第一次世界大戦の軍人の死者は約900万人、民間人を含めれば約2,000万人とされる。',
		choices: [
			{
				id: 'enlist',
				label: '志願して前線へ行く',
				subLabel: '友人たちと一緒に',
				survivalChance: 0.6,
				deathCause: '第一次世界大戦での戦死',
				effects: { happiness: -15, health: -15 },
				outcomeText: '泥と鉄条網の中で、数年を過ごした。',
				deathText: '第一次世界大戦での戦死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'factory',
				label: '軍需工場で働く',
				subLabel: '銃後を支える',
				survivalChance: 0.9,
				deathCause: '工場事故・スペイン風邪',
				effects: { wealthDelta: 20, health: -5 },
				outcomeText: '賃金は上がったが、工場の空気は重かった。',
				deathText: '工場事故・スペイン風邪により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'flu_1918',
		title: '若者ばかりが倒れる熱病',
		category: 'historical_wave',
		regionIds: ['ind_europe_us', 'ind_japan', 'ind_china', 'ind_india', 'ind_other'],
		yearRange: [1918, 1920],
		minAge: 10,
		maxAge: 99,
		isHistoricalWave: true,
		historicalYearLabel: '1918年',
		description: '突然の高熱と咳。健康な若者が数日で亡くなる。「スペイン風邪」と呼ばれているが、発生源は誰にも分からない。',
		factBox: '1918〜1920年のインフルエンザ・パンデミックによる死者は世界で5,000万人前後と推計される。',
		choices: [
			{
				id: 'mask',
				label: 'マスクをして人混みを避ける',
				subLabel: '外出を控え、看病は家族だけで',
				survivalChance: 0.8,
				deathCause: 'スペイン風邪',
				effects: { relations: -5 },
				outcomeText: '息苦しい数か月だったが、家族は全員生き延びた。',
				deathText: 'スペイン風邪により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'carry_on',
				label: '普段どおりに働き続ける',
				subLabel: '休めば食い扶持を失う',
				survivalChance: 0.6,
				deathCause: 'スペイン風邪',
				effects: { health: -10 },
				outcomeText: '仕事は休めなかった。',
				deathText: 'スペイン風邪により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'industrial_total_war_air_raid',
		title: '空襲警報のサイレンと、燃える夜の街',
		category: 'historical_wave',
		eraIds: ['industrial'],
		yearRange: [1937, 1945],
		minAge: 8,
		maxAge: 90,
		isHistoricalWave: true,
		historicalYearLabel: '第二次世界大戦期',
		description:
			'戦争は前線だけでなく街や村の頭上にもやってきた。食料はわずかな配給だけになり、夜になるとサイレンが鳴り響いて空から焼夷弾と爆弾が降ってくる。',
		factBox: '第二次世界大戦は前線と銃後の区別が消えた「総力戦」となり、空襲・包囲戦・飢餓などにより軍人以上の民間人（推計4,000万〜5,000万人）が命を落とした。',
		choices: [
			{
				id: 'evacuate_countryside',
				label: '家財を置いて農村・山間へ疎開する',
				subLabel: '命は守りやすいが、よそ者として飢えに苦しむ',
				survivalChance: 0.88,
				deathCause: '戦時下の栄養失調・疫病',
				effects: { wealthDelta: -40, happiness: -12, health: -8 },
				outcomeText: '見知らぬ土地で雑草や芋の蔓まで食べて飢えをしのぎ、なんとか終戦の日まで生き延びた。',
				deathText: '戦時下の栄養失調・疫病により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'stay_shelter',
				label: '防空壕とバケツリレーで自分の家と街を守る',
				subLabel: '直撃や火災旋風に巻かれる危険がある',
				survivalChance: 0.62,
				deathCause: '空襲・戦火による焼死',
				effects: { health: -15, happiness: -15, wealthDelta: -30 },
				outcomeText: '夜空が真っ赤に染まるなか、熱風と煙に追われて必死に逃げ惑った。',
				deathText: '空襲・戦火による焼死により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'industrial_conscription_order',
		title: '徴兵検査「甲種合格」と赤紙の召集',
		category: 'livelihood',
		eraIds: ['industrial'],
		sex: 'M',
		minAge: 19,
		maxAge: 38,
		description:
			'近代国家の国民皆兵制のもと、満20歳での徴兵検査で合格となり、軍隊への入営（または戦地への召集令状）が命じられた。家の働き手を失う家族は泣きながらも、表向きは「名誉なことだ」と送り出すしかない。',
		factBox: '19世紀〜20世紀前半、国民国家は戸籍と鉄道網によってあらゆる階層から若者を徴兵できるようになり、機関銃と重砲の近代戦へ数千万人が動員された。',
		choices: [
			{
				id: 'serve_frontline',
				label: '命令に従い、銃を執って前線へ赴く',
				subLabel: '砲弾と機関銃、そして陣中の脚気・感染症との戦い',
				survivalChance: 0.65,
				deathCause: '近代戦での戦死・戦病死',
				effects: { health: -16, happiness: -12, relations: 5 },
				outcomeText: '泥まみれの塹壕と行軍を生き抜き、除隊して故郷の駅へ降り立った。',
				deathText: '近代戦での戦死・戦病死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'seek_logistics_role',
				label: '読み書きや手先の技術を活かし、通信・輜重（補給）・工廠勤務を志願する',
				subLabel: '最前線の突撃は免れるが、輸送船の撃沈や空襲リスクはある',
				survivalChance: 0.84,
				deathCause: '輸送途上の攻撃・戦病死',
				effects: { knowledge: 6, health: -8, happiness: -8 },
				outcomeText: '後方での補給と通信任務に従事し、生きて家族のもとへ帰還した。',
				deathText: '輸送途上の攻撃・戦病死により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'industrial_phossy_pollution',
		title: '工場の白リン蒸気と石炭の黒い痰',
		category: 'livelihood',
		eraIds: ['industrial'],
		classIds: ['peasant', 'artisan'],
		minAge: 14,
		maxAge: 60,
		description:
			'1日14時間働く工場では、換気のない部屋にマッチの白リン蒸気や石炭・綿花の粉塵が立ち込めている。隣の作業台の仲間は顎の骨が腐り始め、黒い痰を吐いて倒れた。労災補償など一銭もない。',
		factBox: '19世紀の産業革命期、黄リンマッチ工場での「リン顎症（顎骨壊死）」や炭鉱・紡績工場の塵肺・結核が多発したが、規制されるまで何十年も放置された。',
		choices: [
			{
				id: 'keep_factory_job',
				label: '家族を養うため、毒の空気を吸いながら働き続ける',
				subLabel: '賃金はいいが、体が確実に蝕まれる',
				survivalChance: 0.72,
				deathCause: '塵肺・リン中毒・工場労災',
				effects: { wealthDelta: 20, health: -20, happiness: -8 },
				outcomeText: '日々の賃金と引き換えに、激しい咳と歯の痛みを抱えながら機械の前に立ち続けた。',
				deathText: '塵肺・リン中毒・工場労災により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'quit_for_street',
				label: '体を壊す前に工場を辞め、賃金の安い荷運び・雑役に変える',
				subLabel: '収入は大きく下がる',
				survivalChance: 0.92,
				deathCause: 'スラムでの栄養失調',
				effects: { wealthDelta: -25, health: 5, occupationChange: '荷運び・日雇い' },
				outcomeText: '暮らしはさらに貧しくなったが、毒の煙から逃れて深く息ができるようになった。',
				deathText: 'スラムでの栄養失調により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'modern_cold_war_conflict',
		title: '国境紛争・内戦の勃発と動員令',
		category: 'livelihood',
		eraIds: ['modern'],
		regionIds: ['mod_asia', 'mod_africa_me'],
		minAge: 16,
		maxAge: 55,
		description:
			'独立後の国境問題や冷戦下の代理戦争・内戦が激化し、近くの町まで砲声が響いてきた。軍や武装勢力が若者を徴兵し始め、幹線道路は荷物を抱えた避難民で溢れている。',
		factBox: '第二次世界大戦後もアジア・中東・アフリカなどでは局地紛争や内戦が絶えず、今日でも世界で1億1,000万人以上が紛争や迫害により故郷を追われている（UNHCR）。',
		choices: [
			{
				id: 'flee_as_refugee',
				label: '徴兵と戦火を逃れ、家族を連れて隣国・大都市へ避難する',
				subLabel: '財産や職は失うが、戦場になる前に離れる',
				survivalChance: 0.9,
				deathCause: '避難途上での襲撃・感染症',
				effects: { wealthDelta: -45, happiness: -12, relations: -8, locationChange: 'urban' },
				outcomeText: '検問所をいくつも越えて安全な地域へたどり着き、ゼロから暮らしを立て直した。',
				deathText: '避難途上での襲撃・感染症により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'stay_or_drafted',
				label: '家と土地を手放せずにとどまり、防衛・徴兵に応じる',
				subLabel: '故郷は守れるかもしれないが、戦闘と地雷の危険が迫る',
				survivalChance: 0.72,
				deathCause: '内戦・局地紛争での戦死・砲撃',
				effects: { health: -18, happiness: -15, wealthDelta: -20 },
				outcomeText: '停戦合意が結ばれるまで、銃声と停電が続く街で生き延びた。',
				deathText: '内戦・局地紛争での戦死・砲撃により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'modern_green_antibiotics',
		title: '抗生物質と戦後の急激な変化',
		category: 'historical_wave',
		eraIds: ['modern'],
		yearRange: [1945, 1989],
		minAge: 14,
		maxAge: 65,
		isHistoricalWave: true,
		description:
			'これまでなら数日で命を奪っていた感染症が、白い錠剤や注射で治るようになった。農村から大都市へ人が押し寄せ、暮らしの風景が塗り替わっていく。',
		factBox: '1945年以降、抗生物質・ワクチン・緑の革命により、世界の平均寿命はわずか数十年で約45歳から70歳超へと跳ね上がった。',
		choices: [
			{
				id: 'move_city_mod',
				label: '都市へ出て工場やオフィスで働く',
				subLabel: '故郷を離れ、現金収入を得る',
				effects: { wealthDelta: 35, knowledge: 10, relations: -8, occupationChange: '都市の労働者・会社員', locationChange: 'urban' },
				outcomeText: 'コンクリートの街で新しい暮らしが始まった。親の世代とはまったく違う景色の中で歳を重ねていく。'
			},
			{
				id: 'stay_local_mod',
				label: '地元の共同体にとどまり暮らしを守る',
				subLabel: '家族や隣人とのつながりを優先する',
				effects: { relations: 12, happiness: 8, health: 5 },
				outcomeText: '変わっていく時代の中でも、見慣れた土地と家族のそばで穏やかに暮らした。'
			}
		]
	},
	{
		id: 'modern_digital_wave',
		title: 'インターネットと世界をつなぐ画面',
		category: 'historical_wave',
		eraIds: ['modern'],
		yearRange: [1995, 2026],
		minAge: 14,
		maxAge: 75,
		isHistoricalWave: true,
		description:
			'手のひらの画面から世界中の情報や仕事につながる時代がやってきた。便利な一方で、変化の速さに取り残される不安も広がっている。',
		factBox: '1990年代以降のインターネットとスマートフォンの普及は、人類史上かつてない速度で情報と労働のあり方を変えた。',
		choices: [
			{
				id: 'embrace_digital',
				label: '新しい技術や道具を積極的に使う',
				subLabel: '変化の波に乗る',
				effects: { knowledge: 12, wealthDelta: 20, happiness: 3 },
				outcomeText: '遠く離れた場所とも瞬時につながるようになり、仕事の幅が広がった。'
			},
			{
				id: 'keep_pace_digital',
				label: '身近な人との対面での暮らしを大切にする',
				subLabel: '無理に背伸びをしない',
				effects: { relations: 10, happiness: 6 },
				outcomeText: '画面の向こうの喧騒と距離を置き、目の前の生活を守った。'
			}
		]
	},
	{
		id: 'modern_structural_trap',
		title: '物価の高騰と突然の医療費・教育費の壁',
		category: 'livelihood',
		eraIds: ['modern'],
		classIds: ['peasant', 'artisan'],
		minAge: 22,
		maxAge: 65,
		description:
			'真面目に働いて少しずつ蓄えてきたが、急激な物価上昇と家族の医療・教育費が重なり、貯金が底をついた。親からの資産がない世帯では、一度の出費が生活を直撃する。',
		factBox: '現代でも世界人口の約半数は1日6.85ドル未満で暮らしており、また年間約1億人が医療費の自己負担によって極度の貧困に陥っている（世界銀行・WHO）。',
		choices: [
			{
				id: 'overwork_double',
				label: '睡眠時間を削って仕事を掛け持ちし、不足分を稼ぐ',
				subLabel: 'お金は回るが、心身をすり減らす',
				survivalChance: 0.94,
				deathCause: '過労による脳・心疾患',
				effects: { wealthDelta: 15, health: -14, happiness: -10, relations: -5 },
				outcomeText: '朝から深夜まで働き詰めの日々で危機はしのいだが、慢性的な疲労が残った。',
				deathText: '過労による脳・心疾患により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'cut_living_costs',
				label: '住居や生活水準を切り詰め、借金をせずに耐える',
				subLabel: '暮らしは狭く厳しくなる',
				effects: { wealthDelta: -20, happiness: -8, relations: 4 },
				outcomeText: '狭い部屋へ移り、出費を徹底的に削ってなんとか嵐をやり過ごした。'
			}
		]
	},
	// -------------------------------------------------------------------------
	// 近未来・天変地異・エキストリーム破局（2028年〜2120年代）
	// -------------------------------------------------------------------------
	{
		id: 'near_future_heat_crisis',
		title: '50℃超えの極端猛暑と世界的大渇水',
		isHistoricalWave: true,
		yearRange: [2030, 2038],
		historicalYearLabel: '2030年代',
		minAge: 0,
		maxAge: 110,
		category: 'historical_wave',
		eraIds: ['modern'],
		description:
			'地球沸騰化が限界を突破。夏には湿球温度35度（人体が放熱できない致死ライン）を超える猛暑が数週間続き、都市インフラが機能不全に陥った。冷房のない場所は文字通りのオーブンと化している。',
		factBox: '気候モデルの予測では、湿球温度35℃を超えると健康な人間でも数時間で熱中症により死に至る。南アジアや中東、東アジアの平野部が危険水域に突入した。',
		choices: [
			{
				id: 'stay_indoor_shelter',
				label: '電気代を顧みず密閉シェルターや地下鉄駅へ避難する',
				subLabel: '蓄えは吹き飛ぶが、熱波をやり過ごす',
				survivalChance: 0.92,
				deathCause: '致死性熱中症（湿球温度破局）',
				effects: { wealthDelta: -30, health: -5, happiness: -8 },
				outcomeText: '電気代と水代の高騰で蓄えは激減したが、命だけは守り抜いた。',
				deathText: '致死性熱中症（湿球温度破局）により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'outdoor_water_ration',
				label: '給水車の列に並び、わずかな配給水で冷やす',
				subLabel: 'お金はかからないが、外気に晒される危険',
				survivalChance: 0.72,
				deathCause: '炎天下での脱水・熱射病',
				effects: { health: -20, happiness: -15, relations: 6 },
				outcomeText: '路面から立ち上る熱風のなか倒れる人々を見ながら、這うようにして生き延びた。',
				deathText: '炎天下での脱水・熱射病により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'near_future_caldera_eruption',
		title: '巨大破局噴火と「数年間の火山の冬」',
		isHistoricalWave: true,
		yearRange: [2040, 2048],
		historicalYearLabel: '2040年代',
		minAge: 0,
		maxAge: 110,
		category: 'historical_wave',
		eraIds: ['modern'],
		description:
			'環太平洋火山帯のカルデラ火山が超巨大破局噴火（VEI-7）。大気圏上層に巻き上げられた数千億トンの火山灰と二酸化硫黄が太陽光を遮断し、地球全体の気温が数年間で8℃低下。夏が消失し、世界的飢餓が始まった。',
		factBox: '歴史上、1815年のタンボラ山噴火は「夏のない年」を引き起こした。破局噴火（VEI-7〜8）が現代の人口80億人体制で発生した場合、地球規模の食糧生産崩壊が予測されている。',
		choices: [
			{
				id: 'hoard_greenhouse_food',
				label: '人工光型水耕栽培の合成備蓄食料を高値で買い占める',
				subLabel: '全財産を投じて生き延びる',
				survivalChance: 0.88,
				deathCause: '火山の冬による飢餓と灰吸入',
				effects: { wealthDelta: -60, health: -10, happiness: -12 },
				outcomeText: '灰色の空の下、味気ない合成ペーストをすすりながら暗黒の数年を耐え抜いた。',
				deathText: '火山の冬による飢餓と灰吸入により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'community_survival_cell',
				label: '地域の自給自足コミュニティで温室を共同防衛する',
				subLabel: '連帯するが、略奪者や暴動との衝突リスク',
				survivalChance: 0.74,
				deathCause: '食糧暴動・略奪戦での負傷死',
				effects: { relations: 16, health: -15, happiness: -5 },
				outcomeText: '寒冷地獄のなか仲間と肩を寄せ合い、暴徒の襲撃を退けて春を待った。',
				deathText: '食糧暴動・略奪戦での負傷死により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'near_future_solar_superflare',
		title: '超巨大太陽フレアによる地球全土ブラックアウト',
		isHistoricalWave: true,
		yearRange: [2052, 2060],
		historicalYearLabel: '2050年代',
		minAge: 0,
		maxAge: 110,
		category: 'historical_wave',
		eraIds: ['modern'],
		description:
			'観測史上最大級のキャリントン・イベントを遥かに上回る超巨大太陽フレアが地球を直撃。全人工衛星が焼損し、世界中の高圧変電所が爆発炎上。インターネット、銀行、送電網、水道ポンプが同時に完全停止した。',
		factBox: '巨大磁気嵐が直撃すると、地上変電所の大型変圧器が溶損し、復旧には数年から数十年かかると試算される。人類は数日で19世紀以前の生活を強いられる。',
		choices: [
			{
				id: 'analog_rural_escape',
				label: '電気が途絶えた都市を捨て、井戸と薪のある農村へ脱出する',
				subLabel: '文明を捨て、前近代の知恵で生きる',
				survivalChance: 0.82,
				deathCause: '都市大火災と避難路での衰弱死',
				effects: { wealthDelta: -40, relations: 8, knowledge: -5 },
				outcomeText: '車も電車も動かない街道を歩き、かつての祖先と同じ農の暮らしへ戻っていった。',
				deathText: '都市大火災と避難路での衰弱死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'urban_battery_fortress',
				label: '非常用蓄電池と自家発電機を囲んで都市にとどまる',
				subLabel: '都市機能の再起動を待つが、資源争奪戦の標的',
				survivalChance: 0.68,
				deathCause: '電力と医薬品枯渇による病死',
				effects: { wealthDelta: -20, health: -18, happiness: -15 },
				outcomeText: '闇に包まれた高層都市でわずかな電力を守り、文明の灯を消さずに生き延びた。',
				deathText: '電力と医薬品枯渇による病死により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'near_future_ocean_rise',
		title: '巨大氷床崩落と沿岸メガシティ水没',
		isHistoricalWave: true,
		yearRange: [2068, 2078],
		historicalYearLabel: '2070年代',
		minAge: 0,
		maxAge: 110,
		category: 'historical_wave',
		eraIds: ['modern'],
		description:
			'南極スウェイツ氷河の急激な崩壊により、数十年で海水面が急上昇。東京、上海、ニューヨーク、ムンバイなどの沿岸大都市が堤防決壊とともに恒久的に水没した。数億人の気候難民が内陸高台へ押し寄せる。',
		factBox: '「終末の氷河」と呼ばれる南極スウェイツ氷河が崩壊すると、連鎖的に海水面が数メートル上昇し、世界の主要都市の多くが居住不能になると予測されている。',
		choices: [
			{
				id: 'inland_highland_pioneer',
				label: '水没前に全資産を高台・内陸の内地へ移転して開拓する',
				subLabel: '故郷は沈むが、安全な地盤を確保する',
				survivalChance: 0.89,
				deathCause: '大氾濫・高潮での水死',
				effects: { wealthDelta: -35, relations: -5, happiness: -8 },
				outcomeText: '水没したかつての繁華街の屋根を船から見下ろしながら、内陸の丘で新しい町を築いた。',
				deathText: '大氾濫・高潮での水死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'amphibious_floating_city',
				label: '水没都市の上に浮かぶメガフロート海上コロニーに移住する',
				subLabel: '海上で生きるが、巨大台風直撃のリスク',
				survivalChance: 0.76,
				deathCause: 'スーパー台風によるメガフロート難破',
				effects: { wealthDelta: 10, health: -10, happiness: 5 },
				outcomeText: '海の上に浮く新しい都市で波に揺られながら、海民としての生活に順応した。',
				deathText: 'スーパー台風によるメガフロート難破により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'near_future_asteroid_nearmiss',
		title: '小惑星衝突危機と地下都市移住令',
		isHistoricalWave: true,
		yearRange: [2090, 2105],
		historicalYearLabel: '2090年代',
		minAge: 0,
		maxAge: 110,
		category: 'historical_wave',
		eraIds: ['modern'],
		description:
			'直径500m級の地球接近小惑星が太平洋に墜落。大津波と衝撃波、地殻変動が全地球を揺るがした。地上は有毒ガスと粉塵で覆われ、人類は地下シェルター網での生活を余儀なくされた。',
		factBox: '数百メートル級の小惑星衝突は大陸規模の壊滅と数年間の寒冷化をもたらす。現代では宇宙望遠鏡と迎撃衛星による軌道偏向が研究されている。',
		choices: [
			{
				id: 'enter_deep_bunker',
				label: '地下数千メートルの岩盤シェルターへ移住し配給生活を送る',
				subLabel: '青空を二度と見られないが、衝撃波から免れる',
				survivalChance: 0.85,
				deathCause: '衝撃波・津波によるシェルター圧壊',
				effects: { health: -15, happiness: -20, relations: 5 },
				outcomeText: '地響きと停電に震えながら地下深くで生き延び、地上の再生を待ち続けた。',
				deathText: '衝撃波・津波によるシェルター圧壊により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'surface_dome_defender',
				label: '地上の耐震ドームに残って空気ろ過施設を保守管理する',
				subLabel: '技術者として地上の拠点を守るが、大気汚染リスク',
				survivalChance: 0.70,
				deathCause: '有毒粉塵吸入と放射線被曝',
				effects: { knowledge: 15, wealthDelta: 20, health: -22 },
				outcomeText: '防護服を脱げない灰色の地上で、人類の観測機器を守り抜いた。',
				deathText: '有毒粉塵吸入と放射線被曝により、手当も間に合わぬまま力尽きた。'
			}
		]
	}
];
