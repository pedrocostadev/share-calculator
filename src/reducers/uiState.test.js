import uiStateReducer, { DEFAULT_STATE } from './uiState';
import UI_STATE_TYPES from '../actionsTypes/uiState';

describe('uiState reducer', () => {
  test('should return the initial state', () => {
    expect(uiStateReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });
  test('should toggle state to true', () => {
    expect(uiStateReducer(DEFAULT_STATE, { type: UI_STATE_TYPES.TOGGLE_PAD_VISIBILITY })).toEqual({
      isPadVisible: false,
    });
  });
  test('should toggle state to false', () => {
    expect(
      uiStateReducer({ isPadVisible: false }, { type: UI_STATE_TYPES.TOGGLE_PAD_VISIBILITY }),
    ).toEqual({
      isPadVisible: true,
    });
  });
});
