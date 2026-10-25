import type { DecisionEvent } from '../../types';

/** 現代〜近未来（日本・東アジア・南アジア・アフリカ中東・欧米）の決断イベント */
export const MODERN_EVENTS: DecisionEvent[] = [
  {
    "id": "mod_jpn_minamata_mercury_fish",
    "title": "不知火海の魚と原因不明の手足の痺れ",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_japan"
    ],
    "minAge": 8,
    "maxAge": 60,
    "description": "高度経済成長のさなか、不知火海沿岸の漁村で獲れた新鮮な魚を食べ続けていたところ、家族の手足が痺れ、視野が狭まる奇病（水俣病）の症状が現れ始めた。地元の大手化学工場からの排水が疑われている。",
    "factBox": "水俣病はチッソ水俣工場が排出したメチル水銀が魚介類を通じて濃縮され発生した公害病で、住民の激しい闘争の末に公式認定された。",
    "choices": [
      {
        "id": "join_minamata_victims_trial",
        "label": "村の患者たちと団結し、工場前での座り込みと損害賠償訴訟に立ち上がる",
        "subLabel": "会社や地域社会からの激しい嫌がらせを覚悟して正義を追及する",
        "survivalChance": 0.83,
        "deathCause": "重症メチル水銀中毒（水俣病）による中枢神経破壊死",
        "effects": {
          "relations": 25,
          "knowledge": 20,
          "wealthDelta": 30
        },
        "outcomeText": "患者運動の先頭に立って法廷闘争を戦い抜き、国の公害認定と工場からの謝罪・補償を勝ち取った。",
        "deathText": "劇症有機水銀中毒により中枢神経が破壊され、激しい痙攣と昏睡のなかで水俣の病院で世を去った。"
      },
      {
        "id": "stop_eating_local_fish",
        "label": "湾内の魚の摂取を一切止め、実家のある内陸部へ転居する",
        "subLabel": "争いを避け身体の健康維持を最優先にする",
        "effects": {
          "health": 15,
          "wealthDelta": -20,
          "happiness": 5
        },
        "outcomeText": "不知火海を離れて内陸の町へ移住し、軽度の痺れを抱えつつもそれ以上の悪化を防ぎ生き抜いた。"
      }
    ]
  },
  {
    "id": "mod_jpn_bubble_land_speculation",
    "title": "バブル絶頂期の不動産投資と地上げ屋の影",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_japan"
    ],
    "minAge": 22,
    "maxAge": 65,
    "description": "「土地の値段は絶対に下がらない（土地神話）」が信じられた1980年代末、都内の実家の土地をめぐって地上げ屋が日参し、銀行の担当者が「借金してマンションを建てれば大儲けできる」と迫ってくる。",
    "factBox": "1980年代後半の日本のバブル景気では投機的な地価暴騰が起き、その後の総量規制と崩壊が「失われた数十年」をもたらした。",
    "choices": [
      {
        "id": "borrow_billions_build_mansion",
        "label": "銀行から数億円の融資を受け、賃貸マンションを新築して不動産オーナーとなる",
        "subLabel": "バブルの波に乗るが崩壊時の巨額債務リスク",
        "survivalChance": 0.82,
        "deathCause": "バブル崩壊後の連鎖倒産・借金苦による自死",
        "effects": {
          "wealthDelta": -60,
          "happiness": -20,
          "knowledge": 15
        },
        "outcomeText": "バブル崩壊直前に高値で売り抜けることに成功し、負債を帳消しにして巨額の現金を残した。",
        "deathText": "地価暴落と空室増加で融資の返済が焦げ付き、破産宣告の末に心労で自ら命を絶った。"
      },
      {
        "id": "keep_ancestral_home_firmly",
        "label": "地上げ屋の嫌がらせを突っぱね、先祖代々の木造住宅に住み続ける",
        "subLabel": "投機には手を出さず身の丈に合った暮らしを守る",
        "effects": {
          "happiness": 15,
          "relations": 15,
          "wealthDelta": 10
        },
        "outcomeText": "狂乱のバブルとその崩壊を横目に、家族とともに慣れ親しんだ我が家で堅実な暮らしを維持した。"
      }
    ]
  },
  {
    "id": "mod_jpn_karoshi_midnight_train",
    "title": "猛烈社員の深夜残業と「過労死」の危機",
    "category": "livelihood",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_japan"
    ],
    "minAge": 22,
    "maxAge": 55,
    "description": "大手企業で月150時間を超えるサービス残業と休日出勤が常態化し、終電を逃してカプセルホテルに泊まる生活が続いている。動悸と目眩が止まらず、上司からは「根性が足りない」と叱責される。",
    "factBox": "1980〜90年代以降、日本独特の長時間労働による心不全や脳出血が「KAROSHI（過労死）」として国際的にも注目された。",
    "choices": [
      {
        "id": "submit_resignation_protect_life",
        "label": "退職届を叩きつけ、過酷な長時間労働から自らの命を守る",
        "subLabel": "収入は一時途絶えるが健康と自由を取り戻す",
        "effects": {
          "health": 25,
          "happiness": 20,
          "wealthDelta": -20
        },
        "outcomeText": "会社を辞めて数ヶ月間ゆっくりと心身を休め、ワークライフバランスを重視する職場で再出発を果たした。"
      },
      {
        "id": "drink_energy_drink_soldier_on",
        "label": "栄養ドリンクを流し込んで深夜のオフィスに戻り、締め切りを完遂する",
        "subLabel": "昇進と高額ボーナスを目指すが突然死の危険",
        "survivalChance": 0.74,
        "deathCause": "過重労働による急性心筋梗塞（過労死）",
        "effects": {
          "wealthDelta": 40,
          "knowledge": 10,
          "health": -25
        },
        "outcomeText": "ビッグプロジェクトを成功させて取締役に引き立てられたが、体には深い疲労が刻まれた。",
        "deathText": "午前2時のオフィスで突然激しい胸痛に襲われて倒れ、救急搬送の途中で心肺停止となり帰らぬ人となった。"
      }
    ]
  },
  {
    "id": "mod_jpn_great_quake_liquefaction",
    "title": "東日本大震災・巨大津波と沿岸液状化",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_japan"
    ],
    "minAge": 6,
    "maxAge": 75,
    "description": "マグニチュード9.0の超巨大地震が東日本を襲い、激しい揺れとともに沿岸部に大津波警報のサイレンが鳴り響いた。埋立地では泥水が噴き出す液状化が発生し、停電のなかで高台への避難を迫られる。",
    "factBox": "2011年3月11日の東日本大震災では、大津波と原発事故、広域インフラ寸断が重なり、未曾有の複合災害となった。",
    "choices": [
      {
        "id": "run_immediately_to_high_ground",
        "label": "「津波てんでんこ」の教えに従い、荷物を捨てて高台の神社へ走る",
        "subLabel": "家財は諦めるが最優先で命を守る",
        "survivalChance": 0.84,
        "deathCause": "巨大津波の引き波による水死・瓦礫激突死",
        "effects": {
          "wealthDelta": -40,
          "relations": 20,
          "happiness": 5
        },
        "outcomeText": "息を切らしながら神社へ駆け上がり、眼下で街を呑み込む黒い大津波を呆然と見つめた。命だけは助かった。",
        "deathText": "家財を取りに戻ったわずか数分の遅れで黒い濁流に呑まれ、瓦礫とともに海へ押し流されて命を落とした。"
      },
      {
        "id": "stay_and_help_elderly_neighbor",
        "label": "足の悪い近所の高齢者を背負い、互いに声を掛け合って避難する",
        "subLabel": "共助で助け合うが避難速度が落ちるリスク",
        "survivalChance": 0.77,
        "deathCause": "津波避難遅れによる水死",
        "effects": {
          "relations": 35,
          "happiness": 20,
          "wealthDelta": -30
        },
        "outcomeText": "間一髪で津波の到達前に高台の歩道橋へ駆け上がり、二人で手を取り合って生還の涙を流した。",
        "deathText": "背後の堤防を越えて迫る津波の壁から逃げ切れず、高齢者とともに激流に呑み込まれて落命した。"
      }
    ]
  },
  {
    "id": "mod_jpn_covid_isolation",
    "title": "新型コロナウイルス流行とホテル宿泊療養",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_japan"
    ],
    "minAge": 12,
    "maxAge": 75,
    "description": "世界的パンデミックのなかで高熱と激しい咽頭痛を発症し、PCR検査で陽性と判定された。家族への感染を防ぐため、配食弁当とパルスオキシメーターが支給される隔離療養ホテルへ入所する。",
    "factBox": "2020年以降のCOVID-19危機では、日本でも緊急事態宣言や宿泊療養、行動制限など前例のない公衆衛生対策がとられた。",
    "choices": [
      {
        "id": "monitor_oxygen_saturation_hotel",
        "label": "パルスオキシメーターで血中酸素濃度をこまめに測り、安静を保つ",
        "subLabel": "数字の急変を見逃さず医療機関への早期搬送に備える",
        "survivalChance": 0.88,
        "deathCause": "新型コロナウイルスによる急性呼吸窮迫症候群（ARDS）",
        "effects": {
          "health": 15,
          "knowledge": 10,
          "happiness": 5
        },
        "outcomeText": "一時酸素飽和度が低下したものの、医師のオンライン診療と吸入薬で危機を脱し無事に退所した。",
        "deathText": "血中酸素濃度が急激に低下して呼吸困難に陥り、搬送先の集中治療室で懸命の治療も虚しく息絶えた。"
      },
      {
        "id": "recover_with_family_home",
        "label": "自宅の個室に籠もり、換気と消毒を徹底しながら家族の看病を受ける",
        "subLabel": "慣れ親しんだ自宅で療養するが家庭内感染のリスク",
        "effects": {
          "relations": 15,
          "happiness": 10,
          "health": 10
        },
        "outcomeText": "家族の献身的な看病を受け、家庭内二次感染を一人も出すことなく無事に回復を果たした。"
      }
    ]
  },
  {
    "id": "mod_chn_backyard_steel_melt",
    "title": "大躍進政策の「土法炉（裏庭製鉄）」と鍋釜の供出",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_china_ea"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "イギリスの鉄鋼生産を追い越すスローガンのもと、農村の庭に手作りの小型溶鉱炉（土法炉）が築かれた。村幹部から「家の鉄鍋や農具をすべて供出して鉄を溶かせ」と強制される。",
    "factBox": "1958年の大躍進政策では全国民が裏庭溶鉱炉での粗悪な鉄づくりに動員され、農作業放棄により数千万人の餓死を招いた。",
    "choices": [
      {
        "id": "smelt_iron_day_and_night",
        "label": "山から木を伐り倒して薪にし、徹夜で土法炉に風を送り続ける",
        "subLabel": "政治的熱狂に従うが使い物にならない鉄屑と森林破壊",
        "survivalChance": 0.77,
        "deathCause": "大躍進期の全国的大飢饉による餓死・栄養失調",
        "effects": {
          "wealthDelta": -40,
          "health": -15,
          "relations": 10
        },
        "outcomeText": "出来上がったのは脆いスラグの塊ばかりであったが、政治運動を生き延び、後の農村改革を待った。",
        "deathText": "農地が荒廃して秋の収穫が皆無となり、樹皮や泥土を食べる極限の飢餓のなかで餓死した。"
      },
      {
        "id": "hide_cooking_pot_underground",
        "label": "先祖伝来の鉄鍋を床下に埋めて隠し、壊れた鍬だけを供出する",
        "subLabel": "後で自炊する道具を守るが批判闘争集会にかけられる危険",
        "effects": {
          "wealthDelta": 10,
          "happiness": 10,
          "relations": -5
        },
        "outcomeText": "密かに隠した鉄鍋を使って野草を煮て食べ、周囲が飢餓に苦しむなかで家族の命を繋いだ。"
      }
    ]
  },
  {
    "id": "mod_chn_foxconn_assembly_night",
    "title": "深圳巨大エレクトロニクス工場のアセンブリ夜勤",
    "category": "livelihood",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_china_ea"
    ],
    "minAge": 16,
    "maxAge": 35,
    "description": "「世界の工場」深圳の電子機器工場で、数十万人の農民工とともにスマートフォンの基盤組立ラインに配属された。秒単位で流れるベルトコンベアの前で無言の作業が12時間続く。",
    "factBox": "中国の急速な経済発展を支えた巨大アセンブリ工場では、厳しい労務管理と寄宿舎生活による精神的過労が社会問題化した。",
    "choices": [
      {
        "id": "assemble_motherboards_speed",
        "label": "指先を目にも留まらぬ速さで動かし、日々のノルマをパーフェクトに達成する",
        "subLabel": "残業代を稼いで故郷の親へ仕送りするが精神的消耗",
        "survivalChance": 0.84,
        "deathCause": "極度の睡眠不足と寄宿舎での飛び降り自死",
        "effects": {
          "wealthDelta": 35,
          "health": -10,
          "relations": 5
        },
        "outcomeText": "数年間の過酷な工場勤務でまとまった資金を貯め、故郷で小さな個人商店を開業した。",
        "deathText": "過酷なシフトと監視による重度のうつ病を発症し、寄宿舎の屋上から身を投げて命を散らした。"
      },
      {
        "id": "study_hardware_cad_night",
        "label": "夜勤明けのわずかな時間でパソコンのCAD設計技術を独学する",
        "subLabel": "ライン工から技術職へのステップアップを目指す",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "wealthDelta": 30,
          "happiness": 15
        },
        "outcomeText": "技術検定に合格して製品設計部門のエンジニアへ昇格し、冷暖房の完備された研究室勤務を手に入れた。"
      }
    ]
  },
  {
    "id": "mod_chn_hukou_registration_barrier",
    "title": "都市戸籍と農村戸籍の壁（戸籍格差）",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_china_ea"
    ],
    "minAge": 18,
    "maxAge": 50,
    "description": "上海の企業で長年働いているが、戸籍が農村にあるため、子どもの公立校入学や社会保険の適用で厳しい制限を受けている。大金を払って都市戸籍（藍印戸口）を買うかどうかの岐路に立つ。",
    "factBox": "中国の二元戸籍制度（農村戸籍と都市戸籍）は、出稼ぎ労働者（農民工）の移動の自由や公共サービスの享受に大きな格差を生んだ。",
    "choices": [
      {
        "id": "buy_urban_hukou_property",
        "label": "郊外の指定マンションを購入し、家族全員の都市戸籍を獲得する",
        "subLabel": "多額の住宅ローンを背負うが子どもの教育機会を保障する",
        "effects": {
          "wealthDelta": -30,
          "knowledge": 20,
          "relations": 15,
          "happiness": 15
        },
        "outcomeText": "都市戸籍を手に入れて子どもを名門中学へ進学させ、一族の将来にわたる上昇気流を掴んだ。"
      },
      {
        "id": "send_child_to_village_grandparents",
        "label": "子を田舎の祖父母へ預け（留守児童）、自分たちは出稼ぎを続ける",
        "subLabel": "出費を抑え現金を蓄えるが親子の別居による寂しさ",
        "effects": {
          "wealthDelta": 25,
          "happiness": -15,
          "relations": -10
        },
        "outcomeText": "年に一度の春節だけ家族で集まる生活を耐え、農村に立派なレンガ造りの家を新築した。"
      }
    ]
  },
  {
    "id": "mod_chn_pm25_smog_winter",
    "title": "冬季の石炭暖房による重度大気汚染（PM2.5）",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_china_ea"
    ],
    "minAge": 8,
    "maxAge": 70,
    "description": "冬の北京で石炭火力発電所と暖房の煙が盆地に滞留し、視界が数十メートルに遮られる濃密な黄灰色のスモッグ（煙霾）が発生した。指数計が測定不能の危険域を指している。",
    "factBox": "2010年代の中国北方部では急速な工業化と石炭暖房によるPM2.5汚染が深刻化し、強力な環境規制とガス転換へと動いた。",
    "choices": [
      {
        "id": "buy_hepa_purifier_n95",
        "label": "高機能空気清浄機を部屋に置き、外出時はN95マスクを着用する",
        "subLabel": "出費はかさむが微小粒子状物質の体内吸入を防ぐ",
        "effects": {
          "health": 15,
          "wealthDelta": -15,
          "knowledge": 10
        },
        "outcomeText": "室内環境を清浄に保ち、激しい咳や喉の痛みに苦しむことなくスモッグの冬をやり過ごした。"
      },
      {
        "id": "endure_smog_bare_faced",
        "label": "マスクをせずそのまま日々のバイク通勤や露天商売を続ける",
        "subLabel": "余計な出費を削るが重度の気管支疾患リスク",
        "survivalChance": 0.83,
        "deathCause": "PM2.5重度吸入による急性肺塞栓・呼吸不全",
        "effects": {
          "health": -20,
          "wealthDelta": 5,
          "happiness": -10
        },
        "outcomeText": "慢性的な気管支炎を発症して喉を痛めたが、春の偏西風でスモッグが晴れて一息ついた。",
        "deathText": "激しい喘息発作を起こして呼吸困難となり、病院の酸素吸入器につながれたまま息を引き取った。"
      }
    ]
  },
  {
    "id": "mod_chn_zero_covid_lockdown",
    "title": "「動態清零（ゼロコロナ）」下の厳格団地封鎖",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_china_ea"
    ],
    "minAge": 10,
    "maxAge": 75,
    "description": "突然団地の門にバリケードが築かれ、防護服を着た係員（大白）によって数週間にわたる外出禁止が告げられた。食料の配給が滞り、毎日のPCR検査の列に並びながら物資を融通し合う。",
    "factBox": "2022年の中国各地では徹底的なゼロコロナ政策によりメガシティの長期封鎖が実施され、物流と市民生活に大きな試練を与えた。",
    "choices": [
      {
        "id": "organize_community_group_buying",
        "label": "チャットアプリで団地の住民と共同購入（団購）を組織し、野菜を仕入れる",
        "subLabel": "リーダーシップを発揮して互助組織で食料危機を打開する",
        "effects": {
          "relations": 30,
          "knowledge": 15,
          "wealthDelta": 10,
          "happiness": 10
        },
        "outcomeText": "団地の住民たちと野菜や肉を分け合って乗り切り、固い信頼と地域コミュニティの絆を築いた。"
      },
      {
        "id": "complain_and_argue_at_gate",
        "label": "理不尽な封鎖に憤り、団地のゲートで係員に抗議して通行を迫る",
        "subLabel": "自由を主張するが警察による強制連行の危険",
        "survivalChance": 0.84,
        "deathCause": "隔離施設での基礎疾患治療薬途絶・衰弱死",
        "effects": {
          "happiness": -10,
          "relations": -10,
          "health": -10
        },
        "outcomeText": "厳重な警告書に署名させられたものの、近隣の注目を集めて配給が少しだけ早まった。",
        "deathText": "遠方の集中隔離施設へ送られ、持病の心臓病の薬が届かず独房の中で心不全を起こして落命した。"
      }
    ]
  },
  {
    "id": "mod_asia_dhaka_sewing_collapse",
    "title": "ダッカ縫製工場の建物亀裂と操業強要",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_asia"
    ],
    "minAge": 14,
    "maxAge": 45,
    "description": "世界のファストファッションを製造するバングラデシュの多層階縫製工場で、壁に大きな亀裂が入った。工場主は「出勤しなければ今月分の給料は払わない」と従業員を建物内へ追い立てている。",
    "factBox": "2013年のラナ・プラザ崩壊事故では1,100人以上が死亡し、グローバル企業のサプライチェーンにおける安全基準の見直しが進んだ。",
    "choices": [
      {
        "id": "refuse_enter_cracked_factory",
        "label": "給料の未払いを覚悟して工場の門前で立ち止まり、中に入るのを拒否する",
        "subLabel": "職を失うが崩落事故の危険から確実に身を守る",
        "effects": {
          "health": 10,
          "wealthDelta": -25,
          "happiness": 10
        },
        "outcomeText": "数時間後に工場ビルが地響きとともに完全に倒壊した。職は失ったものの、自らの命を守り切った。"
      },
      {
        "id": "enter_factory_for_monthly_wage",
        "label": "生活苦に耐えかねて工場のミシン席に着き、急いでTシャツを縫う",
        "subLabel": "給料を確保しようとするが命懸けの作業",
        "survivalChance": 0.65,
        "deathCause": "縫製工場ビル倒壊事故による圧死・瓦礫の下敷き",
        "effects": {
          "wealthDelta": 25,
          "health": -20
        },
        "outcomeText": "柱の崩壊直前に窓から隣の屋根へ飛び降りて奇跡的に脱出し、かすり傷だけで生還した。",
        "deathText": "コンクリートの床板がパンケーキ状に崩落し、重いミシンと瓦礫の下敷きになって息を引き取った。"
      }
    ]
  },
  {
    "id": "mod_asia_manila_smokey_mountain",
    "title": "マニラのスモーキーマウンテンと廃棄物回収",
    "category": "livelihood",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_asia"
    ],
    "minAge": 10,
    "maxAge": 50,
    "description": "メトロマニラの巨大なゴミ最終処分場で、自然発火の煙がくすぶるなか、ダンプカーが投棄するゴミからプラスチック容器や銅線を拾い集めて屑屋に売る仕事をしている。",
    "factBox": "アジアの都市貧困層（ウェストピッカー）は都市の廃棄物リサイクルを最底辺で支えており、感染症や重金属中毒の危険に晒されている。",
    "choices": [
      {
        "id": "wear_thick_gloves_collect_metals",
        "label": "ゴム手袋と長靴を履いて銅線とアルミ缶を集中的に集める",
        "subLabel": "破傷風の感染を防ぎつつ換金率の高い金属を狙う",
        "effects": {
          "wealthDelta": 25,
          "health": 5,
          "knowledge": 5
        },
        "outcomeText": "上質な銅線を束ねて屑鉄問屋に高値で買い取ってもらい、家族の一週間の食費を稼ぎ出した。"
      },
      {
        "id": "scavenge_barefoot_speed",
        "label": "裸足でゴミ山を駆け回り、投棄されたばかりの段ボールを奪い合う",
        "subLabel": "素早く動いて量を稼ぐが破傷風や注射針の踏み抜きリスク",
        "survivalChance": 0.81,
        "deathCause": "ゴミ山での破傷風感染・敗血症死",
        "effects": {
          "wealthDelta": 35,
          "health": -15,
          "happiness": -5
        },
        "outcomeText": "大量の段ボールを確保して日当を増やしたが、足の裏の切り傷が疼き続けた。",
        "deathText": "錆びた釘を踏み抜いて破傷風菌に感染し、激しい全身痙攣を起こして適切な医療を受けられず落命した。"
      }
    ]
  },
  {
    "id": "mod_asia_bangkok_flood_sandbag",
    "title": "チャオプラヤー川の大氾濫とハイテク工業団地",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_asia"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "異常豪雨によりタイ中部の河川が決壊し、日系自動車やハードディスクの工場が集まるアユタヤの工業団地へ水が押し寄せた。土嚢を積んで工場の機械設備を守る決死の防潮堤作りが始まる。",
    "factBox": "2011年のタイ洪水では世界規模のサプライチェーンが寸断され、ハードディスクや自動車部品の世界供給が停止した。",
    "choices": [
      {
        "id": "build_sandbag_dyke_factory",
        "label": "腰まで水に浸かりながら土嚢を積み上げ、工場のクリーンルームを守る",
        "subLabel": "工場の稼働を守り特別手当を得る",
        "survivalChance": 0.85,
        "deathCause": "大洪水での感電死・レプトスピラ症感染",
        "effects": {
          "wealthDelta": 25,
          "relations": 15,
          "health": -10
        },
        "outcomeText": "土嚢壁が浸水を食い止め、精密機械の冠水を防いだ。工場長から特別ボーナスが支給された。",
        "deathText": "水中に垂れ下がっていた高圧電線に触れて感電死し、濁流のなかに沈んでいった。"
      },
      {
        "id": "evacuate_family_by_boat",
        "label": "機械の防衛を諦め、自家製ボートに家族を乗せて安全な高台へ脱出する",
        "subLabel": "家族の生命を最優先にして避難する",
        "effects": {
          "health": 10,
          "wealthDelta": -20,
          "happiness": 10
        },
        "outcomeText": "安全な避難所へ無事に辿り着き、水が引くまで家族で助け合って過ごした。"
      }
    ]
  },
  {
    "id": "mod_asia_palm_oil_slash_burn",
    "title": "スマトラ島泥炭火災と東南アジア煙害（ヘイズ）",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_asia"
    ],
    "minAge": 8,
    "maxAge": 65,
    "description": "パーム油プランテーション開発のための違法な泥炭湿地火入れにより、地下の泥炭層が燃え上がり、黄色い有毒煙（ヘイズ）がマレー半島やシンガポールまで広がった。学校が休校となる。",
    "factBox": "東南アジアの泥炭火災は大量の二酸化炭素を排出し、国境を越えた呼吸器被害（ヘイズ）をもたらす深刻な環境問題である。",
    "choices": [
      {
        "id": "seal_doors_stay_inside",
        "label": "部屋のドアと窓を目張りし、湿らせたタオルを鼻に当てて外出を避ける",
        "subLabel": "有毒煙の吸入を抑え呼吸器を守る",
        "effects": {
          "health": 10,
          "happiness": 5,
          "wealthDelta": -10
        },
        "outcomeText": "煙が風で流されるまで耐え忍び、激しい咳き込みや気管支炎を発症することなく健康を保った。"
      },
      {
        "id": "work_outdoors_market_haze",
        "label": "休むわけにいかず、煙で煙る市場でマスクをつけずに露天商売を続ける",
        "subLabel": "日銭を稼ぐが有毒微粒子の直接吸入リスク",
        "survivalChance": 0.82,
        "deathCause": "濃密煙害（ヘイズ）吸入による急性心肺停止",
        "effects": {
          "wealthDelta": 20,
          "health": -20,
          "happiness": -10
        },
        "outcomeText": "喉を潰して声が枯れ果てたが、何とか日々の米代を稼ぎ出すことができた。",
        "deathText": "泥炭の有害ガスにより重度の喘息重積発作を起こし、市場の露店裏で倒れて呼吸不全で死亡した。"
      }
    ]
  },
  {
    "id": "mod_asia_indian_ocean_tsunami",
    "title": "スマトラ島沖大地震とインド洋大津波",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_asia"
    ],
    "minAge": 6,
    "maxAge": 70,
    "description": "2004年ボクシング・デーの朝、アチェ沿岸で巨大な地震のあと、海が一気に沖合まで引き、干上がった海底に魚が跳ねた。数分後、水平線の彼方から白い巨大な水の壁が猛スピードで迫ってくる。",
    "factBox": "2004年のインド洋大津波では、津波警報システムが未整備だったため、インド洋沿岸14カ国で22万人以上が犠牲となった。",
    "choices": [
      {
        "id": "climb_coconut_palm_tree",
        "label": "引き潮の異常に気づき、大声を上げて近くの高いヤシの木の頂へ登る",
        "subLabel": "地上数十メートルのヤシの木にしがみついて波をやり過ごす",
        "survivalChance": 0.74,
        "deathCause": "インド洋大津波による水死・漂流物激突死",
        "effects": {
          "happiness": 25,
          "relations": 10,
          "wealthDelta": -40
        },
        "outcomeText": "足元を巨大な濁流が家屋を巻き込みながら通り過ぎた。ヤシの木にしがみつき続けて生還を果たした。",
        "deathText": "ヤシの木ごと根こそぎ押し流され、激流に呑み込まれて海へ引きずり込まれた。"
      },
      {
        "id": "pick_up_fish_on_dry_seabed",
        "label": "不思議に思って海底へ歩み寄り、取り残された魚を拾おうとする",
        "subLabel": "津波の前兆を知らず波打ち際にとどまる致命的行動",
        "survivalChance": 0.61,
        "deathCause": "第1波津波の直撃による即死・水死",
        "effects": {
          "wealthDelta": 5,
          "health": -30
        },
        "outcomeText": "迫る波の轟音に気づいて全速力で内陸へ走り、間一髪でモスクの2階へ駆け上がって助かった。",
        "deathText": "巨大な津波の黒い壁に直撃され、一瞬にして波の底へ叩きつけられて絶命した。"
      }
    ]
  },
  {
    "id": "mod_afr_cobalt_hand_dug_pit",
    "title": "コンゴ民主共和国の手掘りコバルト採掘穴",
    "category": "livelihood",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_africa_me"
    ],
    "minAge": 12,
    "maxAge": 45,
    "description": "スマートフォンのリチウムイオン電池に必要なコバルトを採掘するため、ヘルメットも支柱もない手掘りの縦穴（数十メートルの深さ）に素手で潜る。中国系商人が買い取りを行っている。",
    "factBox": "世界のコバルトの過半を産出するコンゴでは、零細手掘り鉱山（アルチザナル・マイニング）での児童労働や落盤事故が問題視されている。",
    "choices": [
      {
        "id": "dig_deep_cobalt_vein",
        "label": "手掘りの穴の底で青黒いコバルト鉱石を麻袋に詰め込んで引き上げる",
        "subLabel": "米ドルを手に入れるが落盤による生き埋めの恐怖",
        "survivalChance": 0.75,
        "deathCause": "手掘りコバルト鉱穴の崩落による生き埋め圧死",
        "effects": {
          "wealthDelta": 40,
          "health": -15,
          "knowledge": 5
        },
        "outcomeText": "高品位のコバルト鉱石を採掘して商人に売り、家族の一ヶ月分の食糧代を手に入れた。",
        "deathText": "脆い土壁が突然崩落して縦穴を埋め尽くし、暗黒の地下で窒息して命を落とした。"
      },
      {
        "id": "wash_ores_in_river_surface",
        "label": "縦穴には入らず、川の浅瀬で採掘された鉱石を洗う作業に回る",
        "subLabel": "落盤は避けられるが重金属で汚染された水による皮膚炎",
        "effects": {
          "health": -5,
          "wealthDelta": 15,
          "happiness": 5
        },
        "outcomeText": "手足のかゆみに耐えながら川辺で鉱石を洗い続け、安全に日当を確保した。"
      }
    ]
  },
  {
    "id": "mod_afr_desert_locust_swarm",
    "title": "東アフリカのサバクトビバッタ大発生とドローン防除",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_africa_me"
    ],
    "minAge": 10,
    "maxAge": 60,
    "description": "インド洋のサイクロン多発により砂漠で異常繁殖したサバクトビバッタの大群が、ケニアやエチオピアの農村を襲来した。空を覆う数億匹のバッタがトウモロコシ畑を一瞬で食い尽くす。",
    "factBox": "気候変動に伴う極端気象によりサバクトビバッタの大群が頻発し、数千万人の食料安全保障を脅かしている。",
    "choices": [
      {
        "id": "bang_iron_pots_scare_locusts",
        "label": "鍋やドラム缶を叩いて大音量を響かせ、バッタの着地を防ぐ",
        "subLabel": "伝統の手法で必死に自家の畑を守る",
        "effects": {
          "relations": 20,
          "health": -5,
          "wealthDelta": 10
        },
        "outcomeText": "村人全員で音を鳴らし続け、バッタの群れを隣の荒野へ追い払って収穫を守り抜いた。"
      },
      {
        "id": "guide_drone_spray_pesticide",
        "label": "国際支援機関のドローン空中散布チームの地上誘導員を務める",
        "subLabel": "近代技術を活用して広範囲のバッタを駆除する",
        "effects": {
          "knowledge": 20,
          "wealthDelta": 25,
          "happiness": 15
        },
        "outcomeText": "GPS座標を正確に伝えて精密散布を成功させ、地域全体の穀物危機を回避した。"
      }
    ]
  },
  {
    "id": "mod_afr_mediterranean_smuggler",
    "title": "地中海密航ゴムボートとリビアの密航業者",
    "category": "livelihood",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_africa_me"
    ],
    "minAge": 16,
    "maxAge": 35,
    "description": "内戦と貧困から逃れるため、全財産を密航ブローカーに支払い、リビアの海岸から定員超過のゴムボートに乗せられた。夜の地中海をヨーロッパ目指して進むが、船外モーターが停止した。",
    "factBox": "北アフリカからヨーロッパを目指す地中海密航ルートは世界で最も危険な移民航路であり、毎年数千人が溺死している。",
    "choices": [
      {
        "id": "bail_water_flash_phone_rescue",
        "label": "浸水する海水を手桶で掻き出し、スマートフォンの光で救助船を呼ぶ",
        "subLabel": "漂流を耐えてNGOの人道救助船を待つ",
        "survivalChance": 0.72,
        "deathCause": "地中海ゴムボート転覆による溺死",
        "effects": {
          "happiness": 25,
          "knowledge": 15,
          "wealthDelta": -40
        },
        "outcomeText": "夜明け前に救助船「オーシャン・バイキング」に発見されて救助され、ヨーロッパの港へ上陸した。",
        "deathText": "高波を浴びてゴムボートが破裂し、漆黒の冷たい海へ投げ出されて救命胴衣もなく沈んでいった。"
      },
      {
        "id": "turn_back_to_tripoli_shore",
        "label": "危険を察知して乗船を土壇場で拒否し、リビアの街へ引き返す",
        "subLabel": "密航代金は失うが確実に命を守る",
        "effects": {
          "wealthDelta": -30,
          "health": 5,
          "happiness": 5
        },
        "outcomeText": "海岸を歩いて引き返し、地元のパン屋で住み込みの仕事を見つけて再起を期した。"
      }
    ]
  },
  {
    "id": "mod_afr_ebola_containment",
    "title": "エボラ出血熱のアウトブレイクと隔離テント",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_africa_me"
    ],
    "minAge": 12,
    "maxAge": 60,
    "description": "西アフリカの村で致死率の高いエボラ出血熱が発生した。国境なき医師団（MSF）が防護服姿で隔離テントを設営したが、伝統的な葬儀の風習（遺体に触れて別れを告げる）をめぐり対立が起きている。",
    "factBox": "エボラウイルス病は接触感染し、体液を通じて急速に広がるため、伝統的な埋葬儀礼の変更と公衆衛生啓発が極めて重要であった。",
    "choices": [
      {
        "id": "follow_msf_safe_burial",
        "label": "村人たちを説得し、防護服チームによる安全な埋葬手順を受け入れる",
        "subLabel": "感染の連鎖を断ち切り村全体を救う",
        "effects": {
          "relations": 25,
          "knowledge": 20,
          "health": 10
        },
        "outcomeText": "伝統と衛生を調和させる対話を進め、二次感染を食い止めてアウトブレイクの終息に貢献した。"
      },
      {
        "id": "touch_deceased_relative",
        "label": "掟に従い、亡くなった肉親の遺体に素手で触れて涙ながらに祈る",
        "subLabel": "情愛を優先するが極めて高いエボラ感染死リスク",
        "survivalChance": 0.62,
        "deathCause": "エボラ出血熱感染による多臓器不全・出血死",
        "effects": {
          "relations": 10,
          "happiness": -20
        },
        "outcomeText": "幸運にも感染を免れ、奇跡的に抗体を獲得して村の生存者コミュニティを支えた。",
        "deathText": "数日後に高熱と激しい下痢・嘔吐を発症し、隔離テントのなかで多臓器不全により落命した。"
      }
    ]
  },
  {
    "id": "mod_afr_sahel_drought_water",
    "title": "サヘル地帯の砂漠化と給水車への長蛇の列",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_africa_me"
    ],
    "minAge": 8,
    "maxAge": 65,
    "description": "気候変動により雨期が短縮し、村の井戸が完全に干上がった。数十キロ離れた都市から週に一度やってくる給水車の水をめぐり、黄色のポリタンクを抱えた人々が炎天下で列を作っている。",
    "factBox": "サハラ砂漠南縁のサヘル地域では、急激な温暖化と過放牧により砂漠化が進行し、深刻な水・食料危機が続いている。",
    "choices": [
      {
        "id": "wait_patiently_in_water_queue",
        "label": "ポリタンクを並べて順番を守り、清潔な配給水を受け取る",
        "subLabel": "炎天下の忍耐で安全な飲料水を確保する",
        "effects": {
          "health": 10,
          "relations": 15,
          "wealthDelta": -5
        },
        "outcomeText": "貴重な清水を持ち帰り、家族で大切に節水しながら乾季を乗り切ることができた。"
      },
      {
        "id": "dig_shallow_dry_riverbed",
        "label": "涸れ川の砂地を掘って濁り水を汲み、煮沸して使う",
        "subLabel": "列に並ばず自力で確保するが水質汚染のリスク",
        "survivalChance": 0.83,
        "deathCause": "汚染泥水による重症チフス・細菌性下痢症死",
        "effects": {
          "wealthDelta": 5,
          "health": -15,
          "happiness": -5
        },
        "outcomeText": "布で砂を濾して煮沸し、十分な水量を確保して家畜にも水を与えることができた。",
        "deathText": "煮沸が不十分だった泥水から腸チフスに感染し、高熱の譫妄状態のなかで息を引き取った。"
      }
    ]
  },
  {
    "id": "mod_west_rustbelt_factory_closure",
    "title": "ラストベルトの自動車工場閉鎖と医療保険の喪失",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_west"
    ],
    "minAge": 25,
    "maxAge": 60,
    "description": "米国中西部の工業都市で、親の代から勤めてきた自動車部品工場が海外移転のため突然閉鎖された。組合の年金と医療保険を同時に失い、住宅ローンの督促状が届く。",
    "factBox": "1980年代以降、脱工業化が進んだ米国のラストベルト（錆びついた工業地帯）では雇用喪失と地域社会の崩壊が深刻化した。",
    "choices": [
      {
        "id": "retrain_for_renewable_tech",
        "label": "州の職業訓練プログラムに応募し、風力発電設備の保守技術を学ぶ",
        "subLabel": "新産業への転換を目指して再就職を掴む",
        "effects": {
          "knowledge": 25,
          "wealthDelta": 25,
          "happiness": 15
        },
        "outcomeText": "グリーンエネルギー企業にサービス技師として再就職を果たし、再び安定した生活を取り戻した。"
      },
      {
        "id": "take_low_wage_warehouse_job",
        "label": "近郊の巨大通販物流倉庫で非正規のピッキング作業員として働く",
        "subLabel": "低賃金だが直ちに日銭を稼いで住宅を守る",
        "effects": {
          "wealthDelta": 10,
          "health": -10,
          "happiness": -10
        },
        "outcomeText": "厳しい歩数ノルマに追われながらもローンを払い続け、差し押さえを免れて家を守り抜いた。"
      }
    ]
  },
  {
    "id": "mod_west_opioid_painkiller_habit",
    "title": "処方鎮痛薬オピオイドの過剰処方と依存症",
    "category": "common_sense",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_west"
    ],
    "minAge": 18,
    "maxAge": 65,
    "description": "工場での作業で痛めた慢性腰痛に対し、クリニックの医師から「中毒性のない安全な新薬」としてオキシコドン（オピオイド）が処方された。薬が切れると激しい不安と痛みに襲われる。",
    "factBox": "製薬会社の積極的なマーケティングによりオピオイド系鎮痛薬が乱用され、米国では年間数十万人が「絶望死（過剰摂取）」で命を落とした。",
    "choices": [
      {
        "id": "enter_addiction_detox_clinic",
        "label": "危険を察知して処方薬を断ち、中毒治療クリニックで解毒プログラムに入る",
        "subLabel": "激しい離脱症状の苦痛を耐えて健康を取り戻す",
        "effects": {
          "health": 25,
          "happiness": 20,
          "wealthDelta": -20
        },
        "outcomeText": "医師やカウンセラーの支援を受け、地獄のような離脱症状を乗り越えて依存から完全に脱却した。"
      },
      {
        "id": "buy_illicit_fentanyl_street",
        "label": "処方が打ち切られたため、路上で密売される安価な錠剤に手を出す",
        "subLabel": "痛みを消そうとするが致死性の高いフェンタニル混入リスク",
        "survivalChance": 0.69,
        "deathCause": "合成オピオイド（フェンタニル）過剰摂取による呼吸停止死",
        "effects": {
          "wealthDelta": -40,
          "health": -30,
          "happiness": -20
        },
        "outcomeText": "ナロキソンの緊急投与で間一髪救命され、九死に一生を得て治療施設へ収容された。",
        "deathText": "微量のフェンタニルが混入した錠剤を服用して呼吸が停止し、自室のソファーで静かに絶命した。"
      }
    ]
  },
  {
    "id": "mod_west_favela_police_raid",
    "title": "リオデジャネイロのファヴェーラ（貧民街）銃撃戦",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_west"
    ],
    "minAge": 10,
    "maxAge": 60,
    "description": "丘の上に広がるファヴェーラで、重武装した軍警察の装甲車（カヴェイラォン）と麻薬密売組織の銃撃戦が始まった。自動小銃の銃弾が薄いトタン屋根を貫通して降り注ぐ。",
    "factBox": "ブラジルの都市部ファヴェーラでは、警察とギャングの抗争により流れ弾による民間人や子どもの死者が絶えない。",
    "choices": [
      {
        "id": "lie_flat_under_mattress",
        "label": "床に伏せて分厚いマットレスを頭から被り、銃撃が止むのを待つ",
        "subLabel": "流れ弾を避けるため息を殺して耐える",
        "survivalChance": 0.81,
        "deathCause": "市街戦の跳弾・流れ弾による頭部貫通銃創死",
        "effects": {
          "happiness": 10,
          "relations": 15,
          "wealthDelta": -5
        },
        "outcomeText": "壁に何発もの弾痕が刻まれたが、家族全員が奇跡的に無傷で銃撃戦を生き延びた。",
        "deathText": "トタン壁を貫通した自動小銃の跳弾が胸に当たり、救急車の入れない路地のなかで息絶えた。"
      },
      {
        "id": "shelter_in_brick_church",
        "label": "射線を見極め、頑丈な赤レンガ造りのカトリック教会へ駆け込む",
        "subLabel": "安全な避難所を目指すが移動中の露出リスク",
        "survivalChance": 0.76,
        "deathCause": "路地での交戦巻き添えによる銃創死",
        "effects": {
          "relations": 20,
          "knowledge": 10,
          "happiness": 10
        },
        "outcomeText": "司祭が教会の鉄扉を開けて匿ってくれ、集まった近隣住民と励まし合いながら一夜を明かした。",
        "deathText": "教会の手前の坂道で両者の銃撃戦に挟まれ、逃げ場を失って倒れ帰らぬ人となった。"
      }
    ]
  },
  {
    "id": "mod_west_california_wildfire_smoke",
    "title": "カリフォルニア山火事の火の手と緊急避難",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_west"
    ],
    "minAge": 12,
    "maxAge": 70,
    "description": "乾燥した強風（サンタアナ風）に煽られた巨大山火事（メガファイア）が丘を越えて住宅街へ迫ってきた。空はオレンジ色に染まり、携帯電話に即時避難命令のアラートが鳴り響く。",
    "factBox": "地球温暖化と熱波によりカリフォルニアやオーストラリアで森林火災が極大化し、数万ヘクタールが一夜にして焼失する災害が多発している。",
    "choices": [
      {
        "id": "pack_go_bag_drive_highway",
        "label": "非常持ち出し袋とペットを車に乗せ、渋滞するハイウェイを脱出する",
        "subLabel": "家財を捨てて火災旋風から車で逃げ切る",
        "survivalChance": 0.84,
        "deathCause": "山火事の火砕流・炎の壁に囲まれた車内焼死",
        "effects": {
          "wealthDelta": -40,
          "health": 5,
          "happiness": 5
        },
        "outcomeText": "煙に巻かれながらもハイウェイを走り抜け、海沿いの避難所に無事に辿り着いた。",
        "deathText": "道路の両側が炎に塞がれて車列が立ち往生し、猛烈な熱風と火炎に呑み込まれて落命した。"
      },
      {
        "id": "spray_roof_with_garden_hose",
        "label": "ホースで自宅の屋根に水を撒き、飛び火による延焼を防ごうとする",
        "subLabel": "我が家を守ろうとするが避難が遅れる極めて危険な賭け",
        "survivalChance": 0.7,
        "deathCause": "屋根への飛び火消火中の煙吸入・熱傷死",
        "effects": {
          "wealthDelta": 30,
          "health": -20
        },
        "outcomeText": "奇跡的に風向きが変わり、水浸しの我が家だけが焼け残って家屋を守り抜いた。",
        "deathText": "急速に迫った火災旋風の熱波に呼吸器を焼かれ、屋根から転落して炎のなかに倒れた。"
      }
    ]
  },
  {
    "id": "mod_west_heatdome_powergrid",
    "title": "48度熱波（ヒートドーム）と広域送電網の停止",
    "category": "historical_wave",
    "eraIds": [
      "modern"
    ],
    "regionIds": [
      "mod_west"
    ],
    "minAge": 8,
    "maxAge": 80,
    "description": "停滞する高気圧（ヒートドーム）により気温が48度に達し、エアコンの一斉使用で送電網が過負荷となり大停電が発生した。室内の温度が急上昇し、エアコンが動かない密室の危機に陥る。",
    "factBox": "気候変動により熱波の強度と頻度が増大し、電力網の崩壊と熱中症による大量死（気候ショック）が新たな脅威となっている。",
    "choices": [
      {
        "id": "seek_cool_underground_shelter",
        "label": "冷たい地下室に避難し、濡れタオルを首に巻いて扇風機代わりに団扇を使う",
        "subLabel": "地下の地熱の低さを利用して体温上昇を防ぐ",
        "effects": {
          "health": 15,
          "knowledge": 15,
          "happiness": 5
        },
        "outcomeText": "地下室のひんやりした床で安静を保ち、夕暮れに送電が復旧するまで無事に乗り切った。"
      },
      {
        "id": "endure_second_floor_bedroom",
        "label": "電気が戻ると信じて2階の寝室で横たわり、耐え忍ぶ",
        "subLabel": "屋根からの輻射熱で室温が50度近くまで上昇する危険",
        "survivalChance": 0.79,
        "deathCause": "ヒートドーム停電下の室内熱中症・多臓器不全死",
        "effects": {
          "health": -25,
          "happiness": -15
        },
        "outcomeText": "救急隊に発見されて氷風呂で冷やされ、重度の熱中症から辛うじて一命を取り留めた。",
        "deathText": "体温調節機能が破綻して深部体温が42度を超え、ベッドの上で意識を失い多臓器不全で死亡した。"
      }
    ]
  }
];
