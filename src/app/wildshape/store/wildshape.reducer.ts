import * as Actions from './wildshape.actions';
import { WildshapeState } from './wildshape.state';

export const initialState: WildshapeState = {
  creatures: [],
  filter: null,
  sort: null
};

export function wildshapeReducer(state: WildshapeState = initialState, action: Actions.WildshapeAction): WildshapeState {
  switch (action.type) {
    case Actions.SetCreatures.TYPE: {
      return { ...state, creatures: action.creatures };
    }
    default: {
      return state;
    }
  }
}
