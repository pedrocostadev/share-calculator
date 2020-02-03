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
  selectIsValidForResult,
  selectIsValidForOperator,
  selectIsValidForNewOperation,
  selectIsInsertingLeftValue,
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
  test('selectIsInsertingLeftValue 1', async () => {
    const result = selectIsInsertingLeftValue({
      operations: { leftValue: '1', rightValue: undefined, operator: undefined },
    });
    expect(result).toBeTruthy();
  });
  test('selectIsInsertingLeftValue 2', async () => {
    const result = selectIsInsertingLeftValue({
      operations: { leftValue: '1', rightValue: '22', operator: '+' },
    });
    expect(result).toBeFalsy();
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
  test('selectOperationWithResult 1', async () => {
    const expectedResult = '20 - 5 = 15';
    const result = selectOperationWithResult(mockState);
    expect(result).toEqual(expectedResult);
  });

  test('selectOperationWithResult 2', async () => {
    const expectedResult = '12 - 5';
    const result = selectOperationWithResult({
      operations: { leftValue: '12', rightValue: '5', operator: '-', result: undefined },
    });
    expect(result).toEqual(expectedResult);
  });

  describe('isEmpty', () => {
    test('isEmptyLeftValue 1', async () => {
      const result = isEmptyLeftValue(mockState);
      expect(result).toBeFalsy();
    });
    test('isEmptyLeftValue 2', async () => {
      const result = isEmptyLeftValue({ operations: { leftValue: undefined } });
      expect(result).toBeTruthy();
    });
    test('isEmptyRightValue 1', async () => {
      const result = isEmptyRightValue(mockState);
      expect(result).toBeFalsy();
    });
    test('isEmptyRightValue 2', async () => {
      const result = isEmptyRightValue({ operations: { rightValue: '' } });
      expect(result).toBeTruthy();
    });
    test('isEmptyResult 1', async () => {
      const result = isEmptyResult(mockState);
      expect(result).toBeFalsy();
    });
    test('isEmptyResult 2', async () => {
      const result = isEmptyResult({ operations: { result: undefined } });
      expect(result).toBeTruthy();
    });
    test('isEmptyOperator 1', async () => {
      const result = isEmptyOperator(mockState);
      expect(result).toBeFalsy();
    });
    test('isEmptyOperator 2', async () => {
      const result = isEmptyOperator({ operations: { operator: '' } });
      expect(result).toBeTruthy();
    });
  });
  describe('isValid', () => {
    test('isValidLeftValue 1', async () => {
      const result = isValidLeftValue(mockState);
      expect(result).toBeTruthy();
    });
    test('isValidLeftValue 2', async () => {
      const result = isValidLeftValue({ operations: { leftValue: '-' } });
      expect(result).toBeFalsy();
    });
    test('isValidRightValue 1', async () => {
      const result = isValidRightValue(mockState);
      expect(result).toBeTruthy();
    });
    test('isValidRightValue 2', async () => {
      const result = isValidRightValue({ operations: { rightValue: '' } });
      expect(result).toBeFalsy();
    });
    test('isValidResult 1', async () => {
      const result = isValidResult(mockState);
      expect(result).toBeTruthy();
    });
    test('isValidResult 2', async () => {
      const result = isValidResult({ operations: { result: '' } });
      expect(result).toBeFalsy();
    });
    test('selectIsValidForResult', async () => {
      const result = selectIsValidForResult({
        operations: { leftValue: '1', rightValue: '2', operator: '+' },
      });
      expect(result).toBeTruthy();
    });
    test('selectIsValidForResult 2', async () => {
      const result = selectIsValidForResult({
        operations: { leftValue: '1', rightValue: '2', operator: undefined },
      });
      expect(result).toBeFalsy();
    });
    test('selectIsValidForResult 3', async () => {
      const result = selectIsValidForResult({
        operations: { leftValue: '1', rightValue: '', operator: '*' },
      });
      expect(result).toBeFalsy();
    });
    test('selectIsValidForResult 4', async () => {
      const result = selectIsValidForResult({
        operations: { leftValue: '1', rightValue: '0', operator: '/' },
      });
      expect(result).toBeFalsy();
    });
    test('selectIsValidForResult 5', async () => {
      const result = selectIsValidForResult({
        operations: { leftValue: '3', rightValue: '02', operator: '/' },
      });
      expect(result).toBeTruthy();
    });
    test('selectIsValidForOperator 1', async () => {
      const result = selectIsValidForOperator({
        operations: { leftValue: '1', rightValue: '2', operator: '*' },
      });
      expect(result).toBeTruthy();
    });
    test('selectIsValidForOperator 2', async () => {
      const result = selectIsValidForOperator({
        operations: { leftValue: '1', rightValue: '+', operator: '*' },
      });
      expect(result).toBeFalsy();
    });
    test('selectIsValidForNewOperation 1', async () => {
      const result = selectIsValidForNewOperation({
        operations: { leftValue: '1', rightValue: '2', operator: '*', result: undefined },
      });
      expect(result).toBeTruthy();
    });
    test('selectIsValidForNewOperation 2', async () => {
      const result = selectIsValidForNewOperation({
        operations: { leftValue: '1', rightValue: '2', operator: '*', result: 2 },
      });
      expect(result).toBeFalsy();
    });
  });
  describe('isInvalid', () => {
    test('isInvalidLeftValue 1', async () => {
      const result = isInvalidLeftValue(mockState);
      expect(result).toBeFalsy();
    });
    test('isInvalidLeftValue 2', async () => {
      const result = isInvalidLeftValue({ operations: { leftValue: '-' } });
      expect(result).toBeTruthy();
    });
    test('isInvalidRightValue 1', async () => {
      const result = isInvalidRightValue(mockState);
      expect(result).toBeFalsy();
    });
    test('isInvalidRightValue 2', async () => {
      const result = isInvalidRightValue({ operations: { rightValue: '-' } });
      expect(result).toBeTruthy();
    });
    test('isInvalidResult 1', async () => {
      const result = isInvalidResult(mockState);
      expect(result).toBeFalsy();
    });
    test('isInvalidResult 2', async () => {
      const result = isInvalidResult({ operations: { result: '.' } });
      expect(result).toBeTruthy();
    });
  });
});
