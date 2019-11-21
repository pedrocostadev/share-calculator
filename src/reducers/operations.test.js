import operationsReducer, { DEFAULT_STATE } from './operations';
import OPERATIONS_TYPES from '../actionsTypes/operations';

describe('todos reducer', () => {
  test('should return the initial state', () => {
    expect(operationsReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });

  describe('Add values', () => {
    test('should set the left value', () => {
      expect(
        operationsReducer(DEFAULT_STATE, { type: OPERATIONS_TYPES.ADD_LEFT_VALUE, key: '1' }),
      ).toEqual({
        ...DEFAULT_STATE,
        leftValue: '1',
      });
    });
    test('should set the right value', () => {
      expect(
        operationsReducer(DEFAULT_STATE, { type: OPERATIONS_TYPES.ADD_RIGHT_VALUE, key: '2' }),
      ).toEqual({
        ...DEFAULT_STATE,
        rightValue: '2',
      });
    });
    test('should set the operator', () => {
      expect(
        operationsReducer(DEFAULT_STATE, { type: OPERATIONS_TYPES.ADD_OPERATOR, key: '+' }),
      ).toEqual({
        ...DEFAULT_STATE,
        operator: '+',
      });
    });
    test('should set the result', () => {
      const mockedState = {
        leftValue: '22',
        rightValue: '33',
        operator: '-',
      };
      expect(operationsReducer(mockedState, { type: OPERATIONS_TYPES.ADD_RESULT })).toEqual({
        ...mockedState,
        result: -11,
      });
    });
  });
  describe('Delete values', () => {
    const mockedState = {
      leftValue: '2',
      rightValue: '33',
      operator: '-',
      result: '11111',
    };

    test('should remove the leftValue', () => {
      expect(operationsReducer(mockedState, { type: OPERATIONS_TYPES.REMOVE_LEFT_VALUE })).toEqual({
        ...mockedState,
        leftValue: '',
      });
    });
    test('should remove the rightValue', () => {
      expect(operationsReducer(mockedState, { type: OPERATIONS_TYPES.REMOVE_RIGHT_VALUE })).toEqual(
        {
          ...mockedState,
          rightValue: '3',
        },
      );
    });
    test('should remove the operator', () => {
      expect(operationsReducer(mockedState, { type: OPERATIONS_TYPES.REMOVE_OPERATOR })).toEqual({
        ...mockedState,
        operator: '',
      });
    });
    test('should remove the result and the right value', () => {
      expect(operationsReducer(mockedState, { type: OPERATIONS_TYPES.REMOVE_RESULT })).toEqual({
        ...mockedState,
        rightValue: '',
        result: undefined,
      });
    });
    test('should remove all', () => {
      expect(operationsReducer(mockedState, { type: OPERATIONS_TYPES.REMOVE_ALL })).toEqual(
        DEFAULT_STATE,
      );
    });
  });
  describe('New operations', () => {
    test('should use result for a new operation', () => {
      const mockedState = {
        leftValue: '2',
        rightValue: '33',
        operator: '-',
        result: '11111',
      };
      expect(
        operationsReducer(mockedState, {
          type: OPERATIONS_TYPES.NEW_OPERATION_FROM_RESULT,
          key: '-',
        }),
      ).toEqual({
        leftValue: '11111',
        rightValue: '',
        operator: '-',
        result: undefined,
      });
    });

    test('should use leftValue and rightValue for a new operation', () => {
      const mockedState = {
        leftValue: '222',
        rightValue: '33',
        operator: '-',
        result: undefined,
      };
      expect(
        operationsReducer(mockedState, { type: OPERATIONS_TYPES.NEW_OPERATION, key: '-' }),
      ).toEqual({
        leftValue: '189',
        rightValue: '',
        operator: '-',
        result: undefined,
      });
    });
  });
});
