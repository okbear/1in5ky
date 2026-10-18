import type { EraId, RegionProfile, SocialClassSpec } from '../../types';

export const cls = (
	id: SocialClassSpec['id'],
	name: string,
	share: number,
	income: number,
	mort: number,
	lit: number,
	occupations: string[],
	description = ''
): SocialClassSpec => ({
	id,
	name,
	share,
	description,
	incomeMultiplier: income,
	mortalityMultiplier: mort,
	literacyBonus: lit,
	occupations
});

export const CLASSES: Record<EraId, SocialClassSpec[]> = {
	ancient: [
		cls('enslaved', '奴隷・隷属民', 8, 0.4, 1.5, 0, ['神殿の下働き', '石運び人足', '家内奴隷']),
		cls('peasant', '農民', 82, 1, 1, 0, ['耕作農民', '灌漑労働者', '牧畜民']),
		cls('artisan', '職人・商人', 6, 1.8, 0.9, 5, ['陶工', '織工', '行商人']),
		cls('warrior', '兵士', 2, 1.5, 1.4, 0, ['歩兵', '弓兵']),
		cls('clergy_scholar', '書記・神官', 1.7, 4, 0.7, 95, ['書記', '神官', '天文官']),
		cls('elite', '王族・貴族', 0.3, 15, 0.6, 80, ['宮廷貴族', '都市の長老'])
	],
	classical: [
		cls('enslaved', '奴隷', 12, 0.4, 1.4, 0, ['鉱山奴隷', '家内奴隷', '農園奴隷']),
		cls('peasant', '農民', 75, 1, 1, 2, ['小作人', '自作農', '開拓農民']),
		cls('artisan', '職人・商人', 8, 2, 0.9, 20, ['鍛冶職人', '商人', '船乗り']),
		cls('warrior', '兵士', 3, 1.6, 1.4, 5, ['歩兵', '辺境守備兵']),
		cls('clergy_scholar', '知識人・聖職者', 1.5, 3.5, 0.7, 95, ['文官', '学者', '祭司・僧侶']),
		cls('elite', '貴族・官僚', 0.5, 20, 0.6, 90, ['貴族', '地方長官'])
	],
	medieval: [
		cls('peasant', '農奴・農民', 84, 1, 1, 1, ['農奴', '小作農', '牧人']),
		cls('artisan', '職人・商人', 8, 2, 0.9, 15, ['鍛冶職人', '織工', '行商人']),
		cls('warrior', '武人・兵士', 3, 3, 1.3, 15, ['従士・兵士', '城塞守備兵', '傭兵']),
		cls('clergy_scholar', '聖職者・学者', 3.5, 3, 0.8, 90, ['聖職者・僧侶', '写字生', '学者']),
		cls('elite', '領主・貴族', 1.5, 25, 0.6, 70, ['荘園領主', '宮廷貴族'])
	],
	early_modern: [
		cls('enslaved', '隷属民・奉公人', 3, 0.3, 1.6, 0, ['年季奉公人', '鉱山夫', '下働き']),
		cls('peasant', '農民', 78, 1, 1, 20, ['自作農', '小作農', '漁師']),
		cls('artisan', '職人・商人', 12, 2.2, 0.9, 45, ['町人・職人', '商人', '船乗り']),
		cls('warrior', '兵士・武人', 3, 2.5, 1.3, 50, ['銃兵・兵士', '城の衛兵', '水夫']),
		cls('clergy_scholar', '学者・宗教家', 2.5, 3, 0.8, 95, ['学者', '医師', '宗教家']),
		cls('elite', '領主・大商人', 1.5, 25, 0.6, 85, ['領主・貴族', '豪商'])
	],
	industrial: [
		cls('peasant', '農民', 50, 1, 1, 40, ['小作農', '農業労働者']),
		cls('artisan', '工場労働者', 32, 1.4, 1.1, 60, ['紡績工', '炭鉱夫', '鉄道員', '工場労働者']),
		cls('warrior', '兵士', 4, 1.6, 1.5, 65, ['歩兵', '水兵']),
		cls('clergy_scholar', '専門職・教師', 8, 3, 0.7, 98, ['教師', '医師', '事務員']),
		cls('elite', '資本家・地主', 6, 12, 0.6, 95, ['工場主', '地主', '高級官僚'])
	],
	modern: [
		cls('peasant', '農村・低所得', 35, 0.6, 1.3, 70, ['小規模農家', '日雇い労働者']),
		cls('artisan', '労働者・サービス', 40, 1.2, 1, 90, ['工場労働者', '店員', '運転手']),
		cls('clergy_scholar', '専門職', 20, 3, 0.8, 99, ['会社員', '教師', '医療従事者', 'エンジニア']),
		cls('elite', '富裕層', 5, 15, 0.7, 99, ['経営者', '投資家'])
	]
};

export const baseRegion = (
	eraId: EraId,
	o: Partial<RegionProfile> &
		Pick<
			RegionProfile,
			| 'id'
			| 'name'
			| 'subName'
			| 'polity'
			| 'cities'
			| 'ruralAreas'
			| 'birthWeight'
			| 'infantMortality'
			| 'under5Mortality'
			| 'lifeExpectancyAt15'
			| 'literacyRate'
			| 'urbanizationRate'
			| 'gdpPerCapitaPPP'
			| 'currencyUnit'
			| 'modernFeelJpy'
			| 'dietStaple'
			| 'beliefSystem'
			| 'medicalCommonSense'
			| 'worldviewCommonSense'
			| 'maleNames'
			| 'femaleNames'
			| 'sceneTheme'
		>
): RegionProfile => ({
	eraId,
	gini: 0.45,
	annualBaseIncomeUnit: 100,
	familyNames: [],
	classes: CLASSES[eraId],
	commonDeathCauses: {
		infant: ['下痢・脱水', '新生児破傷風・感染症', '栄養失調'],
		child: ['赤痢・疫痢', '麻疹・熱病', '飢えと衰弱'],
		youth: ['熱病・感染症', '外傷・事故', '戦乱・労役'],
		adult: ['熱病・疫病', '過労と労働事故', '戦乱・飢饉'],
		elder: ['老衰', '肺炎・呼吸器疾患', '衰弱']
	},
	...o
});
