import { UI_STATE_TYPES } from '../actionsTypes';
import { uiStateActionCreators } from '../actionsCreators/';

describe('UiState Actions creators', () => {
  test('togglePadVisibility', () => {
    const expectedAction = { type: UI_STATE_TYPES.TOGGLE_PAD_VISIBILITY };
    expect(uiStateActionCreators.togglePadVisibility()).toEqual(expectedAction);
  });
});
