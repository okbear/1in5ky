import { expandEventScope } from '#lib/data/regionChildren';
import type { DecisionEvent } from '#lib/types';

/** 時代・地域別の人生の岐路（進路・縁談・移住・老後など）。結婚・出産は必ず選択肢の effects を通す */
export const LIFECYCLE_EXTRA_EVENTS: DecisionEvent[] = ([{
	id: 'modern_youth_path',
	title: '学びと仕事、これからの進路',
	allRegions: true,
	eraIds: ['modern'],
	category: 'livelihood',
	classIds: ['peasant', 'artisan'],
	isLifecycle: true,
	lifecycleKind: 'career',
	minAge: 16,
	maxAge: 22,
	description: 'これからの生活をどう支えるか考えている。学びを続ける時間や費用、仕事の機会は、家計や住む場所によって限られている。',
	factBox: '教育や職業訓練の制度、働き始める年齢、家族に求められる役割は、国・年代・家計によって異なる。',
	choices: [
		{ id: 'learn_while_working', label: '働きながら学ぶ時間を作る', subLabel: '生活との両立に負担がかかる',
			effects: { knowledge: 10, health: -3, wealthDelta: -10 }, outcomeText: '仕事の合間に学び続けた。使える時間は限られているが、少しずつ知識を増やした。' },
		{ id: 'earn_now', label: '当面の収入を優先して仕事を探す', subLabel: '暮らしを支えるため、働く時間を増やす',
			effects: { incomeDelta: 10, health: -4, relations: 3 }, outcomeText: '得られた仕事に力を注ぎ、日々の暮らしを支える道を選んだ。' },
		{ id: 'learn_practical_skills', label: '身近な働き手から仕事の技術を学ぶ', subLabel: '実地で経験を積む',
			effects: { knowledge: 6, relations: 5, wealthDelta: -5 }, outcomeText: '身近な働き手に教わりながら、少しずつ仕事を覚えた。' }
	]
}] satisfies DecisionEvent[]).map(expandEventScope);
