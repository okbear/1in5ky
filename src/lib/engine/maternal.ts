import type { CharacterState, ChoiceOption, DecisionEvent } from '#lib/types';
import type { AnnualMortality } from '#lib/engine/world';

export function maternalRisk(c: CharacterState, series?: AnnualMortality) {
 const points = c.currentCountry ? series?.[c.currentCountry] : undefined;
 const years = points ? Object.keys(points).map(Number).sort((a, b) => a - b) : [];
 const last = years.at(-1);
 const year = points?.[String(c.currentYear)] ? c.currentYear
  : last !== undefined && c.currentYear > last ? last : undefined;
 const rate = year === undefined ? undefined : points?.[String(year)]?.[0];
 if (rate === undefined || !Number.isFinite(rate) || rate < 0 || rate >= 100000) {
  return { probability: 0.004, note: 'この国・年の妊産婦死亡推計がないため、暫定のゲーム推定値を使用。' };
 }
 return { probability: rate / 100000,
  note: `World Bank / MMEIGの${year}年の国別妊産婦死亡推計を出生1回の危険度に近似。病院別・個人別の予測ではありません。${year !== c.currentYear ? '以後の年は最終年を据え置く仮定です。' : ''}` };
}

export function maternalChoice(c: CharacterState, choice: ChoiceOption, series?: AnnualMortality): ChoiceOption {
 if (!choice.maternalRisk) return choice;
 const risk = maternalRisk(c, series).probability;
 return c.sex === 'F' ? { ...choice, survivalChance: 1 - risk, survivalModel: 'fixed' }
  : { ...choice, effects: { ...choice.effects, killSpouseChance: risk } };
}

export function maternalDecision(c: CharacterState, event: DecisionEvent, series?: AnnualMortality): DecisionEvent {
 if (!event.choices.some(choice => choice.maternalRisk)) return event;
 return { ...event, factBox: `${event.factBox} ${maternalRisk(c, series).note}`,
  choices: event.choices.map(choice => maternalChoice(c, choice, series)) };
}
