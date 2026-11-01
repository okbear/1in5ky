import type { CharacterState } from '#lib/types';
import { REVIVE_MAX_AGE } from '#lib/engine/util';
import { pushFeed } from '#lib/engine/character';

export const canRevive = (c: CharacterState): boolean => !c.alive && c.age < REVIVE_MAX_AGE;

export const revive = (c: CharacterState): boolean => {
	if (!canRevive(c)) return false;
	c.alive = true;
	c.deathCause = undefined;
	c.epitaph = '';
	pushFeed(c, `${c.age}歳。死の淵から息を吹き返した。`, 'milestone');
	return true;
};

