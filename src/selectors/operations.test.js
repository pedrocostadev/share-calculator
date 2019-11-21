import {
  selectLeftValue,
  selectOperator,
  selectRightValue,
  selectResult,
  selectOperation,
  selectOperationWithResult,
  isEmptyLeftValue,
  isEmptyRightValue,
  isEmptyResult,
  isEmptyOperator,
  isValidLeftValue,
  isValidRightValue,
  isValidResult,
  isInvalidLeftValue,
  isInvalidRightValue,
  isInvalidResult,
} from './operations';

describe('Operations selectors', () => {
  const mockState = {
    operations: {
      leftValue: '20',
      operator: '-',
      rightValue: '5',
      result: '15',
    },
  };
  test('selectLeftValue', async () => {
    const expectedResult = '20';
    const result = selectLeftValue(mockState);
    expect(result).toEqual(expectedResult);
  });
  test('selectRightValue', async () => {
    const expectedResult = '5';
    const result = selectRightValue(mockState);
    expect(result).toEqual(expectedResult);
  });
  test('selectOperator', async () => {
    const expectedResult = '-';
    const result = selectOperator(mockState);
    expect(result).toEqual(expectedResult);
  });
  test('selectResult', async () => {
    const expectedResult = '15';
    const result = selectResult(mockState);
    expect(result).toEqual(expectedResult);
  });
  test('selectOperation', async () => {
    const expectedResult = '20 - 5';
    const result = selectOperation(mockState);
    expect(result).toEqual(expectedResult);
  });
  test('selectOperationWithResult', async () => {
    const expectedResult = '20 - 5 = 15';
    const result = selectOperationWithResult(mockState);
    expect(result).toEqual(expectedResult);
  });

  describe('isEmpty', () => {
    test('isEmptyLeftValue 1', async () => {
      const expectedResult = false;
      const result = isEmptyLeftValue(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyLeftValue 2', async () => {
      const expectedResult = true;
      const result = isEmptyLeftValue({ operations: { leftValue: undefined } });
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyRightValue 1', async () => {
      const expectedResult = false;
      const result = isEmptyRightValue(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyRightValue 2', async () => {
      const expectedResult = true;
      const result = isEmptyRightValue({ operations: { rightValue: '' } });
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyResult 1', async () => {
      const expectedResult = false;
      const result = isEmptyResult(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyResult 2', async () => {
      const expectedResult = true;
      const result = isEmptyResult({ operations: { result: undefined } });
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyOperator 1', async () => {
      const expectedResult = false;
      const result = isEmptyOperator(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isEmptyOperator 2', async () => {
      const expectedResult = true;
      const result = isEmptyOperator({ operations: { operator: '' } });
      expect(result).toEqual(expectedResult);
    });
  });
  describe('isValid', () => {
    test('isValidLeftValue 1', async () => {
      const expectedResult = true;
      const result = isValidLeftValue(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isValidLeftValue 2', async () => {
      const expectedResult = false;
      const result = isValidLeftValue({ operations: { leftValue: '-' } });
      expect(result).toEqual(expectedResult);
    });
    test('isValidRightValue 1', async () => {
      const expectedResult = true;
      const result = isValidRightValue(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isValidRightValue 2', async () => {
      const expectedResult = false;
      const result = isValidRightValue({ operations: { rightValue: '' } });
      expect(result).toEqual(expectedResult);
    });
    test('isValidResult 1', async () => {
      const expectedResult = true;
      const result = isValidResult(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isValidResult 2', async () => {
      const expectedResult = false;
      const result = isValidResult({ operations: { result: '' } });
      expect(result).toEqual(expectedResult);
    });
  });
  describe('isInvalid', () => {
    test('isInvalidLeftValue 1', async () => {
      const expectedResult = false;
      const result = isInvalidLeftValue(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isInvalidLeftValue 2', async () => {
      const expectedResult = true;
      const result = isInvalidLeftValue({ operations: { leftValue: '-' } });
      expect(result).toEqual(expectedResult);
    });
    test('isInvalidRightValue 1', async () => {
      const expectedResult = false;
      const result = isInvalidRightValue(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isInvalidRightValue 2', async () => {
      const expectedResult = true;
      const result = isInvalidRightValue({ operations: { rightValue: '-' } });
      expect(result).toEqual(expectedResult);
    });
    test('isInvalidResult 1', async () => {
      const expectedResult = false;
      const result = isInvalidResult(mockState);
      expect(result).toEqual(expectedResult);
    });
    test('isInvalidResult 2', async () => {
      const expectedResult = true;
      const result = isInvalidResult({ operations: { result: '.' } });
      expect(result).toEqual(expectedResult);
    });
  });
});
