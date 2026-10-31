import type { RegionId } from '#lib/types';

export interface GraveInfo {
	title: string;
	desc: string;
}

export const GRAVE_DATA: Record<RegionId, GraveInfo> = {
	// === 古代 (ancient) ===
	anc_mesopotamia: {
		title: 'ユーフラテス河畔の積石墓',
		desc: '泥煉瓦と葦に包まれ、夕闇の荒野に静かに還る。'
	},
	anc_egypt: {
		title: 'ナイル西岸の砂漠墳墓',
		desc: '沈む太陽とともに、西方の冥界（タ・セケル）へ眠りにつく。'
	},
	anc_china: {
		title: '黄河流域の土坑墓',
		desc: '黄土の丘の片隅、素朴な土器とともに大地に抱かれる。'
	},
	anc_indus: {
		title: "インダス流域の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	anc_aegean: {
		title: "エーゲ海世界の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},

	// === 古典期 (classical) ===
	cls_rome: {
		title: 'アッピア街道沿いの石碑',
		desc: '「旅人よ立ち止まり、我を想え」と刻まれた街道の墓標。'
	},
	cls_han: {
		title: '漢代の封土墳丘',
		desc: '糸杉の影が長く伸びる円形の塚、故郷の山河を望む。'
	},
	cls_india: {
		title: '聖なる河畔の川辺',
		desc: '夕闇迫る川面を見つめ、輪廻の彼方へと祈りが捧げられる。'
	},
	cls_persia: {
		title: "ペルシア・中央アジアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	cls_mesoamerica: {
		title: "古典期メソアメリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	cls_africa: {
		title: "アクスム・紅海沿岸の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	cls_yayoi: {
		title: "弥生時代の日本の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},

	// === 中世 (medieval) ===
	med_europe: {
		title: '名もなき野の石の十字架',
		desc: '遠く教会の鐘が響く荒れ野、宵の明星の下に佇む十字架。'
	},
	med_islam: {
		title: 'ドーム石碑と夕暮れの砂漠',
		desc: 'メッカの方角を静かに向き、風紋の砂に佇む質素な石碑。'
	},
	med_china: {
		title: '江南の丘陵墓碑',
		desc: '竹林の風がそよぐ山裾、苔生した石碑が静かに佇む。'
	},
	med_japan: {
		title: '野辺の五輪塔',
		desc: '風雨にさらされ丸みを帯びた石塔と、秋風に揺れるススキ。'
	},
	med_india: {
		title: "中世南アジアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	med_west_africa: {
		title: "中世西アフリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	med_east_africa: {
		title: "スワヒリ海岸の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	med_mesoamerica: {
		title: "中世メソアメリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	med_andes: {
		title: "中世アンデスの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	med_southeast_asia: {
		title: "アンコール・大陸東南アジアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},

	// === 近世 (early_modern) ===
	em_edo: {
		title: '無縁仏と笠卒塔婆',
		desc: '里山のはずれ、名もなき野花が手向けられた墓石。'
	},
	em_china: {
		title: '明清代の郷里の墓苑',
		desc: '石造りの台座と彫刻、一族の記憶とともに大地に眠る。'
	},
	em_mughal_india: {
		title: 'ヤムナー川を望むドーム廟',
		desc: '赤砂岩と白大理石の小廟、夕暮れの河畔に香を焚く。'
	},
	em_europe: {
		title: '教会の墓地と糸杉',
		desc: '古い教区教会の壁際、彫り込まれた家名と聖句。'
	},
	em_west_africa: {
		title: "近世西アフリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	em_caribbean: {
		title: "カリブ海・ブラジル農園地帯の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	em_andes: {
		title: "近世アンデス植民地の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	em_mesoamerica: {
		title: "近世メソアメリカ植民地の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	em_north_america: {
		title: "北米大西洋岸・ハドソン湾交易圏の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},

	// === 近代 (industrial) ===
	ind_europe: {
		title: "近代ヨーロッパの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_north_america: {
		title: "近代北米の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_japan: {
		title: '明治・近代の角柱墓石',
		desc: '整然と並ぶ墓標の列、線香の白い煙が夕空に消えていく。'
	},
	ind_china: {
		title: '山懐に抱かれた石碑',
		desc: '激動の時代を駆け抜け、故郷の斜面で静かに眠る。'
	},
	ind_india: {
		title: "英領インドの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_southeast_asia: {
		title: "近代東南アジアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_russia: {
		title: "近代ロシアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_egypt: {
		title: "近代エジプトの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_congo: {
		title: "近代コンゴの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	ind_latin_america: {
		title: "近代ラテンアメリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},

	// === 現代 (modern) ===
	mod_japan: {
		title: '夕暮れの現代霊園',
		desc: '整然と磨かれた御影石、静かに供えられた生花。'
	},
	mod_china: {
		title: "現代中国の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_korea: {
		title: "現代韓国の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_taiwan: {
		title: "現代台湾の追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_south_asia: {
		title: "現代南アジアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_southeast_asia: {
		title: "現代東南アジアの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_subsaharan_africa: {
		title: "現代サハラ以南アフリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_mena: {
		title: "現代中東・北アフリカの追悼",
		desc: '家族と共同体の記憶の中に、その人の生涯が残る。'
	},
	mod_europe: {
		title: '歴史ある共同墓地の石碑',
		desc: '手入れされた菩提樹の並木と、彫刻が施された石の墓碑。'
	},
	mod_north_america: {
		title: 'メモリアルパークの芝生銘板',
		desc: '青々とした芝生に埋め込まれたブロンズの板、手向けられた花束。'
	},
	mod_latin_america: {
		title: '色鮮やかなカトリック墓地の廟',
		desc: '白壁やパステルカラーの納骨堂、マリア像と色とりどりの造花。'
	},
	mod_russia_cis: {
		title: 'ロシア正教の十字架と花崗岩碑',
		desc: '故人の肖像が刻まれた黒い花崗岩、鉄柵で囲まれた白樺林の墓所。'
	}
};

export function getGraveInfo(regionId: RegionId): GraveInfo {
	return GRAVE_DATA[regionId] ?? {
		title: '名もなき墓標',
		desc: '遥かなる歴史の片隅、静かな大地に眠る。'
	};
}
