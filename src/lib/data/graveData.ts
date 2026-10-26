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
	anc_indus_other: {
		title: 'インダスのレンガ棺墓',
		desc: '整然と敷かれた焼成レンガの傍ら、静寂の中に眠る。'
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
	cls_other: {
		title: '荒野の積石塚（ケルン）',
		desc: '吹きすさぶ風の中、旅人たちが積み上げた石の下に眠る。'
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
	med_other: {
		title: 'ステップ草原の石人',
		desc: '果てしない地平線を見つめ続ける、古代の石像の傍ら。'
	},

	// === 近世 (early_modern) ===
	em_edo: {
		title: '無縁仏と笠卒塔婆',
		desc: '里山のはずれ、名もなき野花が手向けられた墓石。'
	},
	em_china_asia: {
		title: '明清代の郷里の墓苑',
		desc: '石造りの台座と彫刻、一族の記憶とともに大地に眠る。'
	},
	em_europe: {
		title: '教会の墓地と糸杉',
		desc: '古い教区教会の壁際、彫り込まれた家名と聖句。'
	},
	em_atlantic: {
		title: '海を望む丘の木製十字架',
		desc: '大西洋の潮風が吹き抜ける岬、素朴な木の杭。'
	},

	// === 近代 (industrial) ===
	ind_europe_us: {
		title: '霧と煤煙のビクトリア朝墓地',
		desc: '鉄柵に囲まれた大理石のオベリスク、冷たい雨に濡れる。'
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
		title: '黄昏のガートと墓苑',
		desc: '暮れなずむ空の下、供えられたマリーゴールドの花。'
	},
	ind_other: {
		title: '開拓地・大平原の墓標',
		desc: '見渡す限りの地平線、夕陽に向かって立つ素朴な木標。'
	},

	// === 現代 (modern) ===
	mod_japan: {
		title: '夕暮れの現代霊園',
		desc: '整然と磨かれた御影石、静かに供えられた生花。'
	},
	mod_china_ea: {
		title: '現代の公営墓園',
		desc: '山並みを望む斜面に並ぶ銘板、静かな祈りの空間。'
	},
	mod_asia: {
		title: '緑に囲まれた現代墓苑',
		desc: '熱帯の夕暮れ、家族の手によって手入れされた墓所。'
	},
	mod_africa_me: {
		title: '砂漠の現代墓地',
		desc: '静寂が支配する夕暮れの砂丘、簡素な白い石碑。'
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
