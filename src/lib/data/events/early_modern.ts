import type { DecisionEvent } from '#lib/types';

/** 近世・大航海期（江戸・アジア・ヨーロッパ・大西洋）の決断イベント */
export const EARLY_MODERN_EVENTS: DecisionEvent[] = [
  {
    "id": "em_edo_mizunomi_peasant_work",
    "title": "水呑百姓の困窮と江戸下町への出稼ぎ",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_edo"
    ],
    "minAge": 15,
    "maxAge": 55,
    "description": "先祖伝来の田畑を持たない水呑百姓の家に生まれ、小作料を払うと年を越す米も残らない。名主から勘当同然の送り手形をもらい、大都市・江戸へ日雇い稼ぎに出る決断を迫られる。",
    "factBox": "江戸時代の農村では本百姓と水呑百姓の格差が大きく、困窮した農民は木賃宿や長屋に身を寄せ、棒手振や日雇いとして都市へ流入した。",
    "choices": [
      {
        "id": "go_to_edo_daylabor",
        "label": "草鞋を履いて東海道を上り、江戸本所で日雇い人足となる",
        "subLabel": "過酷な肉体労働だが現金収入を得て国元へ送金する",
        "survivalChance": 0.85,
        "deathCause": "江戸裏長屋でのコロリ（コレラ）感染・衰弱死",
        "effects": {
          "wealthDelta": 30,
          "relations": 10,
          "health": -10
        },
        "outcomeText": "材木運びや川浚えで泥まみれになって働き、貯めた小判を故郷の母へ送金することができた。",
        "deathText": "夏場に裏長屋を襲った悪性の下痢熱（コロリ）に倒れ、誰にも看取られず長屋の敷布の上で息絶えた。"
      },
      {
        "id": "stay_village_straw_craft",
        "label": "村に残り、冬の農閑期に夜なべで藁靴や筵（むしろ）を編む",
        "subLabel": "稼ぎは少ないが故郷にとどまり地道に凌ぐ",
        "effects": {
          "wealthDelta": 10,
          "relations": 15,
          "happiness": 5
        },
        "outcomeText": "家族で囲炉裏端に集まり丹念に藁細工を作り、街道の宿場町で売りさばいて冬を乗り切った。"
      }
    ]
  },
  {
    "id": "em_edo_machibikeshi_ladder",
    "title": "「火事と喧嘩は江戸の華」町火消の梯子乗り",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_edo"
    ],
    "minAge": 16,
    "maxAge": 40,
    "description": "冬のからっ風が吹き荒れる江戸神田で火の手が上がった。町火消「いろは四十八組」の鳶職として、風下の屋根に登り、纏（まとい）を掲げて建物を打ち壊す延焼遮断が命じられた。",
    "factBox": "江戸の町火消は水による消火ではなく、火元周辺の家屋を素早く引き倒す「破壊消火」を主とし、鳶職たちの命懸けの度胸が求められた。",
    "choices": [
      {
        "id": "hold_matoi_on_roof",
        "label": "炎が迫る屋根の頂に立ち、火の粉を浴びながら纏を振り続ける",
        "subLabel": "仲間の士気を鼓舞し江戸っ子の名声を上げる",
        "survivalChance": 0.77,
        "deathCause": "江戸大火での屋根崩落・火傷死",
        "effects": {
          "relations": 30,
          "wealthDelta": 25,
          "happiness": 15
        },
        "outcomeText": "猛烈な熱風のなかで纏を死守し、仲間の鳶口で火の足を止めた。「い組の男伊達」として江戸中に名が知れ渡った。",
        "deathText": "焼け落ちた梁が突然折れて屋根ごと炎の海へ転落し、紅蓮の炎に呑まれて落命した。"
      },
      {
        "id": "pull_hook_from_street",
        "label": "地上から長い鳶口とロープで板壁を引き倒す作業に回る",
        "subLabel": "屋根には登らず安全な破壊消火に専念する",
        "effects": {
          "health": 5,
          "wealthDelta": 15,
          "relations": 10
        },
        "outcomeText": "力いっぱいロープを引いて連なる板長屋を打ち倒し、町への延焼を食い止めて町名主から金一封を賜った。"
      }
    ]
  },
  {
    "id": "em_edo_sumptuary_edict",
    "title": "幕府の奢侈禁止令と絹縮緬の着物",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_edo"
    ],
    "minAge": 16,
    "maxAge": 65,
    "description": "老中による寛政の改革（あるいは天保の改革）により、町人の贅沢を厳しく取り締まる倹約令が出された。表向きは地味な木綿を着つつ、羽織の裏地に鮮やかな絹縮緬を縫い込む「裏勝り」が流行している。",
    "factBox": "町人の経済力向上に対抗して幕府は度々奢侈禁止令を出したが、町人たちは裏地に贅を尽くす「粋（いき）」の美学で抵抗した。",
    "choices": [
      {
        "id": "wear_plain_cotton_only",
        "label": "お達し通りに素朴な藍染めの木綿着物だけで暮らす",
        "subLabel": "町奉行の取締りを恐れて目立たぬよう過ごす",
        "effects": {
          "wealthDelta": 10,
          "happiness": -5,
          "knowledge": 5
        },
        "outcomeText": "質素倹約を励行して役人の目をやり過ごした。蓄えた小銭を堅実に商売の元手へ回した。"
      },
      {
        "id": "sport_uramasari_lining",
        "label": "羽織の裏地に友禅染の縮緬を忍ばせ、粋な着こなしを楽しむ",
        "subLabel": "町奉行の与力に見つかれば過料と手鎖の危険",
        "survivalChance": 0.88,
        "deathCause": "町奉行所の厳しい取り調べ・手鎖牢死",
        "effects": {
          "happiness": 20,
          "relations": 15,
          "wealthDelta": -10
        },
        "outcomeText": "裏地の粋な柄が茶屋の娘たちの間で評判となり、日本橋の旦那衆からも一目置かれるようになった。",
        "deathText": "通りがかりの与力に羽織を改められ、不服を申し立てたため投獄されて牢屋の悪環境で病没した。"
      }
    ]
  },
  {
    "id": "em_edo_terakoya_calligraphy",
    "title": "寺子屋での手習いと『商売往来』の暗誦",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_edo"
    ],
    "minAge": 7,
    "maxAge": 20,
    "description": "町の寺子屋に通い、筆を握って『庭訓往来』や『商売往来』の文字を繰り返し半紙に練習している。師匠から「読み書き算盤ができねば、商人としても職人としても一人前になれぬ」と諭される。",
    "factBox": "江戸時代の寺子屋は庶民教育を担い、幕末の日本の識字率は世界最高水準（男子で50%以上）に達していた。",
    "choices": [
      {
        "id": "practice_writing_abacus",
        "label": "墨で手を真っ黒にしながら算盤の手入れと書道に励む",
        "subLabel": "読み書き算盤を完璧に身につけて大店の丁稚を目指す",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "wealthDelta": 20,
          "relations": 10
        },
        "outcomeText": "達筆と正確な算盤勘定が認められ、日本橋の木綿問屋に手代見習いとして雇い入れられた。"
      },
      {
        "id": "skip_school_for_play",
        "label": "手習いを抜け出して川原でトンボ捕りや独楽回しに興じる",
        "subLabel": "勉強を怠るが体を動かして仲間と元気に遊ぶ",
        "effects": {
          "health": 10,
          "happiness": 15,
          "knowledge": -10
        },
        "outcomeText": "文字は満足に書けないものの、足腰が鍛えられ、威勢のいい下町の腕白小僧として育った。"
      }
    ]
  },
  {
    "id": "em_edo_dojima_rice_exchange",
    "title": "大坂堂島米会所の相場高騰と米屋打ちこわし",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_edo"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "飢饉と大坂堂島米会所での米切手買い占めにより、米の価格が平年の五倍に跳ね上がった。長屋の赤子が飢えで泣き叫ぶなか、竹槍を持った町衆が米問屋への「打ちこわし」に動き出した。",
    "factBox": "堂島米会所は世界初の組織的な先物取引市場であったが、投機による米価高騰は庶民の暴動（打ちこわし）を招いた。",
    "choices": [
      {
        "id": "join_uchikowashi_crowd",
        "label": "筵旗を掲げる群衆に加わり、悪徳米問屋の蔵を叩き壊す",
        "subLabel": "米の安売りを迫るが町奉行の同心による捕縛の危険",
        "survivalChance": 0.79,
        "deathCause": "打ちこわし鎮圧戦での同心による刺殺・獄死",
        "effects": {
          "wealthDelta": 25,
          "happiness": 10,
          "relations": 15
        },
        "outcomeText": "米蔵の米俵を引きずり出して施し米を配らせ、翌日から米の小売り価格を大幅に下げさせた。",
        "deathText": "駆けつけた同心と目明かしの十手に囲まれ、激しい乱闘の末に長柄槍で突かれて命を落とした。"
      },
      {
        "id": "eat_millet_and_wait",
        "label": "暴動には加わらず、屑米と大根の葉を煮た雑炊をすすって耐える",
        "subLabel": "処罰を避け家族とともに嵐が過ぎ去るのを待つ",
        "survivalChance": 0.86,
        "deathCause": "米価高騰による長期栄養失調・飢餓死",
        "effects": {
          "health": -15,
          "wealthDelta": -20,
          "relations": 5
        },
        "outcomeText": "細い煙を立てて雑炊をすすり、米価が落ち着くまで何とか家族全員で飢えを凌ぎきった。",
        "deathText": "食料の買い出しもままならず、家族の目前で極度の栄養失調のため静かに息絶えた。"
      }
    ]
  },
  {
    "id": "em_chn_qing_queue_edict",
    "title": "清朝の「頭を留むる者は髪を留めず」薙髪令",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_china"
    ],
    "minAge": 12,
    "maxAge": 65,
    "description": "満洲族の清軍が入関し、漢民族に対して頭の前半分を剃り上げて三つ編みにする「辮髪」の強制令（薙髪令）が出された。従わねば反逆者として首を刎ねられる。",
    "factBox": "「留頭不留髪、留髪不留頭」と恐れられた薙髪令は、清朝への服従を示す絶対の証であり、各地で激しい抵抗と弾圧を生んだ。",
    "choices": [
      {
        "id": "shave_head_accept_queue",
        "label": "涙を呑んで床屋の椅子に座り、前頭部を剃り辮髪を結う",
        "subLabel": "伝統の誇りは傷つくが確実に命と家族を守る",
        "effects": {
          "happiness": -15,
          "relations": 5,
          "wealthDelta": 5
        },
        "outcomeText": "剃り上げた頭に三つ編みを垂らし、清朝の民として生き残る道を選んだ。町役所から通行手形を交付された。"
      },
      {
        "id": "refuse_queue_flee_mountains",
        "label": "髪を切ることを拒み、先祖の髪を守るため山中の抵抗軍へ走る",
        "subLabel": "「反清復明」を掲げるが八旗兵の掃討戦の標的となる",
        "survivalChance": 0.73,
        "deathCause": "薙髪拒否の反逆罪による清軍の斬首刑",
        "effects": {
          "happiness": 20,
          "knowledge": 10,
          "relations": -15
        },
        "outcomeText": "山岳地帯の秘密結社に合流し、山砦から清軍の輸送隊を奇襲して先祖の誇りを守り抜いた。",
        "deathText": "清軍の八旗兵に山砦を包囲され、捕縛されて広場の処刑台で首を刎ねられた。"
      }
    ]
  },
  {
    "id": "em_chn_canton_cohong_silver",
    "title": "広州十三行での茶・生糸貿易と西洋銀貨の鑑定",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_china"
    ],
    "minAge": 16,
    "maxAge": 55,
    "description": "外国貿易が広州一港に限定されるなか、特許商人「十三行（広東公行）」の商館で、イギリス東インド会社の船から運び込まれるスペイン銀貨（墨銀）の品位を銀秤で鑑定する仕事に就く。",
    "factBox": "清朝の広東貿易体制では、十三行が貿易を独占し、ヨーロッパから支払われた膨大な銀が清の通貨経済（地丁銀制）を潤した。",
    "choices": [
      {
        "id": "weigh_silver_pieces_strictly",
        "label": "銀秤と試金石を使い、偽造銀貨を厳重に検収する",
        "subLabel": "正確な鑑定で十三行の大旦那から厚い信用を得る",
        "effects": {
          "wealthDelta": 35,
          "knowledge": 20,
          "relations": 15
        },
        "outcomeText": "純度の高い銀錠を選り分けて莫大な利益を守り、商館の主任番頭へ抜擢され多額の賞与を得た。"
      },
      {
        "id": "learn_english_trade_pidgin",
        "label": "外国人商人相手に通訳する広東ピジン英語を身につける",
        "subLabel": "言葉を武器に通訳兼仲買人として独立を目指す",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "wealthDelta": 25,
          "happiness": 10
        },
        "outcomeText": "イギリス船の船長と直接渡り合える通詞として重宝され、港の国際的な社交場で頭角を現した。"
      }
    ]
  },
  {
    "id": "em_chn_white_lotus_gathering",
    "title": "白蓮教の無生老母信仰と秘密集会",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_china"
    ],
    "minAge": 16,
    "maxAge": 60,
    "description": "山東・河南の農村で、弥勒下生と苦難からの救済を説く「白蓮教」の秘密集会が夜毎開かれている。役人の苛政に苦しむ親戚から「集会に参加して経文を受け取ろう」と誘われる。",
    "factBox": "白蓮教は明清代の民衆秘密結社で、弥勒信仰による終末論を掲げ、清代中期には大反乱（白蓮教徒の乱）を起こした。",
    "choices": [
      {
        "id": "join_white_lotus_lodge",
        "label": "線香を焚き、教徒の互助組織に加わって念仏を唱える",
        "subLabel": "強固な相互扶助を得るが官憲に摘発されれば極刑",
        "survivalChance": 0.78,
        "deathCause": "邪教徒取締りによる投獄・拷問死",
        "effects": {
          "relations": 25,
          "happiness": 15,
          "wealthDelta": 10
        },
        "outcomeText": "仲間と助け合って凶作の飢えを分かち合い、心の拠り所となる強い紐帯を結んだ。",
        "deathText": "密告により集会所が緑営兵に急襲され、捕らえられて過酷な拷問の末に獄死した。"
      },
      {
        "id": "decline_secret_sect",
        "label": "邪教として禁圧される危険を説き、誘いを断って仏堂に参る",
        "subLabel": "体制に従い穏当な祖先祭祀と日常を守る",
        "effects": {
          "wealthDelta": 5,
          "happiness": 5,
          "relations": -10
        },
        "outcomeText": "秘密結社には関わらず地道に田を耕した。数年後の一斉摘発の難を逃れることができた。"
      }
    ]
  },
  {
    "id": "em_chn_keju_examination_cubicle",
    "title": "科挙郷試の貢院（狭小独房）とカンニングの誘惑",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_china"
    ],
    "minAge": 16,
    "maxAge": 50,
    "description": "官吏登用試験（科挙）の郷試を受験するため、幅わずか1メートルの独房（号舎）に閉じ込められ、三昼夜の論述試験が始まった。狭い房内で墨を磨りながら、懐に忍ばせた下着のカンニング布（微細文字）を使うか葛藤する。",
    "factBox": "明清の科挙は世界最難関の官僚登用試験であり、合格すれば一族の栄華が約束されたため、過酷な独房監禁受験と巧妙な不正が横行した。",
    "choices": [
      {
        "id": "write_keju_essay_fairly",
        "label": "正々堂々と自らの学識のみで儒教経典の解釈を書き上げる",
        "subLabel": "不合格のリスクを受け入れ徳と学識で勝負する",
        "effects": {
          "knowledge": 25,
          "happiness": 10,
          "relations": 15
        },
        "outcomeText": "端正な八股文を書き上げ、見事に挙人（郷試合格者）として合格掲示板に名が掲げられた。"
      },
      {
        "id": "cheat_keju_microtext_cloth",
        "label": "密かに下着の微細文字カンニングを写し取り、難問を乗り切る",
        "subLabel": "発覚すれば首枷晒し刑と一族追放の極大リスク",
        "survivalChance": 0.82,
        "deathCause": "科挙不正発覚による首枷晒し刑・獄死",
        "effects": {
          "wealthDelta": 30,
          "knowledge": 10,
          "happiness": -10
        },
        "outcomeText": "試験官の目を盗んで見事に書き上げ、高得点で試験を突破して郷里へ錦を飾った。",
        "deathText": "巡回官にカンニング下着を見咎められ、その場で捕縛されて重い首枷を嵌められ獄死した。"
      }
    ]
  },
  {
    "id": "em_chn_literary_inquisition",
    "title": "文字の獄（筆禍事件）と先祖の詩文の隠滅",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_china"
    ],
    "minAge": 18,
    "maxAge": 65,
    "description": "清朝当局による反体制的な言論弾圧「文字の獄」が激化。先祖の日記や詩集に「胡」「虜」など北方異民族を蔑称する文字が含まれていると密告されれば、一族皆殺し（九族誅滅）となる。官憲の家宅捜索が迫る。",
    "factBox": "康熙・雍正・乾隆年間には、漢民族知識人の反清思想を取り締まるため、詩文の一節をこじつけて一族を処刑する「文字の獄」が頻発した。",
    "choices": [
      {
        "id": "burn_ancestral_writings_hearth",
        "label": "庭の竈で先祖の詩文や書画をすべて灰になるまで焼き尽くす",
        "subLabel": "一族の貴重な歴史を失うが命と家族を最優先する",
        "effects": {
          "relations": 15,
          "happiness": -15,
          "knowledge": -10
        },
        "outcomeText": "煙を上げて灰燼に帰した書物を確認し、駆けつけた役人の厳しい捜索を証拠なしで乗り切った。"
      },
      {
        "id": "hide_manuscripts_in_old_well",
        "label": "書物を油紙で厳重に包み、深夜に庭の古井戸の隙間に隠す",
        "subLabel": "先祖の遺産を守ろうとするが発見されれば一族処刑",
        "survivalChance": 0.75,
        "deathCause": "文字の獄（大逆罪）による凌遅刑・一族連座死",
        "effects": {
          "knowledge": 25,
          "wealthDelta": 20,
          "relations": -10
        },
        "outcomeText": "役人は家宅捜索で何も見つけられず引き揚げ、貴重な先祖の文献を後世へ守り伝えた。",
        "deathText": "井戸の隠し場所が暴かれ、大逆不道罪として捕縛されて処刑場で非業の最期を遂げた。"
      }
    ]
  },
  {
    "id": "em_ind_mughal_mansab_cavalry",
    "title": "ムガル帝国の騎兵維持とジャーギール（知行地）査定",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_mughal_india"
    ],
    "minAge": 18,
    "maxAge": 50,
    "description": "ムガル皇帝アクバルが定めたマンサブダール制の下で、十頭の軍馬と甲冑兵を養う下級軍事貴族として仕えている。割り当てられた知行地（ジャーギール）からの徴税が遅れ、馬の飼料代にも事欠く。",
    "factBox": "ムガル帝国は官位・軍役等級（マンサブ）に応じて徴税地（ジャーギール）を配分する官僚的軍事制度で広大な領土を統治した。",
    "choices": [
      {
        "id": "collect_land_tax_firmly",
        "label": "知行地の農村へ直手に出向き、地主たちから未納の地租を取り立てる",
        "subLabel": "軍備を維持するが農民の反抗に遭うリスク",
        "survivalChance": 0.83,
        "deathCause": "徴税時の農民蜂起による槍傷死",
        "effects": {
          "wealthDelta": 30,
          "relations": -10,
          "health": -5
        },
        "outcomeText": "厳しい取り立てにより軍馬の維持費を確保し、皇帝の親閲パレードで見事に整列を果たした。",
        "deathText": "村の夜道で武装した農民たちに竹槍で囲まれ、馬から引きずり下ろされて命を落とした。"
      },
      {
        "id": "borrow_from_jain_banker",
        "label": "都市のジャイナ教徒の金貸し（サフカル）から利息付きで借り入れる",
        "subLabel": "借金を背負うが強引な徴税による衝突を避ける",
        "effects": {
          "wealthDelta": -20,
          "relations": 10,
          "happiness": 5
        },
        "outcomeText": "金貸しから手形を割り引いてもらい、無事に馬飼いを雇い入れて次の出陣に備えた。"
      }
    ]
  },
  {
    "id": "em_ind_calico_cotton_weaving",
    "title": "スーラト港のキャラコ（綿織物）工房と東インド会社",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_mughal_india"
    ],
    "minAge": 14,
    "maxAge": 55,
    "description": "西海岸の貿易港スーラトで、世界中で大流行している極細の染色綿布（キャラコ）を織る機織り職人として働いている。ヨーロッパ東インド会社の商人が銀貨を積んで大量の注文を競い合っている。",
    "factBox": "17〜18世紀のインド産綿織物はその高品質と安さでヨーロッパに「キャラコ熱」を巻き起こし、世界最大の製造業地域として繁栄した。",
    "choices": [
      {
        "id": "weave_chintz_natural_dye",
        "label": "草木染めの茜と藍の技術を極め、最高級の更紗（更紗布）を仕上げる",
        "subLabel": "熟練の技で外国商人に高値で売り込む",
        "effects": {
          "wealthDelta": 35,
          "knowledge": 20,
          "relations": 15
        },
        "outcomeText": "注文主のオランダ商人が息を呑む美しさの更紗を織り上げ、独立して自らの工房を構える頭領となった。"
      },
      {
        "id": "sign_exclusive_eic_contract",
        "label": "東インド会社の専属職人契約を結び、毎月決まった前渡金を受け取る",
        "subLabel": "安定した収入を得るが会社の専属束縛を受ける",
        "effects": {
          "wealthDelta": 15,
          "happiness": 5,
          "relations": 10
        },
        "outcomeText": "商館から安定して銀貨を受け取り、凶作の年でも食いっぱぐれることなく一家を支え続けた。"
      }
    ]
  },
  {
    "id": "em_ind_taj_mahal_quarry_labor",
    "title": "皇帝の白大理石廟（タージ・マハル）造営と採石運搬",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_mughal_india"
    ],
    "minAge": 16,
    "maxAge": 50,
    "description": "第5代皇帝シャー・ジャハーンが亡き愛妃のために巨大廟の建設を命じた。ラージャスターン州マクラーナの採石場から巨大な白大理石の塊を象と牛車でアーグラまで運ぶ過酷な賦役が課される。",
    "factBox": "タージ・マハル建設には2万人以上の職人と1,000頭以上の象が動員され、20年以上の歳月と巨額の国家財政が投じられた。",
    "choices": [
      {
        "id": "apprentice_pietra_dura_inlay",
        "label": "石工としての腕を磨き、大理石に貴石を嵌め込む象嵌職人に志願する",
        "subLabel": "過酷な力仕事を脱し芸術的職人として出世を目指す",
        "effects": {
          "knowledge": 25,
          "wealthDelta": 25,
          "happiness": 15
        },
        "outcomeText": "ペルシアから来た親方に才能を認められ、廟の主壁にラピスラズリの花模様を嵌め込む大役を果たした。"
      },
      {
        "id": "drive_elephant_transport_team",
        "label": "象の誘導係として巨石の運搬列に従軍し、安全第一で搬送する",
        "subLabel": "重量物に押し潰される事故を避けながら日当を稼ぐ",
        "survivalChance": 0.81,
        "deathCause": "巨石運搬中の荷崩れ下敷き事故死",
        "effects": {
          "wealthDelta": 15,
          "health": -10,
          "relations": 10
        },
        "outcomeText": "仲間の象使いと協力して難所のヤムナー川を渡り切り、怪我なく無事に皇帝からの特別報奨金を手にした。",
        "deathText": "泥濘に足を取られた運搬車が横転し、滑り落ちてきた巨大な大理石ブロックの下敷きとなって落命した。"
      }
    ]
  },
  {
    "id": "em_ind_akbar_sulahkul_debate",
    "title": "皇帝アクバルの宗教討論館と万民融和（スルフ・イ・クル）",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_mughal_india"
    ],
    "minAge": 18,
    "maxAge": 65,
    "description": "都ファテープル・シークリーの討論館（イバーダト・ハーナ）で、イスラム教・ヒンドゥー教・ジャイナ教・キリスト教の学者が一堂に会し、真理をめぐる白熱した論争が繰り広げられている。",
    "factBox": "アクバル帝は非ムスリムへの人頭税（ジズヤ）を廃止し、諸宗教の平和共存（スルフ・イ・クル）を理念とする寛容政策を推進した。",
    "choices": [
      {
        "id": "participate_interfaith_discourse",
        "label": "諸宗教の共通善を説く宮廷の討論に加わり、融和の思想を広める",
        "subLabel": "偏狭な対立を乗り越えて皇帝の側近たちと親交を結ぶ",
        "effects": {
          "knowledge": 25,
          "relations": 20,
          "happiness": 15
        },
        "outcomeText": "異教の友人と深く語り合い、宗派の壁を越えた人脈を築いて地域の争議を平和的に仲裁した。"
      },
      {
        "id": "practice_traditional_devotion",
        "label": "先祖伝来の信仰の儀礼を固く守り、過激な論争から距離を置く",
        "subLabel": "自らの信仰共同体の中で平穏な日常を守る",
        "effects": {
          "happiness": 10,
          "relations": 10,
          "wealthDelta": 5
        },
        "outcomeText": "地域の寺院やモスクで伝統の祈りを捧げ、近隣住民との穏やかな連帯を保ち続けた。"
      }
    ]
  },
  {
    "id": "em_ind_monsoon_famine_relief",
    "title": "デカン大飢饉とモンスーン不作の施粥所",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_mughal_india"
    ],
    "minAge": 8,
    "maxAge": 70,
    "description": "夏のモンスーン（雨季）が3年連続で途絶え、デカン高原全域が灼熱の干ばつに見舞われた。井戸は干上がり、農地はひび割れ、飢えた群衆が城砦都市の施粥所（ランガル）へ殺到する。",
    "factBox": "1630〜1632年のデカン大飢饉では、旱魃と戦乱が重なり数百万人以上が餓死し、人肉食や村の全滅が記録された。",
    "choices": [
      {
        "id": "seek_sufi_langar_soup",
        "label": "家財を処分して都市のスーフィー修道所の施粥所に身を寄せる",
        "subLabel": "聖者の喜捨に加わり家族の最低限の粥を確保する",
        "effects": {
          "relations": 20,
          "health": 5,
          "wealthDelta": -25
        },
        "outcomeText": "修道所の井戸水と温かい豆粥を家族で分け合い、最も過酷な干害のピークを生き延びた。"
      },
      {
        "id": "migrate_to_bengal_delta",
        "label": "わずかな蓄えを抱えて雨の残るベンガル沿岸部へ向けて大移動する",
        "subLabel": "途中の野盗や感染症の蔓延を乗り越える難民行",
        "survivalChance": 0.76,
        "deathCause": "大飢饉下の脱水・コレラによる餓死",
        "effects": {
          "wealthDelta": -20,
          "health": -15,
          "happiness": -15
        },
        "outcomeText": "道中で多くの仲間が倒れるなか、緑豊かなデルタ地帯へ辿り着き、新たな小作地を得て再起した。",
        "deathText": "乾涸びた街道の途中で汚水を飲んで激しいコレラを発症し、砂埃のなかで力尽き息を引き取った。"
      }
    ]
  },
  {
    "id": "em_eur_witch_accusation_panic",
    "title": "村の冷害・家畜死をめぐる魔女裁判の告発",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_europe"
    ],
    "minAge": 14,
    "maxAge": 65,
    "description": "小氷期の厳しい冷夏によりブドウが腐り、村の牛が相次いで死んだ。興奮した村人たちが「悪魔と契約した魔女の仕業だ」と騒ぎ立て、薬草の知識を持つ孤独な女性や近隣を告発し始めた。",
    "factBox": "16〜17世紀のヨーロッパでは気候寒冷化や宗教戦争の不安を背景に「魔女狩り」が猛威を振るい、数万人が処刑された。",
    "choices": [
      {
        "id": "defend_accused_neighbor",
        "label": "法廷で立ち上がり、被告の無実と自然の冷害であることを証言する",
        "subLabel": "正義を貫くが自らも共犯者として疑われる危険",
        "survivalChance": 0.77,
        "deathCause": "魔女裁判における共犯嫌疑での火刑・拷問死",
        "effects": {
          "relations": 20,
          "knowledge": 15,
          "happiness": 10
        },
        "outcomeText": "毅然とした論理的証言により裁判官が冷静さを取り戻し、被告の釈放を勝ち取った。",
        "deathText": "悪魔の庇護者として逆に告発され、激しい水責めと拷問の末に広場で火刑に処された。"
      },
      {
        "id": "stay_silent_cross_self",
        "label": "十字を切って沈黙を守り、自らに嫌疑が及ばぬよう身を潜める",
        "subLabel": "良心は痛むが狂気の嵐が過ぎ去るのを待つ",
        "effects": {
          "happiness": -15,
          "relations": -5,
          "wealthDelta": 5
        },
        "outcomeText": "群衆の熱狂から距離を置いて生き延びた。しかし無実の人が処刑された煙の匂いは長く消えなかった。"
      }
    ]
  },
  {
    "id": "em_eur_underground_press",
    "title": "啓蒙思想と禁書の地下印刷・密貿易",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_europe"
    ],
    "minAge": 16,
    "maxAge": 50,
    "description": "王立検閲官の目を盗み、スイスやオランダで印刷されたヴォルテールやルソーの禁書、あるいは百科全書をパリの地下室で製本・密売する手伝いを持ちかけられた。",
    "factBox": "18世紀ヨーロッパでは地下出版網が発達し、カトリック教会や絶対王政の検閲をくぐり抜けて啓蒙思想が急速に拡散した。",
    "choices": [
      {
        "id": "smuggle_enlightenment_books",
        "label": "荷馬車の底に禁書を隠し、街道の関所を越えて都市へ運ぶ",
        "subLabel": "思想の自由に貢献し多額の密売利益を得る",
        "survivalChance": 0.82,
        "deathCause": "禁書密輸の罪によるバスティーユ牢獄での獄死",
        "effects": {
          "knowledge": 30,
          "literate": true,
          "wealthDelta": 40,
          "happiness": 15
        },
        "outcomeText": "検閲官の詰所を機転で突破し、カフェに集まる学者や市民たちに新刊を売り捌いて大金を得た。",
        "deathText": "関所で荷馬車を暴かれ、要塞牢獄へ投獄されて暗く湿った独房で病死した。"
      },
      {
        "id": "print_licensed_bibles",
        "label": "王立公認の工房で聖書や暦の安全な印刷作業に専念する",
        "subLabel": "危険を冒さず公認ギルドの職人として生きる",
        "effects": {
          "wealthDelta": 15,
          "knowledge": 10,
          "relations": 10
        },
        "outcomeText": "規則に従って活字を拾い、安定した給金を受け取って平穏な生活を送った。"
      }
    ]
  },
  {
    "id": "em_eur_smallpox_variolation",
    "title": "天然痘の流行と人痘接種（バリオレーション）",
    "category": "common_sense",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_europe"
    ],
    "minAge": 5,
    "maxAge": 50,
    "description": "猛烈な天然痘が町を襲い、子どもたちの顔に水疱が広がって死者が続出している。オスマン帝国から伝わった「軽症患者の天然痘の膿を腕にすり込む」人痘接種を試すかどうかの選択を迫られる。",
    "factBox": "ジェンナーの牛痘種痘法（1796年）以前、オスマン帝国からレディ・モンタギューによって紹介された人痘接種がヨーロッパで一部実施されていた。",
    "choices": [
      {
        "id": "receive_variolation_shot",
        "label": "勇気を出して腕に傷をつけ、人痘の膿をすり込んで免疫を得る",
        "subLabel": "数日の発熱を耐えれば生涯の免疫／発症のリスクも僅かにある",
        "survivalChance": 0.86,
        "deathCause": "人痘接種による激症天然痘の発症・病死",
        "effects": {
          "health": 25,
          "knowledge": 15,
          "happiness": 10
        },
        "outcomeText": "数日間の軽い発熱の後に完全に回復し、町中を恐怖に陥れた天然痘の猛威をまったく寄せ付けなかった。",
        "deathText": "接種部位から全身へ重症の天然痘が広がり、高熱のなかで水疱に覆われて息絶えた。"
      },
      {
        "id": "isolate_in_countryside",
        "label": "接種を恐れて町を離れ、人里離れた農家の小屋に避難隔離する",
        "subLabel": "人混みを完全に避けて感染から身を守る",
        "effects": {
          "wealthDelta": -20,
          "health": 10,
          "happiness": 5
        },
        "outcomeText": "町の流行が収まるまで田舎で慎重に過ごし、無傷で生還することができた。"
      }
    ]
  },
  {
    "id": "em_eur_guild_entry_fee",
    "title": "親方ギルドの参入規制と徒弟ストライキ",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_europe"
    ],
    "minAge": 18,
    "maxAge": 45,
    "description": "毛織物ギルドの徒弟として何年も無給同然で働いてきたが、親方たちは身内だけで親方の席を独占し、外部出身者の独立を阻んでいる。職人仲間（コンパニヨナージュ）が仕事を放棄してストライキを企てた。",
    "factBox": "近世ヨーロッパの同職ギルドは閉鎖的特権化が進み、職人たちの秘密結社（コンパニヨナージュ）との激しい対立やサボタージュが発生した。",
    "choices": [
      {
        "id": "join_journeymen_strike",
        "label": "親方の工房を出て職人同盟のストライキに加わり、賃金引き上げを要求する",
        "subLabel": "仲間の連帯を守るが市参事会による警察弾圧の危険",
        "survivalChance": 0.81,
        "deathCause": "都市警備隊による職人暴動鎮圧での刺創死",
        "effects": {
          "wealthDelta": 30,
          "relations": 20,
          "happiness": 10
        },
        "outcomeText": "都市全体の工房を麻痺させて親方たちに妥協を迫り、日当の倍増と独立基準の緩和を勝ち取った。",
        "deathText": "市参事会の騎馬警備隊が棍棒とサーベルで突入し、頭部を強打されて石畳の上に倒れた。"
      },
      {
        "id": "marry_masters_daughter",
        "label": "親方に忠誠を誓い、親方の娘へ求婚して工房の継承を目指す",
        "subLabel": "同僚からは裏切り者と謗られるが確実な出世の道",
        "effects": {
          "wealthDelta": 40,
          "relations": -15,
          "knowledge": 10
        },
        "outcomeText": "親方に気に入られて後継者として認められ、晴れて自らの看板を掲げる正規の親方に就任した。"
      }
    ]
  },
  {
    "id": "em_eur_pressgang_navy",
    "title": "港町酒場でのイギリス海軍強制徴募（プレス・ギャング）",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_europe"
    ],
    "minAge": 16,
    "maxAge": 45,
    "description": "ポーツマスの港町酒場でビールを飲んでいると、警棒とカトラスを持った海軍の徴募隊（プレス・ギャング）が突入してきた。外洋軍艦の水兵不足を補うため、居合わせた男たちが強制連行される。",
    "factBox": "18世紀の英国海軍は慢性的な水兵不足を補うため「強制徴募（プレス）」を頻繁に行い、酒場や商船から船員を拉致同然に徴集した。",
    "choices": [
      {
        "id": "fight_pressgang_escape",
        "label": "椅子を投げ飛ばして窓ガラスを破り、裏路地へ全速力で逃走する",
        "subLabel": "海軍送りは免れるが警棒での殴打の危険",
        "survivalChance": 0.79,
        "deathCause": "強制徴募隊の警棒殴打による頭蓋骨骨折死",
        "effects": {
          "happiness": 15,
          "health": -10,
          "wealthDelta": -10
        },
        "outcomeText": "路地の影に身を隠し、徴募隊の追撃を振り切った。しばらく港を離れて内陸の農村へ身を寄せた。",
        "deathText": "背後から徴募隊長に棍棒で頭を殴打され、石畳に頭を打ち付けてそのまま息絶えた。"
      },
      {
        "id": "surrender_and_board_frigate",
        "label": "抵抗を諦めて戦列艦に乗り込み、砲手水兵としての生活を受け入れる",
        "subLabel": "過酷な航海だが前渡金と戦利品分配の権利",
        "survivalChance": 0.75,
        "deathCause": "海上戦におけるフランス艦の砲撃戦死・壊血病",
        "effects": {
          "wealthDelta": 35,
          "knowledge": 20,
          "health": -15
        },
        "outcomeText": "大砲の装填手を務めて幾多の海戦を生き延び、拿捕賞金の分け前を手に入れて無事に除隊した。",
        "deathText": "海戦中に敵弾が砲甲板を貫通し、飛び散った巨大な木片が胸に突き刺さって戦死した。"
      }
    ]
  },
  {
    "id": "em_atl_sugar_cane_machete",
    "title": "カリブ海サトウキビ農園での過酷な鉈伐採",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_caribbean"
    ],
    "minAge": 12,
    "maxAge": 50,
    "description": "ジャマイカやサントドミンゴの広大なサトウキビ農園で、重い鉈（マチェーテ）を振るって鋭いトゲのあるサトウキビを炎天下で刈り倒している。白人監督官が馬上で鞭を鳴らして監視している。",
    "factBox": "大西洋奴隷貿易によって運ばれたアフリカ人の過半はカリブ海やブラジルの製糖プランテーションに投入され、極めて高い死亡率の中で酷使された。",
    "choices": [
      {
        "id": "work_cane_field_steadily",
        "label": "傷だらけの手でサトウキビを刈り続け、ノルマの束を揃える",
        "subLabel": "鞭打ちを避けるが過労と熱射病の極限",
        "survivalChance": 0.76,
        "deathCause": "製糖プランテーションでの過労・熱中症衰弱死",
        "effects": {
          "health": -15,
          "relations": 10,
          "wealthDelta": 5
        },
        "outcomeText": "仲間の奴隷たちと密かに励まし合い、夕暮れの点呼まで耐え抜いてわずかな配給のトウモロコシ粥を啜った。",
        "deathText": "連日の灼熱と過酷な労働に心臓が耐えかね、サトウキビ畑の泥土の上に前のめりに倒れて息絶えた。"
      },
      {
        "id": "tend_boiling_house_sugar",
        "label": "煮沸小屋（ボイリングハウス）で煮詰まる糖蜜を柄杓でかき混ぜる",
        "subLabel": "高温の糖液が飛び散る危険作業だが畑仕事を逃れる",
        "survivalChance": 0.72,
        "deathCause": "沸騰した糖蜜釜への転落・重度熱傷死",
        "effects": {
          "knowledge": 15,
          "wealthDelta": 10,
          "health": -10
        },
        "outcomeText": "火の番と不純物のすくい取りを熟練させ、製糖親方として監督官の扱いをわずかに和らげさせた。",
        "deathText": "湯気で視界を奪われて足を滑らせ、煮えたぎる大釜に落ちて全身を焼かれて死亡した。"
      }
    ]
  },
  {
    "id": "em_atl_maroon_mountain_escape",
    "title": "山岳ジャングルへの逃亡奴隷（マルーン）共同体への合流",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_caribbean"
    ],
    "minAge": 15,
    "maxAge": 45,
    "description": "農園の過酷な拷問に耐えかね、鎖を断ち切って夜陰に乗じ、青い山脈（ブルーマウンテン）の奥深くへ逃亡した。そこには白人の支配を拒み、自給自足で防衛砦を築いたマルーンの村があるという。",
    "factBox": "西インド諸島やブラジル（キロンボ）では、逃亡奴隷が山岳や奥地に独立共同体を形成し、ゲリラ戦で植民地軍と長年戦い自治を勝ち取った。",
    "choices": [
      {
        "id": "scale_mountain_join_maroons",
        "label": "軍用犬の追手を撒いて険しい断崖をよじ登り、マルーンの砦を目指す",
        "subLabel": "自由を勝ち取るが決死の逃避行",
        "survivalChance": 0.71,
        "deathCause": "猟犬と追捕隊による銃撃・捕縛後の処刑",
        "effects": {
          "happiness": 35,
          "relations": 25,
          "knowledge": 15
        },
        "outcomeText": "追っ手を深い谷へおびき寄せて撒き、山頂のマルーン砦に温かく迎え入れられて真の自由を手に入れた。",
        "deathText": "追捕隊の放った猟犬に足を噛み砕かれ、銃弾を背中に受けて崖下へ転落した。"
      },
      {
        "id": "hide_in_coastal_mangrove",
        "label": "海岸のマングローブ林に潜み、小舟を奪って隣の島へ渡る",
        "subLabel": "山へ登らず海路での脱出行を試みる",
        "survivalChance": 0.73,
        "deathCause": "マングローブ湿地での熱帯熱マラリア感染死",
        "effects": {
          "wealthDelta": 20,
          "knowledge": 10,
          "happiness": 20
        },
        "outcomeText": "丸木舟で海を渡り、支配の緩い小島へ辿り着いて自由な漁民としての生活を手に入れた。",
        "deathText": "湿地の蚊の大群に刺されて悪性マラリアを発症し、高熱の痙攣のなかで泥に埋もれて絶命した。"
      }
    ]
  },
  {
    "id": "em_atl_slave_ship_middle_passage",
    "title": "大西洋奴隷船の船底（中間航路）の地獄",
    "category": "historical_wave",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_west_africa",
      "em_caribbean"
    ],
    "minAge": 10,
    "maxAge": 40,
    "description": "西アフリカ沿岸の奴隷砦から鎖でつながれ、大西洋を横断する奴隷船の暗い船底に隙間なく敷き詰められた。糞尿の悪臭、赤痢の流行、窒息しそうな熱気のなかで数週間の航海が続く。",
    "factBox": "大西洋奴隷貿易の中間航路では、過密と不衛生により積み込まれた人々の10〜20%が航海中に死亡した。",
    "choices": [
      {
        "id": "endure_hold_breathe_air",
        "label": "甲板へのわずかな通気口に向かって息を吸い、耐えて生き残る",
        "subLabel": "生き延びて新大陸で再起を期す",
        "survivalChance": 0.69,
        "deathCause": "大西洋奴隷船内での悪性赤痢・脱水窒息死",
        "effects": {
          "health": -20,
          "relations": 10,
          "happiness": -20
        },
        "outcomeText": "地獄のような航海を耐え抜き、西インド諸島の港で陸へ降ろされた。心身は傷ついたが生きて大地を踏んだ。",
        "deathText": "船底で広がった激しい赤痢により下血が止まらなくなり、大西洋の真ん中で海へ投げ捨てられた。"
      },
      {
        "id": "rebel_against_slaver_crew",
        "label": "甲板に上げられた隙に仲間に合図を送り、乗組員に飛びかかる",
        "subLabel": "船を奪取する決死の反乱／失敗すれば容赦なき射殺",
        "survivalChance": 0.62,
        "deathCause": "奴隷船上での反乱銃撃戦死",
        "effects": {
          "happiness": 30,
          "relations": 30,
          "wealthDelta": 30
        },
        "outcomeText": "船長と水夫を制圧して船を奪い、アフリカ沿岸へ船首を反転させて奇跡の生還を果たした。",
        "deathText": "水夫の小銃射撃により胸を撃ち抜かれ、波打つ甲板の上で息を引き取った。"
      }
    ]
  },
  {
    "id": "em_atl_potosi_quicksilver",
    "title": "ポトシ銀山のアマルガム法と水銀蒸気",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_andes"
    ],
    "minAge": 14,
    "maxAge": 50,
    "description": "標高四千メートルのポトシ銀山で、銀鉱石を微粉末にし、水銀と塩を混ぜて素足で踏み揉むアマルガム精錬（パティオ法）のミタ労役に徴用された。手足が震え、歯茎から血がにじむ。",
    "factBox": "スペイン領ポトシではアマルガム精錬により大量の銀が生産されたが、先住民労働者（ミタ）の膨大な命が水銀中毒によって奪われた。",
    "choices": [
      {
        "id": "tread_mercury_slurry",
        "label": "素足で水銀の泥を踏み続け、銀の回収作業を全うする",
        "subLabel": "重金属毒を浴びるが定められた労役期間を耐える",
        "survivalChance": 0.73,
        "deathCause": "アマルガム法による重篤水銀中毒・神経麻痺死",
        "effects": {
          "wealthDelta": 25,
          "health": -25,
          "happiness": -15
        },
        "outcomeText": "手足の震えを抱えながらも一年間のミタ労役を生き抜き、わずかな銀を携えて故郷の村へ帰還した。",
        "deathText": "激しい幻覚と全身痙攣を発症し、水銀精錬所の石床の上に倒れて二度と起き上がれなかった。"
      },
      {
        "id": "bribe_overseer_herding",
        "label": "監督官に銀の指輪を渡し、高地でのリャマ輸送係へ配置転換を頼む",
        "subLabel": "毒の精錬所を離れ山風の吹く荷駄役に回る",
        "effects": {
          "wealthDelta": -20,
          "health": 10,
          "relations": 5
        },
        "outcomeText": "冷たい山風のなかでリャマを追って銀塊を港へ運ぶ仕事に移り、健康を保って任期を終えた。"
      }
    ],
    "places": [
      "ポトシ"
    ]
  },
  {
    "id": "em_atl_beaver_fur_trap",
    "title": "北米ハドソン湾岸でのビーバー罠猟と先住民交易",
    "category": "livelihood",
    "eraIds": [
      "early_modern"
    ],
    "regionIds": [
      "em_north_america"
    ],
    "minAge": 15,
    "maxAge": 50,
    "description": "ヨーロッパで流行するフェルト帽の材料となるビーバーの毛皮を求め、凍結したカナダの原生林で罠を仕掛けている。毛皮をイギリスやフランスの交易基地へ持ち込めば火器や真鍮鍋と交換できる。",
    "factBox": "北米の毛皮交易は先住民とヨーロッパ人の協力を生んだ一方、ビーバーの乱獲による生態系激変と部族間の交易路抗争（ビーバー戦争）をもたらした。",
    "choices": [
      {
        "id": "set_ice_traps_deep_woods",
        "label": "かんじきを履いて奥深い凍結湿原へ分け入り、ビーバーの巣を突く",
        "subLabel": "最高級の冬毛皮を得るが極寒と氷割れの危険",
        "survivalChance": 0.81,
        "deathCause": "凍結湖での氷割れ水死・低体温症",
        "effects": {
          "wealthDelta": 45,
          "knowledge": 20,
          "health": -10
        },
        "outcomeText": "大量の上質な毛皮をそりに積んで砦へ運び、火薬・鉄鍋・ウールの毛布と交換して裕福になった。",
        "deathText": "薄氷を踏み抜いて氷点下の湖水へ落下し、毛皮の重みで這い上がれずに凍死した。"
      },
      {
        "id": "trade_flintlock_indigenous",
        "label": "先住民の案内人と固い義兄弟の契りを結び、交易の仲介に専念する",
        "subLabel": "共同体の信頼を得て安全かつ公正な取引を行う",
        "effects": {
          "relations": 25,
          "knowledge": 15,
          "wealthDelta": 20
        },
        "outcomeText": "先住民の集落に温かく迎え入れられ、互いに敬意を払う持続的な毛皮交易網を築き上げた。"
      }
    ],
    "places": [
      "ハドソン湾岸の交易集落"
    ]
  }
];
