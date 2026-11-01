import type { CharacterState, DecisionEvent } from '#lib/types';
import { INSTITUTIONS } from '#lib/data/institutions';

/** The same setting check is used for waves, lifecycle decisions and everyday events. */
export function matchesEventSetting(
	character: Pick<CharacterState, 'era' | 'region' | 'place' | 'currentYear'>,
	event: DecisionEvent
): boolean {
	if (event.eraIds && !event.eraIds.includes(character.era.id)) return false;
	if (event.regionIds) {
		if (character.region.eraId !== character.era.id) return false;
		if (!event.regionIds.includes(character.region.id)) return false;
	} else if (event.allRegions !== true) {
		return false;
	}
	if (event.places && !event.places.includes(character.place)) return false;
	if (event.yearRange && (character.currentYear < event.yearRange[0] || character.currentYear > event.yearRange[1])) return false;
	for (const id of event.requiresInstitutions ?? []) {
		const scope = INSTITUTIONS[id];
		if (!scope || character.region.eraId !== character.era.id || !scope.regionIds.includes(character.region.id)
			|| character.currentYear < scope.yearRange[0] || character.currentYear > scope.yearRange[1]
			|| (scope.places && !scope.places.includes(character.place))) return false;
	}
	return true;
}
