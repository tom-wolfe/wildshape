import { Action, Creature } from '@ws/wildshape/models';
import { ValueFormatterParams, ValueGetterParams } from 'ag-grid-community';
import * as _ from 'lodash';

export function maxDamage(value: Creature): Action {
  if (!value.actions.length) { return undefined; }
  return _.orderBy(value.actions, (a: Action) => (a.damage.average || 0), 'desc')[0];
}

export function maxDamageGetter(p: ValueGetterParams): any {
  return maxDamage(p.data);
}

export function damage(value: Action): string {
  if (!value) { return '0'; }
  if (!value.damage.average) { return '1 (1)'; }
  return `${value.damage.average} (${value.damage.formula})`;
}

export function damageFormatter(p: ValueFormatterParams): string {
  return damage(p.value);
}

export function damageComparator(a: Action, b: Action): number {
  const dmgA = (!a ? 0 : a.damage.average) || 1;
  const dmgB = (!b ? 0 : b.damage.average) || 1;
  return dmgA - dmgB;
}

export function tankiness(value: Creature): number {
  const acMult = (value.armor.class - 10) * 0.05 + 1;
  return Math.round(value.hp.average * acMult);
}

export function tankinessGetter(p: ValueGetterParams): number {
  return tankiness(p.data);
}