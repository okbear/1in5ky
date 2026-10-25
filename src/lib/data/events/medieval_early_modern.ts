import type { DecisionEvent } from '../../types';

/** 中世・近世の歴史的大波・戦争・悪税・理不尽社会制度イベント */
export const MEDIEVAL_EARLY_MODERN_EVENTS: DecisionEvent[] = [
	{
		id: 'medieval_feudal_war_famine',
		title: '戦乱と長雨による凶作',
		category: 'historical_wave',
		eraIds: ['medieval'],
		minAge: 14,
		maxAge: 60,
		isHistoricalWave: true,
		description:
			'領主や隣国との戦が長引き、兵が畑を踏み荒らしていった。そこへ冷たい長雨が重なり、麦も稲も立ち枯れている。',
		factBox: '中世には局地的な戦乱と天候不順による飢饉が頻発し、蓄えのない農民は数年おきに生存の危機にさらされた。',
		choices: [
			{
				id: 'seek_monastery',
				label: '修道院・寺院の施粥に頼る',
				subLabel: '祈りと引き換えにわずかな食料を得る',
				survivalChance: 0.82,
				deathCause: '飢饉と流行り病',
				effects: { wealthDelta: -20, happiness: -5, relations: 5 },
				outcomeText: '境内に並ぶ長い列に混じり、薄い粥で飢えをしのいだ。',
				deathText: '飢饉と流行り病により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'forage_woods',
				label: '禁猟の森や山に入って食料を探す',
				subLabel: '領主の役人に見つかれば処罰される',
				survivalChance: 0.75,
				deathCause: '飢饉・密猟の処罰',
				effects: { health: -8, happiness: -8 },
				outcomeText: '木の実や根を掘って冬を越した。隣家の者は森番に捕らえられ、戻ってこなかった。',
				deathText: '飢饉・密猟の処罰により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'plague_1347',
		title: '港に黒い船がついた',
		category: 'historical_wave',
		regionIds: ['med_europe', 'med_islam'],
		yearRange: [1347, 1351],
		minAge: 10,
		maxAge: 99,
		isHistoricalWave: true,
		historicalYearLabel: '1347年',
		description:
			'ジェノヴァの船が病人と死人を乗せて入港した。腋の下に黒い腫れ物ができ、数日で人が死ぬという噂が町に広がっている。',
		factBox: '黒死病（ペスト）は1347〜1351年にヨーロッパ人口の約3分の1〜半数を奪ったと推計される。',
		choices: [
			{
				id: 'flee',
				label: '村を捨てて逃げる',
				subLabel: '山あいの親戚を頼る',
				survivalChance: 0.55,
				deathCause: '黒死病（ペスト）',
				effects: { happiness: -10, relations: -10, wealthDelta: -40 },
				outcomeText: '荷車に家財を積んで町を出た。逃げた先でも病は追ってきたが、人の少ない山では広がりが遅かった。',
				deathText: '黒死病（ペスト）により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'pray',
				label: '教会で祈り続ける',
				subLabel: '神の裁きに身を委ねる',
				survivalChance: 0.35,
				deathCause: '黒死病（ペスト）',
				effects: { happiness: 5, relations: 5 },
				outcomeText: '人々は聖堂に集まって夜通し祈った。祈りの場は、病が最も効率よく広がる場所でもあった。',
				deathText: '黒死病（ペスト）により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'stay_home',
				label: '家に閉じこもる',
				subLabel: '戸口を閉ざし、誰とも会わない',
				survivalChance: 0.5,
				deathCause: '黒死病（ペスト）',
				effects: { happiness: -15, relations: -15 },
				outcomeText: 'ネズミとノミが家の中までついてくることは、誰も知らなかった。',
				deathText: '黒死病（ペスト）により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'mongol_1220',
		title: '地平線に騎馬隊が現れた',
		category: 'historical_wave',
		regionIds: ['med_islam', 'med_china', 'med_europe'],
		yearRange: [1219, 1260],
		minAge: 10,
		maxAge: 99,
		isHistoricalWave: true,
		historicalYearLabel: '13世紀前半',
		description: '砂塵の向こうに、数えきれない騎馬隊。降伏した町は税を納め、抵抗した町は消えたという。',
		factBox: 'モンゴル帝国の征服戦争による死者は数百万〜数千万と推計されるが、降伏した都市は多く助かった。',
		choices: [
			{
				id: 'surrender',
				label: '城門を開いて降伏する',
				subLabel: '財産と自由を差し出す',
				survivalChance: 0.8,
				deathCause: 'モンゴル軍の侵攻',
				effects: { wealthDelta: -60, happiness: -15 },
				outcomeText: '貢納と引き換えに町は焼かれずに済んだ。支配者の名前だけが変わった。',
				deathText: 'モンゴル軍の侵攻により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'resist',
				label: '城壁に立てこもって戦う',
				subLabel: '子どもたちを守るために',
				survivalChance: 0.15,
				deathCause: 'モンゴル軍の侵攻',
				effects: { happiness: -5 },
				outcomeText: '包囲は数週間続いた。',
				deathText: 'モンゴル軍の侵攻により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'flee_west',
				label: '家族を連れて西へ逃げる',
				subLabel: '見知らぬ土地へ',
				survivalChance: 0.55,
				deathCause: '逃避行での飢えと病',
				effects: { wealthDelta: -80, relations: -10 },
				outcomeText: '着の身着のまま、季節をいくつも越えて逃げた。',
				deathText: '逃避行での飢えと病により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'medieval_ashigaru_levy',
		title: '戦乱の「陣夫・雑兵狩り」と刈田狼藉',
		category: 'livelihood',
		eraIds: ['medieval'],
		regionIds: ['med_japan'],
		minAge: 15,
		maxAge: 50,
		description:
			'隣国との合戦が始まり、武士たちが村へ押し入って男手を「陣夫（兵粮運び）・足軽」として駆り集めている。敵方の兵は実りかけた稲を刈り取って奪う「刈田狼藉」を始めた。',
		factBox: '中世日本（南北朝〜戦国期）や中国の戦乱では、農民が陣夫・雑兵として強制動員されたほか、敵の食料を奪う「刈田狼藉・乱取り」が日常的に行われた。',
		choices: [
			{
				id: 'join_ashigaru',
				label: '竹槍と笠を手に、雑兵・陣夫として従軍する',
				subLabel: '生き延びれば恩賞や略奪品で食い扶持になる',
				survivalChance: 0.68,
				deathCause: '合戦での討ち死に・落ち武者狩り',
				effects: { wealthDelta: 20, health: -14, happiness: -8 },
				outcomeText: '矢が飛び交う戦場を駆け回り、泥と血にまみれて生きて村へ帰った。',
				deathText: '合戦での討ち死に・落ち武者狩りにより、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'flee_mountain_shiro',
				label: '家族と種籾を背負い、裏山の逃げ城（山小屋）へ隠れる',
				subLabel: '村の家は焼かれるが、命と来年の種籾を守る',
				survivalChance: 0.84,
				deathCause: '落人狩り・山中での凍餓',
				effects: { wealthDelta: -35, relations: 8, happiness: -10 },
				outcomeText: '煙が上がる麓の村を山の上から見下ろし、息を潜めて軍勢が去るのを待った。',
				deathText: '落人狩り・山中での凍餓により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'medieval_crusade_siege',
		title: '城塞都市の包囲戦と、尽きかけた水と食料',
		category: 'livelihood',
		eraIds: ['medieval'],
		regionIds: ['med_europe', 'med_islam', 'med_other'],
		minAge: 12,
		maxAge: 70,
		description:
			'敵の大軍が街と城を完全に包囲し、外への道が断たれた。投石機から石や火壺が飛び込み、城内の食料は底をついて馬やネズミ、靴の革まで煮て食べる状況になっている。',
		factBox: '中世の包囲戦（籠城戦）では、戦闘そのものよりも城内の飢餓と汚染された井戸水による赤痢・発疹チフスで住民の大半が命を落とした。',
		choices: [
			{
				id: 'hold_inside_walls',
				label: '救援か和議を信じて、城内で飢えに耐え抜く',
				subLabel: '餓死と疫病の危険が日ごとに高まる',
				survivalChance: 0.66,
				deathCause: '籠城戦での餓死・陣中疫病',
				effects: { health: -20, wealthDelta: -30, happiness: -15 },
				outcomeText: '骨と皮ばかりになりながら数か月を耐え抜き、ついに講和が結ばれて城門が開いた。',
				deathText: '籠城戦での餓死・陣中疫病により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'slip_out_night',
				label: '夜陰に紛れて城壁から縄で降り、包囲網の突破を試みる',
				subLabel: '敵の哨戒に見つかればその場で斬られる',
				survivalChance: 0.62,
				deathCause: '包囲軍による処刑',
				effects: { wealthDelta: -45, health: -8 },
				outcomeText: '濠の泥水を潜り抜けて包囲網の外へ脱出し、戦火の届かない村まで落ち延びた。',
				deathText: '包囲軍による処刑により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'early_modern_little_ice_age',
		title: '小氷期の凍える冬と疫病の流行',
		category: 'historical_wave',
		eraIds: ['early_modern'],
		minAge: 14,
		maxAge: 60,
		isHistoricalWave: true,
		description:
			'川が凍りつくほどの厳冬と冷夏が続き、穀物の値が跳ね上がった。港や街道からは新大陸や遠方の品とともに、新しい疫病も流れ込んでくる。',
		factBox: '16〜18世紀は「小氷期」と呼ばれる寒冷期にあたり、世界各地で飢饉・疫病・農民反乱や王朝の動揺が相次いだ。',
		choices: [
			{
				id: 'new_crops',
				label: '新しく伝わった芋やトウモロコシを植える',
				subLabel: '見慣れない作物に賭ける',
				survivalChance: 0.88,
				deathCause: '飢饉による衰弱',
				effects: { knowledge: 5, wealthDelta: 10 },
				outcomeText: 'やせた土地でも育つ新しい作物が、家族の命をつないだ。',
				deathText: '飢饉による衰弱により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'endure_tradition',
				label: '昔ながらのやり方で耐え忍ぶ',
				subLabel: '蓄えを切り崩して春を待つ',
				survivalChance: 0.72,
				deathCause: '飢饉と発疹チフス',
				effects: { health: -12, wealthDelta: -30 },
				outcomeText: '長い冬が明けたとき、村のあちこちに空き家が増えていた。',
				deathText: '飢饉と発疹チフスにより、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'smallpox_1520',
		title: '見知らぬ病が村に来た',
		category: 'historical_wave',
		regionIds: ['em_atlantic'],
		yearRange: [1519, 1560],
		minAge: 10,
		maxAge: 99,
		isHistoricalWave: true,
		historicalYearLabel: '16世紀前半',
		description: '海の向こうからやってきた人々が去ったあと、熱と膿の斑点が村を襲っている。薬草も祈りも効かない。',
		factBox: 'アメリカ大陸では、ヨーロッパ由来の天然痘などで先住民人口の大半が数十年で失われたと推計される。',
		choices: [
			{
				id: 'isolate',
				label: '病人を村の外に隔離する',
				subLabel: '看病を引き受けた者も共に',
				survivalChance: 0.45,
				deathCause: '天然痘',
				effects: { relations: -20, happiness: -20 },
				outcomeText: '村は半分になった。残った者たちは言葉少なに畑に戻った。',
				deathText: '天然痘により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'shaman',
				label: '呪術師に頼る',
				subLabel: '伝統の儀式で祓う',
				survivalChance: 0.3,
				deathCause: '天然痘',
				effects: { relations: 5, happiness: -10 },
				outcomeText: '儀式は夜通し続いた。病は儀式に集まった人々の間に広がった。',
				deathText: '天然痘により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'tenmei_1783',
		title: '空が暗く、米が実らない',
		category: 'historical_wave',
		regionIds: ['em_edo'],
		yearRange: [1783, 1787],
		minAge: 12,
		maxAge: 99,
		isHistoricalWave: true,
		historicalYearLabel: '天明3年（1783年）',
		description: '浅間山が噴火し、灰が空を覆った。冷夏で稲は実らず、年貢の米どころか今年の食い扶持もない。',
		factBox: '天明の大飢饉（1782〜1788）では東北地方を中心に数十万人が餓死・病死したとされる。',
		choices: [
			{
				id: 'migrate_edo',
				label: '江戸へ出稼ぎに出る',
				subLabel: '田畑を捨てて、人別帳から外れる',
				survivalChance: 0.65,
				deathCause: '飢饉による餓死',
				effects: { wealthDelta: -50, relations: -10, occupationChange: '日雇い人足', locationChange: '江戸' },
				outcomeText: '江戸の町には、同じように村を捨てた者たちが溢れていた。',
				deathText: '飢饉による餓死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'eat_grass',
				label: '草の根と樹皮で食いつなぐ',
				subLabel: '村にとどまり、春を待つ',
				survivalChance: 0.4,
				deathCause: '飢饉による餓死',
				effects: { health: -25, happiness: -15 },
				outcomeText: '山の草を根こそぎ食べ尽くし、それでも春は遠かった。',
				deathText: '飢饉による餓死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'riot',
				label: '打ちこわしに加わる',
				subLabel: '米を溜め込む商人の蔵へ',
				survivalChance: 0.55,
				deathCause: '一揆・打ちこわしでの処刑',
				effects: { relations: 5, happiness: -5 },
				outcomeText: '蔵は破られ、米は村に分けられた。首謀者は後日、牢に入った。',
				deathText: '一揆・打ちこわしでの処刑により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'early_modern_thirty_years_mercenary',
		title: '暴徒化した傭兵軍団が村になだれ込んできた',
		category: 'livelihood',
		eraIds: ['early_modern'],
		regionIds: ['em_europe', 'em_china_asia', 'em_atlantic'],
		minAge: 14,
		maxAge: 65,
		description:
			'給料の遅配で規律を失った傭兵部隊（または反乱軍・征服軍）が、火縄銃と長槍を手にして村へ押し寄せてきた。「金と食料を出せ、男は荷運びか兵になれ」と家々を打ち壊している。',
		factBox: '17世紀ヨーロッパの三十年戦争や明末清初の戦乱では、略奪で食いつなぐ軍隊が農村を往復し、一部地域では人口の半分以上が失われた。',
		choices: [
			{
				id: 'join_mercenary_train',
				label: '殺される前に自ら軍の荷駄・雑役に加わる',
				subLabel: '奪われる側から、軍について歩く側へ回る',
				survivalChance: 0.72,
				deathCause: '戦場での銃創・発疹チフス',
				effects: { health: -14, happiness: -15, relations: -20, occupationChange: '従軍雑役・傭兵' },
				outcomeText: '焼かれた故郷を背に、軍勢の後ろについて泥濘の街道を歩き続けた。',
				deathText: '戦場での銃創・発疹チフスにより、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'hide_in_cellar',
				label: '地下室や森の奥に息を潜めて嵐が過ぎるのを待つ',
				subLabel: '見つかれば命はない',
				survivalChance: 0.74,
				deathCause: '略奪兵による殺害・冬の凍餓',
				effects: { wealthDelta: -45, happiness: -12 },
				outcomeText: '頭上で響く銃声と怒号に震えながら丸二日息を殺し、廃墟となった村で生き延びた。',
				deathText: '略奪兵による殺害・冬の凍餓により、手当も間に合わぬまま力尽きた。'
			}
		]
	},
	{
		id: 'witch_scapegoat',
		title: '村で疫病が続き、「呪いをかけた者」捜しが始まった',
		category: 'common_sense',
		eraIds: ['medieval', 'early_modern'],
		minAge: 16,
		maxAge: 75,
		description:
			'冷夏と家畜の病死が続いた村で、「誰かが悪魔や邪霊と通じて呪いをかけたに違いない」と噂が立ち、たまたま病人のそばにいたあなたに疑いの目が向けられた。',
		factBox: '15〜17世紀の魔女狩りや各地の妖術裁判では、天候不順や疫病のたびに、孤立した人や薬草知識を持つ人がスケープゴートとして処刑された。',
		choices: [
			{
				id: 'appease_church',
				label: 'なけなしの蓄えを教会・寺社に寄進し、潔白を訴える',
				subLabel: '財産を差し出して疑いを逸らす',
				survivalChance: 0.88,
				deathCause: '魔女・異端審問での拷問死',
				effects: { wealthDelta: -35, relations: -10, happiness: -12 },
				outcomeText: '蓄えを失ってようやく疑いは晴れたが、村人の冷たい視線は長く消えなかった。',
				deathText: '魔女・異端審問での拷問死により、手当も間に合わぬまま力尽きた。'
			},
			{
				id: 'defend_reason',
				label: '「病気や不作は呪いではない」と道理を説いて反論する',
				subLabel: '群衆の恐怖の前では理屈は逆効果になる',
				survivalChance: 0.45,
				deathCause: '魔女・妖術裁判での処刑',
				effects: { happiness: -20, relations: -20 },
				outcomeText: '反論は「悪魔の言い逃れだ」と受け取られ、縛り上げられて審問の場へ引き出された。',
				deathText: '魔女・妖術裁判での処刑により、手当も間に合わぬまま力尽きた。'
			}
		]
	}
];
