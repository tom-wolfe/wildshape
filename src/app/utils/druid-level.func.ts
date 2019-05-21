import { Creature } from "@ws/wildshape/models";

export function canWildshape(creature: Creature): boolean {
    return creature.type === 'beast'
    || creature.name === 'Air Elemental'
    || creature.name === 'Fire Elemental'
    || creature.name === 'Earth Elemental'
    || creature.name === 'Water Elemental';
}

export function moonLevel(creature: Creature): number {
  if (creature.name === 'Air Elemental'
    || creature.name === 'Fire Elemental'
    || creature.name === 'Earth Elemental'
    || creature.name === 'Water Elemental') {
    return 10;
  }
  if (creature.type !== 'beast') { return undefined; }

  // Speed restrictions.
  if (creature.speed.fly > 0) { return 8; }
  if (creature.speed.swim > 0) { return 4; }

  if (creature.challenge.rating <= 1) { return 2; }
  return creature.challenge.rating * 3;
}

export function druidLevel(creature: Creature): number {
  if (creature.type !== 'beast') { return undefined; }
  if (creature.challenge.rating > 0.5) { return undefined; }

  if (creature.speed.fly > 0) { return 8; }
  if (creature.challenge.rating === 0.5) { return 8; }

  if (creature.speed.swim > 0) { return 4; }
  if (creature.challenge.rating === 0.25) { return 4; }

  return 2;
}
