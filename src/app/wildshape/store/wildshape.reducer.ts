import * as Actions from './wildshape.actions';
import { WildshapeState } from './wildshape.state';

export const initialState: WildshapeState = {
  creatures: [],
  filter: {
    level: 1,
    moon: false
  },
  sort: {
    field: 'challenge.rating',
    ascending: false
  }
};

export function wildshapeReducer(state: WildshapeState = initialState, action: Actions.WildshapeAction): WildshapeState {
  switch (action.type) {
    case Actions.SetCreatures.TYPE: {
      return { ...state, creatures: action.creatures };
    }
    case Actions.SetFilterLevel.TYPE: {
      return { ...state, filter: { ...state.filter, level: action.level } };
    }
    case Actions.SetFilterMoon.TYPE: {
      return { ...state, filter: { ...state.filter, moon: action.moon } };
    }
    case Actions.SetSortField.TYPE: {
      const ascending = state.sort.field === action.field ? !state.sort.ascending : true;
      return { ...state, sort: { field: action.field, ascending } };
    }
    default: {
      return state;
    }
  }
}
