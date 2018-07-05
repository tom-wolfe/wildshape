import { createFeatureSelector, createSelector } from '@ngrx/store';

import { WildshapeState } from './wildshape.state';

export const wildshapeFeature = 'dashboard';
const wildshape = createFeatureSelector(wildshapeFeature);

export const selectors = {
  wildshape,
  creatures: createSelector(wildshape, (state: WildshapeState) => state.creatures)
};
