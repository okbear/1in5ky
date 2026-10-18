import type { DecisionEvent } from '../../types';

/** 古代・古典期の歴史の大波・戦争・神判・悪税イベント */
export const ANCIENT_CLASSICAL_EVENTS: DecisionEvent[] = [
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
		id: 'trial_by_ordeal',
		title: '身に覚えのない盗みの疑いと「熱湯の神判」',
		category: 'common_sense',
		eraIds: ['ancient', 'classical', 'medieval'],
		classIds: ['enslaved', 'peasant', 'artisan'],
		minAge: 14,
		maxAge: 65,
		description:
			'有力者の倉から穀物と銀が盗まれ、たまたま近くを通ったあなたに嫌疑がかかった。証拠はない。「神が真偽を裁く」として、煮えたぎる釜の底から素手で石を掴み出す「神判」を命じられた。',
		factBox: '古代メソポタミアの川神判、日本の盟神探湯（くがたち）、中世ヨーロッパの熱湯・鉄火裁判など、前近代の裁判では火傷の治り具合で有罪・無罪が決められた。',
		choices: [
			{
				id: 'endure_ordeal',
				label: '神に祈り、煮えたぎる湯へ腕を突っ込む',
				subLabel: '3日後に傷が化膿すれば「有罪」として処刑される',
				survivalChance: 0.6,
				deathCause: '神判による処刑・火傷の敗血症',
				effects: { health: -18, happiness: -15, relations: -5 },
				outcomeText: '腕にひどい火傷を負ったが、包帯が解かれたとき奇跡的に化膿しておらず、「神が無実を示した」と放免された。'
			},
			{
				id: 'bribe_official',
				label: '家の蓄えと家財をすべて差し出して見逃してもらう',
				subLabel: '無実でも金で命を買うしかない',
				survivalChance: 0.94,
				deathCause: '獄中での衰弱',
				effects: { wealthDelta: -55, happiness: -12 },
				outcomeText: '蓄えはすべて消えたが、役人は「真犯人は別にいた」と帳面を書き換えた。'
			}
		]
	}
];
