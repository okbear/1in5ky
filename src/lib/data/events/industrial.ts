import type { DecisionEvent } from '../../types';

/** 近代・産業革命（欧米・日本・中国・インド・ロシア中東南米）の決断イベント */
export const INDUSTRIAL_EVENTS: DecisionEvent[] = [
  {
    "id": "ind_eur_mill_loom_crush",
    "title": "マンチェスター木綿工場の自動織機と巻き込み",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_europe_us"
    ],
    "minAge": 9,
    "maxAge": 45,
    "description": "蒸気機関で回る無数の力織機が轟音を立てる木綿紡績工場で働いている。回転する革ベルトとシャフトの隙間に詰まった糸屑を、機械を止めずに手で掻き出すよう監督官が怒鳴る。",
    "factBox": "19世紀英国の産業革命期の工場では児童労働や安全柵のない機械が多く、巻き込みによる手足切断や死亡事故が多発した。",
    "choices": [
      {
        "id": "reach_under_running_loom",
        "label": "稼働中の機械の下に潜り込み、素早く糸屑を払い落とす",
        "subLabel": "稼働率を落とさず日当を守るが重大事故の恐怖",
        "survivalChance": 0.77,
        "deathCause": "蒸気力織機シャフトへの巻き込み・圧挫死",
        "effects": {
          "wealthDelta": 20,
          "health": -10,
          "relations": 5
        },
        "outcomeText": "すんでのところで手を引き抜き、機械を止めずに糸屑を取り除いた。親方から小遣いの銀貨を投げられた。",
        "deathText": "上着の袖が高速回転するシャフトに巻き込まれ、そのまま機械の内部へ引きずり込まれて全身を砕かれた。"
      },
      {
        "id": "pull_safety_clutch_stop",
        "label": "怒鳴り声を無視してクラッチを切り、機械を停止させて清掃する",
        "subLabel": "安全を最優先にするが日当を減給される",
        "effects": {
          "health": 5,
          "wealthDelta": -15,
          "happiness": -5
        },
        "outcomeText": "監督官に罵倒され半日分の賃金を引かれたが、五体満足で工場の門を出ることができた。"
      }
    ]
  },
  {
    "id": "ind_eur_broad_street_pump",
    "title": "ソーホー街区のコレラ大流行と井戸ポンプ",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_europe_us"
    ],
    "minAge": 8,
    "maxAge": 65,
    "description": "ロンドンの過密長屋街で激しいコレラが発生し、近隣の家族が数時間のうちに相次いで脱水死した。スノウ医師が「ブロード・ストリートの井戸ポンプの水が感染源だ」と主張し、飲用の中止を呼びかけている。",
    "factBox": "1854年、ジョン・スノウはコレラ患者の分布図からブロード・ストリートの井戸ポンプを特定し、近代疫学の祖となった。",
    "choices": [
      {
        "id": "drink_boiled_tea_brewery",
        "label": "井戸水を口にせず、隣のビール醸造所から分けたエールと煮沸茶を飲む",
        "subLabel": "スノウ医師の警告に従い汚染水を避ける",
        "effects": {
          "health": 20,
          "knowledge": 15,
          "happiness": 5
        },
        "outcomeText": "煮沸した水だけを徹底して口にしたことで家族全員が無傷でコレラの流行を生き抜いた。"
      },
      {
        "id": "use_cold_pump_water",
        "label": "冷たく澄んで見える井戸水をいつも通り汲んでガブ飲みする",
        "subLabel": "「水は清純だ」と信じ込むが重篤なコレラ感染リスク",
        "survivalChance": 0.72,
        "deathCause": "汚染井戸水による急性コレラ激性脱水死",
        "effects": {
          "health": -25,
          "happiness": -10
        },
        "outcomeText": "激しい下痢と腹痛に襲われベッドの上で数日間苦しんだが、若い体力が勝って何とか生き延びた。",
        "deathText": "止まらぬ下痢と血圧低下により皮膚が青黒く変色し、半日のうちに脱水症状で冷たくなった。"
      }
    ]
  },
  {
    "id": "ind_eur_sweatshop_garment",
    "title": "イーストエンドの汗まみれ裁縫場（スウェットショップ）",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_europe_us"
    ],
    "minAge": 12,
    "maxAge": 50,
    "description": "窓のない地下室に何十人もの移民労働者が詰め込まれ、ガス灯の熱気と埃のなかで1日16時間コートのボタン付けと裾上げを行っている。出来高払いの単価は極めて安い。",
    "factBox": "19世紀末の英米大都市では「スウェットショップ（搾取工場）」と呼ばれる劣悪な家内小工場が広がり、衣料品の低価格を支えた。",
    "choices": [
      {
        "id": "sew_coats_until_dawn",
        "label": "ガス灯の煤煙で目を腫らしながら夜明けまで針を動かし続ける",
        "subLabel": "睡眠を削って出来高を増やし飢えを凌ぐ",
        "survivalChance": 0.83,
        "deathCause": "劣悪な搾取労働による過労・心臓麻痺死",
        "effects": {
          "wealthDelta": 25,
          "health": -15,
          "knowledge": 5
        },
        "outcomeText": "指先を血だらけにしながら数十着のコートを仕上げ、週末にまとまった賃金を手にすることができた。",
        "deathText": "連日の過重労働と酸欠により作業台に突っ伏して意識を失い、心停止を起こして死亡した。"
      },
      {
        "id": "join_tailors_trade_union",
        "label": "密かに組織された労働組合（トレード・ユニオン）の集会に参加する",
        "subLabel": "労働時間短縮を求めるが工場主のブラックリストに載る危険",
        "effects": {
          "relations": 20,
          "knowledge": 15,
          "wealthDelta": -10
        },
        "outcomeText": "仲間と団結してサボタージュを行い、出来高単価の引き上げと日曜日休業を工場主に約束させた。"
      }
    ]
  },
  {
    "id": "ind_eur_tenement_consumption",
    "title": "過密テネメント（長屋アパート）の結核蔓延",
    "category": "common_sense",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_europe_us"
    ],
    "minAge": 10,
    "maxAge": 55,
    "description": "ニューヨークのロウアー・イーストサイドのテネメントで、日当たりのない狭い部屋に二家族が同居している。同居人が毎夜血痰を吐く激しい咳（結核・白い疫病）を繰り返している。",
    "factBox": "産業革命期の過密都市では結核が最大の死因となり、換気の悪いテネメント住宅が感染の温床となった。",
    "choices": [
      {
        "id": "open_window_rooftop_rest",
        "label": "毛布にくるまり屋根の上で新鮮な外気を吸い、日光浴を日課にする",
        "subLabel": "サナトリウム療法の先取りで自己治癒力を高める",
        "effects": {
          "health": 15,
          "knowledge": 10,
          "happiness": 5
        },
        "outcomeText": "寒風の中でも外気浴を続けたことで免疫を保ち、結核の発病を免れて健康を維持した。"
      },
      {
        "id": "take_patent_soothing_syrup",
        "label": "薬局でアヘンとアルコール入りの「特許鎮咳シロップ」を買って飲む",
        "subLabel": "咳は止まるが病因は治らず依存症のリスク",
        "survivalChance": 0.8,
        "deathCause": "肺結核（白い疫病）の悪化による大喀血死",
        "effects": {
          "wealthDelta": -15,
          "health": -15,
          "happiness": -5
        },
        "outcomeText": "シロップで咳の発作を一時的に抑えながら、騙し騙し日々の仕事に通い続けた。",
        "deathText": "夜間に肺動脈が破裂して大量の鮮血を吐き出し、テネメントの寝床を赤く染めて絶命した。"
      }
    ]
  },
  {
    "id": "ind_eur_coal_pit_explosion",
    "title": "炭鉱深部のメタンガス爆発と落盤事故",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_europe_us"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "地下400メートルの炭鉱切羽でツルハシを振るっている最中、籠の中のカナリアが突然止まり木から落ちた。直後、遠くの坑道で鈍い轟音とともにメタンガスの引火爆発が発生した。",
    "factBox": "近代の石炭採掘ではメタンガス爆発と一酸化炭素（アフターダンプ）による大事故が多発し、デービー灯などの安全灯が開発された。",
    "choices": [
      {
        "id": "crawl_low_toward_shaft",
        "label": "濡らした布を口に当て、床を這って一酸化炭素を避け立て坑へ向かう",
        "subLabel": "冷静な判断で有毒ガスを回避し脱出を図る",
        "survivalChance": 0.76,
        "deathCause": "炭鉱坑内爆発と一酸化炭素ガス中毒死",
        "effects": {
          "wealthDelta": 15,
          "knowledge": 15,
          "health": -10
        },
        "outcomeText": "床を這い進んでエレベーターケージへ辿り着き、奇跡的に地上へ生還して家族と涙の抱擁を交わした。",
        "deathText": "立ち込める一酸化炭素を吸い込み、立坑まであと数十メートルのところで意識を失い絶命した。"
      },
      {
        "id": "barricade_in_dead_end",
        "label": "行き止まりの坑道に逃げ込み、石炭袋で目張りをして救助を待つ",
        "subLabel": "爆風と有毒ガスの侵入を防ぎ持久戦に賭ける",
        "survivalChance": 0.74,
        "deathCause": "炭鉱落盤による密閉坑道内での酸素欠乏死",
        "effects": {
          "relations": 20,
          "happiness": 10,
          "health": -15
        },
        "outcomeText": "密閉した空間で三日間空気を節約し、救助隊によって掘り出されて無事に生還した。",
        "deathText": "救援が届く前に坑内の酸素が完全に尽き、仲間たちと手を握り合ったまま永遠の眠りについた。"
      }
    ]
  },
  {
    "id": "ind_jpn_ashio_copper_pollution",
    "title": "足尾銅山鉱毒事件と渡良瀬川の泥水",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_japan"
    ],
    "minAge": 12,
    "maxAge": 60,
    "description": "渡良瀬川沿いの農村で、上流の足尾銅山から流出する鉱毒により稲が立ち枯れ、川の魚が全滅した。田中正造翁が「毒水を止めよ」と農民たちを率いて上京直訴の準備を進めている。",
    "factBox": "足尾鉱毒事件は日本初の近代公害問題であり、富国強兵と産業優先の影で多くの農民が生活基盤と故郷（谷中村）を奪われた。",
    "choices": [
      {
        "id": "join_tanaka_shozo_petition",
        "label": "蓑笠を着けて大八車を押し、東京への大挙請願行進に加わる",
        "subLabel": "警察の弾圧覚悟で公害被害の実態を国会へ訴える",
        "survivalChance": 0.81,
        "deathCause": "川俣事件における警官隊の弾圧・獄中病死",
        "effects": {
          "relations": 25,
          "knowledge": 15,
          "wealthDelta": -10
        },
        "outcomeText": "川俣での激しい警官隊の妨害を耐え抜き、鉱毒問題の世論を大きく動かす原動力となった。",
        "deathText": "警官隊のサーベルで打ち据えられて重傷を負い、未決監の寒さのなかで手当てを受けられず絶命した。"
      },
      {
        "id": "dig_deep_fresh_well_ind",
        "label": "川の水を農業用水に使うのを諦め、地下深くの井戸を掘る",
        "subLabel": "運動から距離を置き自力で無毒の水源を確保する",
        "effects": {
          "wealthDelta": -15,
          "health": 10,
          "happiness": 5
        },
        "outcomeText": "清らかな地下水脈を掘り当てて田んぼに引き、毒水の影響を最小限に抑えて収穫を守った。"
      }
    ]
  },
  {
    "id": "ind_jpn_spinning_girl_night",
    "title": "信州岡谷の製糸工場と工女の「女工哀史」",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_japan"
    ],
    "minAge": 11,
    "maxAge": 25,
    "description": "家計を助けるため、飛騨から野麦峠を越えて諏訪・岡谷の製糸工場へ工女として奉公に来た。熱湯の鍋から繭の糸口を手探りで繰り続ける日々で、指先は爛れ、脚気と結核の影が忍び寄る。",
    "factBox": "近代日本の主要輸出産業であった製糸・紡績業は、過酷な低賃金と長時間夜勤に耐えた若い女性労働者（工女）の犠牲の上に成り立った。",
    "choices": [
      {
        "id": "work_reeling_basin_heroic",
        "label": "熱湯に指を浸して糸口を繰り続け、「一等工女」のたすきを目指す",
        "subLabel": "指の痛みと過労を堪えて郷里への多額の仕送りを果たす",
        "survivalChance": 0.78,
        "deathCause": "製糸工場での過労・重症肺結核（カッケ衝心）",
        "effects": {
          "wealthDelta": 35,
          "relations": 15,
          "health": -15
        },
        "outcomeText": "見事な繰糸技術を身につけて最高ランクの工女となり、実家の借金を全額返済して峠を錦で飾った。",
        "deathText": "夜勤続きで結核を発病し、喀血しながら故郷へ送り返される途中の峠の茶屋で息を引き取った。"
      },
      {
        "id": "escape_factory_dormitory",
        "label": "厳重な板塀の隙間から寄宿舎を抜け出し、故郷の親元へ逃げ帰る",
        "subLabel": "前借金の返済を迫られるが命と健康を取り戻す",
        "effects": {
          "health": 15,
          "wealthDelta": -25,
          "happiness": 10
        },
        "outcomeText": "追手を撒いて山道を歩き通し、懐かしい実家の囲炉裏端へ辿り着いて母の胸で泣き崩れた。"
      }
    ]
  },
  {
    "id": "ind_jpn_chiteki_blood_tax",
    "title": "明治の徴兵令と「血税」の誤解・忌避",
    "category": "common_sense",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_japan"
    ],
    "minAge": 18,
    "maxAge": 25,
    "description": "明治政府の徴兵令布告に「生き血を吸われる」と恐れおののく血税騒動の余波が残るなか、二十歳を迎えて徴兵検査の通知が届いた。長男・養子による兵役免除の規定がある。",
    "factBox": "1873年の徴兵令では家督相続者や代人料を納めた者の免役規定があり、農民たちは養子縁組などで徴兵忌避を図った。",
    "choices": [
      {
        "id": "serve_imperial_army",
        "label": "陸軍に入営し、鉄砲とラッパの鳴る軍隊生活に飛び込む",
        "subLabel": "白米の配給と読み書きを習い近代軍人となる",
        "survivalChance": 0.81,
        "deathCause": "軍隊での脚気（ビタミンB1欠乏）衝心死",
        "effects": {
          "knowledge": 15,
          "wealthDelta": 15,
          "health": -5
        },
        "outcomeText": "営内で毎日銀シャリを食べ、規律と最新の銃陣を習得して伍長へと昇進して凱旋した。",
        "deathText": "白米偏重の給食により重度の脚気衝心を発症し、胸を掻きむしりながら陸軍病院で急逝した。"
      },
      {
        "id": "adopt_out_as_heir",
        "label": "親類の絶家した家へ養子に入り、戸主となって兵役免除を得る",
        "subLabel": "金銭を払って養子縁組を行い家業の田畑を守る",
        "effects": {
          "wealthDelta": -15,
          "happiness": 10,
          "relations": 10
        },
        "outcomeText": "書類上独立した戸主となることで合法的に徴兵を免れ、故郷で春の耕作を続けることができた。"
      }
    ]
  },
  {
    "id": "ind_jpn_rice_riot_store",
    "title": "大正米騒動と鈴木商店の焼き討ち騒乱",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_japan"
    ],
    "minAge": 15,
    "maxAge": 55,
    "description": "シベリア出兵の見込みによる買い占めで米価が暴騰し、富山の漁村の女性たちから始まった米騒動が全国の大都市へ飛び火した。神戸で米穀商や巨大商社の倉庫を取り囲む群衆の渦に巻き込まれる。",
    "factBox": "1918年の米騒動は大正デモクラシーの民衆蜂起であり、寺内正毅内閣を総辞職に追い込み原敬の本格的政党内閣を誕生させた。",
    "choices": [
      {
        "id": "demand_cheap_rice_parade",
        "label": "米屋の前に詰め寄り、「米を安く売れ」と堂々と掛け合う",
        "subLabel": "生活を守る正当な抗議で廉売米の放出を勝ち取る",
        "effects": {
          "wealthDelta": 20,
          "relations": 20,
          "happiness": 10
        },
        "outcomeText": "近所の主婦たちと連帯して粘り強く交渉し、格安の協定米を町内全域に配給させることに成功した。"
      },
      {
        "id": "avoid_violent_riot",
        "label": "焼き討ちの火の手が上がる前に群衆を離れ、芋と麦で飢えを耐える",
        "subLabel": "軍隊や警察による銃剣鎮圧の巻き添えを避ける",
        "effects": {
          "health": 5,
          "wealthDelta": -10,
          "happiness": -5
        },
        "outcomeText": "戒厳令下の軍隊の銃剣突撃を間一髪で回避し、家で家族とともに無事に騒乱をやり過ごした。"
      }
    ]
  },
  {
    "id": "ind_jpn_chikuho_coal_mine",
    "title": "筑豊炭鉱の切羽採炭と夫婦納屋制度",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_japan"
    ],
    "minAge": 16,
    "maxAge": 50,
    "description": "日本の八幡製鉄所へ送る石炭を掘るため、筑豊炭鉱の坑夫となった。夫婦で狭い切羽（きりは）に腹ばいになり、夫がツルハシで炭を掻き出し、妻がスラ板で外へ運び出す。頭上にはガスと湧水が迫る。",
    "factBox": "筑豊炭鉱などの近代炭鉱は「納屋頭」による前借金拘束と苛酷な労働環境に支えられ、炭坑節などの労働文化を生んだ。",
    "choices": [
      {
        "id": "pick_coal_on_belly",
        "label": "裸同然で切羽の底に潜り込み、黒ダイヤの炭塊を掘り進める",
        "subLabel": "高額な出来高給を得るが落盤事故と常に隣り合わせ",
        "survivalChance": 0.77,
        "deathCause": "炭鉱切羽での落盤・ボタ山崩壊圧死",
        "effects": {
          "wealthDelta": 40,
          "relations": 15,
          "health": -15
        },
        "outcomeText": "夫婦の息の合った連携で良質の無煙炭を掘り当て、炭鉱街の酒場で温かい飯と酒で互いの労をねぎらった。",
        "deathText": "突如として炭層の天井盤が崩壊し、数トンの巨岩の下敷きとなって即死した。"
      },
      {
        "id": "work_at_screening_plant",
        "label": "地上で石炭からボタ（泥岩）を取り分ける選炭場勤務に回る",
        "subLabel": "坑内には入らず粉塵の中で石を選り分ける",
        "effects": {
          "health": -5,
          "wealthDelta": 15,
          "happiness": 5
        },
        "outcomeText": "寒風吹き荒れるベルトコンベアの前で手際よくボタを跳ね除け、安定した給料を受け取った。"
      }
    ]
  },
  {
    "id": "ind_chn_opium_den_addiction",
    "title": "上海租界の阿片窟と青煙の誘惑",
    "category": "common_sense",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_china"
    ],
    "minAge": 16,
    "maxAge": 55,
    "description": "アヘン戦争以降、沿岸諸都市の租界に阿片窟が林立している。過酷な波止場の肉体労働で腰と肩を痛めた仲間から「煙管を一服吸えば痛みが嘘のように消える」と勧められる。",
    "factBox": "19世紀半ば以降、英国から密輸された阿片が中国全土に蔓延し、銀の流出と国民の健康破壊をもたらした。",
    "choices": [
      {
        "id": "refuse_opium_drink_tea",
        "label": "阿片の誘惑を断固拒否し、強い苦茶を飲んで痛みを我慢する",
        "subLabel": "破滅的な依存を避け健全な労働を保つ",
        "effects": {
          "health": 10,
          "happiness": 5,
          "wealthDelta": 10
        },
        "outcomeText": "痛みに耐えて阿片窟に近づかず、真面目に稼いだ銀を貯金して実家の生活を支えた。"
      },
      {
        "id": "try_opium_pipe_relief",
        "label": "痛みに耐えかねて煙管の吸い口に火を近づける",
        "subLabel": "一時的な鎮痛を得るが急速に依存症へ陥る",
        "survivalChance": 0.76,
        "deathCause": "重度阿片中毒による極度衰弱・栄養失調死",
        "effects": {
          "wealthDelta": -50,
          "health": -25,
          "happiness": -15
        },
        "outcomeText": "陶酔のなかで痛みを忘れたが、毎日の稼ぎがすべて煙となって消え、借金地獄に落ちた。",
        "deathText": "阿片を切らすと激しい禁断症状に悶え、骨と皮ばかりに痩せ衰えて路地裏で行き倒れた。"
      }
    ]
  },
  {
    "id": "ind_chn_boxer_bullet_storm",
    "title": "義和団の「扶清滅洋」と教会包囲の銃火",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_china"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "「神拳を修めれば銃弾も通さぬ」と唱える義和団の少年たちが赤帯を巻いて北京へ押し寄せた。列強の宣教師と教民が立て籠もる西什庫教会を包囲する渦中に巻き込まれる。",
    "factBox": "1900年の義和団の乱では排外主義的蜂起が拡大し、八カ国連合軍の介入と北京占領、巨額の賠償金（辛丑条約）につながった。",
    "choices": [
      {
        "id": "join_boxer_siege",
        "label": "大刀を掲げて教会への突撃に加わり、侵略者に鉄槌を下す",
        "subLabel": "排外の熱狂に身を投じるが近代小銃の十字砲火の標的",
        "survivalChance": 0.68,
        "deathCause": "教会防衛隊のマキシム機関銃掃射による戦死",
        "effects": {
          "happiness": 15,
          "relations": 15,
          "wealthDelta": -10
        },
        "outcomeText": "銃弾が飛び交うなかを奇跡的に生き延びたが、八カ国連合軍の反撃が始まると逃亡を余儀なくされた。",
        "deathText": "教会の壁面から放たれた機関銃の連射を腹部に受け、石畳の上に崩れ落ちて息絶えた。"
      },
      {
        "id": "flee_beijing_countryside",
        "label": "狂信の渦から抜け出し、家族を連れて河北の農村へ避難する",
        "subLabel": "都の混乱を避け安全な田舎へ身を隠す",
        "effects": {
          "health": 10,
          "wealthDelta": -20,
          "happiness": 10
        },
        "outcomeText": "都の城門を間一髪で抜け出し、連合軍の略奪が始まる前に田舎の親類の元へ逃げ延びた。"
      }
    ]
  },
  {
    "id": "ind_chn_bund_coolie_labor",
    "title": "上海外灘（バンド）波止場の苦力（クーリー）の荷担ぎ",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_china"
    ],
    "minAge": 15,
    "maxAge": 45,
    "description": "黄浦江に碇を下ろした英国や米国の巨大蒸気船から、重さ百斤の綿花俵を一本の天秤棒で担ぎ出す。苦力頭（親方）が中間搾取で賃金の半分を跳ねている。",
    "factBox": "19世紀末の上海は極東最大の国際商業都市として繁栄したが、その物流は数万人のクーリーによる苛酷な人海戦術に依存していた。",
    "choices": [
      {
        "id": "carry_heavy_cotton_bales",
        "label": "天秤棒で肩の皮を剥きながら波止場と倉庫を何十往復も走る",
        "subLabel": "過酷な肉体労働で親方から銅銭を受け取る",
        "survivalChance": 0.82,
        "deathCause": "波止場での荷崩れ圧死・脱水過労死",
        "effects": {
          "wealthDelta": 25,
          "health": -10,
          "relations": 5
        },
        "outcomeText": "歯を食いしばって荷を運び切り、泥水のような粥をすすって翌日の仕事へ備えた。",
        "deathText": "積み上げられた巨大な木箱が崩れ落ち、頭から押し潰されて波止場の泥の上で即死した。"
      },
      {
        "id": "strike_with_dock_coolies",
        "label": "親方のピンハネに抗議し、波止場の苦力仲間と荷揚げをボイコットする",
        "subLabel": "賃金改善を求めるが青幇（チンパン）の暴力団に襲われる危険",
        "survivalChance": 0.78,
        "deathCause": "租界裏社会の暴力団（青幇）による刺殺",
        "effects": {
          "relations": 25,
          "wealthDelta": 15,
          "knowledge": 10
        },
        "outcomeText": "仲間と腕を組んで団結を守り、手取り賃金の3割引き上げを親方に認めさせた。",
        "deathText": "ストライキの首謀者として路地裏に呼び出され、匕首で胸を刺されて黄浦江に投げ込まれた。"
      }
    ]
  },
  {
    "id": "ind_chn_may_fourth_protest",
    "title": "五四運動の学生デモと日本製品ボイコット",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_china"
    ],
    "minAge": 15,
    "maxAge": 30,
    "description": "パリ講和会議での山東半島利権譲渡に憤った北京の学生たちが天安門前に集結した。「内を治めて国賊を誅し、外は主権を争う」のスローガンを叫ぶデモ行進が始まる。",
    "factBox": "1919年の五四運動は近代中国のナショナリズムと新文化運動（白話文普及・反封建）を爆発させた歴史的画期であった。",
    "choices": [
      {
        "id": "march_and_distribute_leaflets",
        "label": "ビラを掲げて街頭演説を行い、市民に国貨愛用を訴える",
        "subLabel": "逮捕の危険を冒して近代中国の覚醒に身を投じる",
        "survivalChance": 0.85,
        "deathCause": "軍閥警察のデモ弾圧における発砲・虐殺死",
        "effects": {
          "knowledge": 25,
          "relations": 20,
          "happiness": 15
        },
        "outcomeText": "市民たちの熱狂的な喝采を浴びてストライキを広げ、売国官僚の罷免を勝ち取った。",
        "deathText": "警察隊が群衆に向けて実弾を発射し、胸に銃弾を受けて舗道の上に散った。"
      },
      {
        "id": "open_vernacular_night_school",
        "label": "平易な白話文で労働者向けの夜間学校を開き、識字教育を進める",
        "subLabel": "直接の街頭行動を避け地道な啓蒙に尽くす",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "relations": 15,
          "wealthDelta": 5
        },
        "outcomeText": "若い工員たちに文字と世界の情勢を教え、新しい時代を担う多くの青年を育て上げた。"
      }
    ]
  },
  {
    "id": "ind_chn_warlord_grain_requisition",
    "title": "地方軍閥による過酷な強制徴糧と私製軍票",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_china"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "内戦を繰り返す軍閥の軍隊が村を占領し、「軍糧」として今年収穫した大豆とトウモロコシをすべて荷車に積み込ませた。代価として渡されたのは紙屑同然の軍閥手形であった。",
    "factBox": "民国初期の軍閥割拠期には、各派の軍閥が勝手に貨幣を発行し、重税と略奪同然の徴用を重ねて農村を破綻させた。",
    "choices": [
      {
        "id": "hide_grain_in_dry_well",
        "label": "枯れ井戸の底に板を渡し、半分以上の穀物を隠しておく",
        "subLabel": "家族の命綱を守るが見つかれば銃殺刑",
        "survivalChance": 0.79,
        "deathCause": "軍閥兵による抗命罪での即決銃殺",
        "effects": {
          "wealthDelta": 25,
          "happiness": 10,
          "relations": 5
        },
        "outcomeText": "兵士たちの乱暴な捜索を切り抜け、隠した穀物で厳しい冬の飢えを耐え抜いた。",
        "deathText": "枯れ井戸の隠し場所が暴かれ、抗命の罪として村の広場の木に縛り付けられて銃殺された。"
      },
      {
        "id": "bribe_warlord_quartermaster",
        "label": "わずかな銀貨を補給係に握らせ、種籾だけは残してもらう",
        "subLabel": "来春の作付けを確保するため妥協する",
        "effects": {
          "wealthDelta": -15,
          "relations": 10,
          "happiness": 5
        },
        "outcomeText": "係官が手心を加えて種籾袋を残してくれたため、翌春に再び畑を耕す望みを繋いだ。"
      }
    ]
  },
  {
    "id": "ind_ind_indigo_planter_coercion",
    "title": "ベンガルの強制藍（インディゴ）栽培と農民の反抗",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_india"
    ],
    "minAge": 15,
    "maxAge": 55,
    "description": "英国人プランターが経営する藍工場から、米の作付けを禁止され、不採算な藍（インディゴ）の強制栽培契約を結ばされた。前借金の利息で農民たちは代々奴隷同然に縛られている。",
    "factBox": "1859〜60年のベンガル「藍一揆（インディゴ・リボルト）」では、農民たちが武力で強制栽培を拒絶し、プランター支配を揺るがした。",
    "choices": [
      {
        "id": "refuse_indigo_contracts_strike",
        "label": "近隣の村々と誓約を結び、藍の種蒔きを一斉に拒絶する",
        "subLabel": "プランターの雇い用心棒（ラティヤール）の棍棒襲撃を覚悟する",
        "survivalChance": 0.78,
        "deathCause": "藍プランター私兵による棍棒乱打・撲殺",
        "effects": {
          "relations": 25,
          "wealthDelta": 20,
          "happiness": 15
        },
        "outcomeText": "数千人の農民が棍棒隊を押し返して英当局を動かし、不当な強制契約の破棄を勝ち取った。",
        "deathText": "夜間に自宅を取り囲んだ用心棒たちに棍棒で全身を激しく乱打され、頭蓋骨骨折で落命した。"
      },
      {
        "id": "grow_indigo_and_rice_secretly",
        "label": "プランターの目を盗んで畑の隅に米を隠し植え、細々と飢えを凌ぐ",
        "subLabel": "正面衝突を避けつつ最低限の主食を確保する",
        "effects": {
          "wealthDelta": 5,
          "health": 5,
          "relations": 5
        },
        "outcomeText": "隠し植えした米を夜間に収穫し、家族を飢えさせることなく苦難の年限を耐え抜いた。"
      }
    ]
  },
  {
    "id": "ind_ind_famine_relief_labor",
    "title": "大飢饉と過酷な救済土木キャンプ（テンプル・ラフ）",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_india"
    ],
    "minAge": 12,
    "maxAge": 60,
    "description": "エルニーニョと乾魃によりインド全土で穀物が枯渇したが、英植民地政府は「市場原理」を盾に米の輸出を続けた。配給を得るため、炎天下の鉄道敷設救済キャンプで石割りの重労働に就く。",
    "factBox": "1876〜78年の大飢饉では数百万人が死亡。救済キャンプの支給カロリー（テンプル・ラフ）はブーヘンヴァルト強制収容所より少なかったとされる。",
    "choices": [
      {
        "id": "smash_stones_for_grain_ration",
        "label": "骨と皮の体で炎天下の石を割り続け、一日一握りの穀物粉を得る",
        "subLabel": "餓死寸前で耐え忍ぶ極限の労働",
        "survivalChance": 0.72,
        "deathCause": "飢饉救済キャンプでの重症コレラ・極度衰弱死",
        "effects": {
          "wealthDelta": 5,
          "health": -20,
          "relations": 5
        },
        "outcomeText": "キャンプで蔓延したチフスを奇跡的に生き延び、雨期が戻った村へ帰って再び鋤を握った。",
        "deathText": "極端な飢餓で免疫を失った体へコレラが直撃し、キャンプの土嚢の上で息絶えた。"
      },
      {
        "id": "forage_wild_roots_jungle",
        "label": "過酷な収容所を抜け出し、丘陵のジャングルで野生の根菜や木の実を採集する",
        "subLabel": "官製の救済を捨てて自然の恵みで生き残りを図る",
        "effects": {
          "health": 5,
          "knowledge": 15,
          "happiness": 5
        },
        "outcomeText": "先住部族の知恵を借りて食用となる塊茎を見つけ出し、疫病の巣窟となったキャンプを避けて生き延びた。"
      }
    ]
  },
  {
    "id": "ind_ind_calcutta_jute_mill",
    "title": "カルカッタのジュート（黄麻）紡績工場の煙塵",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_india"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "フーグリー川沿いに連なるスコットランド資本のジュート紡績工場で、穀物袋（ドンゴロス）用の黄麻繊維を紡ぐ機械を操作している。微細な植物粉塵が工場内に充満している。",
    "factBox": "カルカッタのジュート産業は世界の穀物・軍需用麻袋の供給を一手に握り、何十万人もの移民労働者を低賃金で酷使した。",
    "choices": [
      {
        "id": "tie_wet_turban_over_nose",
        "label": "濡らしたターバンを鼻と口に巻き、繊維埃の吸入を防ぎながら機械を回す",
        "subLabel": "息苦しさを耐えて呼吸器を守り日当を稼ぐ",
        "effects": {
          "health": 10,
          "wealthDelta": 20,
          "knowledge": 5
        },
        "outcomeText": "粉塵による肺の病を防ぎながら安定した機械工として技術を磨き、賃金の昇給を得た。"
      },
      {
        "id": "work_bare_faced_for_speed",
        "label": "マスクを外して素早く動き、出来高の麻袋を大量に縫い上げる",
        "subLabel": "短期的稼ぎを最大化するが慢性の肺疾患リスク",
        "survivalChance": 0.81,
        "deathCause": "ジュート粉塵による慢性閉塞性肺疾患・呼吸不全",
        "effects": {
          "wealthDelta": 35,
          "health": -15,
          "happiness": -5
        },
        "outcomeText": "トップクラスの生産量を記録して多額の給金を手にし、村の家族へ送金した。",
        "deathText": "肺が繊維の粉塵で固まり、乾いた咳が止まらなくなって数年後に窒息するように世を去った。"
      }
    ]
  },
  {
    "id": "ind_ind_dandi_salt_gathering",
    "title": "ガンディーの塩の行進と海辺での非暴力不服従",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_india"
    ],
    "minAge": 15,
    "maxAge": 60,
    "description": "マハトマ・ガンディーが不当な塩専売税に抗議して400キロを歩き、ダンディーの海岸に到着した。民衆とともに海水を煮詰め、自らの手で一握りの自然塩を作る運動に参加する。",
    "factBox": "1930年の「塩の行進」はインド独立運動の象徴的転換点となり、数万人が警棒で殴打されながらも一歩も退かず逮捕された。",
    "choices": [
      {
        "id": "scoop_salt_face_lathis",
        "label": "砂浜で一握りの塩を掲げ、英官憲の警棒（ラーティー）殴打を無抵抗で受ける",
        "subLabel": "非暴力の精神で帝国の不条理を世界に告発する",
        "survivalChance": 0.8,
        "deathCause": "警察隊のラーティー警棒による頭部重傷死",
        "effects": {
          "happiness": 25,
          "relations": 25,
          "knowledge": 15,
          "health": -10
        },
        "outcomeText": "血を流しながらも屈することなく立ち上がり、世界中の新聞にその姿が報じられて独立運動に火をつけた。",
        "deathText": "英警察官の硬い警棒で側頭部を乱打され、砂浜の上に倒れてそのまま帰らぬ人となった。"
      },
      {
        "id": "weave_khadi_cloth_home",
        "label": "糸車（チャルカ）を回して手織り綿布（カーディー）を家庭で紡ぐ",
        "subLabel": "直接の逮捕を避け英国製機械綿布の不買運動に徹する",
        "effects": {
          "wealthDelta": 10,
          "relations": 15,
          "knowledge": 10
        },
        "outcomeText": "純白の手織り布を仕立てて身にまとい、経済的自立を訴える運動の強固な土台を支えた。"
      }
    ]
  },
  {
    "id": "ind_ind_malaya_rubber_tapping",
    "title": "マレー半島ゴム農園の夜明けの樹液採取",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_india"
    ],
    "minAge": 15,
    "maxAge": 50,
    "description": "自動車のタイヤ需要で沸く英領マレーのゴム園へタミル系移民労働者として渡った。ゴムの樹液が最もよく出る夜明け前の暗闇のなか、額にランプをつけて幹に螺旋の切り込みを入れる。",
    "factBox": "マレー半島のゴムプランテーションには南インドから大量のタミル人が契約労働者（カンガニー制度）として導入された。",
    "choices": [
      {
        "id": "tap_rubber_trees_quickly",
        "label": "ヒルや毒蛇を払いながら何百本ものゴムの木にナイフを入れる",
        "subLabel": "乳白色のラテックスをカップいっぱいに集めて日当を稼ぐ",
        "survivalChance": 0.82,
        "deathCause": "ゴム園の密林での毒蛇（キングコブラ）咬傷死",
        "effects": {
          "wealthDelta": 30,
          "health": -10,
          "relations": 10
        },
        "outcomeText": "バケツいっぱいの良質なラテックスを集めて集荷場へ運び、上々の歩合給を獲得した。",
        "deathText": "木の根元に潜んでいた毒蛇に足を噛まれ、抗毒血清のない農園診療所で息を引き取った。"
      },
      {
        "id": "smoke_rubber_sheets_shed",
        "label": "採れたゴム液を酸で固め、燻煙小屋で乾かす製板係に回る",
        "subLabel": "ヘビや蚊のいる密林を避け工場棟の火の番を務める",
        "effects": {
          "health": 5,
          "wealthDelta": 15,
          "knowledge": 5
        },
        "outcomeText": "煙に燻されながら均一なゴムシートを作り上げ、熟練の加工作業者として定職を得た。"
      }
    ]
  },
  {
    "id": "ind_oth_russian_mir_redemption",
    "title": "ロシア農奴解放令と法外な土地償納金",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_other"
    ],
    "minAge": 18,
    "maxAge": 60,
    "description": "皇帝アレクサンドル2世による農奴解放令が出たが、与えられた土地は痩せて狭く、49年間にわたる法外な「償納金」の支払いが義務付けられた。村落共同体（ミール）が連帯責任を負う。",
    "factBox": "1861年のロシア農奴解放令は農民に人身の自由を与えたが、重い償納金とミールによる移動制限が残り、革命の火種となった。",
    "choices": [
      {
        "id": "pay_mir_redemption_shares",
        "label": "ミール仲間と助け合ってライ麦を売り、償納金を期日通りに納める",
        "subLabel": "土地を取り上げられるのを防ぎ共同体を守る",
        "effects": {
          "wealthDelta": -20,
          "relations": 20,
          "happiness": -5
        },
        "outcomeText": "厳しい倹約に耐えて賦課金を完納し、先祖伝来の土地を名実ともに自らの所有とした。"
      },
      {
        "id": "flee_to_petersburg_factory",
        "label": "パスポートを入手してペテルブルクの製鉄工場へ出稼ぎに出る",
        "subLabel": "農村の借金を捨てて都市のプロレタリアートとなる",
        "survivalChance": 0.81,
        "deathCause": "首都製鉄所での機械巻き込み・労働災害死",
        "effects": {
          "wealthDelta": 30,
          "knowledge": 15,
          "relations": -10
        },
        "outcomeText": "巨大製鉄所の旋盤工として雇われ、農村では想像もつかなかった現金収入と都会の空気を手に入れた。",
        "deathText": "溶鉱炉のクレーンワイヤーが切れ、落下した鋼鉄インゴットに押し潰されて落命した。"
      }
    ]
  },
  {
    "id": "ind_oth_suez_canal_digging",
    "title": "スエズ運河開削現場のツルハシと赤痢",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_other"
    ],
    "minAge": 15,
    "maxAge": 45,
    "description": "フランスのスエズ運河会社により、エジプト各地から強制徴用された十数万人の農民夫（ファッラーヒーン）の一人として砂漠の地峡に立っている。ツルハシ一本で砂を掘り、籠で担ぎ出す。",
    "factBox": "1869年に開通したスエズ運河の建設には過酷な強制労働が用いられ、数千から数万人が熱中症や赤痢、コレラで命を落とした。",
    "choices": [
      {
        "id": "dig_desert_canal_firmly",
        "label": "灼熱の太陽の下で砂を掘り続け、与えられたノルマの深さを達成する",
        "subLabel": "監督官の鞭を免れるが決死の脱水労働",
        "survivalChance": 0.76,
        "deathCause": "スエズ運河工事現場での悪性アメーバ赤痢・熱中症死",
        "effects": {
          "health": -15,
          "wealthDelta": 15,
          "relations": 10
        },
        "outcomeText": "地獄のような砂漠の掘削を生き延び、地中海と紅海が繋がって青い海水が流れ込む瞬間を目撃した。",
        "deathText": "汚染された貯水池の水から激しい赤痢を発症し、砂漠の粗末なテントのなかで誰にも看取られず絶命した。"
      },
      {
        "id": "bribe_doctor_sick_leave",
        "label": "手持ちの銀貨をフランス人軍医に渡し、病気免除の証明書をもらう",
        "subLabel": "故郷のナイル河畔の村へ送還してもらう",
        "effects": {
          "wealthDelta": -20,
          "health": 10,
          "happiness": 10
        },
        "outcomeText": "除隊許可証を手に入れて故郷の村へ生還し、懐かしいナイルの麦畑に平穏を取り戻した。"
      }
    ]
  },
  {
    "id": "ind_oth_congo_rubber_terror",
    "title": "コンゴ自由国での過酷な天然ゴム供出割当量",
    "category": "historical_wave",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_other"
    ],
    "minAge": 12,
    "maxAge": 50,
    "description": "ベルギー国王レオポルド2世の私領「コンゴ自由国」で、自転車や電線用の野生天然ゴムの過酷な採集割当が課された。規定量に満たなければ武装兵によって手首を切り落とされる恐怖が支配する。",
    "factBox": "コンゴ自由国では過酷なゴム徴発により数百万人が虐殺・過労死し、国際的な告発運動によりベルギー国家の直轄領へ移管された。",
    "choices": [
      {
        "id": "climb_lianas_deep_rainforest",
        "label": "高い樹木の頂までゴムの蔓（つる）を追ってよじ登り、樹液を体に塗って集める",
        "subLabel": "残酷な懲罰を避けるため必死で割当量を満たす",
        "survivalChance": 0.71,
        "deathCause": "ゴム徴発私兵（公安軍）による虐殺・切断後の出血死",
        "effects": {
          "wealthDelta": 10,
          "health": -15,
          "happiness": -20
        },
        "outcomeText": "皮膚にこびりついたゴムを剥ぎ落として割当量を納め、手首を切り落とされる惨劇を辛うじて免れた。",
        "deathText": "割当量にわずかに届かず、公安軍の傭兵に捕らえられて銃撃され、村の広場で命を奪われた。"
      },
      {
        "id": "flee_with_family_dense_swamp",
        "label": "村を捨て、植民地兵の踏み込めない奥地の湿地帯へ逃亡する",
        "subLabel": "家財を捨てて未知の密林で自給自足の逃避行",
        "survivalChance": 0.74,
        "deathCause": "密林逃避行中の飢餓・睡眠病（ツェツェバエ感染）",
        "effects": {
          "happiness": 20,
          "relations": 20,
          "wealthDelta": -30
        },
        "outcomeText": "密林の奥深くで隠れ住み、ゴムの悪夢から逃れて自由な狩猟採集の暮らしを守り抜いた。",
        "deathText": "ツェツェバエに刺されて眠り病を発症し、昏睡状態のまま密林の小屋で息を引き取った。"
      }
    ]
  },
  {
    "id": "ind_oth_mexican_peon_debt",
    "title": "メキシコ大農園（アシエンダ）の債務農奴（ペオン）",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_other"
    ],
    "minAge": 16,
    "maxAge": 55,
    "description": "ポルフィリオ・ディアス独裁政権下のメキシコで、先住民共同体の共有地が没収され、アシエンダ（大農園）の農場売店（チエンダ・デ・ラヤ）の借金漬けにされて抜け出せない。",
    "factBox": "メキシコ革命前夜のアシエンダでは、ペオンと呼ばれる農民が売店への借金で土地に縛り付けられ、サパタの農地解放運動を生んだ。",
    "choices": [
      {
        "id": "join_zapata_revolution",
        "label": "「土地と自由（ティエラ・イ・リベルタ）」を掲げるサパタの解放軍に加わる",
        "subLabel": "農地を奪還するため銃を手に連邦軍に立ち向かう",
        "survivalChance": 0.73,
        "deathCause": "メキシコ革命戦での連邦軍機関銃掃射死",
        "effects": {
          "happiness": 30,
          "relations": 25,
          "wealthDelta": 15
        },
        "outcomeText": "ソンブレロをかぶり弾帯を巻いて農園主を追放し、奪われた先祖の土地を農民たちの手に取り戻した。",
        "deathText": "連邦軍の騎兵隊の突撃を受け、サボテンの生える荒野で胸を撃ち抜かれて戦死した。"
      },
      {
        "id": "work_agave_fields_patiently",
        "label": "竜舌蘭（アガベ）の畑で黙々と葉を刈り、テキーラの醸造を手伝う",
        "subLabel": "反乱には加わらず家族の平穏を保つ",
        "effects": {
          "wealthDelta": 10,
          "relations": 10,
          "health": 5
        },
        "outcomeText": "鋭い棘を避けながらアガベを収穫し続け、戦乱の嵐が去るまで目立たずに家族を守った。"
      }
    ]
  },
  {
    "id": "ind_oth_trans_siberian_blizzard",
    "title": "シベリア鉄道敷設工事と永久凍土のブリザード",
    "category": "livelihood",
    "eraIds": [
      "industrial"
    ],
    "regionIds": [
      "ind_other"
    ],
    "minAge": 16,
    "maxAge": 45,
    "description": "バイカル湖の険しい崖沿いに鉄路を敷くシベリア鉄道の工事現場に雇われた。ダイナマイトで凍結した岩盤を砕き、零下40度のブリザードのなかで重いレールを据え付ける。",
    "factBox": "シベリア鉄道（約9300km）の建設には受刑者や兵士、流民など無数の労働者が投入され、極寒と疫病で多くの命が失われた。",
    "choices": [
      {
        "id": "blast_rock_freeze_blizzard",
        "label": "ウォッカで体を温め、導火線に火を点けて凍結岩盤を吹き飛ばす",
        "subLabel": "命懸けの工期短縮で高額のロシア帝国ルーブルを得る",
        "survivalChance": 0.75,
        "deathCause": "ダイナマイト暴発および極寒ブリザードでの凍死",
        "effects": {
          "wealthDelta": 40,
          "knowledge": 15,
          "health": -15
        },
        "outcomeText": "難所のトンネルを爆破開通させ、バイカル湖畔にレールの銀の筋を敷き詰めて莫大な報奨金を得た。",
        "deathText": "不発弾の確認中にダイナマイトが暴発し、雪混じりの岩煙とともに四散して即死した。"
      },
      {
        "id": "tend_construction_barracks",
        "label": "丸太小屋の飯場宿舎でペチカの薪割りと食事作りに従事する",
        "subLabel": "危険な外作業を避けて暖房の効いた小屋で働く",
        "effects": {
          "health": 10,
          "wealthDelta": 15,
          "relations": 10
        },
        "outcomeText": "温かいキャベツスープ（シチー）を工夫たちに配り、凍傷にかかることなく過酷な冬を乗り切った。"
      }
    ]
  }
];
