import { OPERATION_TYPES } from '../actionsTypes';
import { operationsActionCreators } from '../actionsCreators/';

describe('Actions creators', () => {
  test('addLeftValue', () => {
    const key = '1';
    const expectedAction = { type: OPERATION_TYPES.ADD_LEFT_VALUE, key };
    expect(operationsActionCreators.addLeftValue(key)).toEqual(expectedAction);
  });
  test('addRightValue', () => {
    const key = '1';
    const expectedAction = { type: OPERATION_TYPES.ADD_RIGHT_VALUE, key };
    expect(operationsActionCreators.addRightValue(key)).toEqual(expectedAction);
  });
  test('addOperator', () => {
    const key = '+';
    const expectedAction = { type: OPERATION_TYPES.ADD_OPERATOR, key };
    expect(operationsActionCreators.addOperator(key)).toEqual(expectedAction);
  });
  test('addResult', () => {
    const expectedAction = { type: OPERATION_TYPES.ADD_RESULT };
    expect(operationsActionCreators.addResult()).toEqual(expectedAction);
  });
  test('removeLeftValue', () => {
    const expectedAction = { type: OPERATION_TYPES.REMOVE_LEFT_VALUE };
    expect(operationsActionCreators.removeLeftValue()).toEqual(expectedAction);
  });
  test('removeRightValue', () => {
    const expectedAction = { type: OPERATION_TYPES.REMOVE_RIGHT_VALUE };
    expect(operationsActionCreators.removeRightValue()).toEqual(expectedAction);
  });
  test('removeResult', () => {
    const expectedAction = { type: OPERATION_TYPES.REMOVE_RESULT };
    expect(operationsActionCreators.removeResult()).toEqual(expectedAction);
  });
  test('removeOperator', () => {
    const expectedAction = { type: OPERATION_TYPES.REMOVE_OPERATOR };
    expect(operationsActionCreators.removeOperator()).toEqual(expectedAction);
  });
  test('newOperation', () => {
    const key = '1';
    const expectedAction = { type: OPERATION_TYPES.NEW_OPERATION, key };
    expect(operationsActionCreators.newOperation(key)).toEqual(expectedAction);
  });
  test('newOperationFromResult', () => {
    const key = '1';
    const expectedAction = { type: OPERATION_TYPES.NEW_OPERATION_FROM_RESULT, key };
    expect(operationsActionCreators.newOperationFromResult(key)).toEqual(expectedAction);
  });
});
