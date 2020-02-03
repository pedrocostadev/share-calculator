import { UI_STATE_TYPES } from '../actionsTypes';

export const DEFAULT_STATE = {
  isPadVisible: true,
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UI_STATE_TYPES.TOGGLE_PAD_VISIBILITY:
      return { isPadVisible: !state.isPadVisible };
    default:
      return state;
  }
}
