import { expect, test } from 'bun:test';
import { buildLifeTimelineRows, groupLifeTimeline } from '#lib/presentation/lifeTimeline';
import type { ChronicleEntry, FeedEntry } from '#lib/types';

test('merges both feeds in chronological order, with world history before personal events in a shared year', () => {
	const feed: FeedEntry[] = [
		{ id: 'new', age: 20, year: 1020, text: '成人', type: 'milestone', fact: '資料' },
		{ id: 'quiet', age: 1, year: 1001, text: '日常', type: 'normal' },
		{ id: 'birth', age: 0, year: 1000, text: '誕生', type: 'milestone' }
	];
	const chronicle: ChronicleEntry[] = [
		{ id: 'world', age: 20, year: 1020, title: '世界', regionTag: '世界史', description: '出来事' }
	];
	const rows = buildLifeTimelineRows({ feed, chronicle });
	expect(rows.map((row) => row.key)).toEqual(['l-birth', 'l-quiet', 'w-world', 'l-new']);
	expect(rows[3].sub).toBe('資料 資料');
	expect(feed.map((row) => row.id)).toEqual(['new', 'quiet', 'birth']);
	expect(chronicle[0].id).toBe('world');
	const major = groupLifeTimeline(rows, false);
	expect(major.map((row) => row.key)).toEqual(['s-infant', 'l-birth', 's-youth', 'w-world', 'l-new']);
	expect(groupLifeTimeline(rows, true).map((row) => row.key)).toEqual([
		's-infant', 'l-birth', 's-child', 'l-quiet', 's-youth', 'w-world', 'l-new'
	]);
});
