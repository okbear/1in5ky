import type { DecisionEvent } from '#lib/types';

/** 中世・封建期（ヨーロッパ・イスラム・中国・日本・その他の世界）の決断イベント */
export const MEDIEVAL_EVENTS: DecisionEvent[] = [
  {
    "id": "med_eur_tithe_dispute",
    "title": "十分の一税（ティス）の納入と司祭の倉",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_europe"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "収穫を終えたばかりの農奴の小屋に教区司祭が訪れ、小麦と子羊の「十分の一」を教会へ差し出すよう求めてきた。領主への賦役と二重の取り立てで家族の冬の食糧が脅かされる。",
    "factBox": "中世ヨーロッパではすべてのキリスト教徒に収穫の十分の一を教会へ納める義務（十分の一税）が課され、農民の重荷となっていた。",
    "choices": [
      {
        "id": "pay_tithe_lamb",
        "label": "子羊と小麦を納め、天国での救済の祈祷を受ける",
        "subLabel": "食糧は減るが破門と地獄の恐怖を免れる",
        "effects": {
          "wealthDelta": -20,
          "relations": 10,
          "happiness": -5
        },
        "outcomeText": "司祭に税を納めて十字を切られた。手持ちの蓄えは寂しくなったが、村八分の制裁は避けられた。"
      },
      {
        "id": "hide_wheat_under_hay",
        "label": "乾草の下に小麦樽を隠し、不作を口実に納入量を誤魔化す",
        "subLabel": "冬の食糧を守るが司祭に見つかれば破門",
        "survivalChance": 0.85,
        "deathCause": "教会法廷での異端・不服従罪による投獄衰弱死",
        "effects": {
          "wealthDelta": 20,
          "happiness": 5,
          "relations": -10
        },
        "outcomeText": "司祭の目を巧みに欺いて小麦を守り通し、寒冷な冬の飢えを家族で乗り切った。",
        "deathText": "隠し場所を密告され、司教座法廷へ引き出されて地下牢に放り込まれ、冷たい石床で衰弱死した。"
      }
    ]
  },
  {
    "id": "med_eur_ergot_poisoning",
    "title": "ライ麦の麦角中毒（聖アンソニーの火）",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_europe"
    ],
    "minAge": 8,
    "maxAge": 65,
    "description": "冷たく湿った夏の後に収穫した黒いライ麦のパンを食べたところ、村人たちの手足が焼け付くように痛み出し、激しい幻覚と痙攣に見舞われた。「聖アンソニーの火」と呼ばれる奇病である。",
    "factBox": "ライ麦に寄生する麦角菌（エルゴット）のアルカロイド毒素は、四肢の壊疽や激しい幻覚症状を引き起こし、中世に幾度も大流行した。",
    "choices": [
      {
        "id": "purge_stomach_fast",
        "label": "黒ずんだパンの摂取を直ちに止め、塩水で胃を洗い安静にする",
        "subLabel": "毒素の排出を促し手足の壊疽を防ぐ",
        "survivalChance": 0.82,
        "deathCause": "麦角病（聖アンソニーの火）による壊疽と心停止",
        "effects": {
          "health": 10,
          "knowledge": 10,
          "wealthDelta": -10
        },
        "outcomeText": "激しい苦痛の峠を越え、手足の切断を免れて徐々に健康を取り戻すことができた。",
        "deathText": "手足の末端が黒く壊疽して激痛に狂乱し、心停止を起こして息絶えた。"
      },
      {
        "id": "pilgrimage_st_anthony",
        "label": "聖アンソニーの修道院へ巡礼に赴き、聖遺物への祈願を捧げる",
        "subLabel": "修道院の良質な小麦パンによる自然回復を期待する",
        "effects": {
          "happiness": 15,
          "relations": 10,
          "wealthDelta": -20
        },
        "outcomeText": "修道院で施された純白の小麦パンを食べるうちに毒が抜け、奇跡の治癒として神に感謝を捧げた。"
      }
    ]
  },
  {
    "id": "med_eur_manor_bakehouse",
    "title": "領主の専売水車とパン焼き窯の強制利用",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_europe"
    ],
    "minAge": 14,
    "maxAge": 55,
    "description": "領主の掟（バナリテ）により、村人は領主の水車で粉を挽き、領主の窯でパンを焼かねばならず、その都度高い手数料が徴収される。自宅の石臼で密かに粉を挽くかどうかの誘惑にかられる。",
    "factBox": "封建領主の排他的独占権（バナリテ）は粉挽き水車やパン焼き窯、ワイン圧搾機に及び、農奴の重要な搾取手段であった。",
    "choices": [
      {
        "id": "pay_banalite_toll",
        "label": "重い手数料を払って領主の窯でパンを焼く",
        "subLabel": "粉の2割を失うが法を遵守して平穏を保つ",
        "effects": {
          "wealthDelta": -15,
          "happiness": -5,
          "relations": 5
        },
        "outcomeText": "目減りした小麦粉で焼いた硬いパンを抱えて帰宅した。理不尽ではあるが罰金を払うよりはましであった。"
      },
      {
        "id": "grind_handmill_secretly",
        "label": "地下室で手臼を回して小麦を挽き、暖炉の灰でパンを焼く",
        "subLabel": "手数料を浮かせるが見つかれば手臼を破壊され厳罰",
        "survivalChance": 0.86,
        "deathCause": "領主裁判での過酷な鞭打ち刑・感染症死",
        "effects": {
          "wealthDelta": 25,
          "happiness": 10,
          "relations": -5
        },
        "outcomeText": "夜中に音を立てぬよう粉を挽き、たっぷりの焼き立てパンを家族で腹いっぱい食べた。",
        "deathText": "領主の家令に踏み込まれ、手臼を没収されたうえ公開鞭打ちで背中の傷が化膿して落命した。"
      }
    ]
  },
  {
    "id": "med_eur_leper_crossing",
    "title": "街道の癩病（ハンセン病）隔離所と鳴子の音",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_europe"
    ],
    "minAge": 12,
    "maxAge": 60,
    "description": "森を抜ける街道を歩いていると、ガラガラと木製鳴子を鳴らしながら灰色の頭巾をかぶった人物が現れた。町から隔離された癩病患者（レパー）である。施しを求める木椀が差し出された。",
    "factBox": "中世西欧では十字軍以降ハンセン病が流行し、各地に隔離施設（レプロサリウム）が建設され、患者は鳴子で接近を告げることが義務付けられた。",
    "choices": [
      {
        "id": "toss_copper_cross_road",
        "label": "離れた場所から銅貨を投げ入れ、キリストの慈悲を祈る",
        "subLabel": "接触を避けつつ施しの美徳を果たす",
        "effects": {
          "relations": 10,
          "happiness": 10,
          "wealthDelta": -5
        },
        "outcomeText": "患者は静かに頭を下げ、祈りの言葉を唱えて去っていった。自らの健康と恵まれた境遇に感謝した。"
      },
      {
        "id": "flee_in_terror_woods",
        "label": "感染の恐怖に駆られ、足早に森の脇道へ逃げ込む",
        "subLabel": "病を避けるが獣道で迷う恐れ",
        "survivalChance": 0.88,
        "deathCause": "冬の深い森での遭難・凍死",
        "effects": {
          "health": -5,
          "happiness": -5
        },
        "outcomeText": "藪をかき分けて街道の先へ出た。衣服は泥だらけになったが、病の恐怖から逃れることができた。",
        "deathText": "暗い森の奥で方向を見失い、寒風吹きすさぶ雪の夜に行き倒れて凍死した。"
      }
    ]
  },
  {
    "id": "med_eur_cathedral_quarry",
    "title": "ゴシック大聖堂の石材切り出し普請",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_europe"
    ],
    "minAge": 15,
    "maxAge": 50,
    "description": "司教座都市に天を突く尖塔とステンドグラスを擁する壮大な大聖堂が建設されている。採石場で重い石灰岩のブロックを切り出し、滑車で運搬する工夫として雇用された。",
    "factBox": "シャルトルやノートルダムなどの大聖堂建設は数世代にわたり、ギルドの熟練石工と無数の農民工夫の献身によって支えられた。",
    "choices": [
      {
        "id": "hoist_cathedral_stone",
        "label": "木製滑車の踏車（トレッドウィール）を回して巨石を揚げる",
        "subLabel": "天に届く神の家を支え高額の日当を得る",
        "survivalChance": 0.8,
        "deathCause": "大聖堂工事現場での滑車ロープ断裂・転落死",
        "effects": {
          "wealthDelta": 30,
          "knowledge": 10,
          "relations": 10
        },
        "outcomeText": "巨石を無事に高所へ運び上げ、大棟梁から職人としての筋の良さを褒められ日当を受け取った。",
        "deathText": "太い麻縄が突如擦り切れ、跳ね上がった滑車クレーンごと足場から墜落して絶命した。"
      },
      {
        "id": "mix_mortar_on_ground",
        "label": "地上で消石灰と砂を水で練り合わせるモルタル係を務める",
        "subLabel": "高所には登らず地上で安全な仕事をこなす",
        "effects": {
          "health": 5,
          "wealthDelta": 10,
          "happiness": 5
        },
        "outcomeText": "衣服を白く染めながら粘り気のある良質なモルタルを作り続け、堅実な賃金を稼ぎ出した。"
      }
    ]
  },
  {
    "id": "med_islam_suq_muhtasib",
    "title": "スークの市場監督官（ムフタシブ）の秤検定",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_islam"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "バグダードの屋根付き市場（スーク）で香辛料と干し果物の店を出している。厳格な市場監督官（ムフタシブ）が分銅と天秤の不正がないか抜き打ちの査察にやってきた。",
    "factBox": "イスラム都市ではムフタシブと呼ばれる官吏が市場の度量衡、商品の品質、宗教道徳を厳格に監視・取り締まった。",
    "choices": [
      {
        "id": "present_honest_scales",
        "label": "堂々と青銅の分銅を差し出し、正しい計量を示す",
        "subLabel": "公正な取引で信用を確立する",
        "effects": {
          "relations": 20,
          "knowledge": 10,
          "wealthDelta": 10
        },
        "outcomeText": "ムフタシブは秤の正確さに満足の頷きを見せ、店の看板に合格の刻印を押してくれた。客足が増加した。"
      },
      {
        "id": "slip_sweetmeats_muhtasib",
        "label": "高価なピスタチオ菓子を差し出し、検査の手加減を願う",
        "subLabel": "賄賂で便宜を図ろうとするが発覚すれば鞭打ち",
        "survivalChance": 0.83,
        "deathCause": "市場法廷での鞭打ち・名誉毀損による獄死",
        "effects": {
          "wealthDelta": -15,
          "happiness": -10,
          "relations": -10
        },
        "outcomeText": "監督官は菓子を受け取らず厳しく一瞥したが、秤に狂いがなかったため警告だけで済んだ。",
        "deathText": "賄賂の試みを大声で糾弾され、市場の広場で公開鞭打ちに遭い傷口の破傷風で死亡した。"
      }
    ]
  },
  {
    "id": "med_islam_hajj_caravan_heat",
    "title": "メッカ巡礼（ハッジ）の大隊商と熱風",
    "category": "historical_wave",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_islam"
    ],
    "minAge": 15,
    "maxAge": 65,
    "description": "ダマスカスからメッカへ向かう巡礼隊商に水運び兼ラクダ引きとして同行した。砂漠の真ん中で熱風サムーンが吹き荒れ、井戸の水が涸れかけている。",
    "factBox": "ハッジ（巡礼）はイスラム教徒の義務（五行）の一つであり、何千頭ものラクダと信徒が過酷な砂漠を越えて聖地を目指した。",
    "choices": [
      {
        "id": "ration_water_strictly",
        "label": "羊革の水袋の口を縛り、一口ずつ喉を湿らせて歩く",
        "subLabel": "激しい口の渇きを耐えて隊商の規律を守る",
        "survivalChance": 0.82,
        "deathCause": "アラビア砂漠横断中の脱水・熱射病死",
        "effects": {
          "happiness": 20,
          "knowledge": 15,
          "health": -10
        },
        "outcomeText": "灼熱の岩砂漠を乗り越え、白きカアバ神殿の前に跪いて巡礼を全うした。深い精神的充足を得た。",
        "deathText": "水袋の底をつき、熱風に体力を奪われてラクダの足元に崩れ落ち、熱砂のなかで絶命した。"
      },
      {
        "id": "pay_bedouin_water_guide",
        "label": "手持ちの銀貨を惜しまずベドウィンの水先案内人に払う",
        "subLabel": "砂漠の民の知る隠し井戸へと案内してもらう",
        "effects": {
          "wealthDelta": -25,
          "health": 10,
          "knowledge": 10
        },
        "outcomeText": "岩山の隙間に湧き出るオアシスへと案内され、冷たい水で生き返る思いを味わった。"
      }
    ]
  },
  {
    "id": "med_islam_madrasa_scholar",
    "title": "マドラサ（高等学問所）での写本作成と奨学金",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_islam"
    ],
    "minAge": 12,
    "maxAge": 35,
    "description": "カイロの壮麗なモスク付属マドラサで、法学や天文学の書物を良質なサマルカンド紙に清書する筆生の職に応募した。美しいアラビア書道（ナスフ体）の筆致が試される。",
    "factBox": "イスラム世界のワクフ（信託財産）によって運営されたマドラサでは、学生や学者に無償の寄宿舎と奨学金が支給された。",
    "choices": [
      {
        "id": "copy_manuscript_devotedly",
        "label": "インク壺と葦ペンを整え、一字一画を美しく書き写す",
        "subLabel": "集中力と教養を高めワクフからの奨学金を得る",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "wealthDelta": 25,
          "happiness": 10
        },
        "outcomeText": "見事な写本を仕上げて教授から絶賛され、定期的な奨学金と図書室での研究の席を勝ち取った。"
      },
      {
        "id": "assist_astrolabe_workshop",
        "label": "天体観測儀（アストロラーベ）の真鍮刻印工房で働く",
        "subLabel": "文字だけでなく実用的な金属加工技術を学ぶ",
        "effects": {
          "wealthDelta": 20,
          "knowledge": 20,
          "health": 5
        },
        "outcomeText": "星の高度を測る精巧な円盤に目盛りを刻む技術を身につけ、航海商人に高く買われた。"
      }
    ]
  },
  {
    "id": "med_islam_bimaristan_care",
    "title": "公立総合病院（ビマースターン）での無償医療",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_islam"
    ],
    "minAge": 10,
    "maxAge": 65,
    "description": "激しい胸膜炎で高熱を発したため、カイロのマンスーリ・ビマースターン（病院）へ運ばれた。身分や信仰に関係なく誰でも無償で治療と食事が受けられる施設である。",
    "factBox": "中世イスラム圏のビマースターンは世界最先端の医学水準を誇り、隔離病棟、薬局、図書館、音楽療法を備えた公立病院であった。",
    "choices": [
      {
        "id": "accept_hospital_treatment",
        "label": "医師の調合するシロップ薬を飲み、清潔な病床で休む",
        "subLabel": "最先端の医学的処置を受け安静を保つ",
        "effects": {
          "health": 30,
          "happiness": 15,
          "knowledge": 5
        },
        "outcomeText": "流水の音とリュートの音楽が流れる中庭の病棟で数週間療養し、完全に病を克服して退院した。"
      },
      {
        "id": "leave_early_work",
        "label": "熱が下がったと同時に家業の心配をして退院を急ぐ",
        "subLabel": "仕事を再開するが病気が再発する恐れ",
        "survivalChance": 0.84,
        "deathCause": "急性肺炎の再発・呼吸不全",
        "effects": {
          "wealthDelta": 10,
          "health": -15,
          "happiness": -5
        },
        "outcomeText": "無理をして市場へ戻った。時折胸が痛むものの、何とか日銭を稼ぎながら日常を繋いだ。",
        "deathText": "冷たい夜風を浴びて肺炎が再発し、高熱を発して自室の筵の上で息を引き取った。"
      }
    ]
  },
  {
    "id": "med_islam_papermill_gear",
    "title": "製紙工場の水車破砕機と麻布のパルプ化",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_islam"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "ダマスカスのバラダ川沿いにある水力製紙所で、古い麻布を水車仕掛けの杵で砕いて紙の原料を作る仕事をしている。巨大な歯車と木槌が猛烈な勢いで上下している。",
    "factBox": "751年のタラス河畔の戦い以降、イスラム圏で製紙法が急速に普及し、水車動力を利用した大規模な製紙工場が稼働した。",
    "choices": [
      {
        "id": "feed_rags_carefully",
        "label": "長い棒を使って古い布を安全に杵の臼へ送り込む",
        "subLabel": "安全第一で作業し均一なパルプを仕上げる",
        "effects": {
          "wealthDelta": 20,
          "knowledge": 10,
          "health": 5
        },
        "outcomeText": "滑らかで白く丈夫な紙の原料を作り上げ、写本工房から高値で買い取られた。"
      },
      {
        "id": "clear_stuck_wheel_fast",
        "label": "水車の歯車に詰まった布を手で慌てて引き抜こうとする",
        "subLabel": "作業停止を防ごうとするが巻き込まれの危険",
        "survivalChance": 0.78,
        "deathCause": "水車木製歯車への巻き込まれ・圧砕死",
        "effects": {
          "wealthDelta": 35,
          "happiness": -10,
          "health": -15
        },
        "outcomeText": "間一髪で手を引き抜き、水車の回転を止めることなく作業を再開させた。冷や汗を拭った。",
        "deathText": "袖が歯車に噛み込まれ、そのまま巨大な回転軸に巻き込まれて全身を粉砕された。"
      }
    ]
  },
  {
    "id": "med_china_canal_grain_fleet",
    "title": "京杭大運河の漕船による江南米輸送",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_china"
    ],
    "minAge": 15,
    "maxAge": 50,
    "description": "江南の豊かな米を都（開封・大都）へ運ぶため、大運河の平底船（漕船）の曳き手として徴発された。河岸のぬかるみで麻縄を肩に食い込ませ、重い船を何百里も引き続ける。",
    "factBox": "隋代に開削され宋・元・明で拡張された大運河は、南方の米と物資を北方の首都へ運ぶ大動脈であり、過酷な水運労役に支えられた。",
    "choices": [
      {
        "id": "haul_grain_barge",
        "label": "泥に足を取られながら力を合わせて船を引き続ける",
        "subLabel": "過酷な肉体労働だが米の割り当て配給を得る",
        "survivalChance": 0.83,
        "deathCause": "大運河での滑落・漕船への巻き込まれ水死",
        "effects": {
          "wealthDelta": 20,
          "health": -10,
          "relations": 10
        },
        "outcomeText": "船団を無事に北方の穀倉へ送り届け、規定の米と銀を受け取って故郷へ戻ることができた。",
        "deathText": "濡れた堤防に足を滑らせて運河へ転落し、進み続ける重い漕船の底に巻き込まれて溺死した。"
      },
      {
        "id": "sell_provisions_canal_dock",
        "label": "舟着き場の寄港地で船乗り相手の点心と茶の屋台を開く",
        "subLabel": "水運労役を逃れ地道な商売で利益を出す",
        "effects": {
          "wealthDelta": 15,
          "knowledge": 10,
          "happiness": 10
        },
        "outcomeText": "運河を行き交う人々に温かい粥と茶を売り、安定した日銭を稼いで暮らした。"
      }
    ]
  },
  {
    "id": "med_china_song_iron_blast",
    "title": "宋代の石炭製鉄溶鉱炉での精錬",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_china"
    ],
    "minAge": 14,
    "maxAge": 45,
    "description": "北宋の鉱山地帯で、薪に代わり石炭（石炭粉）を燃料とする巨大な溶鉱炉が稼働している。昼夜を問わず吹き荒れる高熱のなかで溶けた鉄を型に流し込む。",
    "factBox": "宋代の中国では石炭を用いた大規模な製鉄技術が発達し、年間の鉄生産量は11世紀のヨーロッパ全土の合計を上回っていた。",
    "choices": [
      {
        "id": "tap_blast_furnace_iron",
        "label": "長い鉄棒で炉口を突き破り、真っ赤な溶鉄を湯道へ導く",
        "subLabel": "高度な技術を要する危険作業だが親方給が支払われる",
        "survivalChance": 0.81,
        "deathCause": "溶鉱炉の爆発・溶鉄飛散による熱傷死",
        "effects": {
          "wealthDelta": 35,
          "knowledge": 15,
          "health": -12
        },
        "outcomeText": "見事な鉄の流れを制御して高品質の銑鉄を抽出し、工房の主任鍛冶として重用された。",
        "deathText": "炉底の水分が気化して水蒸気爆発を起こし、飛散した溶鉄を浴びて即死した。"
      },
      {
        "id": "haul_coal_baskets",
        "label": "炉の外で天秤棒を担ぎ、石炭と鉄鉱石の運搬に専念する",
        "subLabel": "熱風を避け粉塵の中で地道に日当を稼ぐ",
        "effects": {
          "health": 5,
          "wealthDelta": 10,
          "relations": 5
        },
        "outcomeText": "火傷を負うことなく無事に荷運びを務め上げ、日暮れに銅銭を受け取って帰宅した。"
      }
    ]
  },
  {
    "id": "med_china_jiaozi_inflation",
    "title": "交子（世界最古の紙幣）の減価と銅銭への逃避",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_china"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "四川の成都で使われ始めた紙幣「交子」を商売の蓄えとして持っているが、官府が戦費調達のために紙幣を乱発し、市場での価値が急落し始めた。",
    "factBox": "北宋で誕生した交子は世界最古の紙幣であったが、無制限な増刷によりやがて激しいインフレを引き起こした。",
    "choices": [
      {
        "id": "exchange_jiaozi_copper_fast",
        "label": "手数料を払って直ちに重い銅銭や銀錠、実物の絹へ換える",
        "subLabel": "目減りを防ぎ実物資産で蓄えを守る",
        "effects": {
          "wealthDelta": 20,
          "knowledge": 15,
          "happiness": 5
        },
        "outcomeText": "紙屑になる前に銀と銅銭へ両替を完了した。その後の紙幣暴落の嵐を無傷で乗り切った。"
      },
      {
        "id": "hold_paper_currency",
        "label": "官府の定めた公定レートを信じ、紙幣のまま手元に残す",
        "subLabel": "両替の手間を省くが価値暴落の直撃を受ける",
        "effects": {
          "wealthDelta": -40,
          "happiness": -15,
          "knowledge": 5
        },
        "outcomeText": "交子の価値は紙切れ同然となり、長年積み立てた商売の元手を一瞬にして失った。"
      }
    ]
  },
  {
    "id": "med_china_celadon_kiln_glaze",
    "title": "竜泉窯の登り窯と青磁の還元焼成",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_china"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "浙江省の山裾に築かれた長大な登り窯で、翡翠のような美しさを持つ青磁の焼成が行われる。酸素を遮断する還元焔（かんげんえん）の微妙な火加減を保たねばならない。",
    "factBox": "宋・元の竜泉窯青磁は海外へ大量に輸出され、日本でも「砧青磁」として珍重され、博多や鎌倉に運ばれた。",
    "choices": [
      {
        "id": "watch_kiln_flame_night",
        "label": "二日二晩窯の覗き穴から炎の色を見つめ、薪をくべ続ける",
        "subLabel": "最高峰の青磁を焼き上げれば莫大な利益",
        "effects": {
          "wealthDelta": 40,
          "knowledge": 20,
          "health": -10
        },
        "outcomeText": "見事な粉青色の青磁が焼き上がり、泉州港から海外へ輸出されて多額の利益をもたらした。"
      },
      {
        "id": "shape_clay_dishes",
        "label": "轆轤（ろくろ）を回して素地の成形と削り仕上げに専念する",
        "subLabel": "窯焚きの重圧を避け工房で器の形を整える",
        "effects": {
          "wealthDelta": 15,
          "relations": 10,
          "happiness": 10
        },
        "outcomeText": "薄く均一な美しい器を次々に挽き上げ、轆轤の名手として工房での評価を固めた。"
      }
    ]
  },
  {
    "id": "med_china_jinshi_cram_exam",
    "title": "科挙の州試と暗記の重圧",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_china"
    ],
    "minAge": 12,
    "maxAge": 40,
    "description": "一族の期待を一身に背負い、科挙の一次試験（州試）に挑むため書斎に籠もる。儒教の四書五経の丸暗記と詩作の訓練に日夜追われ、心身が限界に達しつつある。",
    "factBox": "宋代には科挙が官僚登用の唯一最大の道となり、門閥貴族を解体して士大夫階級を生み出す原動力となった。",
    "choices": [
      {
        "id": "study_all_night_exam",
        "label": "頭髪を梁に結び、眠気を払って五経の注釈を読誦する",
        "subLabel": "極度の睡眠不足を耐えて合格を目指す",
        "survivalChance": 0.88,
        "deathCause": "過度の受験勉強による喀血・心身衰弱死",
        "effects": {
          "knowledge": 35,
          "literate": true,
          "wealthDelta": 30,
          "health": -15
        },
        "outcomeText": "州試に上位で合格し、都での会試へ進む進士候補の栄誉を得て一族の期待に応えた。",
        "deathText": "連夜の徹夜勉強で肺を病んで喀血し、机の上に突っ伏してそのまま冷たくなった。"
      },
      {
        "id": "quit_exam_become_clerk",
        "label": "科挙を諦め、県役所の会計や書記（胥吏）の実務に就く",
        "subLabel": "最高官僚の夢は捨てるが確実に生活を安定させる",
        "effects": {
          "wealthDelta": 15,
          "knowledge": 10,
          "happiness": 10
        },
        "outcomeText": "実務官吏として手腕を発揮し、地域の行政を切り盛りして安定した家庭を築いた。"
      }
    ]
  },
  {
    "id": "med_jpn_shoen_annual_tribute",
    "title": "荘園代官の検見（けみ）と年貢の割増し",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_japan"
    ],
    "minAge": 15,
    "maxAge": 60,
    "description": "秋の取り入れの時期、京都の貴族領主から派遣された荘園代官が田の見回り（検見）に訪れた。豊作を理由に不当な年貢の割増し（段銭）を要求してきた。",
    "factBox": "中世日本の荘園制では、領主・預所・地頭による重層的な年貢取り立てが行われ、百姓たちは逃散や強訴で対抗した。",
    "choices": [
      {
        "id": "appeal_to_jitou",
        "label": "新補地頭に泣きつき、代官の横暴を抑えてもらう",
        "subLabel": "代官の要求は退けるが地頭への借りができる",
        "effects": {
          "wealthDelta": 15,
          "relations": 10,
          "happiness": -5
        },
        "outcomeText": "武力を持つ地頭の介入で代官が引き下がり、正規の年貢米だけで収めることができた。"
      },
      {
        "id": "threaten_chousan",
        "label": "村中の百姓と申し合わせ、山中へ逃げ散（逃散）して田を放置する",
        "subLabel": "強硬なサボタージュで年貢減免を迫る",
        "survivalChance": 0.84,
        "deathCause": "逃散先での寒波・領主武士による討伐死",
        "effects": {
          "relations": 20,
          "wealthDelta": 10,
          "health": -10
        },
        "outcomeText": "稲刈りを放棄された代官が慌てて妥協案を提示し、年貢の減免を勝ち取って村へ戻った。",
        "deathText": "山中の小屋で寒さに震えていたところを地頭の武士団に襲撃され、槍で突かれて命を落とした。"
      }
    ]
  },
  {
    "id": "med_jpn_kamakura_shugosho_night",
    "title": "鎌倉街道のかがり火警備と悪党の夜襲",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_japan"
    ],
    "minAge": 16,
    "maxAge": 45,
    "description": "鎌倉幕府の命により、街道筋の宿場で夜間の篝火番を務めている。近隣の山中から「悪党」と呼ばれる武装集団が年貢米の倉庫を狙って押し寄せてきた。",
    "factBox": "鎌倉時代後期から南北朝期には、幕府の統制に服さない「悪党」が各地で蜂起し、荘園の年貢を差し押さえるなど猛威を振るった。",
    "choices": [
      {
        "id": "ring_alarm_bell_bow",
        "label": "早鐘を打ち鳴らし、物見櫓から弓を射かけて侵入を阻む",
        "subLabel": "宿場を守り報奨を得るが矢合わせの危険",
        "survivalChance": 0.78,
        "deathCause": "悪党の夜襲における太刀打ち・矢傷による出血死",
        "effects": {
          "wealthDelta": 25,
          "relations": 15,
          "health": -12
        },
        "outcomeText": "守護の兵が駆けつけるまで櫓を守り抜き、悪党を撃退して幕府から褒賞の太刀を授かった。",
        "deathText": "闇夜から飛来した矢が喉元を射抜き、櫓の床板を血で染めながら前のめりに倒れた。"
      },
      {
        "id": "douse_fire_and_hide",
        "label": "篝火を砂で消し、宿場の土蔵の影に潜んでやり過ごす",
        "subLabel": "倉庫は破られるが無傷で生き残る",
        "effects": {
          "health": 5,
          "wealthDelta": -15,
          "happiness": -5
        },
        "outcomeText": "米俵は略奪されたが、命を守り切ることができた。翌朝、無事を喜び合った。"
      }
    ]
  },
  {
    "id": "med_jpn_tokusei_ikki_pawn",
    "title": "室町の徳政一揆と土倉（質屋）の焼き討ち",
    "category": "historical_wave",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_japan"
    ],
    "minAge": 15,
    "maxAge": 50,
    "description": "飢饉と高利貸しの借金に苦しむ近江の馬借や農民たちが竹槍と松明を手に京へ向かって蜂起した。「徳政令」を掲げて質屋（土倉）の借用証文を焼き払う群衆に巻き込まれる。",
    "factBox": "室町時代には正長の土一揆や嘉吉の徳政一揆など、農民や運送業者（馬借）による債務破棄を要求する大規模な一揆が頻発した。",
    "choices": [
      {
        "id": "join_ikki_burn_bonds",
        "label": "一揆勢に合流し、土倉の土壁を破って借用証文を燃やす",
        "subLabel": "自家の借金を帳消しにするが管領の兵による鎮圧の危険",
        "survivalChance": 0.77,
        "deathCause": "幕府武士団による一揆鎮圧戦での斬殺",
        "effects": {
          "wealthDelta": 40,
          "happiness": 15,
          "relations": 10
        },
        "outcomeText": "紅蓮の炎の中に質草の証文が燃え尽き、長年の重い借財から解放されて歓声を上げた。",
        "deathText": "細川家の騎馬武者隊が突撃してきて逃げ場を失い、太刀で切り伏せられて路傍に倒れた。"
      },
      {
        "id": "stay_home_bar_doors",
        "label": "一揆の騒乱を避け、家の戸口に角材を打ち付けて籠城する",
        "subLabel": "略奪に巻き込まれず身内の安全を守る",
        "effects": {
          "health": 5,
          "relations": -5,
          "wealthDelta": -5
        },
        "outcomeText": "騒乱が収まるまで息を潜めて過ごし、平穏を取り戻した後に通常の暮らしを再開した。"
      }
    ]
  },
  {
    "id": "med_jpn_biwa_heike_recite",
    "title": "村を訪れた盲目の琵琶法師と平家鎮魂",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_japan"
    ],
    "minAge": 10,
    "maxAge": 65,
    "description": "日照り続きの村の辻堂に、琵琶を背負った盲目の当道座の法師がやってきた。壇ノ浦に沈んだ平家の怨霊を鎮める語りに、村中の老若男女が聞き入っている。",
    "factBox": "琵琶法師は平家物語を語り歩く芸能者であると同時に、怨霊鎮魂や仏教説話を民衆に伝える重要な役割を果たした。",
    "choices": [
      {
        "id": "offer_millet_listen_heike",
        "label": "茶とわずかな粟を差し出し、壇ノ浦の合戦の語りを聞く",
        "subLabel": "諸行無常の教えに触れ心を清める",
        "effects": {
          "happiness": 15,
          "knowledge": 15,
          "wealthDelta": -5
        },
        "outcomeText": "澄んだ琵琶の音と哀切な語りに涙を流した。現世の苦しみを相対化する心の静けさを得た。"
      },
      {
        "id": "ask_priest_write_charm",
        "label": "法師に米を多めに渡し、疫病除けと雨乞いの護符を書いてもらう",
        "subLabel": "実用的な厄除けの呪力を頼る",
        "effects": {
          "health": 10,
          "relations": 10,
          "wealthDelta": -10
        },
        "outcomeText": "玄関に貼った護符が安心をもたらし、その夜降った慈雨が乾いた田を潤した。"
      }
    ]
  },
  {
    "id": "med_jpn_onrui_fire_kyoto",
    "title": "応仁の乱の火の手と都落ちの決断",
    "category": "historical_wave",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_japan"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "細川勝元と山名宗全の軍勢が京都市街で激突し、十年にわたる市街戦が始まった。連日寺社や町屋が炎上し、黒煙が洛中を覆い尽くしている。",
    "factBox": "1467年に始まった応仁の乱により京都の大部分が灰燼に帰し、室町幕府の権威は失墜して戦国時代へと突入した。",
    "choices": [
      {
        "id": "flee_to_countryside_omi",
        "label": "家財を背負い、戦火を逃れて近江や大和の農村へ都落ちする",
        "subLabel": "都の暮らしは捨てるが命を守り農業で再起する",
        "survivalChance": 0.83,
        "deathCause": "都落ち途上の野伏（のぶせり）による襲撃死",
        "effects": {
          "wealthDelta": -30,
          "relations": 15,
          "happiness": 5
        },
        "outcomeText": "野伏の目を盗んで山を越え、親類のいる農村へ無事に辿り着いて新たな田畑を耕し始めた。",
        "deathText": "峠道で竹槍を持った野伏の集団に取り囲まれ、荷物を奪われたうえ刺殺された。"
      },
      {
        "id": "form_machigumi_self_defense",
        "label": "町内の住民と町組を結成し、土塁を築いて自衛する",
        "subLabel": "略奪武士を撃退し都の家業を守る",
        "survivalChance": 0.79,
        "deathCause": "町防衛戦での足軽軍団による焼き討ち・戦死",
        "effects": {
          "relations": 25,
          "wealthDelta": 10,
          "knowledge": 10
        },
        "outcomeText": "町衆の固い結束で足軽の略奪を跳ね除け、洛中で奇跡的に焼け残った町屋を守り抜いた。",
        "deathText": "東軍の足軽隊が放った火矢で木戸が炎上し、斬り込んできた槍衾に貫かれて戦死した。"
      }
    ]
  },
  {
    "id": "med_other_trans_sahara_salt",
    "title": "サハラ砂漠横断の岩塩板運搬隊商",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_west_africa"
    ],
    "minAge": 15,
    "maxAge": 50,
    "description": "タガザの塩鉱から切り出した重い岩塩板をラクダの背に括り付け、ニジェール川流域のトンブクトゥへ向かう隊商に加わった。灼熱の風が吹き抜け、蜃気楼が揺れる。",
    "factBox": "西アフリカのマリ帝国やソンガイ帝国は、サハラ砂漠の岩塩と南方の森林地帯の砂金を等価に近い比率で交換する交易で栄えた。",
    "choices": [
      {
        "id": "guide_salt_camel_steadily",
        "label": "星の動きを頼りに夜間に移動し、岩塩を無傷で届ける",
        "subLabel": "昼の猛暑を避け安全にサハラを縦断する",
        "survivalChance": 0.8,
        "deathCause": "サハラ横断中の砂嵐による道迷い・渇水死",
        "effects": {
          "wealthDelta": 50,
          "knowledge": 20,
          "health": -10
        },
        "outcomeText": "トンブクトゥの市場で岩塩を黄金の粉と交換し、一攫千金の富を掴んで生還した。",
        "deathText": "巨大な砂嵐に巻き込まれて隊商とはぐれ、砂丘のなかで水袋が裂けて干からびて死んだ。"
      },
      {
        "id": "work_at_salt_mine_camp",
        "label": "砂漠横断は避け、塩鉱キャンプの荷造り・補修に専念する",
        "subLabel": "高利は得られないが確実に日当を稼ぐ",
        "effects": {
          "wealthDelta": 15,
          "relations": 10,
          "health": 5
        },
        "outcomeText": "硬い塩の板を丁寧に藁で梱包する仕事を続け、堅実な稼ぎを蓄えた。"
      }
    ]
  },
  {
    "id": "med_other_chinampa_mud_harvest",
    "title": "テスココ湖の浮島農園（チナンパ）でのトウモロコシ栽培",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_mesoamerica"
    ],
    "minAge": 12,
    "maxAge": 55,
    "description": "アステカの首都テノチティトランを取り囲む湖で、水底の泥と有機物を積み上げた人工島（チナンパ）を耕している。年に何度もトウモロコシと唐辛子が収穫できる驚異の農園である。",
    "factBox": "チナンパは中米で発達した集約的湿地農法で、周囲の湖水から常に水分と養分が供給され、都市の巨大人口を支えた。",
    "choices": [
      {
        "id": "scoop_lake_mud_plant",
        "label": "カヌーで湖底の肥沃な泥を汲み上げ、苗床を何層にも重ねる",
        "subLabel": "重労働だが驚異的な豊作を実現する",
        "effects": {
          "wealthDelta": 30,
          "knowledge": 15,
          "health": -5
        },
        "outcomeText": "黄金色に実った見事なトウモロコシを舟いっぱいに収穫し、大都市の市場で飛ぶように売れた。"
      },
      {
        "id": "weave_willow_fences",
        "label": "泥島が流失しないよう、ヤナギの木を植えて杭で補強する",
        "subLabel": "長期的な農地の安全性を高める",
        "effects": {
          "relations": 15,
          "wealthDelta": 15,
          "happiness": 10
        },
        "outcomeText": "しっかりと根を張ったヤナギの柵がチナンパを守り、嵐の波にも耐える強固な農地を築いた。"
      }
    ],
    "places": [
      "テノチティトラン",
      "テスココ",
      "メキシコ盆地の湖畔の村"
    ]
  },
  {
    "id": "med_other_andes_quipu_tribute",
    "title": "インカ帝国の結び目縄（キープ）による貢納査定",
    "category": "common_sense",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_andes"
    ],
    "minAge": 14,
    "maxAge": 60,
    "description": "アンデス山脈の段々畑の村に、インカ帝国の巡察官（キープカマヨク）が色鮮やかな結び目縄（キープ）を携えて現れた。人口と家畜（リャマ）、乾燥ジャガイモの備蓄量を点検している。",
    "factBox": "インカ帝国は文字を持たなかったが、紐の結び目や色の組み合わせによるキープを用いて十進法で統計・備蓄・税を精確に管理した。",
    "choices": [
      {
        "id": "report_accurate_tribute_quipu",
        "label": "正直にリャマの頭数を申告し、皇帝への貢納（ミタ労役）を受け入れる",
        "subLabel": "掟を守り帝国倉庫からの飢饉時配給の保証を得る",
        "effects": {
          "relations": 15,
          "happiness": 5,
          "wealthDelta": 5
        },
        "outcomeText": "巡察官は几帳面にキープの結び目を記録し、村の忠誠を称えて塩とコカの葉を下賜した。"
      },
      {
        "id": "learn_quipu_knotting_code",
        "label": "巡察官に頼み込み、紐の結び目で数を記録する技術を学ぶ",
        "subLabel": "記録術を身につけ村の帳簿役を目指す",
        "effects": {
          "knowledge": 25,
          "wealthDelta": 20,
          "literate": true
        },
        "outcomeText": "複雑な結び目の規則を素早く理解し、村の代表記録係として重用されるようになった。"
      }
    ]
  },
  {
    "id": "med_other_angkor_reservoir_breach",
    "title": "アンコール巨大貯水池（東バライ）の堤防決壊",
    "category": "historical_wave",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_southeast_asia"
    ],
    "minAge": 14,
    "maxAge": 55,
    "description": "クメール帝国の王都アンコールで、数千万立方メートルの水を蓄える巨大貯水池（バライ）の土手が大雨で決壊寸前となった。水路網が破断すれば水田が全滅してしまう。",
    "factBox": "アンコール文明は高度な貯水池（バライ）と水路網による集約稲作で栄えたが、気候変動によるモンスーンの極端化と水利網の崩壊が衰退を招いた。",
    "choices": [
      {
        "id": "shore_up_baray_dyke",
        "label": "激流に逆らって丸太を打ち込み、土嚢で堤防の亀裂を塞ぐ",
        "subLabel": "王国の生命線を死守するが決死の濁流作業",
        "survivalChance": 0.79,
        "deathCause": "貯水池堤防崩落による水死・泥流窒息",
        "effects": {
          "relations": 20,
          "wealthDelta": 15,
          "health": -10
        },
        "outcomeText": "何千人もの工夫とともに濁流を押し留め、都の水田と寺院を未曾有の大水害から救い出した。",
        "deathText": "巨大な水圧で堤防が一気に弾け飛び、押し寄せた泥流に呑み込まれて命を散らした。"
      },
      {
        "id": "divert_water_to_jungle",
        "label": "放水路の水門を開け放ち、過剰な水をジャングルへ逃がす",
        "subLabel": "一部の畑は浸水するが堤防全体の崩壊を防ぐ",
        "effects": {
          "knowledge": 15,
          "wealthDelta": -10,
          "happiness": 5
        },
        "outcomeText": "冷静な判断で水門を操作し、最悪の破堤事故を回避することに成功した。"
      }
    ],
    "places": [
      "アンコール",
      "ヤショーダラプラ",
      "メコン流域の稲作村"
    ]
  },
  {
    "id": "med_other_swahili_dhow_sail",
    "title": "スワヒリ海岸のダウ船によるインド洋季節風航海",
    "category": "livelihood",
    "eraIds": [
      "medieval"
    ],
    "regionIds": [
      "med_east_africa"
    ],
    "minAge": 16,
    "maxAge": 50,
    "description": "キルワの港で、ヤシの繊維で木材を縫い合わせた三角帆のダウ船に金・象牙・マングローブ木材を積み込み、季節風に乗ってアラビアやインドへ向かう船員を募集している。",
    "factBox": "東アフリカのスワヒリ諸都市は、モンスーンを利用したインド洋交易ネットワークの中心として、イスラム文化と融合した独自の文明を開花させた。",
    "choices": [
      {
        "id": "board_swahili_dhow",
        "label": "三角帆（ラテンセイル）を操り、インド洋を渡る大航海に出る",
        "subLabel": "嵐の危険を冒してインド産の綿布と陶磁器を持ち帰る",
        "survivalChance": 0.78,
        "deathCause": "インド洋での難破・サメによる襲撃死",
        "effects": {
          "wealthDelta": 60,
          "knowledge": 25,
          "happiness": 15
        },
        "outcomeText": "インドのグジャラート港まで往復し、美しい更紗と香料を山積みにして帰還し巨利を博した。",
        "deathText": "サイクロンの直撃を受けて船体が裂け、大海原の真ん中で波に飲まれて絶命した。"
      },
      {
        "id": "trade_ivory_at_harbor",
        "label": "陸上に留まり、内陸部から届く象牙と金の仕入れ問屋を営む",
        "subLabel": "船には乗らず港町で安全に仲介マージンを得る",
        "effects": {
          "wealthDelta": 25,
          "relations": 15,
          "health": 5
        },
        "outcomeText": "内陸の商人たちと手堅い信頼関係を築き、港の豪商として地位を固めた。"
      }
    ]
  }
];
