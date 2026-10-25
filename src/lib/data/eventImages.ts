export interface EventImageInfo {
	src: string;
	alt: string;
	caption?: string;
}

export const EVENT_IMAGES: Record<string, EventImageInfo> = {
	// === 婚姻・縁談（全時代・全地域対応：過酷な大地に寄り添う二輪の野花） ===
	marriage: {
		src: '/images/events/marriage.jpg',
		alt: '過酷な大地の黄昏、風に吹かれながらも寄り添って根を張る二輪の野花',
		caption: '寄り添う野花'
	},
	marriage_serf_merchet: {
		src: '/images/events/marriage.jpg',
		alt: '過酷な大地の黄昏、風に吹かれながらも寄り添って根を張る二輪の野花',
		caption: '寄り添う野花'
	},
	marriage_modern: {
		src: '/images/events/marriage.jpg',
		alt: '過酷な大地の黄昏、風に吹かれながらも寄り添って根を張る二輪の野花',
		caption: '寄り添う野花'
	},

	// === 出産・新しい命（全時代・全地域対応：暗い土から光を浴びて芽吹く双葉） ===
	childbirth_old: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},
	childbirth_father_old: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},
	childbirth_modern: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},
	childbirth_father_modern: {
		src: '/images/events/childbirth.jpg',
		alt: '暗い土を押し分け、一筋の光を浴びて芽吹いた小さな双葉',
		caption: '命の芽吹き'
	},

	// === 青年の仕事始め・一人前への門出（夜明けの道具と大地へ続く小道） ===
	work_choice_youth: {
		src: '/images/events/work_choice.jpg',
		alt: '朝露の野原、石段の上に置かれた使い古しの農具と遠くへ続く一本の小道',
		caption: '仕事始めの朝'
	},

	// === 重税と困窮（空の穀物袋と秤） ===
	tax_burden: {
		src: '/images/events/tax_burden.jpg',
		alt: '薄暗い石床に倒れた空の麻袋と秤、わずかにこぼれ落ちた麦の粒',
		caption: '空の倉と秤'
	},
	midlife_crisis_30s: {
		src: '/images/events/tax_burden.jpg',
		alt: '薄暗い石床に倒れた空の麻袋と秤、わずかにこぼれ落ちた麦の粒',
		caption: '飢えと困窮'
	},

	// === 老いと世代交代（夕暮れの杖と秋の枯葉） ===
	elder_passing_torch: {
		src: '/images/events/elder_torch.jpg',
		alt: '夕暮れの長い影が伸びる石のベンチに立てかけられた手彫りの杖と秋の枯葉',
		caption: '人生の黄昏'
	}
};

export function getEventImage(eventId: string): EventImageInfo | undefined {
	return EVENT_IMAGES[eventId];
}
