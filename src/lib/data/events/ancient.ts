import type { DecisionEvent } from '../../types';

/** 古代文明期（メソポタミア・エジプト・黄河・インダス）の決断イベント */
export const ANCIENT_EVENTS: DecisionEvent[] = [
  {
    "id": "anc_meso_canal_repair",
    "title": "大麦運河の浚渫普請と堤防補修",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_mesopotamia"
    ],
    "minAge": 12,
    "maxAge": 55,
    "description": "ティグリス・ユーフラテス水系の灌漑用水路に泥が堆積し、水流が滞り始めた。神殿の役人が各農家から人手を徴集し、灼熱の太陽の下で土嚢を積み上げる浚渫普請が命じられた。",
    "factBox": "メソポタミアの農業は灌漑運河の維持なしには成立せず、定期的な浚渫と補修に多くの共同体労働力が動員された。",
    "choices": [
      {
        "id": "work_ditch",
        "label": "泥に塗れて水路の底を掘り続ける",
        "subLabel": "労役手当の大麦が支給されるが重労働",
        "survivalChance": 0.88,
        "deathCause": "運河堤防崩壊による圧死・熱中症",
        "effects": {
          "health": -10,
          "wealthDelta": 15,
          "relations": 5
        },
        "outcomeText": "灼熱の太陽の下で泥を掻き出し、運河の通水を無事に回復させた。配給の大麦樽を受け取り家族を潤した。",
        "deathText": "掘り崩した泥堤が突然滑り落ち、腰まで埋まったところへ上流から濁流が押し寄せて息絶えた。"
      },
      {
        "id": "bribe_ditch_scribe",
        "label": "書記に羊毛を差し出して労役を免除してもらう",
        "subLabel": "手持ちの蓄えを失うが安全",
        "effects": {
          "wealthDelta": -20,
          "happiness": 5,
          "relations": -5
        },
        "outcomeText": "役人の書記に羊毛の束をそっと渡し、名簿から名前を外してもらった。家で静かに収穫作業に専念した。"
      }
    ]
  },
  {
    "id": "anc_meso_beer_ration",
    "title": "神殿配給の大麦ビールと度量衡検査",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_mesopotamia"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "神殿の醸造所から日々の労役の対価として大麦ビールが配給されたが、基準の枡（シラ）より明らかに目減りしていた。監督官の不正を告発するか、沈黙して受け取るかの選択を迫られる。",
    "factBox": "古代メソポタミアではビールは単なる嗜好品ではなく、栄養価が高く煮沸により安全な必須水分補給源であった。",
    "choices": [
      {
        "id": "drink_beer_quietly",
        "label": "波風を立てず、目減りしたビールをそのまま飲む",
        "subLabel": "不満は残るが報復は避けられる",
        "effects": {
          "health": 5,
          "happiness": -8,
          "wealthDelta": -5
        },
        "outcomeText": "濁ったビールを静かに飲み干した。喉は潤ったものの、神殿役人への拭いきれない不信が心に残った。"
      },
      {
        "id": "protest_beer_measure",
        "label": "長老の裁判所へ枡の不正を訴え出る",
        "subLabel": "証拠の粘土板を提示するが逆恨みの危険",
        "survivalChance": 0.82,
        "deathCause": "神殿役人による私刑・処罰死",
        "effects": {
          "wealthDelta": 20,
          "relations": 10,
          "knowledge": 5
        },
        "outcomeText": "都市門の裁判で長老たちが枡の改ざんを認め、神殿から正規の差額分の大麦が補償された。",
        "deathText": "夜道で役人の放った手下に棍棒で襲われ、路傍の側溝に投げ捨てられて冷たくなった。"
      }
    ]
  },
  {
    "id": "anc_meso_debt_slavery",
    "title": "塩害による不作と負債の清算",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_mesopotamia"
    ],
    "minAge": 18,
    "maxAge": 50,
    "description": "長年の過剰灌漑によって農地が白く塩を吹き、今年の大麦収穫は平年の半分にも満たなかった。銀貸しの商人から借りた種籾の返済期日が迫り、家族を担保にするか田畑を手放すかの決断を迫られる。",
    "factBox": "メソポタミア南部では塩害が文明衰退の主因の一つとなり、多くの農民が借財により債務奴隷に転落した。",
    "choices": [
      {
        "id": "surrender_field",
        "label": "先祖伝来の麦畑の耕作権を手放す",
        "subLabel": "家族の自由は保たれるが極貧の小作人へ転落",
        "effects": {
          "wealthDelta": -50,
          "happiness": -20,
          "health": -5
        },
        "outcomeText": "粘土板の契約を焼き捨て、畑の権利を商人に譲り渡した。自由の身にとどまったが、明日の糧を得るのも険しい日々となった。"
      },
      {
        "id": "serve_as_debtor",
        "label": "3年間の債務奉公に自ら入る",
        "subLabel": "商人の屋敷で重労働をこなして借金を帳消しにする",
        "survivalChance": 0.79,
        "deathCause": "商人家での過酷な債務労役死",
        "effects": {
          "wealthDelta": 10,
          "health": -15,
          "relations": -10
        },
        "outcomeText": "商人の粉挽き小屋で臼を回し続け、3年間の年限を耐え抜いてようやく借金から解放された。",
        "deathText": "連日の過重労働と粗末な残飯により全身がむくみ、粉挽き小屋の床で倒れて息を引き取った。"
      }
    ]
  },
  {
    "id": "anc_meso_cuneiform_scribe",
    "title": "神殿の書記学校（エドゥバ）への入門選考",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_mesopotamia"
    ],
    "minAge": 8,
    "maxAge": 22,
    "description": "粘土板に楔形文字を刻み、帳簿や外交書簡を記録する「書記」は社会の上層へ至る数少ない道である。書記学校（エドゥバの家）の門を叩き、厳しい鞭打ち試験に耐える機会が巡ってきた。",
    "factBox": "シュメール語とアッカド語の数千に及ぶ楔形文字を修得した書記は、行政・税務・外交を牛耳る特権階級であった。",
    "choices": [
      {
        "id": "study_clay_tablet",
        "label": "葦のペンを握り、幾千の文字記号を丸暗記する",
        "subLabel": "厳しい体罰を伴うが合格すれば書記の身分",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "wealthDelta": 35,
          "happiness": -5
        },
        "outcomeText": "毎日の体罰に耐えながら粘土板に文字を刻み続けた。神殿の計量官として採用され、将来の安泰を手に入れた。"
      },
      {
        "id": "stay_plowman",
        "label": "学問を諦め、父の鋤と牛を継いで大地を耕す",
        "subLabel": "文字は読めないが慣れ親しんだ農村生活",
        "effects": {
          "health": 10,
          "knowledge": -5,
          "happiness": 5,
          "relations": 10
        },
        "outcomeText": "学校を去り、土の匂いのする鋤を握った。朝日に向かって牛を追い、大地とともに生きる道を選んだ。"
      }
    ]
  },
  {
    "id": "anc_meso_sandstorm_fever",
    "title": "熱風シムーンの襲来と激しい眼病",
    "category": "historical_wave",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_mesopotamia"
    ],
    "minAge": 5,
    "maxAge": 60,
    "description": "砂漠から吹き荒れる熱風シムーンが空を赤黒く染め、微細な砂塵が街と村を包み込んだ。人々の目は真っ赤に充血して膿み、激しい高熱と頭痛に倒れる者が続出している。",
    "factBox": "乾燥気候と砂塵嵐は古代メソポタミアでトラコーマなどの眼疾患や呼吸器疾患の猛威を招いた。",
    "choices": [
      {
        "id": "stay_clay_room",
        "label": "厚い日干しレンガの土室に籠もり、ぬるま湯で目を洗う",
        "subLabel": "暗闇で安静を保ち嵐が過ぎ去るのを待つ",
        "survivalChance": 0.85,
        "deathCause": "砂塵による急性呼吸器不全・熱病",
        "effects": {
          "health": -8,
          "happiness": -5,
          "wealthDelta": -10
        },
        "outcomeText": "数日間を暗い土室で過ごし、視力を失うことなく熱風の季節をやり過ごすことができた。",
        "deathText": "砂塵が気管を塞ぎ、喉を掻きむしりながら激しい咳とともに喀血して息絶えた。"
      },
      {
        "id": "seek_temple_asipu",
        "label": "神殿の呪祷師（アシプ）に銀を払い祓いの儀式を頼む",
        "subLabel": "神への供物を捧げて悪霊パズズを退散させる",
        "effects": {
          "wealthDelta": -25,
          "knowledge": 5,
          "relations": 5
        },
        "outcomeText": "呪祷師が香を焚き呪文を唱え、目薬として薬草の油を差してくれた。痛みは徐々に和らいだ。"
      }
    ]
  },
  {
    "id": "anc_egypt_nile_flood_level",
    "title": "ナイロメーターの測定と低増水の不安",
    "category": "historical_wave",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_egypt"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "エレファンティネ島の水神殿に刻まれたナイロメーターの水位が、今年の氾濫が極めて低いことを告げた。肥沃な黒土（ケメト）が十分に広がらず、大凶作と食糧危機の兆しが色濃い。",
    "factBox": "古代エジプトの運命はナイル川の増水位に左右された。水位が低すぎると飢饉となり、高すぎると集落が流失した。",
    "choices": [
      {
        "id": "dig_extra_basin",
        "label": "村を挙げて低湿地に余水池（ベイスン）を急造する",
        "subLabel": "残った水を少しでも長く田畑に引き留める",
        "survivalChance": 0.84,
        "deathCause": "ナイル低増水に伴う大飢饉と衰弱死",
        "effects": {
          "health": -10,
          "wealthDelta": 10,
          "relations": 15
        },
        "outcomeText": "夜を徹して土手を築き、貴重なナイルの水を乾いた麦畑へと導いた。収穫は減ったものの村全域の餓死を防いだ。",
        "deathText": "干上がった泥地に蒔いた種籾は芽吹かず、草の根を齧る日々が続いた末に飢え死にした。"
      },
      {
        "id": "flee_to_pharaoh_granary",
        "label": "王都メンフィスのファラオの穀倉へ救済を求め赴く",
        "subLabel": "首都へ避難するが過密による疫病のリスク",
        "survivalChance": 0.8,
        "deathCause": "難民キャンプでの悪性チフス感染",
        "effects": {
          "wealthDelta": -20,
          "happiness": -10,
          "knowledge": 5
        },
        "outcomeText": "大勢の難民とともに王宮の施しを受け、過酷な飢饉の年を何とか生き延びることができた。",
        "deathText": "王宮前の避難所で高熱を発し、汚水と糞尿にまみれた泥の上で息を引き取った。"
      }
    ]
  },
  {
    "id": "anc_egypt_tomb_robbery",
    "title": "王家の谷の墓所修繕と密かな盗掘の誘い",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_egypt"
    ],
    "minAge": 16,
    "maxAge": 45,
    "description": "テーベの職人の村（デル・エル・メディナ）で、ファラオの墓の玄室を彫る作業に従事している。ある夜、同僚の石工から「埋葬されたばかりの高官の墓から黄金の護符を抜き取ろう」と囁かれた。",
    "factBox": "エジプト新王国時代には墓泥棒の裁判記録がパピルスに残されており、捕まれば串刺し刑などの極刑に処された。",
    "choices": [
      {
        "id": "refuse_tomb_theft",
        "label": "オシリスの神罰を恐れて誘いを断り、真面目に石を彫る",
        "subLabel": "富は得られないが魂の救済と命を守る",
        "effects": {
          "happiness": 5,
          "relations": 5,
          "wealthDelta": 5
        },
        "outcomeText": "邪な誘いを撥ね付け、マアト（真理）に従って生きた。数か月後、盗掘に関わった者たちは役人に捕縛され処刑された。"
      },
      {
        "id": "join_tomb_theft",
        "label": "暗闇に紛れて玄室の壁を穿ち、黄金を懐に入れる",
        "subLabel": "莫大な富を得る可能性があるが捕まれば極刑",
        "survivalChance": 0.68,
        "deathCause": "墓泥棒の罪による串刺し刑・処刑",
        "effects": {
          "wealthDelta": 70,
          "happiness": -15,
          "knowledge": 10
        },
        "outcomeText": "震える手で黄金の指輪を懐に忍ばせ、夜明け前に谷を脱出した。手に入れた財で秘密の蓄財を作った。",
        "deathText": "市場で黄金を換金しようとしたところを衛兵に踏み込まれ、裁判の末に杭に刺されて命を絶たれた。"
      }
    ]
  },
  {
    "id": "anc_egypt_crocodile_crossing",
    "title": "ナイル川の渡し舟とソベク神のワニ",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_egypt"
    ],
    "minAge": 10,
    "maxAge": 60,
    "description": "対岸の市場へ大麦とタマネギを売りに行くため、葦の束を束ねた小舟でナイルを渡らねばならない。川面には獰猛なワニの頭が幾つも浮き沈みし、不吉な波紋を広げている。",
    "factBox": "ナイルのワニは恐怖の対象であると同時に、神ソベクとして崇拝され、護符や呪文で身を守ることが日常であった。",
    "choices": [
      {
        "id": "chant_sobek_spell",
        "label": "護符を握りしめ、ワニ除けの呪文を唱えながら漕ぎ出す",
        "subLabel": "信仰と櫂捌きで危険な浅瀬を突破する",
        "survivalChance": 0.81,
        "deathCause": "ナイルワニによる襲撃・水死",
        "effects": {
          "wealthDelta": 15,
          "happiness": 5,
          "relations": 5
        },
        "outcomeText": "冷や汗を流しながら対岸へ舟を着け、市場で農作物を高値で売りさばくことができた。",
        "deathText": "突然舟底に強い衝撃を受け、水中に投げ出されたところを一瞬にして濁流の底へ引きずり込まれた。"
      },
      {
        "id": "pay_sturdy_ferry",
        "label": "銅のデベンを払って木造の大型渡し船に乗る",
        "subLabel": "出費はかさむが転覆の心配はない",
        "effects": {
          "wealthDelta": -10,
          "happiness": 5,
          "health": 5
        },
        "outcomeText": "頑丈なレバノン杉の船で安全に対岸へ渡った。懐は寂しくなったが命には代えられなかった。"
      }
    ]
  },
  {
    "id": "anc_egypt_linen_weave",
    "title": "王宮向けの白亜リンネル織布の納入",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_egypt"
    ],
    "minAge": 12,
    "maxAge": 50,
    "description": "亜麻の茎を水に浸して叩き、極細の糸を紡ぎ出す織工の工房に、ファラオの神殿へ納める極薄の白いリンネル布の注文が下りた。失敗すれば厳しい罰が待っている。",
    "factBox": "古代エジプトの亜麻布（リンネル）は驚くほど細い糸で織られ、王族の衣服やミイラの包帯として大量に用いられた。",
    "choices": [
      {
        "id": "weave_royal_linen",
        "label": "夜を徹して目打ちを揃え、透き通るような白布を織る",
        "subLabel": "指先と目を酷使するが成功報酬は大きい",
        "effects": {
          "wealthDelta": 30,
          "knowledge": 10,
          "health": -10
        },
        "outcomeText": "見事な布を納品し、神殿の監督官から銀の装飾品と穀物の特別配給を褒美として授けられた。"
      },
      {
        "id": "subcontract_linen",
        "label": "村の若い織り手たちに手間賃を払って共同で織る",
        "subLabel": "利益は減るが過労を避け納期を守る",
        "effects": {
          "wealthDelta": 10,
          "relations": 15,
          "happiness": 10
        },
        "outcomeText": "村の仲間たちと励まし合って納期に間に合わせ、皆で分け合った麦酒で祝杯を挙げた。"
      }
    ]
  },
  {
    "id": "anc_egypt_eye_kohl_remedy",
    "title": "トラコーマ眼炎と緑の孔雀石コホル",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_egypt"
    ],
    "minAge": 6,
    "maxAge": 55,
    "description": "ハエと乾いた砂埃が原因で、家族全員の目が赤く腫れ上がり膿が出始めた。目の縁に緑色の孔雀石や黒い方鉛鉱をすり潰したアイライン（コホル）を塗るべきか。",
    "factBox": "エジプト人のアイラインは美容だけでなく、強い日差しを遮り、鉛化合物の抗菌作用で眼病を防ぐ実用的な医療処置であった。",
    "choices": [
      {
        "id": "apply_kohl_ointment",
        "label": "鉱物を乳鉢で細かく擂り、目の縁に厚くコホルを引く",
        "subLabel": "ハエを追い払い強い日差しから目を保護する",
        "effects": {
          "health": 15,
          "happiness": 5,
          "knowledge": 5
        },
        "outcomeText": "鉱物の抗菌作用により目の腫れと痛みが引き、すっきりとした視界を取り戻すことができた。"
      },
      {
        "id": "rub_with_river_water",
        "label": "コホルを買う銀を惜しみ、ナイルの水で目を洗い流す",
        "subLabel": "雑菌の多い泥水で洗うことで症状悪化の危険",
        "survivalChance": 0.89,
        "deathCause": "眼病からの二次敗血症感染",
        "effects": {
          "health": -20,
          "happiness": -15,
          "wealthDelta": -5
        },
        "outcomeText": "視力はひどく霞んでしまったが、何とか失明には至らずに痛みの峠を越えた。",
        "deathText": "汚れた水から細菌が全身へ回り、高熱を発して意識不明のまま衰弱死した。"
      }
    ]
  },
  {
    "id": "anc_china_yellow_river_flood",
    "title": "黄河の決壊と泥土の堤防築造",
    "category": "historical_wave",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_china"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "連日の豪雨で黄河の水位が堤防を越え、村の周囲が黄褐色の濁流に呑み込まれた。村長が全住民を招集し、杭を打ち土嚢を積んで集落を守る決死の築堤が始まった。",
    "factBox": "黄河は「中国の悲哀」と呼ばれ、大量の黄土を含む泥流が頻繁に決壊を引き起こし、治水は古代国家の最大課題であった。",
    "choices": [
      {
        "id": "pound_earth_levee",
        "label": "泥水に浸かりながら版築の突き棒で堤を固める",
        "subLabel": "村を水没から守るが急な崩落の危険",
        "survivalChance": 0.83,
        "deathCause": "黄河濁流への転落・水死",
        "effects": {
          "health": -12,
          "relations": 15,
          "wealthDelta": 10
        },
        "outcomeText": "濁流を押し留める新たな堤を完成させ、村の粟倉を守り抜いた。村人たちから深く感謝された。",
        "deathText": "足元の泥堤が音を立てて崩れ、逆巻く黄河の奔流に呑み込まれて姿を消した。"
      },
      {
        "id": "flee_to_high_mound",
        "label": "家財と粟を担いで高台の台地へ避難する",
        "subLabel": "命は助かるが家と田畑は流失する",
        "effects": {
          "wealthDelta": -40,
          "happiness": -10,
          "health": 5
        },
        "outcomeText": "高台から水浸しになった村を見下ろした。生き延びたことに感謝しつつ、再建の道を歩み始めた。"
      }
    ]
  },
  {
    "id": "anc_china_oracle_sacrifice",
    "title": "殷王のト占と甲骨の告文",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_china"
    ],
    "minAge": 15,
    "maxAge": 55,
    "description": "殷墟の祭祀場で、王が牛の肩甲骨に火を当てて戦の吉凶を占った。神の怒りを鎮めるため、生贄として羌族の捕虜とともに農村からも酒と家畜の供出が命じられた。",
    "factBox": "殷（商）王朝では祭政一致が行われ、神意を問う卜辞が甲骨文字として刻まれ、大規模な人身御供も執行された。",
    "choices": [
      {
        "id": "offer_pigs_to_king",
        "label": "大事に育てた豚と粟酒を泣く泣く神官へ差し出す",
        "subLabel": "財産を失うが反逆の疑いを晴らす",
        "effects": {
          "wealthDelta": -25,
          "relations": 10,
          "happiness": -10
        },
        "outcomeText": "供物を納めて難を逃れた。王の祈祷により恵みの雨が降り、村の平穏が保たれたと神官は告げた。"
      },
      {
        "id": "hide_livestock_woods",
        "label": "山林の洞窟へ家畜を隠して供出を誤魔化す",
        "subLabel": "見つかれば捕虜とともに生贄にされる危険",
        "survivalChance": 0.77,
        "deathCause": "祭祀冒涜による処刑・生贄",
        "effects": {
          "wealthDelta": 25,
          "happiness": 10,
          "relations": -10
        },
        "outcomeText": "役人の厳しい目を盗んで豚を守り通した。肉を家族で分かち合い、飢えを凌ぐことができた。",
        "deathText": "隠し場所を密告され、王宮の祭壇へ引き立てられて青銅の斧の前に引き据えられた。"
      }
    ]
  },
  {
    "id": "anc_china_bronze_smelt_burn",
    "title": "青銅鋳造所の火焚きと融液の飛散",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_china"
    ],
    "minAge": 12,
    "maxAge": 45,
    "description": "殷の王宮工房で、巨大な青銅器（鼎）を鋳造するための炉に鞴（ふいご）で風を送り続けている。千度を超える銅と錫の融液が型に注がれる瞬間、熱風と火の粉が舞い散る。",
    "factBox": "殷・周の高度な青銅器鋳造技術は、極めて高い温度管理と巨大な労働力を必要とする命懸けの作業であった。",
    "choices": [
      {
        "id": "pump_bellows_steadily",
        "label": "熱気に耐えてふいごを踏み続け、一定の温度を維持する",
        "subLabel": "重労働だが完成すれば工房の親方に認められる",
        "survivalChance": 0.85,
        "deathCause": "青銅鋳造時の火傷と有毒ガス中毒",
        "effects": {
          "knowledge": 15,
          "wealthDelta": 20,
          "health": -10
        },
        "outcomeText": "見事な饕餮文の鼎が焼き上がり、親方から褒美の貝貨を授けられ熟練の鋳造工として認められた。",
        "deathText": "溶けた青銅が型から爆ぜて全身に降りかかり、重度の熱傷を負って翌朝息を引き取った。"
      },
      {
        "id": "stand_back_cool",
        "label": "危険を察知して一歩下がり、煙を避けて水を撒く",
        "subLabel": "安全を最優先にするが親方の叱責を受ける",
        "effects": {
          "health": 5,
          "relations": -5,
          "happiness": -5
        },
        "outcomeText": "火傷を負うことなく無事に仕事を終えた。親方には怒鳴られたが、無傷で帰宅できた。"
      }
    ]
  },
  {
    "id": "anc_china_sericulture_plague",
    "title": "桑畑の害虫発生と絹糸の紡ぎ出し",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_china"
    ],
    "minAge": 10,
    "maxAge": 50,
    "description": "長江下流域の水村で、蚕の餌となる桑の葉に毛虫が大発生した。桑の葉を失えば蚕は全滅し、領主に納める絹織物が作れなくなってしまう。",
    "factBox": "中国の養蚕と絹織物は紀元前3000年頃から行われ、極秘の技術として大切に守られていた。",
    "choices": [
      {
        "id": "pick_caterpillars_hand",
        "label": "家族総出で桑の木によじ登り、一匹ずつ手で害虫を取り除く",
        "subLabel": "手間暇をかけて桑の木と蚕の命を救う",
        "effects": {
          "wealthDelta": 25,
          "relations": 10,
          "health": -5
        },
        "outcomeText": "桑の葉を守り抜き、見事な白繭を収穫した。煮沸した湯から細い絹糸を繰り、美しい絹布を織り上げた。"
      },
      {
        "id": "buy_mulberry_neighbor",
        "label": "隣村から高値で桑の葉を買い集める",
        "subLabel": "手持ちの貝貨を失うが確実な解決策",
        "effects": {
          "wealthDelta": -15,
          "happiness": 5,
          "knowledge": 5
        },
        "outcomeText": "出費は痛かったが蚕は無事に育ち、納入期日を守ることができた。"
      }
    ]
  },
  {
    "id": "anc_china_ancestral_millet",
    "title": "収穫祭の粟酒作りと氏族の掟",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_china"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "秋の取り入れが終わり、村の宗廟で祖先への祭祀が行われる。神聖な粟酒の醸造を任されたが、氏族の長老から他部族との婚姻の掟を守るよう厳命された。",
    "factBox": "古代中国の周代には同姓不婚の原則など厳格な宗族秩序が形成され、祖先崇拝が社会規範の根幹となった。",
    "choices": [
      {
        "id": "obey_clan_rules",
        "label": "氏族の掟に従い、長老が決めた相手との婚約を受け入れる",
        "subLabel": "個人の情は抑えるが宗族の強い後ろ盾を得る",
        "effects": {
          "relations": 20,
          "wealthDelta": 15,
          "happiness": -5
        },
        "outcomeText": "儀礼に則って粟酒を神前に捧げ、氏族の結束を固めた。有力な後ろ盾を得て村での立場が安定した。"
      },
      {
        "id": "plead_for_free_choice",
        "label": "長老に他部族の娘との婚姻を認めてもらうよう直訴する",
        "subLabel": "追放や勘当のリスクを冒して意志を通す",
        "survivalChance": 0.86,
        "deathCause": "氏族追放による山賊の襲撃・野垂れ死に",
        "effects": {
          "happiness": 20,
          "relations": -25,
          "wealthDelta": -20
        },
        "outcomeText": "激しい怒りを買ったものの、真心が通じて条件付きで婚姻を認められた。",
        "deathText": "氏族から除名されて村を追い出され、冬の荒野で飢えた狼の群れに襲われて命を落とした。"
      }
    ]
  },
  {
    "id": "anc_indus_brick_kiln",
    "title": "焼きレンガ窯の薪焚きと一酸化炭素",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_indus_other"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "モヘンジョ・ダロの街を築くため、膨大な焼きレンガを作る巨大な窯で昼夜交代の火の番をしている。密閉された窯の煙道から吹き出す不快な煙が頭痛と吐き気を催させる。",
    "factBox": "インダス文明は規格化された焼きレンガで都市を建設したため、周囲の森林から膨大な薪が伐採され燃やされた。",
    "choices": [
      {
        "id": "tend_kiln_fire",
        "label": "煙に咽びながら窯口の火力を保ち、焼き上がりを見届ける",
        "subLabel": "規格通りの頑丈なレンガを仕上げるが有毒ガスの危険",
        "survivalChance": 0.83,
        "deathCause": "窯の不完全燃焼ガス（一酸化炭素）中毒死",
        "effects": {
          "wealthDelta": 20,
          "knowledge": 10,
          "health": -10
        },
        "outcomeText": "均一な赤褐色に焼き上がったレンガを検分し、都市の建築監督官から十分な報酬を受け取った。",
        "deathText": "煙道に溜まった一酸化炭素を吸い込み、窯の前で意識を失ってそのまま目覚めることはなかった。"
      },
      {
        "id": "ventilate_and_rest",
        "label": "通気口を広げて風を入れ、外気で深呼吸しながら交代を待つ",
        "subLabel": "焼きムラの恐れはあるが健康を守る",
        "effects": {
          "health": 5,
          "happiness": 5,
          "wealthDelta": 5
        },
        "outcomeText": "無理をせず安全に作業を進めた。レンガの品質も合格基準を満たし、無事に帰宅できた。"
      }
    ]
  },
  {
    "id": "anc_indus_bead_trade",
    "title": "紅玉髄のビーズ研磨とペルシア湾交易船",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_indus_other"
    ],
    "minAge": 15,
    "maxAge": 55,
    "description": "チャンフ・ダーロの工房で、硬い紅玉髄に極細の青銅ドリルで穴を開け、磨き上げる仕事に励んでいる。港町ロータルから「メソポタミア行きの交易船に積むため至急納品せよ」と急報が入った。",
    "factBox": "インダス文明のビーズ穿孔・研磨技術は世界最高峰で、遠くメソポタミアの王墓（ウルのプアビ王妃墓など）からも出土している。",
    "choices": [
      {
        "id": "polish_carnelian_day_night",
        "label": "徹夜で研磨を続け、完璧な光沢の細長ビーズを納める",
        "subLabel": "目の痛みと指の腱鞘炎を耐え抜いて大商談を掴む",
        "effects": {
          "wealthDelta": 40,
          "knowledge": 15,
          "health": -10
        },
        "outcomeText": "見事なビーズの首飾りを仕上げ、ペルシア湾商人の船長から銀と羊毛の高額な報酬を勝ち取った。"
      },
      {
        "id": "board_trade_ship",
        "label": "自らビーズを持って西方の海を渡る交易船に乗り込む",
        "subLabel": "海難の危険を冒して未知の異国へ向かう",
        "survivalChance": 0.76,
        "deathCause": "アラビア海での難破・沈没死",
        "effects": {
          "wealthDelta": 80,
          "knowledge": 30,
          "happiness": 15
        },
        "outcomeText": "モンスーン風に乗ってペルシア湾を渡り、ウルの市場で直接ビーズを売り払って巨利を得た。",
        "deathText": "季節外れの暴風雨に煽られた交易船がサンゴ礁に激突し、暗黒の海へ投げ出されて溺死した。"
      }
    ]
  },
  {
    "id": "anc_indus_great_bath_hygiene",
    "title": "大浴場（グレート・バス）での沐浴と水質",
    "category": "common_sense",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_indus_other"
    ],
    "minAge": 8,
    "maxAge": 60,
    "description": "モヘンジョ・ダロの城塞部にあるアスファルトで防水された大公衆浴場で、新月の宗教的沐浴の儀礼が行われる。しかし、連日の猛暑で浴槽の底に苔と淀みが溜まっている。",
    "factBox": "インダスの大浴場は宗教的な清めの儀礼に使われたと考えられており、世界最古級の高度な上水・下水システムを備えていた。",
    "choices": [
      {
        "id": "plunge_great_bath",
        "label": "聖なる水を信じ、頭まで湯船に潜って罪穢れを清める",
        "subLabel": "儀礼を完璧に果たすが汚水による感染症の懸念",
        "survivalChance": 0.88,
        "deathCause": "汚染水による激性アメーバ赤痢",
        "effects": {
          "relations": 10,
          "happiness": 5,
          "health": -10
        },
        "outcomeText": "身を清めて神官から祝福を受けた。軽い腹痛はあったものの、薬草茶を飲んで回復した。",
        "deathText": "浴槽の汚染水から細菌が侵入し、激しい嘔吐と脱水症状を起こして三日三晩苦しんだ末に絶命した。"
      },
      {
        "id": "use_private_well",
        "label": "自宅の中庭にある専用井戸の清水を桶で浴びる",
        "subLabel": "大浴場の群衆を避けて安全な水で清める",
        "effects": {
          "health": 10,
          "happiness": 5,
          "relations": -5
        },
        "outcomeText": "冷たく澄んだ地下水で体を清め、病気にかかることなく清々しい気持ちで祭りを迎えた。"
      }
    ]
  },
  {
    "id": "anc_indus_monsoon_failure",
    "title": "河川の流路変更と水源枯渇の危機",
    "category": "historical_wave",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_indus_other"
    ],
    "minAge": 12,
    "maxAge": 60,
    "description": "地殻変動とモンスーンの弱まりにより、街の生命線であった川の流れが干上がり始めた。井戸の水位は下がり、周囲の小麦畑は乾ききった大地へと変わりつつある。",
    "factBox": "インダス文明の衰退には、気候変動によるモンスーンの弱体化やガッガル・ハークラー川の干上がり、流路変更が大きく関与した。",
    "choices": [
      {
        "id": "abandon_city_east",
        "label": "街を捨て、水豊かな東方のガンジス川上流へ移住する",
        "subLabel": "先祖の家を捨てるが新たな農地を見つける",
        "survivalChance": 0.82,
        "deathCause": "難民移住途上の飢餓・渇水死",
        "effects": {
          "wealthDelta": -30,
          "knowledge": 10,
          "relations": 10
        },
        "outcomeText": "長旅の末に緑豊かな東方の森へ辿り着き、新たな開拓地で小さな村を再建した。",
        "deathText": "乾いた砂漠を越える途中で水袋が空になり、容赦ない太陽の下で行き倒れて骨を晒した。"
      },
      {
        "id": "dig_deep_settlement_well",
        "label": "仲間とともに井戸をさらに深く掘り下げて居残る",
        "subLabel": "故郷に踏みとどまるが乾魃が続けば全滅の恐れ",
        "survivalChance": 0.79,
        "deathCause": "水源完全枯渇による集落全滅・渇死",
        "effects": {
          "health": -15,
          "wealthDelta": 10,
          "relations": 15
        },
        "outcomeText": "地下深くから奇跡的に新たな伏流水を掘り当て、街の崩壊を何年か遅らせることができた。",
        "deathText": "いくら掘っても湿った砂しか出ず、井戸底の崩落とともに生き埋めになって息絶えた。"
      }
    ]
  },
  {
    "id": "anc_indus_seal_carver",
    "title": "滑石の印章彫刻と偽造の持ちかけ",
    "category": "livelihood",
    "eraIds": [
      "ancient"
    ],
    "regionIds": [
      "anc_indus_other"
    ],
    "minAge": 16,
    "maxAge": 50,
    "description": "白く焼き固めた滑石（ステアタイト）に、一角獣やコブウシと未解読文字を彫り込む熟練の印章職人である。怪しげな商人から「高名な豪商の印章と瓜二つの偽印を彫ってくれ」と大金が提示された。",
    "factBox": "インダス印章は交易荷物の粘土封泥（シーリング）に押され、所有者の保証や通関の役割を担った重要品であった。",
    "choices": [
      {
        "id": "refuse_counterfeit_seal",
        "label": "印章の神聖さを汚すことを拒み、商人を追い払う",
        "subLabel": "誠実さを守るが目先の銀を取り逃がす",
        "effects": {
          "happiness": 10,
          "relations": 10,
          "wealthDelta": -5
        },
        "outcomeText": "不正を撥ね付け、誇り高く自らの印を刻み続けた。都市の商人評議会からその信義を称えられた。"
      },
      {
        "id": "carve_fake_seal",
        "label": "密室で息を殺し、瓜二つの偽印章を彫り上げる",
        "subLabel": "大金を得るが発覚すれば腕を切り落とされる危険",
        "survivalChance": 0.74,
        "deathCause": "偽造印章の罪による都市追放・私刑死",
        "effects": {
          "wealthDelta": 55,
          "happiness": -15,
          "knowledge": 10
        },
        "outcomeText": "見事な偽印を渡し、誰にも気付かれずに銀の報酬を懐に収めた。しかし夜毎の悪夢に怯えることとなった。",
        "deathText": "偽印を使った商人が捕まり自白したため、夜半に工房へ踏み込まれて棍棒で殴り殺された。"
      }
    ]
  }
];
