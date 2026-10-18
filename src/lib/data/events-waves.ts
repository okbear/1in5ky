import type { DecisionEvent } from '../types';

/** 歴史の大波・戦争・徴兵・大疫病・大飢饉イベント */
export const WAVE_EVENTS: DecisionEvent[] = [
	// ---------- 古代・古典期の歴史の大波 ----------
	{
		id: 'ancient_corvee',
		title: '王と神殿の大工事への徴用',
		category: 'historical_wave',
		eraIds: ['ancient'],
		classIds: ['peasant', 'enslaved', 'artisan'],
		minAge: 14,
		maxAge: 50,
		isHistoricalWave: true,
		description:
			'農閑期に入ると、王宮の役人が村々を回り、神殿や王墓の建設に男手と女手を徴用した。巨石や日干しレンガを運ぶ日々が始まる。',
		factBox: '古代エジプトやメソポタミアの大建造物は、奴隷だけでなく農閑期の農民への労役（コルヴェ）によって築かれた。',
		choices: [
			{
				id: 'obey_corvee',
				label: '労役に従い、配給の穀物と食事を得る',
				subLabel: '過酷だが食料は支給される',
				survivalChance: 0.86,
				deathCause: '建設労役での圧死・過労',
				effects: { health: -12, wealthDelta: 10, relations: 5 },
				outcomeText: '照りつける太陽の下で石や土を運び続けた。腰と膝は軋んだが、配給の穀物で家族は飢えずに済んだ。'
			},
			{
				id: 'evade_corvee',
				label: '湿原や山へ隠れて徴用を逃れる',
				subLabel: '見つかれば鞭打ちと労役倍加',
				survivalChance: 0.78,
				deathCause: '逃亡先での熱病・処罰',
				effects: { happiness: -10, relations: -15, wealthDelta: -25 },
				outcomeText: '葦の茂みに身を潜めて役人が去るのを待った。村に戻ると、残された家族が代わりに責めを負っていた。'
			}
		]
	},
	{
		id: 'classical_plague_war',
		title: '街道を伝って疫病と徴兵がやってきた',
		category: 'historical_wave',
		eraIds: ['classical'],
		minAge: 14,
		maxAge: 60,
		isHistoricalWave: true,
		description:
			'帝国を結ぶ街道と港は、富だけでなく遠方の戦争と未知の疫病も運んできた。都市の広場では毎日葬列が続き、辺境への派兵が触れ回られている。',
		factBox: 'ローマ帝国のアントニヌスの疫病（165〜180年）や漢末の疫病は、交易網を通じて帝国全土に広がり人口の1〜2割を奪った。',
		choices: [
			{
				id: 'retreat_villa',
				label: '都市を避け、奥地の農村へ退く',
				subLabel: '商売や収入は途絶える',
				survivalChance: 0.82,
				deathCause: '帝国の疫病',
				effects: { wealthDelta: -30, happiness: -8 },
				outcomeText: '街道から離れた村で嵐が過ぎるのを待った。暮らしは貧しくなったが、命はつないだ。'
			},
			{
				id: 'join_legion',
				label: '軍の補給・労務に志願して食扶持を得る',
				subLabel: '陣中での感染と戦死のリスク',
				survivalChance: 0.65,
				deathCause: '陣中での疫病・辺境での戦死',
				effects: { wealthDelta: 25, health: -15 },
				outcomeText: '軍営の密集した幕舎は病の温床だったが、生き残った者には銀貨が支払われた。'
			}
		]
	},
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
				outcomeText: '境内に並ぶ長い列に混じり、薄い粥で飢えをしのいだ。'
			},
			{
				id: 'forage_woods',
				label: '禁猟の森や山に入って食料を探す',
				subLabel: '領主の役人に見つかれば処罰される',
				survivalChance: 0.75,
				deathCause: '飢饉・密猟の処罰',
				effects: { health: -8, happiness: -8 },
				outcomeText: '木の実や根を掘って冬を越した。隣家の者は森番に捕らえられ、戻ってこなかった。'
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
				outcomeText: 'やせた土地でも育つ新しい作物が、家族の命をつないだ。'
			},
			{
				id: 'endure_tradition',
				label: '昔ながらのやり方で耐え忍ぶ',
				subLabel: '蓄えを切り崩して春を待つ',
				survivalChance: 0.72,
				deathCause: '飢饉と発疹チフス',
				effects: { health: -12, wealthDelta: -30 },
				outcomeText: '長い冬が明けたとき、村のあちこちに空き家が増えていた。'
			}
		]
	},
	// ---------- 歴史の大波（年代・地域が確定している） ----------
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
				outcomeText: '荷車に家財を積んで町を出た。逃げた先でも病は追ってきたが、人の少ない山では広がりが遅かった。'
			},
			{
				id: 'pray',
				label: '教会で祈り続ける',
				subLabel: '神の裁きに身を委ねる',
				survivalChance: 0.35,
				deathCause: '黒死病（ペスト）',
				effects: { happiness: 5, relations: 5 },
				outcomeText: '人々は聖堂に集まって夜通し祈った。祈りの場は、病が最も効率よく広がる場所でもあった。'
			},
			{
				id: 'stay_home',
				label: '家に閉じこもる',
				subLabel: '戸口を閉ざし、誰とも会わない',
				survivalChance: 0.5,
				deathCause: '黒死病（ペスト）',
				effects: { happiness: -15, relations: -15 },
				outcomeText: 'ネズミとノミが家の中までついてくることは、誰も知らなかった。'
			}
		]
	},
	{
		id: 'mongol_1220',
		title: '地平線に騎馬隊が現れた',
		category: 'historical_wave',
		regionIds: ['med_islam', 'med_eastasia', 'med_europe'],
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
				outcomeText: '貢納と引き換えに町は焼かれずに済んだ。支配者の名前だけが変わった。'
			},
			{
				id: 'resist',
				label: '城壁に立てこもって戦う',
				subLabel: '子どもたちを守るために',
				survivalChance: 0.15,
				deathCause: 'モンゴル軍の侵攻',
				effects: { happiness: -5 },
				outcomeText: '包囲は数週間続いた。'
			},
			{
				id: 'flee_west',
				label: '家族を連れて西へ逃げる',
				subLabel: '見知らぬ土地へ',
				survivalChance: 0.55,
				deathCause: '逃避行での飢えと病',
				effects: { wealthDelta: -80, relations: -10 },
				outcomeText: '着の身着のまま、季節をいくつも越えて逃げた。'
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
				outcomeText: '村は半分になった。残った者たちは言葉少なに畑に戻った。'
			},
			{
				id: 'shaman',
				label: '呪術師に頼る',
				subLabel: '伝統の儀式で祓う',
				survivalChance: 0.3,
				deathCause: '天然痘',
				effects: { relations: 5, happiness: -10 },
				outcomeText: '儀式は夜通し続いた。病は儀式に集まった人々の間に広がった。'
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
				outcomeText: '江戸の町には、同じように村を捨てた者たちが溢れていた。'
			},
			{
				id: 'eat_grass',
				label: '草の根と樹皮で食いつなぐ',
				subLabel: '村にとどまり、春を待つ',
				survivalChance: 0.4,
				deathCause: '飢饉による餓死',
				effects: { health: -25, happiness: -15 },
				outcomeText: '山の草を根こそぎ食べ尽くし、それでも春は遠かった。'
			},
			{
				id: 'riot',
				label: '打ちこわしに加わる',
				subLabel: '米を溜め込む商人の蔵へ',
				survivalChance: 0.55,
				deathCause: '一揆・打ちこわしでの処刑',
				effects: { relations: 5, happiness: -5 },
				outcomeText: '蔵は破られ、米は村に分けられた。首謀者は後日、牢に入った。'
			}
		]
	},
	{
		id: 'cholera_1850',
		title: '井戸の水を飲んだ者が死ぬ',
		category: 'historical_wave',
		regionIds: ['ind_europe_us', 'ind_asia'],
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
				outcomeText: '燃料代はかさんだが、家族は誰も倒れなかった。'
			},
			{
				id: 'miasma',
				label: '悪臭を避けて窓を閉ざす',
				subLabel: '当時の医師の勧めに従う',
				survivalChance: 0.5,
				deathCause: 'コレラ',
				effects: { health: -5 },
				outcomeText: '悪い空気を避けたが、同じ井戸の水を飲み続けた。'
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
				outcomeText: '泥と鉄条網の中で、数年を過ごした。'
			},
			{
				id: 'factory',
				label: '軍需工場で働く',
				subLabel: '銃後を支える',
				survivalChance: 0.9,
				deathCause: '工場事故・スペイン風邪',
				effects: { wealthDelta: 20, health: -5 },
				outcomeText: '賃金は上がったが、工場の空気は重かった。'
			}
		]
	},
	{
		id: 'flu_1918',
		title: '若者ばかりが倒れる熱病',
		category: 'historical_wave',
		regionIds: ['ind_europe_us', 'ind_asia', 'ind_other'],
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
				outcomeText: '息苦しい数か月だったが、家族は全員生き延びた。'
			},
			{
				id: 'carry_on',
				label: '普段どおりに働き続ける',
				subLabel: '休めば食い扶持を失う',
				survivalChance: 0.6,
				deathCause: 'スペイン風邪',
				effects: { health: -10 },
				outcomeText: '仕事は休めなかった。'
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
				outcomeText: '見知らぬ土地で雑草や芋の蔓まで食べて飢えをしのぎ、なんとか終戦の日まで生き延びた。'
			},
			{
				id: 'stay_shelter',
				label: '防空壕とバケツリレーで自分の家と街を守る',
				subLabel: '直撃や火災旋風に巻かれる危険がある',
				survivalChance: 0.62,
				deathCause: '空襲・戦火による焼死',
				effects: { health: -15, happiness: -15, wealthDelta: -30 },
				outcomeText: '夜空が真っ赤に染まるなか、熱風と煙に追われて必死に逃げ惑った。'
			}
		]
	},
	// ---------- 各時代・地域の戦争・徴兵 ----------
	{
		id: 'ancient_chariot_war',
		title: '隣国との水路をめぐる戦争と歩兵徴集',
		category: 'livelihood',
		eraIds: ['ancient'],
		minAge: 15,
		maxAge: 45,
		description:
			'境界の運河と麦畑をめぐって隣の都市国家（または部族）との戦が始まった。王の使者が村にやってきて、「家ごとに槍兵か荷運びを出せ。敗れれば街ごと焼き払われ、生き残りはすべて奴隷になる」と告げた。',
		factBox: 'シュメールの「ハゲタカの碑」や殷の甲骨文が示すように、古代の戦争では農民が革盾と槍だけで動員され、捕虜は奴隷や神殿への生贄とされた。',
		choices: [
			{
				id: 'march_spearman',
				label: '槍と盾を持ち、戦列に加わる',
				subLabel: '勝てば戦利品があるが、最前列は死と隣り合わせ',
				survivalChance: 0.66,
				deathCause: '都市国家間の戦での戦死・傷の化膿',
				effects: { wealthDelta: 15, health: -15, happiness: -10 },
				outcomeText: '砂塵と怒号のなかで青銅の槍がぶつかり合った。傷を負いながらも生きて村の土を踏んだ。'
			},
			{
				id: 'carry_supplies_anc',
				label: '後方の荷駄（食料・武具運び）に志願する',
				subLabel: '直接の斬り合いは避けるが、敗走すれば逃げ遅れる',
				survivalChance: 0.8,
				deathCause: '陣中での赤痢・敗走時の混乱',
				effects: { health: -10, wealthDelta: -10 },
				outcomeText: '重い麦袋を背負って軍勢の後ろを歩き続け、泥水と乾いたパンで戦役を生き延びた。'
			}
		]
	},
	{
		id: 'classical_great_wall_frontier',
		title: '北方の辺境防衛・長城建設への徴兵木簡',
		category: 'livelihood',
		regionIds: ['cls_han'],
		minAge: 16,
		maxAge: 48,
		description:
			'北方の騎馬遊牧民（匈奴）の侵攻を防ぐため、数千里離れた極寒の辺境へ「戍卒（国境守備兵）・築城人夫」として赴けという木簡が届いた。期日に遅れれば法により斬首される。',
		factBox: '秦・漢帝国では成人男性に兵役と辺境警備（戍辺）が課された。「長城の下に白骨が連なる」と謳われたほど、寒さと飢えで多くの農民兵が命を落とした。',
		choices: [
			{
				id: 'go_frontier',
				label: '家族に別れを告げ、北の辺境へ旅立つ',
				subLabel: '凍える砂漠の砦で2年間の守備につく',
				survivalChance: 0.68,
				deathCause: '辺境での凍死・過労・騎馬民族との戦闘',
				effects: { health: -18, happiness: -15, relations: -8 },
				outcomeText: '凍てつく風が吹く土塁の上で見張りに立ち続け、ボロボロになって故郷へ生還した。'
			},
			{
				id: 'pay_substitute_han',
				label: '田畑を売って「更賦（代役税）」を払い、人を雇って代わりに行かせる',
				subLabel: '命は助かるが、家の田畑を失い小作人に落ちる',
				survivalChance: 0.95,
				deathCause: '困窮による衰弱',
				effects: { wealthDelta: -55, happiness: -10, occupationChange: '小作人' },
				outcomeText: '先祖伝来の畑を手放して銭を工面し、辺境送りを免れた。'
			}
		]
	},
	{
		id: 'classical_punic_legion_siege',
		title: '大軍勢の進軍と、村からの食料強制徴発',
		category: 'livelihood',
		regionIds: ['cls_rome', 'cls_india', 'cls_other'],
		minAge: 14,
		maxAge: 65,
		description:
			'戦争へ向かう大軍が街道を埋め尽くして進んできた。味方の軍でさえ通過する村から穀物と家畜を「軍用」として根こそぎ徴発し、逆らう者は槍の柄で殴り倒されている。',
		factBox: '古代〜前近代の軍隊は補給の大半を「現地調達（強制徴発と略奪）」に頼ったため、軍が通過した街道沿いの農村は敵味方を問わず飢餓に陥った。',
		choices: [
			{
				id: 'hide_grain_pit',
				label: '床下や森の穴に食料と家畜を隠し、山へ避難する',
				subLabel: '見つかれば見せしめに殺される',
				survivalChance: 0.78,
				deathCause: '徴発兵による暴行・処刑',
				effects: { wealthDelta: -15, happiness: -8 },
				outcomeText: '軍勢が通り過ぎたあと村へ戻ると、家は荒らされていたが、森に隠した麦のおかげで冬を越せた。'
			},
			{
				id: 'surrender_provisions',
				label: '命惜しさに倉の穀物をすべて差し出す',
				subLabel: 'その場の暴力は免れるが、厳しい飢えが待つ',
				survivalChance: 0.75,
				deathCause: '軍の徴発後の飢餓',
				effects: { wealthDelta: -50, health: -15, happiness: -15 },
				outcomeText: '兵士たちは笑いながら荷車に麦を積んで去り、空っぽの倉だけが残された。'
			}
		]
	},
	{
		id: 'medieval_ashigaru_levy',
		title: '戦乱の「陣夫・雑兵狩り」と刈田狼藉',
		category: 'livelihood',
		regionIds: ['med_eastasia'],
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
				outcomeText: '矢が飛び交う戦場を駆け回り、泥と血にまみれて生きて村へ帰った。'
			},
			{
				id: 'flee_mountain_shiro',
				label: '家族と種籾を背負い、裏山の逃げ城（山小屋）へ隠れる',
				subLabel: '村の家は焼かれるが、命と来年の種籾を守る',
				survivalChance: 0.84,
				deathCause: '落人狩り・山中での凍餓',
				effects: { wealthDelta: -35, relations: 8, happiness: -10 },
				outcomeText: '煙が上がる麓の村を山の上から見下ろし、息を潜めて軍勢が去るのを待った。'
			}
		]
	},
	{
		id: 'medieval_crusade_siege',
		title: '城塞都市の包囲戦と、尽きかけた水と食料',
		category: 'livelihood',
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
				outcomeText: '骨と皮ばかりになりながら数か月を耐え抜き、ついに講和が結ばれて城門が開いた。'
			},
			{
				id: 'slip_out_night',
				label: '夜陰に紛れて城壁から縄で降り、包囲網の突破を試みる',
				subLabel: '敵の哨戒に見つかればその場で斬られる',
				survivalChance: 0.62,
				deathCause: '包囲軍による処刑',
				effects: { wealthDelta: -45, health: -8 },
				outcomeText: '濠の泥水を潜り抜けて包囲網の外へ脱出し、戦火の届かない村まで落ち延びた。'
			}
		]
	},
	{
		id: 'early_modern_thirty_years_mercenary',
		title: '暴徒化した傭兵軍団が村になだれ込んできた',
		category: 'livelihood',
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
				outcomeText: '焼かれた故郷を背に、軍勢の後ろについて泥濘の街道を歩き続けた。'
			},
			{
				id: 'hide_in_cellar',
				label: '地下室や森の奥に息を潜めて嵐が過ぎるのを待つ',
				subLabel: '見つかれば命はない',
				survivalChance: 0.74,
				deathCause: '略奪兵による殺害・冬の凍餓',
				effects: { wealthDelta: -45, happiness: -12 },
				outcomeText: '頭上で響く銃声と怒号に震えながら丸二日息を殺し、廃墟となった村で生き延びた。'
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
				outcomeText: '泥まみれの塹壕と行軍を生き抜き、除隊して故郷の駅へ降り立った。'
			},
			{
				id: 'seek_logistics_role',
				label: '読み書きや手先の技術を活かし、通信・輜重（補給）・工廠勤務を志願する',
				subLabel: '最前線の突撃は免れるが、輸送船の撃沈や空襲リスクはある',
				survivalChance: 0.84,
				deathCause: '輸送途上の攻撃・戦病死',
				effects: { knowledge: 6, health: -8, happiness: -8 },
				outcomeText: '後方での補給と通信任務に従事し、生きて家族のもとへ帰還した。'
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
				outcomeText: '検問所をいくつも越えて安全な地域へたどり着き、ゼロから暮らしを立て直した。'
			},
			{
				id: 'stay_or_drafted',
				label: '家と土地を手放せずにとどまり、防衛・徴兵に応じる',
				subLabel: '故郷は守れるかもしれないが、戦闘と地雷の危険が迫る',
				survivalChance: 0.72,
				deathCause: '内戦・局地紛争での戦死・砲撃',
				effects: { health: -18, happiness: -15, wealthDelta: -20 },
				outcomeText: '停戦合意が結ばれるまで、銃声と停電が続く街で生き延びた。'
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
	}
];
