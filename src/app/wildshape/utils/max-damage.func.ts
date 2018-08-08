import { Creature } from '@ws/wildshape/models';
import * as _ from 'lodash';

export function maxDamage(creature: Creature) {
  return _.max(creature.actions.filter(a => a.damage).map(a => a.damage.average)) || 1;
}