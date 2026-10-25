import { ERA_ORDER } from '../data/eras';
import { SEED_MEMORIALS } from '../data/timeline';
import type { CharacterState, EraId, MemorialRecord } from '../types';

export const MEMORIAL_KEY = '1in5ky.memorials';
export const MAX_MEMORIALS = 200;
const MAX_RAW_CHARS = 256_000;
const VALID_ERAS = new Set<string>(ERA_ORDER);

const str = (v: unknown, max: number): string | null =>
	typeof v === 'string' ? v.slice(0, max) : null;

export const toMemorialRecord = (c: CharacterState, now = Date.now()): MemorialRecord => ({
	id: c.id,
	name: c.name,
	sex: c.sex,
	eraId: c.era.id,
	eraName: c.era.name,
	regionName: c.region.name,
	place: c.place,
	birthYear: c.birthYear,
	deathYear: c.currentYear,
	deathAge: c.age,
	socialClass: c.socialClass.name,
	occupation: c.occupation,
	deathCause: c.deathCause ?? '老衰',
	epitaph: c.epitaph,
	summaryLine: `${c.region.name}の${c.socialClass.name}、${c.age}歳`,
	createdAt: now
});

export const parseMemorials = (raw: string | null): MemorialRecord[] => {
	if (!raw || raw.length > MAX_RAW_CHARS) return [];
	try {
		const parsed: unknown = JSON.parse(raw);
		if (!Array.isArray(parsed)) return [];
		const seen = new Set<string>(SEED_MEMORIALS.map((s) => s.id));
		const out: MemorialRecord[] = [];
		for (const item of parsed) {
			if (out.length >= MAX_MEMORIALS) break;
			if (typeof item !== 'object' || item === null) continue;
			const r = item as Record<string, unknown>;
			const id = str(r.id, 64);
			const name = str(r.name, 64);
			const eraName = str(r.eraName, 64);
			const regionName = str(r.regionName, 64);
			const place = str(r.place, 64);
			const socialClass = str(r.socialClass, 64);
			const occupation = str(r.occupation, 64);
			const deathCause = str(r.deathCause, 120);
			const epitaph = str(r.epitaph, 300);
			const summaryLine = str(r.summaryLine, 120);
			if (
				!id ||
				!name ||
				seen.has(id) ||
				(r.sex !== 'M' && r.sex !== 'F') ||
				typeof r.eraId !== 'string' ||
				!VALID_ERAS.has(r.eraId) ||
				eraName === null ||
				regionName === null ||
				place === null ||
				socialClass === null ||
				occupation === null ||
				deathCause === null ||
				epitaph === null ||
				summaryLine === null ||
				typeof r.birthYear !== 'number' ||
				!Number.isInteger(r.birthYear) ||
				r.birthYear < -3000 ||
				r.birthYear > 2026 ||
				typeof r.deathYear !== 'number' ||
				!Number.isInteger(r.deathYear) ||
				r.deathYear < r.birthYear ||
				r.deathYear > 2200 ||
				typeof r.deathAge !== 'number' ||
				!Number.isInteger(r.deathAge) ||
				r.deathAge < 0 ||
				r.deathAge > 150 ||
				typeof r.createdAt !== 'number' ||
				!Number.isFinite(r.createdAt)
			) {
				continue;
			}
			seen.add(id);
			out.push({
				id,
				name,
				sex: r.sex,
				eraId: r.eraId as EraId,
				eraName,
				regionName,
				place,
				birthYear: r.birthYear,
				deathYear: r.deathYear,
				deathAge: r.deathAge,
				socialClass,
				occupation,
				deathCause,
				epitaph,
				summaryLine,
				createdAt: r.createdAt
			});
		}
		return out;
	} catch {
		return [];
	}
};
