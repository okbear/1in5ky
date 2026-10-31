import type { DecisionEvent } from '../types';

/** ライフイベント（進路・結婚・出産・中年期・老年期・徴税・児童労働） */
export const LIFECYCLE_EVENTS: DecisionEvent[] = [
	{
		id: 'work_choice_youth',
		title: '一人前として働き始める歳になった',
		allRegions: true,
		category: 'livelihood',
		classIds: ['peasant', 'artisan'],
		isLifecycle: true,
		minAge: 12,
		maxAge: 16,
		description: '親の仕事を継ぐか、別の道を探すか。選べる道は、生まれた場所と身分で大きく限られている。',
		factBox: '前近代社会では、人口の8〜9割が親と同じ農業に従事し、職業選択の自由は近代以降までほとんど存在しなかった。',
		choices: [
			{
				id: 'inherit',
				label: '親の仕事を継ぐ',
				subLabel: '安定はするが、親と同じ階層から抜け出せない',
				effects: { relations: 5, wealthDelta: 0 },
				outcomeText: '親の背中を追うように、同じ生業で生きていくことになった。'
			},
			{
				id: 'apprentice',
				label: '職人の徒弟・奉公に出る',
				subLabel: '年季奉公で技術を学ぶ',
				effects: { knowledge: 8, wealthDelta: 25, relations: -5, occupationChange: '徒弟・奉公人' },
				outcomeText: '親元を離れ、厳しい親方のもとで数年の下働きが始まった。'
			},
			{
				id: 'migrate',
				label: '町へ出て仕事を探す',
				subLabel: '故郷を離れる賭け（都市の不衛生と貧困リスク）',
				survivalChance: 0.92,
				deathCause: '都市での貧困・疫病',
				effects: { wealthDelta: 20, relations: -15, knowledge: 4, occupationChange: '都市の日雇い労働者', locationChange: 'urban' },
				outcomeText: '町は広く、頼れる知り合いは誰もいなかった。',
				deathText: '人混みの裏手の長屋で寝起きするうち、咳と熱が抜けなくなった。身寄りのない町では、看病してくれる者も見つからなかった。'
			}
		]
	},
	{
		id: 'marriage_serf_merchet',
		title: '結婚したければ領主に「結婚税」を納めよ',
		category: 'livelihood',
		regionIds: ['med_europe'],
		classIds: ['peasant'],
		requiresUnmarried: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 16,
		maxAge: 32,
		description:
			'同じ荘園の相手と所帯を持とうとしたが、農奴は領主の許可なく結婚することができない。領主の代官から「結婚税（メルケット）として家畜か銀貨を納めよ」と命じられた。',
		factBox: '中世ヨーロッパの農奴には結婚の自由すらなく、結婚する際には領主へ「結婚税（メルケット）」を納める義務があった。',
		choices: [
			{
				id: 'pay_merchet',
				label: 'なけなしの蓄えから結婚税を領主に納めて結婚する',
				subLabel: '蓄えは減るが、正式に所帯を持てる',
				effects: { wealthDelta: -20, relations: 15, happiness: 8, marry: true },
				outcomeText: '領主に銀貨と鶏を差し出して許可をもらい、ようやく小さな所帯を持った。'
			},
			{
				id: 'delay_marriage',
				label: '結婚税が払えないため、今回の縁談は見送る',
				subLabel: '独り身のまま働き続ける',
				effects: { happiness: -8, relations: -5 },
				outcomeText: '税を払う余裕がなく、結婚の話は立ち消えになった。'
			}
		]
	},
	{
		id: 'marriage',
		title: '縁談が持ち込まれた',
		allRegions: true,
		category: 'livelihood',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern', 'industrial'],
		requiresUnmarried: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 15,
		maxAge: 34,
		description:
			'親や周囲が縁談をまとめてきた。顔もよく知らない相手で、家の格や持参金・働き手としての都合が優先されているが、断れば家に居づらくなる。',
		factBox: '近代以前の社会では、結婚は個人の恋愛ではなく、労働力の確保と家同士の経済的・身分的取り決めだった。',
		choices: [
			{
				id: 'accept',
				label: '家の取り決めどおり縁談を受ける',
				subLabel: '新しい所帯を持ち、家の働き手を増やす',
				effects: { relations: 15, happiness: 5, wealthDelta: 10, marry: true },
				outcomeText: '祝言の日、相手の顔を初めてまともに見た。今日からこの人と生きていくことになる。'
			},
			{
				id: 'refuse',
				label: 'この縁談は断る',
				subLabel: '周囲との摩擦を覚悟で独り身を続ける',
				effects: { relations: -10, happiness: 2 },
				outcomeText: '縁談を断り、家族や仲人との間に気まずい空気が残った。'
			}
		]
	},
	{
		id: 'marriage_modern',
		title: '結婚・パートナーとのこれからの暮らし',
		allRegions: true,
		category: 'livelihood',
		eraIds: ['modern'],
		requiresUnmarried: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 20,
		maxAge: 40,
		description:
			'付き合いのある相手（または見合い相手）と、結婚して一緒に所帯を持つかどうかの話が出ている。個人の意思で選べる時代になったが、生活費や将来の不安もつきまとう。',
		factBox: '現代は人類史上初めて「誰と結婚するか・しないか」を個人が選べる地域が広がった時代だが、経済的事情による未婚化・晩婚化も進行している。',
		choices: [
			{
				id: 'marry_modern_yes',
				label: '結婚して二人で新しい所帯を築く',
				subLabel: '支え合う家族を得る',
				effects: { relations: 15, happiness: 10, wealthDelta: 5, marry: true },
				outcomeText: '二人で新しい暮らしを始めた。'
			},
			{
				id: 'marry_modern_no',
				label: '今は結婚せず、ひとりで生きる道を選ぶ',
				subLabel: '自分の時間と自由を優先する',
				effects: { happiness: 2, knowledge: 3 },
				outcomeText: '結婚は選ばず、自分のペースで暮らし続けることにした。'
			}
		]
	},
	{
		id: 'childbirth_old',
		title: '子どもを授かり、出産のときが来た',
		allRegions: true,
		category: 'common_sense',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern', 'industrial'],
		sex: 'F',
		requiresSpouse: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 16,
		maxAge: 40,
		description:
			'陣痛が始まった。消毒という概念も帝王切開もない時代、お産は文字どおり命がけの大仕事であり、産婆も手を洗わずに処置にあたる。',
		factBox: '19世紀にゼンメルワイスが「医師の手洗い」を提唱するまで、産褥熱（細菌感染）や難産により出産100回あたり1〜2人の母親が命を落とした。複数回出産すれば生涯で1割近い女性が亡くなった。',
		choices: [
			{
				id: 'midwife',
				label: '費用を払って経験豊富な産婆を呼び、湯を沸かさせる',
				subLabel: '蓄えは減るが、できる限りの手を尽くす',
				survivalChance: 0.91,
				deathCause: '産褥熱・難産による出血',
				effects: { wealthDelta: -10, relations: 10, happiness: 12, addChild: true },
				outcomeText: '長い苦しみの果てに、産声が響いた。母子ともに命をつないだ。',
				deathText: '長い苦しみの果てに赤子は産まれたが、出血が止まらなかった。産婆の湯も間に合わず、母は赤子の声を聞きながら力尽きた。'
			},
			{
				id: 'charm',
				label: '金がないため家族の手伝いと護符・祈祷だけで産む',
				subLabel: '難産や産後の熱（産褥熱）のリスクが高い',
				survivalChance: 0.83,
				deathCause: '産褥熱・難産',
				effects: { relations: 6, happiness: 8, addChild: true },
				outcomeText: '薄暗い部屋で祈りの声が響くなか、赤子を産み落とした。母子ともに、どうにか生き延びた。',
				deathText: '薄暗い部屋で祈りの声が続くなか、赤子はなかなか出てこなかった。数日後、産後の熱が引かないまま母は息を引き取った。'
			}
		]
	},
	{
		id: 'childbirth_father_old',
		title: '妻が産気づき、難産になっている',
		allRegions: true,
		category: 'common_sense',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern', 'industrial'],
		sex: 'M',
		requiresSpouse: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 17,
		maxAge: 45,
		description:
			'妻の陣痛が一昼夜続いているが、まだ生まれない。奥の部屋から苦しむ声が聞こえてくる。どう対処するか決めなければならない。',
		factBox: '近代以前の出産では母子ともに命を落とすことが珍しくなく、妻を産褥熱や難産で亡くして男手ひとつで残される夫も多かった。',
		choices: [
			{
				id: 'hire_skilled_midwife',
				label: '借金をしてでも熟練の産婆・医者を呼ぶ',
				subLabel: '出費は重いが、妻と子の生存率を高める',
				effects: { wealthDelta: -15, relations: 10, happiness: 10, addChild: true, killSpouseChance: 0.06 },
				outcomeText: '明け方、ついに赤子の泣き声が聞こえてきた。'
			},
			{
				id: 'rely_on_village_birth',
				label: '昔ながらのやり方と神仏への祈りに委ねる',
				subLabel: '費用はかからないが、妻が命を落とす危険がある',
				effects: { relations: 4, happiness: 5, addChild: true, killSpouseChance: 0.16 },
				outcomeText: '祈りながら夜明けを待った。'
			}
		]
	},
	{
		id: 'childbirth_modern',
		title: '新しい子どもを迎えるかどうかの決断',
		allRegions: true,
		category: 'livelihood',
		eraIds: ['modern'],
		sex: 'F',
		requiresSpouse: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 20,
		maxAge: 42,
		description:
			'パートナーとの間に子どもを持つか、またどこで出産・子育てをするかを話し合っている。現代の医療は出産の危険を劇的に減らしたが、子育てと教育には大きな費用がかかる。',
		factBox: '現代では妊産婦死亡率は前近代の100分の1以下に激減し、生まれた子どもの95%以上が成人する一方、養育費・教育費の負担から少子化が進んでいる。',
		choices: [
			{
				id: 'birth_modern_hospital',
				label: '医療設備の整った病院で出産し、子どもを育てる',
				subLabel: '費用はかかるが母子ともに安心',
				survivalChance: 0.996,
				deathCause: '出産時の合併症',
				effects: { wealthDelta: -12, happiness: 12, relations: 10, addChild: true },
				outcomeText: '清潔な病室で新しい命を迎えた。これからの暮らしが賑やかになる。',
				deathText: '分娩の途中で容体が急変し、医師たちが駆け寄った。懸命な処置もむなしく、新しい命を抱くことなく帰らぬ人となった。'
			},
			{
				id: 'birth_modern_wait',
				label: '経済的な余裕がないため、今は子どもを見送る',
				subLabel: '現在の生活水準を維持する',
				effects: { wealthDelta: 5, happiness: -2 },
				outcomeText: '現在の家計と暮らしを考え、子どもは持たない（増やさない）選択をした。'
			}
		]
	},
	{
		id: 'childbirth_father_modern',
		title: 'パートナーとの間に新しい子どもを迎える決断',
		allRegions: true,
		category: 'livelihood',
		eraIds: ['modern'],
		sex: 'M',
		requiresSpouse: true,
		isLifecycle: true,
		repeatable: true,
		minAge: 20,
		maxAge: 48,
		description:
			'妻との間に子どもを持つか、またどのように子育てと家計をやりくりするかを話し合っている。現代の医療は出産の危険を劇的に減らしたが、子育てと教育には大きな費用がかかる。',
		factBox: '現代では妊産婦死亡率は前近代の100分の1以下に激減し、生まれた子どもの95%以上が成人する一方、養育費・教育費の負担から少子化が進んでいる。',
		choices: [
			{
				id: 'birth_modern_father_hospital',
				label: '医療設備の整った病院での出産を支え、子どもを育てる',
				subLabel: '費用はかかるが母子ともに安心',
				effects: { wealthDelta: -12, happiness: 12, relations: 10, addChild: true, killSpouseChance: 0.002 },
				outcomeText: '清潔な病室で新しい命を迎えた。これからの暮らしが賑やかになる。'
			},
			{
				id: 'birth_modern_father_wait',
				label: '経済的な余裕がないため、今は子どもを見送る',
				subLabel: '現在の生活水準を維持する',
				effects: { wealthDelta: 5, happiness: -2 },
				outcomeText: '現在の家計と暮らしを考え、子どもは持たない（増やさない）選択をした。'
			}
		]
	},
	{
		id: 'tax_burden',
		title: '徴税官がやってきた',
		allRegions: true,
		category: 'livelihood',
		eraIds: ['ancient', 'classical', 'medieval', 'early_modern'],
		classIds: ['peasant', 'artisan'],
		repeatable: true,
		minAge: 18,
		maxAge: 60,
		description: '今年の収穫の半分近くを納めよ、と命じられた。残りでは、冬を越せるか分からない。',
		factBox: '前近代の農民は収穫の3〜5割を税・地代・十分の一税として納めるのが普通だった。',
		choices: [
			{
				id: 'pay',
				label: '言われた通り納める',
				subLabel: '蓄えを切り崩す',
				effects: { wealthDelta: -25, happiness: -8, health: -3 },
				outcomeText: '倉は空になった。春までの食べ物を、何とか工面する。'
			},
			{
				id: 'hide',
				label: '一部を隠して納める',
				subLabel: '発覚すれば重い罰',
				survivalChance: 0.9,
				deathCause: '脱税の罰による処刑・投獄',
				effects: { wealthDelta: -10, happiness: -3 },
				outcomeText: '息を殺して査察をやり過ごした。',
				deathText: '査察役は隠した穀物を見つけ出した。役人に引き立てられ、申し開きも聞かれぬまま、刑場に引き出された。'
			}
		]
	},
	{
		id: 'child_labor',
		title: '工場から働き手が足りないと言われた',
		allRegions: true,
		category: 'livelihood',
		eraIds: ['industrial'],
		classIds: ['peasant', 'artisan'],
		minAge: 8,
		maxAge: 13,
		description: '賃金はほんのわずかな小銭だが、学校に通わせる余裕などこの家にはない。',
		factBox: '19世紀の英国では紡績工場の労働者の相当な割合を子どもや年少者が占めており、明治期の日本の製糸・紡績工場や炭鉱でも多くの年少者が長時間労働に従事した。',
		choices: [
			{
				id: 'work',
				label: '工場で働く',
				subLabel: '家計を助ける',
				survivalChance: 0.93,
				deathCause: '工場事故・肺疾患',
				effects: { wealthDelta: 15, health: -15, knowledge: -3 },
				outcomeText: '朝5時の汽笛とともに、十数時間の労働が始まった。',
				deathText: '回り続ける機械の下に屑綿を拾いに入った瞬間、腕が巻き込まれた。悲鳴を聞いて職工が駆けつけたが、出血は止まらなかった。'
			},
			{
				id: 'school',
				label: '学校に通わせてもらう',
				subLabel: '家は苦しくなる',
				effects: { knowledge: 15, wealthDelta: -10, literate: true },
				outcomeText: '読み書きを覚えた。ほかの子たちが知らない世界が、本の中にあった。'
			}
		]
	},
	{
		id: 'vaccine_modern',
		title: '新しいワクチンの案内が届いた',
		allRegions: true,
		category: 'common_sense',
		eraIds: ['modern'],
		minAge: 14,
		maxAge: 80,
		description: '近所では「副作用が怖い」という声もある。一方で、この病気で亡くなった人も身近にいる。',
		factBox: '天然痘は1980年に根絶宣言が出された、人類が根絶に成功した唯一のヒトの感染症である。',
		choices: [
			{
				id: 'vaccinate',
				label: '接種を受ける',
				subLabel: '統計を信じる',
				effects: { health: 5, knowledge: 2 },
				outcomeText: '腕に小さな痛みがあっただけだった。'
			},
			{
				id: 'skip',
				label: '接種を見送る',
				subLabel: '様子を見る',
				survivalChance: 0.97,
				deathCause: '予防可能だった感染症',
				effects: { health: -3 },
				outcomeText: '何も起こらなかった。ただし周囲の高い接種率のおかげかもしれない。',
				deathText: '数週間後、高い熱と発疹が出て寝込んだ。感染は肺に広がり、予防できたはずの病は回復を待たずに命を奪った。'
			}
		]
	},
	{
		id: 'midlife_crisis_30s',
		title: '隣家が借財で土地を手放した',
		allRegions: true,
		category: 'livelihood',
		minAge: 28,
		maxAge: 46,
		description:
			'不作や病が重なり、長年隣で暮らしてきた一家が土地や家財を手放して去ることになった。助けを求められているが、自分の家にも余裕はない。',
		factBox: '公的な社会保障や保険が存在しなかった時代、凶作や働き手の病気はそのまま一家の離散や身売りにつながった。',
		choices: [
			{
				id: 'share_food',
				label: '蓄えを分けて助ける',
				subLabel: '自分の家は苦しくなるが、縁は残る',
				effects: { wealthDelta: -20, relations: 15, happiness: 6 },
				outcomeText: 'わずかな食料と銭を分け与えた。苦しい冬だったが、周囲との信頼は深まった。'
			},
			{
				id: 'buy_land',
				label: '手放された道具や畑を引き受ける',
				subLabel: '冷徹だが家の暮らしを広げる好機',
				effects: { wealthDelta: 25, relations: -12, happiness: -4 },
				outcomeText: '安く譲り受けた畑で収穫は増えたが、近隣の視線はしばらく冷たかった。'
			},
			{
				id: 'watch_quietly',
				label: '自分の家族を守るだけで精一杯だと見送る',
				subLabel: '余計な関わりを避ける',
				effects: { relations: -5, happiness: -3 },
				outcomeText: '去っていく背中に声をかけることもできず、戸を閉めた。明日は我が身かもしれなかった。'
			}
		]
	},
	{
		id: 'elder_passing_torch',
		title: '体に衰えが見え始めた',
		allRegions: true,
		category: 'livelihood',
		minAge: 48,
		maxAge: 75,
		description:
			'昔のように朝から晩まで体を動かすのがつらくなってきた。これから先の暮らしをどう支えていくか、決める時期が来ている。',
		factBox: '年金制度が生まれる19世紀末以前、老後の生存は「動ける限り働き続ける」か「家族・共同体の扶養」に完全に依存していた。',
		choices: [
			{
				id: 'rely_family',
				label: '若い世代に仕事を譲り、知恵を伝える役に回る',
				subLabel: '収入は減るが、体への負担は軽くなる',
				effects: { health: 8, relations: 10, knowledge: 5, wealthDelta: -15 },
				outcomeText: '力仕事を若い者に任せ、これまで培った経験や段取りを教えながら穏やかに暮らした。'
			},
			{
				id: 'work_on',
				label: 'まだ現役として自分の手で働き続ける',
				subLabel: '誰にも頼らず食い扶持を稼ぐ',
				survivalChance: 0.88,
				deathCause: '過労と衰弱',
				effects: { wealthDelta: 15, health: -12 },
				outcomeText: '痛む腰をさすりながら仕事場に出続けた。',
				deathText: '痛む腰をさすりながら仕事場に出続けたある日、足がもつれて倒れ込んだ。そのまま起き上がれず、衰えた体は力尽きた。'
			}
		]
	}
];
