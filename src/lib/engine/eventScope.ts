import type { CharacterState, DecisionEvent } from '#lib/types';

/** The same setting check is used for waves, lifecycle decisions and everyday events. */
export function matchesEventSetting(
	character: Pick<CharacterState, 'era' | 'region' | 'place' | 'currentYear'>,
	event: DecisionEvent
): boolean {
	if (event.eraIds && !event.eraIds.includes(character.era.id)) return false;
	if (event.regionIds) {
		if (!event.regionIds.includes(character.region.id)) return false;
	} else if (event.allRegions !== true) {
		return false;
	}
	if (event.places && !event.places.includes(character.place)) return false;
	if (event.yearRange && (character.currentYear < event.yearRange[0] || character.currentYear > event.yearRange[1])) return false;
	return true;
}
