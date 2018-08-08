import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dottedField } from '@ws/utils';
import { Creature } from '@ws/wildshape/models';
import * as _ from 'lodash';

import { Sort, WildshapeFilter, WildshapeState } from './wildshape.state';

export const wildshapeFeature = 'dashboard';
const wildshape = createFeatureSelector<WildshapeState>(wildshapeFeature);

function wildshapeCR(level, isMoon) {
  if (isMoon) {
    return level < 6 ? 1 : Math.floor(level / 3);
  }
  if (level < 4) { return 0.25; }
  if (level < 8) { return 0.5; }
  return 1;
}

function creatureFilter(f: WildshapeFilter): (c: Creature) => boolean {
  return (creature: Creature): boolean => {
    if (creature.type.toLowerCase() !== 'beast') { return false; }
    if (creature.challenge.rating > wildshapeCR(f.level, f.moon)) { return false; }
    if (f.level < 8 && creature.speed.fly > 0) { return false; }
    if (f.level < 4 && creature.speed.swim > 0) { return false; }
    return true;
  };
}

function creatureSort(c: Creature[], sort: Sort): Creature[] {
  if (!sort) { return c; }
  return _.orderBy(c, dottedField(sort.field), sort.ascending ? 'asc' : 'desc');
}

const creatures = createSelector(wildshape, (state: WildshapeState) => state.creatures);

const searchResults = createSelector(
  wildshape,
  creatures,
  (state, c) => creatureSort(c.filter(creatureFilter(state.filter)), state.sort)
);

export const selectors = {
  wildshape,
  creatures,
  filter: createSelector(wildshape, state => state.filter),
  sort: createSelector(wildshape, state => state.sort),
  searchResults
};
