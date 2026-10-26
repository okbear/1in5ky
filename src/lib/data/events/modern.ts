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
    "id": "mod_eur_berlin_wall_fall",
    "title": "ベルリンの壁崩壊と東欧激変の熱狂",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_europe"],
    "minAge": 15,
    "maxAge": 70,
    "description": "1989年11月、東西を隔てていたベルリンの壁が群衆の手によって打ち倒された。国境ゲートが開放され、歓喜に沸く人々が検問所に押し寄せる。",
    "factBox": "冷戦の象徴であったベルリンの壁の崩壊は、東欧革命を加速させ、翌年のドイツ再統一とソ連解体へとつながった。",
    "choices": [
      {
        "id": "rush_to_checkpoint_celebrate",
        "label": "壁の検問所へ駆けつけ、東西の市民たちと抱き合って自由を祝う",
        "subLabel": "歴史の転換点に立ち会う高揚感",
        "effects": {
          "happiness": 25,
          "relations": 20,
          "knowledge": 15
        },
        "outcomeText": "見知らぬ人々とシャンパンを酌み交わし、壁の破片を記念に持ち帰って新たな時代の幕開けを実感した。"
      },
      {
        "id": "prepare_for_economic_shock",
        "label": "熱狂から一歩引き、東西統合による通貨統合や雇用の激変に備える",
        "subLabel": "急速な資本主義化への警戒と準備",
        "effects": {
          "wealthDelta": 20,
          "knowledge": 20
        },
        "outcomeText": "統合後の激しい物価変動や民営化の波を冷静に見極め、安定した経済基盤を守り抜いた。"
      }
    ]
  },
  {
    "id": "mod_eur_heatwave_stone_apartment",
    "title": "欧州大熱波とエアコンのない石造りアパート",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_europe"],
    "minAge": 10,
    "maxAge": 85,
    "description": "連日40度を超える観測史上最悪の熱波が西欧を襲った。石造りのアパートメントは熱を蓄え続け、エアコンのない室内は深夜になってもサウナのように蒸し風呂と化す。",
    "factBox": "2003年夏の欧州熱波では、エアコン普及率の低さと高齢者の独居が重なり、フランスを中心に欧州全体で約7万人が死亡した。",
    "choices": [
      {
        "id": "evacuate_to_fountain_cathedral",
        "label": "濡れタオルを巻いて分厚い石壁の教会や地下鉄駅へ避難する",
        "subLabel": "天然の涼しい避難所を求めて体温を下げる",
        "effects": {
          "health": 15,
          "knowledge": 10,
          "happiness": 5
        },
        "outcomeText": "荘厳な大聖堂の冷たい石畳の上で近隣の老人たちと身を寄せ合い、酷暑のピークを無事に乗り切った。"
      },
      {
        "id": "endure_inside_darkened_room",
        "label": "鎧戸（シャッター）を閉め切って薄暗い室内で安静にして耐える",
        "subLabel": "直射日光を防ぐが熱がこもる密室の危険",
        "survivalChance": 0.83,
        "deathCause": "石造アパート内の重症熱中症・脱水症死",
        "effects": {
          "health": -20,
          "happiness": -10
        },
        "outcomeText": "近隣のボランティアが配ってくれた氷水で首筋を冷やし、脱水症状で朦朧としながらも辛うじて生還した。",
        "deathText": "夜間も30度を下回らない部屋で脱水症状に陥り、意識を失ったまま静かに心停止に至った。"
      }
    ]
  },
  {
    "id": "mod_eur_schengen_migrant_crisis",
    "title": "欧州難民危機と駅前広場の受け入れ支援",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_europe"],
    "minAge": 16,
    "maxAge": 70,
    "description": "中東や北アフリカの紛争地からバルカン半島を経て数百万人の難民・移民が押し寄せ、主要駅のプラットフォームは支援物資と混乱で溢れ返った。",
    "factBox": "2015年の難民危機では、人道主義に基づく受け入れと各国内の治安懸念・右派台頭が激しく衝突し、欧州統合の根幹が揺らいだ。",
    "choices": [
      {
        "id": "volunteer_food_medical_support",
        "label": "市民ボランティアとして駅前で温かいスープと毛布を配る",
        "subLabel": "人道的危機に対して草の根の支援を行う",
        "effects": {
          "relations": 20,
          "happiness": 10,
          "wealthDelta": -5
        },
        "outcomeText": "幼子を抱えた家族から涙ながらに感謝され、国境を越えた人間の絆を深く胸に刻んだ。"
      },
      {
        "id": "distance_from_station_unrest",
        "label": "治安の悪化を警戒して夜間の駅周辺を避け、自宅での生活を守る",
        "subLabel": "混乱に巻き込まれず生活の安全を優先する",
        "effects": {
          "health": 5,
          "happiness": -5
        },
        "outcomeText": "駅前での小競り合いや警察の規制に巻き込まれることなく、家族の平穏な日常を維持した。"
      }
    ]
  },
  {
    "id": "mod_eur_yellow_vests_fuel_tax",
    "title": "燃料税引き上げへの「黄色いベスト運動」と都市封鎖",
    "category": "livelihood",
    "eraIds": ["modern"],
    "regionIds": ["mod_europe"],
    "minAge": 18,
    "maxAge": 65,
    "description": "環境対策を名目とした燃料税引き上げに怒った地方在住者たちが、蛍光色の黄色い安全ベストを着てラウンドアバウト（円形交差点）や大通りを封鎖した。",
    "factBox": "2018年にフランスで始まったジレ・ジョーヌ（黄色いベスト）運動は、大都市エリートと車が不可欠な地方住民の経済格差への怒りを浮き彫りにした。",
    "choices": [
      {
        "id": "join_roundabout_protest_rally",
        "label": "黄色いベストを着て交差点の封鎖デモに参加し、生活苦を訴える",
        "subLabel": "庶民の切実な怒りを掲げて連帯する",
        "survivalChance": 0.9,
        "deathCause": "デモ鎮圧の催涙ガス・ゴム弾弾圧による頭部外傷死",
        "effects": {
          "relations": 20,
          "happiness": 15,
          "wealthDelta": -10
        },
        "outcomeText": "仲間たちと焚き火を囲んで歌い、政府に燃料税引き上げの凍結を勝ち取る原動力となった。",
        "deathText": "機動隊の催涙弾と放水銃の直撃を受けて転倒し、混乱する群衆に踏み倒されて息絶えた。"
      },
      {
        "id": "carpool_to_commute_work",
        "label": "デモを避けて同僚と相乗り通勤を行い、燃料費の高騰を耐え忍ぶ",
        "subLabel": "衝突を避けて現実的な節約策で生活を維持する",
        "effects": {
          "wealthDelta": -5,
          "relations": 10,
          "knowledge": 10
        },
        "outcomeText": "封鎖道路を迂回しながら通勤を続け、職場の同僚との助け合いで物価高の波をしのいだ。"
      }
    ]
  },
  {
    "id": "mod_eur_pension_reform_general_strike",
    "title": "年金改革法案と公共交通の無期限ゼネスト",
    "category": "common_sense",
    "eraIds": ["modern"],
    "regionIds": ["mod_europe"],
    "minAge": 25,
    "maxAge": 70,
    "description": "少子高齢化を理由とする年金支給開始年齢の2年引き上げに対し、主要労働組合が一斉に無期限ストライキに突入。鉄道も地下鉄も完全に麻痺した。",
    "factBox": "欧州では手厚い福祉国家モデルを維持するための財政再建と、生活の質や早期引退の権利を守ろうとする市民運動の間で激しい衝突が繰り返されている。",
    "choices": [
      {
        "id": "march_in_union_strike_parade",
        "label": "労働組合のデモ行進に加わり、労働者の権利と生活防衛を叫ぶ",
        "subLabel": "生活防衛のためにストライキで徹底抗戦する",
        "effects": {
          "relations": 15,
          "happiness": 10,
          "wealthDelta": -10
        },
        "outcomeText": "数十万人の大行進のなかで連帯の力を実感し、不当な社会保障削減に対する強い歯止めをかけた。"
      },
      {
        "id": "switch_to_bicycle_remote_work",
        "label": "自転車通勤と在宅勤務に切り替え、業務の遅延を最小限に抑える",
        "subLabel": "都市機能停止のなかで柔軟に自分の仕事をやり抜く",
        "effects": {
          "health": 15,
          "wealthDelta": 10,
          "knowledge": 10
        },
        "outcomeText": "スト期間中も健康的に移動手段を確保し、取引先からの信頼を高めて昇進の足がかりとした。"
      }
    ]
  },
  {
    "id": "mod_na_rustbelt_factory_closure",
    "title": "ラストベルトの自動車工場閉鎖と医療保険の喪失",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_north_america"],
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
    "id": "mod_na_opioid_painkiller_habit",
    "title": "処方鎮痛薬オピオイドの過剰処方と依存症",
    "category": "common_sense",
    "eraIds": ["modern"],
    "regionIds": ["mod_north_america"],
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
    "id": "mod_na_california_wildfire_smoke",
    "title": "カリフォルニア山火事の火の手と緊急避難",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_north_america"],
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
    "id": "mod_na_subprime_mortgage_foreclosure",
    "title": "サブプライムローン破綻と住宅差し押さえ通告",
    "category": "livelihood",
    "eraIds": ["modern"],
    "regionIds": ["mod_north_america"],
    "minAge": 22,
    "maxAge": 65,
    "description": "頭金ゼロの変動金利住宅ローンで念願のマイホームを購入したが、住宅バブルの崩壊で金利が急騰。住宅価値がローン残高を下回り、銀行から立ち退き勧告が届いた。",
    "factBox": "2007〜2008年のサブプライム住宅ローン危機は、リーマン・ショックの引き金となり、米国で数百万人の中間層が住まいを失った。",
    "choices": [
      {
        "id": "hand_over_keys_rent_apartment",
        "label": "家を手放して鍵を銀行に郵送し、安価な賃貸アパートへ身軽に移住する",
        "subLabel": "信用スコアの低下を受け入れ債務の泥沼を脱出する",
        "effects": {
          "wealthDelta": -20,
          "happiness": 10,
          "knowledge": 15
        },
        "outcomeText": "多額の借金から解放され、質素ながら家族との平穏な暮らしを一から再構築した。"
      },
      {
        "id": "fight_foreclosure_with_predatory_loan",
        "label": "家を守るため、高利の短期借入を重ねてローンの返済を続けようとする",
        "subLabel": "執念でマイホームにしがみつくが多重債務のリスク",
        "effects": {
          "wealthDelta": -50,
          "health": -15,
          "happiness": -20
        },
        "outcomeText": "昼夜兼行の掛け持ち労働で辛うじて競売を遅らせたが、心身ともに極度の疲労に追い込まれた。"
      }
    ]
  },
  {
    "id": "mod_na_hurricane_katrina_levee",
    "title": "巨大ハリケーン・カトリーナと堤防決壊の水没",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_north_america"],
    "minAge": 8,
    "maxAge": 75,
    "description": "カテゴリー5の巨大ハリケーンが湾岸都市を直撃し、運河の防潮堤が決壊。海抜ゼロメートルの市街地に濁流が一気に押し寄せ、街の8割が水没した。",
    "factBox": "2005年のハリケーン・カトリーナでは、老朽化した堤防の決壊と救助の遅れにより、ニューオーリンズを中心に1,800人以上が犠牲となった。",
    "choices": [
      {
        "id": "chop_through_roof_to_attic",
        "label": "屋根裏へ逃げ込み、手斧で屋根に穴を開けて救援ヘリを待つ",
        "subLabel": "天井に閉じ込められる水死リスクを回避して脱出路を作る",
        "survivalChance": 0.85,
        "deathCause": "屋根裏への浸水による溺水窒息死",
        "effects": {
          "health": 10,
          "relations": 15,
          "wealthDelta": -35
        },
        "outcomeText": "照りつける太陽のもと屋根の上でSOSの布を掲げ、沿岸警備隊のヘリに吊り上げられて救助された。",
        "deathText": "水面上昇のスピードに追いつけず屋根裏に閉じ込められ、濁流のなかで逃げ場を失って溺死した。"
      },
      {
        "id": "wade_through_flood_to_superdome",
        "label": "胸まで浸かる汚水の中を歩き、避難所に指定された巨大スタジアムへ向かう",
        "subLabel": "感染症と略奪の危険があるなか避難所を目指す",
        "survivalChance": 0.78,
        "deathCause": "洪水汚水の細菌感染症（レプトスピラ症）による敗血症死",
        "effects": {
          "health": -20,
          "happiness": -15,
          "wealthDelta": -20
        },
        "outcomeText": "停電と水不足で地獄のような環境のスタジアムで数日間耐え抜き、州外への移送バスに乗車できた。",
        "deathText": "汚水に混ざった有毒物質と病原菌で足の切り傷から激しい敗血症を発症し、治療を受けられず絶命した。"
      }
    ]
  },
  {
    "id": "mod_lat_favela_police_raid",
    "title": "リオデジャネイロのファヴェーラ（貧民街）銃撃戦",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_latin_america"],
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
    "id": "mod_lat_hyperinflation_currency",
    "title": "ハイパーインフレと日銭の物資買い出し競争",
    "category": "common_sense",
    "eraIds": ["modern"],
    "regionIds": ["mod_latin_america"],
    "minAge": 15,
    "maxAge": 70,
    "description": "月間インフレ率が数百パーセントに達し、朝と夕方でスーパーの値札が倍に書き換えられる。給料を受け取った瞬間、紙屑になる前に食料品店へ全力疾走しなければならない。",
    "factBox": "1980〜90年代のラテンアメリカ（ブラジル・アルゼンチン・ボリビアなど）では対外債務と財政赤字により天文学的ハイパーインフレが頻発した。",
    "choices": [
      {
        "id": "convert_salary_to_canned_food_instantly",
        "label": "給料袋を抱えて市場へ走り、豆や米、缶詰など保存食を即座に買い占める",
        "subLabel": "現金を即座に現物資産へ転換して価値を守る",
        "effects": {
          "wealthDelta": 15,
          "health": 10,
          "knowledge": 15
        },
        "outcomeText": "値上げスタンプが押される前に数か月分の主食を確保し、一家の飢えを完全に防いだ。"
      },
      {
        "id": "exchange_black_market_dollars",
        "label": "裏通りの両替商で違法な闇レートの米ドル紙幣へ換金する",
        "subLabel": "警察の手入れリスクを冒して米ドルで資産を保全する",
        "effects": {
          "wealthDelta": 30,
          "happiness": 10,
          "relations": -10
        },
        "outcomeText": "警察の目を盗んで手に入れたドル札をマットレスの下に隠し、インフレ下で資産価値を何倍にも増やした。"
      }
    ]
  },
  {
    "id": "mod_lat_military_dictatorship_curfew",
    "title": "軍事政権の戒厳令と「夜の連行」の影",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_latin_america"],
    "minAge": 16,
    "maxAge": 65,
    "description": "クーデターで実権を握った軍事政権が夜間外出禁止令を発令。反体制派とみなされた学生や労働者がナンバープレートのない乗用車（ファルコン）に拉致され行方不明になっている。",
    "factBox": "1970年代の南米諸国（アルゼンチン、チリ、ウルグアイ等）では軍事政権による「汚い戦争」やコンドル作戦により数万人の市民が非合法に殺害・失踪させられた。",
    "choices": [
      {
        "id": "hide_banned_books_stay_silent",
        "label": "社会主義の書物やレコードを庭に埋めて焼き、一切の政治活動から身を引く",
        "subLabel": "当局のブラックリスト掲載を徹底的に避けて生き延びる",
        "effects": {
          "health": 10,
          "happiness": -15,
          "knowledge": 10
        },
        "outcomeText": "疑わしい私物をすべて処分して沈黙を貫き、秘密警察の夜間家宅捜索を平穏にやり過ごした。"
      },
      {
        "id": "shelter_dissident_student_relative",
        "label": "追われている親戚の医学生を床下の物置に匿い、国外脱出を手引きする",
        "subLabel": "血縁の命を救おうとするが連座拷問の極大リスク",
        "survivalChance": 0.72,
        "deathCause": "軍事政権秘密警察による連行・拷問死（強制失踪）",
        "effects": {
          "relations": 30,
          "happiness": 20,
          "wealthDelta": -20
        },
        "outcomeText": "司祭の協力で親戚を外国大使館へ滑り込ませることに成功し、奇跡的に一家の身の安全も保たれた。",
        "deathText": "密告により未明に武装部隊が突入し、目隠しをされて秘密収容所へ連行され二度と戻らなかった。"
      }
    ]
  },
  {
    "id": "mod_lat_amazon_deforestation_conflict",
    "title": "アマゾン熱帯雨林開発と先住民・開拓民の衝突",
    "category": "livelihood",
    "eraIds": ["modern"],
    "regionIds": ["mod_latin_america"],
    "minAge": 15,
    "maxAge": 60,
    "description": "大豆農園と大牧場を広げる巨大アグリビジネスのブルドーザーが森林を焼き払い、伝統的なゴム採取民や先住民のコミュニティに不法侵入してきた。",
    "factBox": "アマゾン熱帯雨林の開発を巡っては、森林保護を訴えるゴム採取民指導者シコ・メンデスが暗殺されるなど、暴力的な土地争奪が続いている。",
    "choices": [
      {
        "id": "form_human_chain_empate",
        "label": "仲間とともにチェーンソーの前に立ちはだかり、非暴力で伐採を阻止する",
        "subLabel": "伝統的森林防衛（エンパテ運動）で森林を守る",
        "survivalChance": 0.82,
        "deathCause": "土地開発業者の雇った殺し屋（ピストレイロ）による銃殺",
        "effects": {
          "relations": 25,
          "knowledge": 15,
          "happiness": 15
        },
        "outcomeText": "国際メディアの注目を集めて開発業者を撤退させ、持続可能な保護区の設立を勝ち取った。",
        "deathText": "抗議集会からの帰り道、森林の茂みから放たれた雇われガンマンの凶弾に倒れた。"
      },
      {
        "id": "relocate_to_urban_cooperative",
        "label": "森林での争いを避け、近隣都市のアマゾン特産品加工組合へ転職する",
        "subLabel": "命の危険を避けて安全な都市型アグロフォレストリーに関わる",
        "effects": {
          "wealthDelta": 15,
          "health": 10,
          "happiness": 5
        },
        "outcomeText": "アサイーやガラナの加工流通に従事し、森林を守りながら安定した現金収入を確立した。"
      }
    ]
  },
  {
    "id": "mod_lat_mexico_cartel_checkpoint",
    "title": "麻薬カルテルの私設検問所と夜間高速道路",
    "category": "common_sense",
    "eraIds": ["modern"],
    "regionIds": ["mod_latin_america"],
    "minAge": 14,
    "maxAge": 65,
    "description": "長距離バスで州境を越える途中、自動小銃とタクティカルベストで完全武装したカルテルの私設検問所に遭遇。車内に不気味な静寂が広がる。",
    "factBox": "2000年代以降のメキシコ麻薬戦争では、カルテル同士の縄張り争いと治安部隊との交戦により数十万人以上の民間人が犠牲となった。",
    "choices": [
      {
        "id": "lower_eyes_hand_over_wallet",
        "label": "目を合わせず、財布の中の現金をすべて差し出して恭順の意を示す",
        "subLabel": "プライドを捨てて要求に従い通過を見逃してもらう",
        "survivalChance": 0.88,
        "deathCause": "カルテル検問所での無差別射殺・拉致殺害",
        "effects": {
          "wealthDelta": -20,
          "health": 5,
          "happiness": -10
        },
        "outcomeText": "現金と時計を奪われたものの、危害を加えられることなくバスの再出発を許された。",
        "deathText": "対立組織の密通者と誤認され、バスから引きずり降ろされて路肩で銃殺された。"
      },
      {
        "id": "show_local_artisan_id_speak_dialect",
        "label": "地元の職人身分証を落ち着いて提示し、この土地の住人であることを示す",
        "subLabel": "地縁と落ち着いた態度で敵意がないことを証明する",
        "survivalChance": 0.85,
        "deathCause": "カルテル私設検問所での強盗銃撃死",
        "effects": {
          "knowledge": 15,
          "relations": 10,
          "wealthDelta": -5
        },
        "outcomeText": "顔役の名前を出して冷静に対応し、所持品も奪われることなく無事に通過できた。",
        "deathText": "検問のリーダーがドラッグで錯乱しており、身分証を出そうとした手を合図と誤解され乱射された。"
      }
    ]
  },
  {
    "id": "mod_rus_chernobyl_fallout",
    "title": "チェルノブイリ原発事故と放射性雲の飛来",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_russia_cis"],
    "minAge": 5,
    "maxAge": 70,
    "description": "1986年4月末、数百キロ離れた原子力発電所で大爆発が発生した。当局は事故を隠蔽しているが、空に金属の味が広がり、ガイガーカウンターが異常な数値を刻んでいる。",
    "factBox": "チェルノブイリ原発4号機の炉心溶融爆発事故では、大量の放射性物質が欧州広域に拡散し、ソ連の情報公開（グラスノスチ）への決定打となった。",
    "choices": [
      {
        "id": "take_iodine_evacuate_south",
        "label": "噂を信じて薬局でヨウ素剤を確保し、子供を連れて南方の親戚宅へ脱出する",
        "subLabel": "甲状腺被ばくを防ぎ放射能プルームから逃れる",
        "effects": {
          "health": 20,
          "knowledge": 20,
          "wealthDelta": -15
        },
        "outcomeText": "当局の公式発表より早く汚染地域を脱出し、子供たちの健康被害を完全に防ぐことができた。"
      },
      {
        "id": "trust_official_may_day_parade",
        "label": "当局の「安全宣言」を信じ、予定通りメーデーの祝賀パレードに参加する",
        "subLabel": "公式発表を信じるが降下放射性降下物を直浴びするリスク",
        "survivalChance": 0.8,
        "deathCause": "高線量放射線被曝による急性放射線障害・急性白血病死",
        "effects": {
          "health": -35,
          "happiness": -20
        },
        "outcomeText": "甲状腺の異常を抱え長期の定期検診を余儀なくされたが、適切な治療で成人まで生き抜いた。",
        "deathText": "大量の放射性降下物を浴びて骨髄機能不全に陥り、数年後に急性の白血病を発症して若くして命を落とした。"
      }
    ]
  },
  {
    "id": "mod_rus_ussr_collapse_voucher",
    "title": "ソ連崩壊と国有財産バウチャーの投げ売り",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_russia_cis"],
    "minAge": 18,
    "maxAge": 70,
    "description": "1991年末に赤旗がクレムリンから降ろされ、ソ連が消滅した。急進的な民営化政策（ショック療法）により、国民一人ひとりに国有企業の民営化小切手（バウチャー）が配られたが、日々のパンにも事欠く。",
    "factBox": "ソ連崩壊後のロシアではハイパーインフレと急激な資本主義化により、庶民のバウチャーを買い占めたオリガルヒ（新興財閥）が巨万の富を独占した。",
    "choices": [
      {
        "id": "pool_vouchers_invest_gas_utility",
        "label": "目先のウォッカ代にせず、親族のバウチャーを集めて天然ガス企業の株式に変える",
        "subLabel": "新体制の基幹インフラ株に賭けて長期保有する",
        "effects": {
          "wealthDelta": 45,
          "knowledge": 25,
          "happiness": 20
        },
        "outcomeText": "保有したガス株が将来の巨大企業（ガスプロム）となり、巨額の配当金で一族の豊かな生活が約束された。"
      },
      {
        "id": "sell_voucher_for_sausage_bread",
        "label": "駅前広場の怪しいブローカーにバウチャーを売り払い、即座に肉とパンを買う",
        "subLabel": "今日を生き抜くために食料を確保する現実的選択",
        "effects": {
          "wealthDelta": 5,
          "health": 10,
          "happiness": -10
        },
        "outcomeText": "その冬の飢えをしのぐことはできたが、後に莫大な価値を持った財産を失った喪失感を噛み締めた。"
      }
    ]
  },
  {
    "id": "mod_rus_chechen_war_draft",
    "title": "チェチェン紛争の徴兵令と母の会の救出運動",
    "category": "historical_wave",
    "eraIds": ["modern"],
    "regionIds": ["mod_russia_cis"],
    "minAge": 17,
    "maxAge": 55,
    "description": "分離独立を巡るカフカス地方の内戦に、ろくな訓練も受けない徴兵兵士たちが最前線の市街戦（グロズヌイ突入）へ送り込まれ、おびただしい数の戦死者が出ている。",
    "factBox": "1990年代の第一次・第二次チェチェン紛争では、装備も士気も不十分な若年兵が過酷な戦闘に巻き込まれ、「ロシア兵士の母の委員会」が反戦運動を展開した。",
    "choices": [
      {
        "id": "bribe_military_doctor_deferment",
        "label": "軍医に貯金を渡して健康診断で不適格の診断書を取り、徴兵を免除してもらう",
        "subLabel": "腐敗を利用して命がけの前線送りから逃れる",
        "effects": {
          "wealthDelta": -30,
          "health": 10,
          "happiness": 15
        },
        "outcomeText": "徴兵猶予を勝ち取って大学へ復学し、最前線の悲劇を免れて平穏な人生を歩んだ。"
      },
      {
        "id": "deploy_as_conscript_driver",
        "label": "運命を受け入れて入隊し、後方の補給トラック部隊の運転手として任務に就く",
        "subLabel": "前線での伏撃を警戒しながら任務を全うする",
        "survivalChance": 0.74,
        "deathCause": "山岳道路での対戦車地雷・狙撃による戦死",
        "effects": {
          "relations": 15,
          "health": -15,
          "happiness": -15
        },
        "outcomeText": "地雷の恐怖に怯えながらも生きて除隊の日を迎え、故郷の家族の待つ家へ帰還した。",
        "deathText": "山岳峡谷の道路で補給車列がロケット弾の奇襲を受け、炎上するトラックのなかで帰らぬ人となった。"
      }
    ]
  },
  {
    "id": "mod_rus_siberian_blizzard_district_heating",
    "title": "氷点下45度の大寒波と地域集中暖房パイプの破裂",
    "category": "common_sense",
    "eraIds": ["modern"],
    "regionIds": ["mod_russia_cis"],
    "minAge": 8,
    "maxAge": 80,
    "description": "シベリアからの猛烈な寒波で気温が氷点下45度まで降下。老朽化した都市の地域集中暖房（ツェントラリノエ・オトプレニエ）の温水本管が破裂し、高層団地全棟の暖房が停止した。",
    "factBox": "ロシアや旧ソ連諸国の都市では熱供給を一箇所の火力発電所から温水パイプで全戸へ送る仕組みが多く、本管が凍結破裂すると都市全体が凍死の危機に瀕する。",
    "choices": [
      {
        "id": "build_potbelly_stove_brick_chimney",
        "label": "自室にレンガと鉄板で即席の薪ストーブ（ブルジョイカ）を組み、家具を燃やす",
        "subLabel": "室内に暖を取り煙突から排煙して凍死を防ぐ",
        "survivalChance": 0.86,
        "deathCause": "即席ストーブの不完全燃焼による一酸化炭素中毒死",
        "effects": {
          "health": 10,
          "knowledge": 15,
          "wealthDelta": -15
        },
        "outcomeText": "窓から煙突を出して火を焚き続け、団地じゅうが凍りつく一週間を家族全員で生き延びた。",
        "deathText": "換気口が凍結で塞がれたことに気づかず、就寝中に充満した一酸化炭素で静かに永遠の眠りについた。"
      },
      {
        "id": "evacuate_to_underground_metro_station",
        "label": "防寒着を何重にも着込み、地熱と非常電源で温かい地下鉄駅へ避難する",
        "subLabel": "寒風吹きすさぶ地上を脱出し地下インフラに身を寄せる",
        "effects": {
          "relations": 15,
          "health": 5,
          "happiness": 5
        },
        "outcomeText": "深い地下鉄駅のコンコースに市民たちと毛布を持ち寄り、温かい紅茶を分け合って寒波をやり過ごした。"
      }
    ]
  },
  {
    "id": "mod_rus_90s_gangster_extortion",
    "title": "90年代の無法地帯・ロシアンマフィアのみかじめ料要求",
    "category": "livelihood",
    "eraIds": ["modern"],
    "regionIds": ["mod_russia_cis"],
    "minAge": 20,
    "maxAge": 60,
    "description": "小さな自動車修理工場を開業した途端、革ジャンを着た屈強なロシアンマフィア（ブラトヴァ）がやって来て「屋根（クルィーシャ＝保護）」の代金を要求してきた。",
    "factBox": "ソ連崩壊直後のロシアでは警察組織が機能不全に陥り、民間ビジネスのほぼ全土が組織犯罪グループによるみかじめ料徴収や武力抗争にさらされた。",
    "choices": [
      {
        "id": "pay_fixed_krysha_protection_fee",
        "label": "割り切って規定の保護料を支払い、地域の他ギャングからの盾として利用する",
        "subLabel": "無法時代の「税金」として受け入れ商売の継続を優先する",
        "effects": {
          "wealthDelta": -20,
          "relations": 15,
          "knowledge": 10
        },
        "outcomeText": "約束通り他のチンピラから守ってもらい、安定して工場の操業を続けて地域で確固たる信用を得た。"
      },
      {
        "id": "refuse_and_hire_former_kgb_security",
        "label": "脅迫を毅然と拒絶し、解体されたKGB出身の警備会社と契約して対抗する",
        "subLabel": "力にはプロの力で対抗する危険な駆け引き",
        "survivalChance": 0.77,
        "deathCause": "マフィアによる報復の自動車爆弾・銃撃暗殺",
        "effects": {
          "wealthDelta": -40,
          "knowledge": 20,
          "happiness": 10
        },
        "outcomeText": "元特殊部隊の警備員がマフィアを追い払い、相手組織も手出しを諦めて撤退していった。",
        "deathText": "工場の通用門を出たところで待ち伏せていた黒塗り車からサブマシンガンで銃撃され命を落とした。"
      }
    ]
  }
];
