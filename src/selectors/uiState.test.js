import { selectIsPadVisible } from './uiState';

describe('UiState selectors', () => {
  test('selectIsPadVisible 1', async () => {
    const mockState = {
      uiState: {
        isPadVisible: false,
      },
    };
    const result = selectIsPadVisible(mockState);
    expect(result).toBeFalsy();
  });
  test('selectIsPadVisible 2', async () => {
    const mockState = {
      uiState: {
        isPadVisible: true,
      },
    };
    const result = selectIsPadVisible(mockState);
    expect(result).toBeTruthy();
  });
});
