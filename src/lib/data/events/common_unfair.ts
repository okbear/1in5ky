import type { DecisionEvent } from '../../types';

/** 複数時代にまたがる日常の病気・感染症・悪税・身分制・都市火災イベント */
export const COMMON_UNFAIR_EVENTS: DecisionEvent[] = [
	{
		id: 'fever_premodern',
		title: '高熱が三日続いている',
		category: 'common_sense',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern'],
		minAge: 10,
		maxAge: 70,
		description: '熱は下がらず、うわごとを言い始めた。家族があなたの枕元に集まっている。',
		factBox: '前近代の医療は、多くの場合「何もしない」より危険だった。瀉血は19世紀まで標準治療だった。',
		choices: [
			{
				id: 'bloodletting',
				label: '荒療治（瀉血や強い下剤）を受ける',
				subLabel: '体から悪い血や毒を抜くのが定石とされている',
				survivalChance: 0.55,
				deathCause: '熱病（荒療治による衰弱）',
				effects: { health: -15 },
				outcomeText: '無理やり血や体液を抜かれ、かえって体力を奪われて意識が遠のいた。'
			},
			{
				id: 'pray_priest',
				label: '祈祷師・神官に祈ってもらう',
				subLabel: '神仏の加護にすがる',
				survivalChance: 0.65,
				deathCause: '熱病',
				effects: { happiness: 5, relations: 5 },
				outcomeText: '祈りの言葉が低く響いた。熱が下がったのは偶然か、神意か。'
			},
			{
				id: 'herbs',
				label: '怪しい薬草を煎じて飲む',
				subLabel: '近所の物知りの老婆が調合した',
				survivalChance: 0.6,
				deathCause: '熱病・薬草の中毒',
				effects: { health: -5, knowledge: 1 },
				outcomeText: '苦くて青臭い汁を飲み干した。'
			},
			{
				id: 'rest',
				label: '何もせず、水だけ飲んで寝る',
				subLabel: '体力の回復を待つ',
				survivalChance: 0.72,
				deathCause: '熱病',
				effects: { health: -3 },
				outcomeText: '周囲は「何もしないのか」と責めたが、結局これが一番マシだった。'
			}
		]
	},
	{
		id: 'minor_scratch_tetanus',
		title: '指先の小さな棘から、顎が動かなくなった',
		category: 'common_sense',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern', 'industrial'],
		minAge: 12,
		maxAge: 75,
		description:
			'数日前、作業中に指先へ小さな木片や錆びた金具が刺さった。ただのかすり傷だと思っていたが、傷口が黒く腫れ、熱が出て口が開かなくなってきた。',
		factBox: '抗生物質と破傷風トキソイドが存在しなかった時代、農作業や日常のささいな擦り傷からの破傷風・敗血症は極めて一般的な死因だった。',
		choices: [
			{
				id: 'cauterize_iron',
				label: '焼いた鉄を傷口に押し当てて焼き切る',
				subLabel: '激痛とショックの危険があるが、毒を焼き潰す',
				survivalChance: 0.68,
				deathCause: '破傷風・火傷のショック',
				effects: { health: -18, happiness: -10 },
				outcomeText: '意識が飛ぶほどの激痛のあと、深い火傷の痕が残ったが、命だけは取り留めた。'
			},
			{
				id: 'cobweb_dung_poultice',
				label: '蜘蛛の巣や泥・家畜の糞を塗って傷を塞ぐ',
				subLabel: '当時の村で広く信じられていた止血・民間療法',
				survivalChance: 0.42,
				deathCause: '破傷風・敗血症',
				effects: { health: -20 },
				outcomeText: '良かれと思って塗った泥と汚物が、傷口の奥へさらに破傷風菌を送り込んだ。'
			},
			{
				id: 'wash_alcohol',
				label: '強い酒や煮沸した湯で洗い、血と膿を絞り出す',
				subLabel: '傷口は痛むが清潔に保つ',
				survivalChance: 0.84,
				deathCause: '敗血症',
				effects: { health: -8 },
				outcomeText: '何日も高熱にうなされた末、腫れが少しずつ引いていった。'
			}
		]
	},
	{
		id: 'rotten_tooth_infection',
		title: '奥歯の化膿で、首まで腫れ上がった',
		category: 'common_sense',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern'],
		minAge: 14,
		maxAge: 70,
		description:
			'石臼の砂が混じった穀物を噛み続けてすり減った奥歯が割れ、歯茎の奥に膿が溜まった。水も飲めないほど顎と首が腫れ上がり、悪寒が止まらない。',
		factBox: '17世紀ロンドンの死因統計（死亡表）では「歯（Teeth）」が毎年上位の死因として記録されていた。抜歯は医師ではなく床屋や鍛冶屋の仕事だった。',
		choices: [
			{
				id: 'barber_pull',
				label: '鍛冶屋・床屋外科医に麻酔なしで抜いてもらう',
				subLabel: '鉄のやっとこで力任せに引き抜く',
				survivalChance: 0.8,
				deathCause: '抜歯後の大量出血・敗血症',
				effects: { health: -10, happiness: -8, wealthDelta: -5 },
				outcomeText: '二人がかりで押さえつけられ、顎の骨が砕けるような音とともに歯が抜かれた。数日後、腫れは引いた。'
			},
			{
				id: 'tooth_worm_fumigate',
				label: '「歯の虫」を追い出すため薬草の煙を吸い祈る',
				subLabel: '虫歯は小さな虫が歯を食い荒らす病気だと信じられていた',
				survivalChance: 0.52,
				deathCause: '歯性感染症・敗血症',
				effects: { health: -15 },
				outcomeText: '煙を当てても膿は引かず、高熱が全身に回っていった。'
			}
		]
	},
	{
		id: 'spoiled_grain_ergot',
		title: '長雨でカビた穀物と「燃える手足」',
		category: 'common_sense',
		eraIds: ['classical', 'medieval', 'early_modern'],
		classIds: ['enslaved', 'peasant', 'artisan'],
		minAge: 8,
		maxAge: 70,
		description:
			'今年の麦や穀物には黒紫色のカビが混じっていたが、捨てる余裕はない。それを食べた村人が、手足が焼けるように痛いと叫び、幻覚を見て暴れ始めた。',
		factBox: 'ライ麦などに寄生する麦角菌の毒素（エルゴタミン）は血管を収縮させ手足を壊死させた。中世には「聖アントニウスの火」や悪魔憑きと恐れられた。',
		choices: [
			{
				id: 'discard_grain',
				label: 'カビが混じった穀物をすべて捨て、草木で飢えをしのぐ',
				subLabel: '冬を越す食料が足りなくなる',
				survivalChance: 0.82,
				deathCause: '冬の飢えと衰弱',
				effects: { wealthDelta: -30, health: -10, happiness: -8 },
				outcomeText: '腹を空かせながら木の根をかじって冬を越したが、手足が腐る奇病からは逃れられた。'
			},
			{
				id: 'eat_ergot_bread',
				label: '空腹には代えられず、そのまま調理して食べる',
				subLabel: '捨てる余裕などどこにもない',
				survivalChance: 0.54,
				deathCause: '麦角中毒（聖アントニウスの火）',
				effects: { health: -22, happiness: -12 },
				outcomeText: '指先が黒く冷たくなり、恐ろしい幻覚に何日も苛まれた。'
			}
		]
	},
	{
		id: 'mercury_lead_remedy',
		title: '「秘伝の霊薬」として水銀と鉛の丸薬を勧められた',
		category: 'common_sense',
		eraIds: ['classical', 'medieval', 'early_modern'],
		minAge: 18,
		maxAge: 75,
		description:
			'長引く不調に悩んでいたところ、旅の医薬師が「王侯貴族も飲む不老・万能の霊薬だ」と銀色に光る重い丸薬や赤い丹薬を売り込んできた。',
		factBox: '秦の始皇帝から近世ヨーロッパ・江戸時代に至るまで、水銀（辰砂・甘汞）や鉛・ヒ素は高価な「万能薬・不老薬」として処方され、多くの命を縮めた。',
		choices: [
			{
				id: 'take_mercury',
				label: '大枚をはたいて「霊薬」を飲み干す',
				subLabel: '高価な薬ほど効くと信じる',
				survivalChance: 0.62,
				deathCause: '水銀・重金属中毒',
				effects: { wealthDelta: -20, health: -18 },
				outcomeText: '激しい下痢と手の震えに襲われ、歯茎が黒ずんだ。当時の医者は「毒が出ている好転反応だ」と言った。'
			},
			{
				id: 'refuse_mercury',
				label: '高すぎて買えないので、白湯と粥だけで養生する',
				subLabel: '貧しさが結果的に身を守ることもある',
				survivalChance: 0.88,
				deathCause: '持病の悪化',
				effects: { health: 4 },
				outcomeText: '高価な薬を買えないことを嘆いたが、霊薬を飲んだ裕福な隣人は翌月亡くなった。'
			}
		]
	},
	{
		id: 'collective_punishment',
		title: '隣家の夜逃げと「連座制」の理不尽',
		category: 'livelihood',
		regionIds: ['cls_han', 'med_china', 'med_japan', 'em_edo', 'em_china_asia'],
		classIds: ['peasant', 'artisan'],
		minAge: 16,
		maxAge: 65,
		description:
			'朝起きると、隣の家が夜のうちに荷物をまとめて逃げ出していた。役人がやってきて「五人組・隣組の連帯責任（連座）だ。隣の分の年貢と労役もすべてお前たちが納めよ」と命じた。',
		factBox: '秦・漢の什伍制や江戸時代の五人組など、東アジアの前近代社会では納税と治安維持のため、隣人の逃亡や犯罪の責任を周囲の家に連帯して負わせた。',
		choices: [
			{
				id: 'pay_neighbors_share',
				label: '歯を食いしばり、隣家の分の年貢・労役まで背負う',
				subLabel: '逆らえば自分の家も処罰される',
				survivalChance: 0.86,
				deathCause: '過労と栄養失調',
				effects: { wealthDelta: -35, health: -10, happiness: -12 },
				outcomeText: '自分の家に何の落ち度もないのに、倍の年貢を納めるため夜遅くまで働き詰めの年になった。'
			},
			{
				id: 'abscond_too',
				label: '限界を超え、自分の家も夜逃げして都市や山へ逃れる',
				subLabel: '人別帳から外れ、無宿・流民になる',
				survivalChance: 0.72,
				deathCause: '逃亡生活での飢え・行き倒れ',
				effects: { wealthDelta: -45, relations: -20, occupationChange: '流民・日雇い', locationChange: 'urban' },
				outcomeText: '先祖代々の土地を捨て、役人の目を逃れて見知らぬ町へ流れ着いた。'
			}
		]
	},
	{
		id: 'window_salt_tax',
		title: '「窓の数」と「生きるための塩」にかけられた悪税',
		category: 'livelihood',
		eraIds: ['classical', 'medieval', 'early_modern'],
		classIds: ['peasant', 'artisan'],
		minAge: 16,
		maxAge: 65,
		description:
			'領主と王室の財政難から、「家の窓の数に応じた窓税」と「高価な専売塩の強制購入」が触れ出された。まともに払えば冬の食料が買えない。',
		factBox: '近世ヨーロッパの窓税では貧困層が窓を板やレンガで塞いだため日光と換気が失われ結核やくる病が蔓延し、フランスの塩税（ガベル）では密造塩を使った農民がガレー船奴隷に送られた。',
		choices: [
			{
				id: 'board_up_windows',
				label: '家の窓を板と土で塗り潰し、暗闇で暮らして税を逃れる',
				subLabel: '光も風も入らない湿った部屋になる',
				survivalChance: 0.84,
				deathCause: '肺結核・呼吸器疾患',
				effects: { health: -14, happiness: -10 },
				outcomeText: '昼でも真っ暗なジメジメした部屋で暮らすようになり、家族の咳が止まらなくなった。'
			},
			{
				id: 'smuggle_salt',
				label: '闇の塩商人から安い密造塩をこっそり買う',
				subLabel: '密告されれば鞭打ちやガレー船送り',
				survivalChance: 0.76,
				deathCause: '塩税違反による投獄・ガレー船労役',
				effects: { wealthDelta: -5, happiness: -5 },
				outcomeText: '塩役人の家宅捜索に怯えながら、床下に隠した塩で食べ物を漬けた。'
			}
		]
	},
	{
		id: 'press_gang_conscription',
		title: '夕暮れの道で「強制徴募隊」に棍棒で殴られた',
		category: 'livelihood',
		eraIds: ['classical', 'medieval', 'early_modern', 'industrial'],
		classIds: ['peasant', 'artisan'],
		sex: 'M',
		minAge: 16,
		maxAge: 42,
		description:
			'仕事帰りに道を歩いていただけで、武装した徴募隊に取り囲まれ、有無を言わさず殴り倒された。気づくと軍艦の船底（または辺境行きの荷車）に押し込められており、「今日から兵卒・水夫だ」と告げられた。',
		factBox: '17〜19世紀初頭の英国海軍のプレスギャング（強制徴募隊）をはじめ、歴史上の多くの軍隊は路上の庶民を暴力的に拉致・強制徴集して兵員を補充した。',
		choices: [
			{
				id: 'endure_service',
				label: '逆らえば吊るされるため、数年の過酷な軍役に耐える',
				subLabel: '腐った水と塩漬け肉の生活で壊血病と戦死のリスク',
				survivalChance: 0.68,
				deathCause: '壊血病・戦地での疫病',
				effects: { health: -18, happiness: -15, relations: -12, occupationChange: '徴募兵・水夫' },
				outcomeText: '家族に知らせることもできないまま数年が過ぎ、歯茎から血を流しながら見知らぬ海と戦場を生き延びた。'
			},
			{
				id: 'jump_ship',
				label: '夜陰に紛れて脱走を図る',
				subLabel: '見つかれば見せしめに銃殺・処刑される',
				survivalChance: 0.56,
				deathCause: '脱走未遂による処刑・溺死',
				effects: { health: -10, wealthDelta: -25 },
				outcomeText: '冷たい闇の中を必死で逃げ切り、名前を変えて別の土地へ潜伏した。'
			}
		]
	},
	{
		id: 'rural_lord_hunt',
		title: '領主の狩猟隊が、収穫前の畑を馬で踏み荒らした',
		category: 'livelihood',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern'],
		classIds: ['enslaved', 'peasant'],
		isUrban: false,
		minAge: 14,
		maxAge: 65,
		description:
			'半年かけて育てた作物がもうすぐ刈り入れという日、領主と貴族の狩猟隊が獲物を追って柵を蹴破り、馬と猟犬の群れで畑を踏み潰していった。',
		factBox: '封建社会では領主の狩猟権は農民の耕作権より上位にあり、畑を荒らされても補償はなく、領主の森の鹿や兎を農民が獲れば死刑や耳削ぎの刑に処された。',
		choices: [
			{
				id: 'bow_in_mud',
				label: '泥に頭をこすりつけ、黙って通り過ぎるのを待つ',
				subLabel: '今年の収穫の大半を失うが、命は守る',
				survivalChance: 0.88,
				deathCause: '不作による冬の栄養失調',
				effects: { wealthDelta: -35, happiness: -15, health: -8 },
				outcomeText: '泥にまみれた穂をひと粒ずつ拾い集め、悔しさを飲み込んで冬を迎えた。'
			},
			{
				id: 'plead_compensation',
				label: '馬の前に立ちはだかり、年貢の減免を直訴する',
				subLabel: '無礼討ち・鞭打ちの危険',
				survivalChance: 0.58,
				deathCause: '領主の従者による鞭打ち・暴行',
				effects: { health: -20, happiness: -10, wealthDelta: -15 },
				outcomeText: '従者の鞭で背中を打たれて突き飛ばされた。年貢は一粒もまけてもらえなかった。'
			}
		]
	},
	{
		id: 'urban_filth_fire',
		title: '汚物が流れる路地と、密集長屋の大火',
		category: 'livelihood',
		eraIds: ['classical', 'medieval', 'early_modern', 'industrial'],
		isUrban: true,
		minAge: 12,
		maxAge: 75,
		description:
			'2階の窓から道へ汚物が捨てられる狭く薄暗い長屋街で、風のある夜に火事が出た。消火設備などなく、燃え広がる木組みの建物を壊して延焼を止めるしかない。',
		factBox: '古代ローマのインスラ（集合住宅）、江戸の裏長屋、17世紀ロンドンなど、近代以前の都市は過密・不衛生と大火の繰り返しで、死亡率が農村より高かった（都市墓場効果）。',
		choices: [
			{
				id: 'run_empty_handed',
				label: '家財道具をすべて諦め、着の身着のままで川辺へ逃げる',
				subLabel: '命は助かるが、明日から無一文になる',
				survivalChance: 0.92,
				deathCause: '大火での煙中毒',
				effects: { wealthDelta: -50, happiness: -12 },
				outcomeText: '夜空を焦がす炎を川辺から見つめた。翌朝、暮らしのすべてが黒い灰になっていた。'
			},
			{
				id: 'save_tools',
				label: '商売道具と銭箱だけでも持ち出そうと煙の中へ戻る',
				subLabel: '道具を失えば明日からの稼ぎがない',
				survivalChance: 0.58,
				deathCause: '大火での焼死・崩落',
				effects: { health: -15, wealthDelta: -10 },
				outcomeText: '黒煙にむせながら道具箱を抱えて飛び出した直後、屋根が焼け落ちた。'
			}
		]
	},
	{
		id: 'serf_master_whim',
		title: '主人・領主の借金のカタに、暮らしを引き剥がされる',
		category: 'livelihood',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern'],
		classIds: ['enslaved', 'peasant'],
		minAge: 12,
		maxAge: 60,
		description:
			'主人（領主）が戦費や遊興で借金を抱え、その返済のためにあなたの家の家畜と農具を召し上げたうえ、別の領主の鉱山・農園へ働き手を差し出すと決めた。',
		factBox: '奴隷や農奴・隷属農民は土地や主人の財産の一部として扱われ、主人の都合ひとつで家族と引き離されたり売買・譲渡されたりした。',
		choices: [
			{
				id: 'submit_transfer',
				label: '逆らう術はなく、命じられた鉱山・農園へ送られる',
				subLabel: '過酷な労働環境へ移る',
				survivalChance: 0.75,
				deathCause: '鉱山・農園での過労死',
				effects: { health: -15, happiness: -18, relations: -15, wealthDelta: -30 },
				outcomeText: '慣れ親しんだ土地と引き離され、日の当たらない場所で働き続けることになった。'
			},
			{
				id: 'flee_master',
				label: '夜のうちに逃げ出し、都市や山奥へ身を隠す',
				subLabel: '「都市の空気は自由にする」が、追手に捕まれば処刑',
				survivalChance: 0.62,
				deathCause: '逃亡奴隷・逃散農民としての処刑',
				effects: { wealthDelta: -40, relations: -15, occupationChange: '都市の雑役・日雇い', locationChange: 'urban' },
				outcomeText: '猟犬の声を背後に聞きながら夜通し走り続け、城壁のある町へ紛れ込んだ。'
			}
		]
	}
];
