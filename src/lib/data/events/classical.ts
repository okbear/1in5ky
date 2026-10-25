import type { DecisionEvent } from '../../types';

/** 帝国・古典期（ローマ・漢・インド・その他の世界）の決断イベント */
export const CLASSICAL_EVENTS: DecisionEvent[] = [
  {
    "id": "cls_rome_insula_fire",
    "title": "ローマ市街の木造高層アパート（インスラ）の大火",
    "category": "historical_wave",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_rome"
    ],
    "minAge": 12,
    "maxAge": 60,
    "description": "スブラ地区の過密な木造高層アパート（インスラ）の最上階から火の手が上がった。狭い階段は逃げ惑う住民で溢れ、自警消防団（ウィギレス）が建物を打ち壊して延焼を防ごうとしている。",
    "factBox": "古代ローマの都市インスラは6階建てにも達し、採暖や調理の火による大火災が日常茶飯事であった。",
    "choices": [
      {
        "id": "flee_insula_stairs",
        "label": "家財を捨てて煙の充満する階段を一気に駆け下りる",
        "subLabel": "無一文になるが脱出を優先する",
        "survivalChance": 0.84,
        "deathCause": "インスラ火災での一酸化炭素中毒・焼死",
        "effects": {
          "wealthDelta": -50,
          "health": -10,
          "happiness": -10
        },
        "outcomeText": "煤まみれになりながら通りへ転がり出た。家財は灰燼に帰したが、命だけは拾うことができた。",
        "deathText": "階段が途中で崩落し、猛烈な煙と火炎のなかに呑み込まれて息を引き取った。"
      },
      {
        "id": "join_vigiles_bucket",
        "label": "自警団（ウィギレス）に加わり、バケツリレーで消火を手伝う",
        "subLabel": "市民としての責任を果たし日当と信用を得る",
        "survivalChance": 0.8,
        "deathCause": "消火活動中の梁落下・圧死",
        "effects": {
          "relations": 20,
          "wealthDelta": 15,
          "knowledge": 5
        },
        "outcomeText": "決死のバケツリレーで隣家への延焼を防ぎ、自警団の隊長から銀貨と感謝の言葉を贈られた。",
        "deathText": "上階の焼け落ちた梁が頭上へ崩落し、ヘルメットごと砕かれて即死した。"
      }
    ]
  },
  {
    "id": "cls_rome_lead_poisoning",
    "title": "水道管の鉛と「サパ」による原因不明の腹痛",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_rome"
    ],
    "minAge": 16,
    "maxAge": 65,
    "description": "水道橋から届く水を鉛の管で引き、鉛鍋で煮詰めた甘味料「サパ」を入れたワインを飲む日々が続いている。手足の震えと激しい疝痛（腹痛）に襲われ、原因がわからず衰弱していく。",
    "factBox": "古代ローマ貴族や都市民の間では、鉛製水道管や鉛容器による鉛中毒（鉛疝痛や不妊、精神障害）が広く蔓延していた。",
    "choices": [
      {
        "id": "stop_boiled_wine",
        "label": "甘味ワインを断ち、陶器の甕に汲み置いた天水だけを飲む",
        "subLabel": "生活習慣を改め体の毒素を抜く",
        "effects": {
          "health": 20,
          "knowledge": 10,
          "happiness": 5
        },
        "outcomeText": "数か月後、手足の震えと激痛が嘘のように引き、失われていた活力を取り戻すことができた。"
      },
      {
        "id": "seek_temple_incubation",
        "label": "アスクレピオス神殿で夜籠もり（インキュベーション）の夢告を待つ",
        "subLabel": "神殿に寄進して神託による治癒を祈る",
        "survivalChance": 0.86,
        "deathCause": "重症慢性鉛中毒による腎不全・衰弱死",
        "effects": {
          "wealthDelta": -20,
          "relations": 10,
          "happiness": 5
        },
        "outcomeText": "神殿の神官から処方された薬草湯と食事療法により、完全ではないものの痛みが和らいだ。",
        "deathText": "全身の麻痺と激痛が進行し、神殿の寝台の上で静かに息を引き取った。"
      }
    ]
  },
  {
    "id": "cls_rome_gladiator_ticket",
    "title": "フラウィウス円形闘技場（コロッセウム）の興行",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_rome"
    ],
    "minAge": 15,
    "maxAge": 40,
    "description": "皇帝主催の凱旋記念闘技会が開催され、円形闘技場の前座として猛獣狩り（ウェナティオ）の槍持ち人足が急募された。高額の日当が提示されているが、相手はアフリカから運ばれた飢えた豹である。",
    "factBox": "コロッセウムの闘技会では、正規の剣闘士だけでなく貧民や犯罪者が猛獣狩りの前座として危険な舞台に立たされた。",
    "choices": [
      {
        "id": "fight_beast_arena",
        "label": "槍を握り、大歓声のコロッセウムの砂を踏む",
        "subLabel": "生還すれば大金と観客の称賛を得る",
        "survivalChance": 0.72,
        "deathCause": "闘技場での猛獣（豹・ライオン）による裂傷死",
        "effects": {
          "wealthDelta": 60,
          "happiness": 15,
          "health": -15
        },
        "outcomeText": "飛びかかってきた猛獣を間一髪で槍の穂先で突き伏せ、万雷の拍手のなかで皇帝の恩賞金を手に入れた。",
        "deathText": "背後から豹に飛びかかられ、喉笛を食い破られて血染めの砂の上に崩れ落ちた。"
      },
      {
        "id": "sell_wine_outside_arena",
        "label": "闘技場の外で観客相手に冷やしたワインとパンを売り歩く",
        "subLabel": "血は流さないが地道な商売で利益を得る",
        "effects": {
          "wealthDelta": 20,
          "relations": 10,
          "happiness": 5
        },
        "outcomeText": "熱狂した観客たちにワインが飛ぶように売れ、無傷で手堅い儲けを出すことができた。"
      }
    ]
  },
  {
    "id": "cls_rome_patron_morning_client",
    "title": "パトロンへの朝参り（サリュタティオ）と施しの小銭",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_rome"
    ],
    "minAge": 16,
    "maxAge": 70,
    "description": "毎朝夜明け前にトガを羽織り、有力な元老院議員の邸宅前で施し（スポルトゥラ）を待つ行列に並ぶ。今日のパトロンは機嫌が悪く、法廷での偽証支持を求めてきた。",
    "factBox": "古代ローマのパトロヌス＝クリエンス関係は社会秩序の基礎であり、平民は毎朝の挨拶と政治的支持の対価に金品を得た。",
    "choices": [
      {
        "id": "support_patron_court",
        "label": "民会と法廷でパトロンを支持し、大声で歓声を上げる",
        "subLabel": "手厚い金銭と将来の便宜を約束される",
        "effects": {
          "wealthDelta": 25,
          "relations": 15,
          "happiness": -5
        },
        "outcomeText": "パトロンの意向通りに法廷で叫び、銀貨の入った小袋と上等な食事の相伴に預かった。"
      },
      {
        "id": "leave_patron_household",
        "label": "不正な裁判への加担を嫌い、無言で列を離れる",
        "subLabel": "日銭を失うが後ろ暗い責任を負わずに済む",
        "effects": {
          "happiness": 10,
          "relations": -15,
          "wealthDelta": -15
        },
        "outcomeText": "自尊心を守って立ち去った。当面の生活は苦しくなったが、心の晴れやかさを保った。"
      }
    ]
  },
  {
    "id": "cls_rome_grain_dole_fraud",
    "title": "アノナ（公定無償穀物給付）の受給権調査",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_rome"
    ],
    "minAge": 18,
    "maxAge": 60,
    "description": "ローマ市民権を持つ者に無償で配当される小麦給付（アノナ）の受給資格の厳格な再調査が始まった。不正受給を疑われた隣人をかばうか、沈黙して自己の受給券を守るか。",
    "factBox": "帝政ローマでは20万人前後の市民に毎月無償の穀物が給付され、都市民の最低限の生存を国家が保障していた。",
    "choices": [
      {
        "id": "testify_for_neighbor",
        "label": "長年の友人である隣人の市民権を役所の前で証言する",
        "subLabel": "友人を救うが役人に目をつけられるリスク",
        "effects": {
          "relations": 25,
          "happiness": 10,
          "wealthDelta": 5
        },
        "outcomeText": "堂々たる証言により隣人の受給資格が認められ、二つの家族で祝杯の大麦パンを分かち合った。"
      },
      {
        "id": "show_own_tessera",
        "label": "自らの木製受給票（テッセラ）だけを提示して立ち去る",
        "subLabel": "安全第一で自家の受給権を確保する",
        "effects": {
          "wealthDelta": 15,
          "relations": -10,
          "happiness": -5
        },
        "outcomeText": "何事もなく自分の取り分を持ち帰ったが、隣人が受給を断たれて泣き崩れる姿が目に焼き付いた。"
      }
    ]
  },
  {
    "id": "cls_han_salt_iron_monopoly",
    "title": "塩鉄専売制と粗悪な農具の軋み",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_han"
    ],
    "minAge": 14,
    "maxAge": 55,
    "description": "武帝の財政再建策により塩と鉄が国家専売となった。官営工房から配給される鋤や鎌は脆くてすぐ折れ、塩は砂混じりで法外な高値である。密造塩の行商人が村へやってきた。",
    "factBox": "前漢の塩鉄専売は国家財政を潤した一方、農民には粗悪な官製鉄器が高値で押し付けられ、大きな社会不満となった（塩鉄論）。",
    "choices": [
      {
        "id": "buy_smuggled_salt",
        "label": "密造塩の商人から白く上質な塩を安く買い入れる",
        "subLabel": "美味な塩を手に入れるが密告されれば労役刑",
        "survivalChance": 0.82,
        "deathCause": "専売法違反による獄死・過酷な鉱山労役",
        "effects": {
          "wealthDelta": 15,
          "health": 5,
          "relations": 10
        },
        "outcomeText": "密造塩を床下に隠し、久しぶりに家族に味の染みた粥を食べさせることができた。",
        "deathText": "役人の家宅捜索で塩が見つかり、鉄鉱山へ送られて落盤事故で命を落とした。"
      },
      {
        "id": "endure_official_iron",
        "label": "折れた官製農具を自ら鍛冶屋で打ち直して使う",
        "subLabel": "余計な手間はかかるが法に触れる心配はない",
        "effects": {
          "knowledge": 10,
          "wealthDelta": -10,
          "health": 5
        },
        "outcomeText": "泥炭の火で鉄を打ち直し、何とか春の耕起に間に合わせることができた。"
      }
    ]
  },
  {
    "id": "cls_han_corvee_great_wall",
    "title": "北方辺境・長城防備の戍卒（じゅそつ）徴募",
    "category": "historical_wave",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_han"
    ],
    "minAge": 18,
    "maxAge": 45,
    "description": "朝廷の命により、北方辺境の居延要塞へ向かう戍卒（兵役）に指名された。匈奴の騎馬隊と厳冬の砂漠が待ち受ける過酷な任地へ旅立たねばならない。",
    "factBox": "漢代の農民男子には2年間の兵役と毎年の労役義務があり、居延漢簡などからその過酷な勤務実態が窺える。",
    "choices": [
      {
        "id": "march_to_frontier",
        "label": "弓と革甲冑を身につけ、万里の長城の烽火台へ赴く",
        "subLabel": "生きて勤め上げれば兵役免除の身分証を得る",
        "survivalChance": 0.73,
        "deathCause": "匈奴騎兵の急襲・厳冬の凍死",
        "effects": {
          "knowledge": 15,
          "wealthDelta": 20,
          "health": -15
        },
        "outcomeText": "狼煙台で砂塵を見張り、数度の襲撃を撃退して任期を満了した。勲功の木簡を携えて故郷へ戻った。",
        "deathText": "零下三十度の吹雪の夜、哨戒中に匈奴の騎兵に囲まれ、矢の雨を浴びて倒れた。"
      },
      {
        "id": "hire_replacement_soldier",
        "label": "銀と銅銭をかき集め、身代わりの傭兵を立てる",
        "subLabel": "財産の大半を失うが辺境行きを免れる",
        "effects": {
          "wealthDelta": -50,
          "happiness": 10,
          "health": 5
        },
        "outcomeText": "大金を払って身代わりを立て、故郷に残って畑を守った。借金は残ったが家族と暮らせる喜びを噛み締めた。"
      }
    ]
  },
  {
    "id": "cls_han_local_official_bribe",
    "title": "県令の苛政と人頭税（算賦）の取り立て",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_han"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "県令の役人が村に乗り込み、成人一人あたり百二十銭の算賦（人頭税）の納入を厳しく迫ってきた。今年生まれた赤子にも銭を課すと言い張り、払えぬ者の家を荒らしている。",
    "factBox": "漢代の算賦や口賦（幼児税）は重い負担で、困窮した農民が課税を逃れるために赤子を間引く悲劇も生んだ。",
    "choices": [
      {
        "id": "pay_poll_tax_grain",
        "label": "蓄えていた麦と織布を売り払って算賦を完納する",
        "subLabel": "冬の蓄えが底をつくが暴行と投獄は免れる",
        "effects": {
          "wealthDelta": -30,
          "happiness": -10,
          "relations": 5
        },
        "outcomeText": "全財産を差し出して受領証の木簡を受け取った。冬の食卓は薄い粥ばかりとなったが、一家の平穏を守った。"
      },
      {
        "id": "unite_villagers_petition",
        "label": "村の三老（長老）とともに郡の太守へ減免の直訴状を出す",
        "subLabel": "不正な官吏を罷免できる可能性があるが逆恨みの危険",
        "survivalChance": 0.81,
        "deathCause": "過酷な取り立て役人による獄中拷問死",
        "effects": {
          "relations": 20,
          "knowledge": 10,
          "wealthDelta": 10
        },
        "outcomeText": "郡太守が県令の不正を認め、不当な上乗せ分が返還された。村人たちから英雄として称えられた。",
        "deathText": "直訴状を出した夜に役人の手下に捕縛され、牢獄で過酷な拷問を受けて絶命した。"
      }
    ]
  },
  {
    "id": "cls_han_locust_plague",
    "title": "空を覆うバッタの大群（蝗害）と飢饉",
    "category": "historical_wave",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_han"
    ],
    "minAge": 10,
    "maxAge": 60,
    "description": "太陽を遮る黒雲のような飛蝗（トビバッタ）の大群が飛来し、青々とした小麦畑を瞬く間に食い尽くした。葉も茎も失われ、大地のすべてが丸裸にされた。",
    "factBox": "中国北部では旱魃に続いて蝗害（こうがい）が頻発し、水害・旱魃と並ぶ「三大天災」として恐れられた。",
    "choices": [
      {
        "id": "catch_locusts_for_food",
        "label": "網でバッタを捕らえて炒り、貴重な蛋白源として食べる",
        "subLabel": "偏見を捨てて害虫を食糧に変え飢えを凌ぐ",
        "effects": {
          "health": 10,
          "knowledge": 5,
          "wealthDelta": 5
        },
        "outcomeText": "香ばしく煎ったバッタを家族で食べ、食料が底をつく中で誰も餓死することなく春を迎えた。"
      },
      {
        "id": "pray_to_heaven_locust",
        "label": "天の怒りを鎮めるため、祭壇を築いて雨乞いと祈祷を行う",
        "subLabel": "神仏と祖先に祈るが食糧問題は解決しない",
        "survivalChance": 0.82,
        "deathCause": "蝗害による食糧途絶・餓死",
        "effects": {
          "happiness": 5,
          "relations": 10,
          "wealthDelta": -20
        },
        "outcomeText": "数日後に強い雨風が吹き荒れてバッタが去り、わずかに残った芋を掘り出して命を繋いだ。",
        "deathText": "草の根も木の皮も尽き果て、祈祷壇の前で飢えと衰弱のため静かに息絶えた。"
      }
    ]
  },
  {
    "id": "cls_han_silk_road_caravan",
    "title": "河西回廊のオアシス隊商への荷駄人夫",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_han"
    ],
    "minAge": 16,
    "maxAge": 45,
    "description": "長安から敦煌へ向かう西方交易のラクダ隊商が、絹と茶を運ぶ頑強な人夫を募集している。砂漠の「白龍堆」と呼ばれる死の砂丘を越える危険な旅である。",
    "factBox": "漢の武帝による河西四郡の設置以降、シルクロードを通じて中国の絹と西方原産のガラス・香辛料が盛んに行き交った。",
    "choices": [
      {
        "id": "cross_taklamakan_caravan",
        "label": "ラクダの手綱を引き、砂漠のオアシス街道を踏破する",
        "subLabel": "渇水と砂嵐を乗り越えれば高額な給金と異国の品",
        "survivalChance": 0.75,
        "deathCause": "砂漠での道迷い・渇水死",
        "effects": {
          "wealthDelta": 50,
          "knowledge": 25,
          "happiness": 10
        },
        "outcomeText": "オアシス都市ホータンまで無事に荷を届け、美しい翡翠と銀貨の報酬を得て凱旋した。",
        "deathText": "砂嵐で隊商からはぐれ、見渡す限りの砂丘のなかで水筒が干上がり力尽きた。"
      },
      {
        "id": "stay_dunhuang_warehouse",
        "label": "敦煌の宿駅で荷物の積み下ろしと倉庫番の仕事に留まる",
        "subLabel": "砂漠には入らず安全な拠点で日当を稼ぐ",
        "effects": {
          "wealthDelta": 15,
          "relations": 5,
          "health": 5
        },
        "outcomeText": "隊商宿で各地の商人と交流しながら、安全に実直な稼ぎを積み立てることができた。"
      }
    ]
  },
  {
    "id": "cls_india_ganges_monsoon_fever",
    "title": "ガンジス川の雨期氾濫と水瀉性熱病",
    "category": "historical_wave",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_india"
    ],
    "minAge": 8,
    "maxAge": 60,
    "description": "激しいモンスーンの雨でガンジス川が氾濫し、集落一帯が泥水に浸かった。井戸水が濁り、激しい下痢と嘔吐を伴う熱病（コレラ様疾患）が村中に急速に広がり始めている。",
    "factBox": "ガンジス川流域の高温多湿なモンスーン気候は、古代から激しい水系感染症の多発地帯であった。",
    "choices": [
      {
        "id": "boil_water_neem",
        "label": "水を必ず火にかけて煮沸し、ニームの苦い葉を煎じて飲む",
        "subLabel": "伝統の知恵で汚染された水から身を守る",
        "effects": {
          "health": 15,
          "knowledge": 10,
          "happiness": 5
        },
        "outcomeText": "煮沸水を徹底したことで家族全員が病魔を免れ、近隣の患者たちにも煎じ薬を配って感謝された。"
      },
      {
        "id": "drink_holy_floodwater",
        "label": "聖なる川の浄化の力を信じ、泥水をそのまま飲んで祈る",
        "subLabel": "信仰を優先するが重度の細菌感染リスク",
        "survivalChance": 0.76,
        "deathCause": "ガンジス氾濫時の重症急性コレラ様下痢症",
        "effects": {
          "happiness": 5,
          "relations": 10,
          "health": -20
        },
        "outcomeText": "激しい下痢熱で生死の境をさまよったが、数日間の絶食の末に奇跡的に一命を留めた。",
        "deathText": "止まらぬ下痢と脱水により体が冷たくなり、痙攣を起こしながら息を引き取った。"
      }
    ]
  },
  {
    "id": "cls_india_ashoka_edicts_hearing",
    "title": "マウリヤ朝アショーカ王の法勅の石柱",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_india"
    ],
    "minAge": 12,
    "maxAge": 65,
    "description": "街道の辻に磨き上げられた巨大な砂岩の石柱が建てられ、王の役人が「ダルマ（法）」の教えを民衆に読み聞かせている。不殺生と親への孝養、異なる信仰への寛容が説かれている。",
    "factBox": "アショーカ王はカリンガ戦争の惨劇を悔いて仏教に帰依し、帝国各地の岩石や石柱に法勅（ダルマ）を刻んで慈悲の統治を呼びかけた。",
    "choices": [
      {
        "id": "listen_and_follow_dharma",
        "label": "肉食を断ち、ダルマの教えに従って生きることを誓う",
        "subLabel": "殺生を慎み心の平穏と地域共同体の信頼を得る",
        "effects": {
          "happiness": 15,
          "knowledge": 15,
          "relations": 10
        },
        "outcomeText": "石柱陰の法話に深く心を動かされ、争いを避けて生きる道を選んだ。村の仲裁役として信望を集めた。"
      },
      {
        "id": "ignore_and_trade_hunt",
        "label": "王の説教を余所に、家畜の売買と狩猟の生業を続ける",
        "subLabel": "日々の実利を優先して家族の食い扶持を守る",
        "effects": {
          "wealthDelta": 20,
          "health": 5,
          "relations": -5
        },
        "outcomeText": "肉と毛皮を都市の商人へ売り、手堅い銀貨を手に入れた。現実的な暮らしを何よりも重んじた。"
      }
    ]
  },
  {
    "id": "cls_india_caste_boundary",
    "title": "村の共同井戸とジャーティの清濁の掟",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_india"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "激しい乾魃で村の低い井戸が干上がり、バラモン階層が管理する深い井戸だけが水を湛えている。身分の低い者の水汲みは儀礼的穢れとされ、厳しい掟が立ちはだかる。",
    "factBox": "古典期インドではヴァルナ（四姓）とジャーティ（世襲職業集団）に基づく儀礼的清浄と穢れの観念が固定化していった。",
    "choices": [
      {
        "id": "wait_for_brahmin_pour",
        "label": "井戸から離れて控え、上層民が水を注いでくれるのを待つ",
        "subLabel": "掟に従い屈辱を耐えるが衝突を避ける",
        "effects": {
          "relations": 10,
          "happiness": -10,
          "health": -5
        },
        "outcomeText": "真昼の炎天下で長時間頭を垂れて待ち、恵まれた水を素焼きの壺に受けて喉を潤した。"
      },
      {
        "id": "draw_water_at_night",
        "label": "真夜中に忍び込み、渇きに苦しむ家族のために井戸水を汲む",
        "subLabel": "掟を破るが家族を救う／見つかれば厳しい私刑",
        "survivalChance": 0.79,
        "deathCause": "カースト規律違反による私刑・投石死",
        "effects": {
          "wealthDelta": 5,
          "health": 10,
          "relations": -15
        },
        "outcomeText": "誰にも見つからずに冷たい清水を汲み出し、熱に浮かされていた幼子を救うことができた。",
        "deathText": "井戸番に見咎められて棒で打ち据えられ、集まった群衆に石を投げつけられて命を落とした。"
      }
    ]
  },
  {
    "id": "cls_india_ayurveda_herbs",
    "title": "アーユルヴェーダ医師による体質診断と薬草療法",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_india"
    ],
    "minAge": 15,
    "maxAge": 65,
    "description": "旅のヴァイディヤ（アーユルヴェーダ医師）が村を訪れ、脈を診て「風（ヴァータ）と火（ピッタ）の調和が乱れている」と告げた。ギー（澄ましバター）を用いた薬草治療を勧められる。",
    "factBox": "古典期インドではチャラカやスシュルタによるアーユルヴェーダ医学が体系化され、体液の調和や外科手術が発達した。",
    "choices": [
      {
        "id": "take_ghee_remedy",
        "label": "医師の指示に従い、薬草を煮詰めた温かいギーを服薬する",
        "subLabel": "銀を支払って本格的な体調改善を図る",
        "effects": {
          "health": 25,
          "knowledge": 10,
          "wealthDelta": -15
        },
        "outcomeText": "薬草の効能により胃腸の重苦しさが消え去り、驚くほど身軽になって日々の仕事に励めるようになった。"
      },
      {
        "id": "cure_by_fasting",
        "label": "高価な薬を断り、白湯だけを飲んで三日間の断食を行う",
        "subLabel": "出費を抑え自らの治癒力で調子を戻す",
        "effects": {
          "wealthDelta": 5,
          "health": 10,
          "happiness": 5
        },
        "outcomeText": "静かに横たわり胃腸を休めたことで自然と熱が引き、元通りの体力を取り戻した。"
      }
    ]
  },
  {
    "id": "cls_india_pepper_cultivation",
    "title": "マラバール海岸の黒胡椒収穫とローマ金貨",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_india"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "南インドのムジリス港に、エジプトから季節風（モンスーン）に乗ってローマ帝国の商船が入港した。「黒い黄金」と呼ばれる黒胡椒の蔓から実を摘む労働に大勢が駆り出される。",
    "factBox": "大プリニウスが嘆いたように、ローマ帝国からは黒胡椒などの香辛料や絹を求めて毎年膨大な金貨・銀貨がインドへ流出した。",
    "choices": [
      {
        "id": "climb_pepper_vines",
        "label": "高い木に絡みつく胡椒の蔓によじ登り、緑の実を大量に摘む",
        "subLabel": "転落の危険を冒してローマ金貨の日当を稼ぐ",
        "survivalChance": 0.85,
        "deathCause": "胡椒棚高木からの転落死",
        "effects": {
          "wealthDelta": 45,
          "knowledge": 10,
          "health": -5
        },
        "outcomeText": "籠いっぱいの胡椒を乾燥させて納め、皇帝アウグストゥスの肖像が刻まれた本物のローマ金貨を受け取った。",
        "deathText": "濡れた幹に足を滑らせて十数メートルの高さから岩場へ落ち、頭を強打して即死した。"
      },
      {
        "id": "dry_and_pack_peppercorns",
        "label": "地上で胡椒の実を莚（むしろ）に広げて天日干しにする",
        "subLabel": "日当は下がるが安全に乾燥作業を担う",
        "effects": {
          "wealthDelta": 15,
          "relations": 10,
          "happiness": 5
        },
        "outcomeText": "太陽の光で真っ黒に縮んだ極上の胡椒粒を麻袋に詰め、堅実な賃金を得て家計を助けた。"
      }
    ]
  },
  {
    "id": "cls_other_teotihuacan_obsidian",
    "title": "テオティワカンの黒曜石採掘坑の落盤",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_other"
    ],
    "minAge": 14,
    "maxAge": 45,
    "description": "巨大な「太陽のピラミッド」が聳えるテオティワカンで、儀礼用の短剣や矢尻となる緑色黒曜石を掘る地下坑道に入った。頭上の火山灰層が湿気で緩み、小石がパラパラと落ちてくる。",
    "factBox": "テオティワカンは精巧な黒曜石工芸の独占的な交易によって中央メキシコ全域に絶大な影響力を誇った。",
    "choices": [
      {
        "id": "dig_deep_obsidian_vein",
        "label": "松明の光を頼りに最奥の黒曜石鉱脈を切り拓く",
        "subLabel": "最高品質の石を掘り出すが落盤の危険",
        "survivalChance": 0.77,
        "deathCause": "黒曜石採掘坑の崩落・生き埋め",
        "effects": {
          "wealthDelta": 40,
          "knowledge": 15,
          "health": -10
        },
        "outcomeText": "ガラスのように輝く見事な緑色黒曜石の塊を掘り出し、神官の工房から高額なカカオ豆の報酬を得た。",
        "deathText": "天井が轟音とともに崩れ落ち、鋭利な黒曜石の破片と土砂に埋もれて命を落とした。"
      },
      {
        "id": "flee_creaking_mine",
        "label": "坑道の軋みを聞いて道具を置き、直ちに地上へ脱出する",
        "subLabel": "石は掘れないが命を最優先にする",
        "effects": {
          "health": 5,
          "happiness": 10,
          "wealthDelta": -10
        },
        "outcomeText": "地上に出てまもなく坑口が崩れ落ちた。間一髪で死を逃れた幸運に感謝して神殿に祈りを捧げた。"
      }
    ]
  },
  {
    "id": "cls_other_silk_oasis_tax",
    "title": "オアシス都市の隊商宿での関税徴収",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_other"
    ],
    "minAge": 16,
    "maxAge": 55,
    "description": "タリム盆地の城郭都市クチャ（亀茲）で、東西を行き交う隊商に宿と水を提供する宿場を営んでいる。城主の徴税官が「通過する隊商から割増しの宿税を巻き上げろ」と命じてきた。",
    "factBox": "中央アジアのオアシス都市国家は、シルクロード中継貿易の関税と隊商への物資補給によって繁栄した。",
    "choices": [
      {
        "id": "levy_heavy_toll",
        "label": "徴税官の指示通りに高額な通行税を取り立てる",
        "subLabel": "分け前を得るが商人たちからの恨みを買う",
        "effects": {
          "wealthDelta": 30,
          "relations": -15,
          "happiness": -5
        },
        "outcomeText": "城主の威光を傘に着て金を徴収し、懐を肥やした。しかし商人の評判は落ち、宿の利用者は減っていった。"
      },
      {
        "id": "negotiate_fair_tariff",
        "label": "商人たちと交渉し、適正な宿代と水代で長逗留を促す",
        "subLabel": "短期的利益は減るが長年の信頼を築く",
        "effects": {
          "relations": 20,
          "knowledge": 15,
          "wealthDelta": 10
        },
        "outcomeText": "親切なもてなしが評判となり、ソグド商人たちが定宿として利用してくれるようになった。"
      }
    ]
  },
  {
    "id": "cls_other_desert_qanat_collapse",
    "title": "カナート（地下水路）の浚渫と縦穴の補強",
    "category": "livelihood",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_other"
    ],
    "minAge": 15,
    "maxAge": 45,
    "description": "ペルシア高原の砂漠下を貫く地下水路（カナート）に土砂が詰まり、村のオアシスが干上がりの危機に瀕した。縦穴からロープで地下数十メートルの暗闇へ降り、泥を掻き出さねばならない。",
    "factBox": "カナートは蒸発を防ぎつつ山麓の地下水を遠隔地へ導く驚異の土木技術で、維持には命懸けの地下作業が必要であった。",
    "choices": [
      {
        "id": "descend_qanat_shaft",
        "label": "油灯を口にくわえて狭い横穴を這い進み、土砂を掻き出す",
        "subLabel": "村の水源を蘇らせるが酸欠と落盤の恐怖",
        "survivalChance": 0.81,
        "deathCause": "地下水路（カナート）内での酸欠・落盤窒息死",
        "effects": {
          "relations": 25,
          "wealthDelta": 20,
          "health": -10
        },
        "outcomeText": "詰まっていた巨石を取り除くと冷たい清水が一気に噴き出し、オアシスのナツメヤシ畑を潤した。",
        "deathText": "横穴の土砂が崩れて出口を塞がれ、冷たい水が腰まで迫る暗闇のなかで酸欠のため窒息死した。"
      },
      {
        "id": "pull_bucket_at_surface",
        "label": "地上で滑車を回し、地下から上がってくる泥桶の引き上げに専念する",
        "subLabel": "地下には降りず地上の安全な力仕事を担う",
        "effects": {
          "health": 5,
          "relations": 10,
          "wealthDelta": 10
        },
        "outcomeText": "腕を痛めながらも何百杯もの泥桶を引き上げ、無事に浚渫作業を支えきった。"
      }
    ]
  },
  {
    "id": "cls_other_steppes_nomad_raid",
    "title": "ステップの騎馬遊牧民の夜襲と家畜防衛",
    "category": "historical_wave",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_other"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "ユーラシア北方の草原地帯で、馬の嘶きとともに馬弓を構えた別部族の騎兵が夜襲をかけてきた。天幕（ユルタ）が燃やされ、羊の群れが略奪されようとしている。",
    "factBox": "草原世界では家畜と牧草地をめぐる部族間の抗争が常態化しており、卓越した騎射技術が生死を分けた。",
    "choices": [
      {
        "id": "mount_horse_and_shoot",
        "label": "馬に飛び乗り、鞍上で弓を引き絞って反撃する",
        "subLabel": "家畜を守り敵を撃退するが正面衝突の危険",
        "survivalChance": 0.74,
        "deathCause": "騎馬遊牧戦での矢傷・落馬踏みつけ死",
        "effects": {
          "wealthDelta": 25,
          "relations": 15,
          "health": -15
        },
        "outcomeText": "敵の隊長を射落として襲撃者を敗走させ、奪われかけた羊の群れを無事に取り戻した。",
        "deathText": "胸に敵の矢を受けて落馬し、疾走する馬群の蹄に踏み荒らされて絶命した。"
      },
      {
        "id": "scatter_into_ravine",
        "label": "家族を連れて深い涸れ谷（ワジ）の岩陰へ身を隠す",
        "subLabel": "家畜は失うが全員の命を守る",
        "effects": {
          "wealthDelta": -40,
          "happiness": -10,
          "health": 5
        },
        "outcomeText": "暗闇に息を潜めて敵が去るのを待った。財産は奪われたが、家族全員の無事を確かめ合って抱き合った。"
      }
    ]
  },
  {
    "id": "cls_other_yayoi_bronze_bell",
    "title": "弥生ムラの銅鐸埋納儀礼と境界争い",
    "category": "common_sense",
    "eraIds": [
      "classical"
    ],
    "regionIds": [
      "cls_other"
    ],
    "minAge": 15,
    "maxAge": 60,
    "description": "日本列島の環濠集落で、稲の豊作を祈る神聖な銅鐸（どうたく）を山の尾根に埋める祭礼が執り行われる。隣のムラが水利権を主張して境界の丘へ押し寄せてきた。",
    "factBox": "弥生時代の銅鐸は農耕祭祀の器から見る祭器へと大型化し、最後には丘陵の斜面に一括埋納されて姿を消した。",
    "choices": [
      {
        "id": "bury_bell_solemnly",
        "label": "長老の指名に従い、穴を掘って銅鐸を静かに土へ埋める",
        "subLabel": "祖霊の加護を祈り祭祀の儀礼を全うする",
        "effects": {
          "relations": 20,
          "knowledge": 10,
          "happiness": 10
        },
        "outcomeText": "青銅の鐸を丁重に埋め戻し、神酒を捧げて祈った。隣のムラとも長老同士の話し合いで和解が成った。"
      },
      {
        "id": "take_wooden_spear_clash",
        "label": "木槍と石鏃の弓を持って環濠の土塁で隣ムラを威嚇する",
        "subLabel": "ムラの田畑を守るため武力で対峙する",
        "survivalChance": 0.8,
        "deathCause": "弥生期の環濠集落間抗争での石鏃による刺創死",
        "effects": {
          "wealthDelta": 10,
          "relations": 15,
          "health": -10
        },
        "outcomeText": "土塁の上から弓を射かけて相手を退散させ、ムラの誇りと稲田を守り抜いた。",
        "deathText": "飛び交う石鏃の矢が首筋を貫き、環濠の泥水の中に前のめりに倒れて息絶えた。"
      }
    ]
  }
];
