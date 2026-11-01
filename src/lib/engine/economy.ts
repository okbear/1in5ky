import { pushFeed } from '#lib/engine/character';
import { clamp, type Rng } from '#lib/engine/util';
import type { CharacterState } from '#lib/types';

/** Household purchasing-power equivalents, not historical currency conversion. */
export const financeTick = (c: CharacterState, rng: Rng): void => {
	// Most income is consumed. Higher earnings also raise spending; debt has no
	// automatic interest spiral. Childhood finances represent the household.
	c.savings += 0.03 + (c.incomeMultiplier - 1) * 0.2;
	if (c.savings > 0) {
		if (c.hardshipYears > 0) {
			c.happiness = clamp(c.happiness + 5, 0, 100);
			pushFeed(c, '蓄えが戻り、日々のやりくりにようやく少し余裕ができた。', 'warm');
		}
		c.hardshipYears = 0;
		return;
	}
	c.hardshipYears += 1;
	if (c.age - c.lastFinanceEventAge < 3) return;
	const chance = Math.min(0.65, 0.2 + Math.max(0, -c.savings) * 0.15 + c.hardshipYears * 0.03);
	if (rng() >= chance) return;
	c.lastFinanceEventAge = c.age;
	if (rng() < 0.3) {
		c.savings += 0.3;
		c.happiness = clamp(c.happiness + 4, 0, 100);
		pushFeed(c, '苦しい暮らしのなか、身近な人と食べ物や生活の品を融通し合い、家計の足しになった。', 'warm');
	} else if (c.savings < -0.5 && c.age >= 15) {
		c.health = clamp(c.health - 2, 0, 100);
		c.happiness = clamp(c.happiness - 7, 0, 100);
		pushFeed(c, '借りを返すために無理を重ね、疲れと先の暮らしへの不安が募った。', 'danger');
	} else {
		c.happiness = clamp(c.happiness - 5, 0, 100);
		pushFeed(c, '蓄えが尽き、食事や日々の楽しみを切り詰めた。やりくりの不安が心に重くのしかかった。', 'loss');
	}
};
