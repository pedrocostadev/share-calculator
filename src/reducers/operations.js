import { OPERATION_TYPES } from '../actionsTypes';
import { numberOperations } from '../utils/numbers';
import { removeChar } from '../utils';

export const DEFAULT_STATE = {
  leftValue: '',
  operator: '',
  rightValue: '',
  result: undefined,
};

export default function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case OPERATION_TYPES.ADD_LEFT_VALUE:
      const isNewOperation = state.result !== undefined;
      return isNewOperation
        ? {
            ...DEFAULT_STATE,
            leftValue: action.key,
          }
        : {
            ...state,
            leftValue: `${state.leftValue}${action.key}`,
          };
    case OPERATION_TYPES.ADD_RIGHT_VALUE:
      return {
        ...state,
        rightValue: `${state.rightValue}${action.key}`,
      };
    case OPERATION_TYPES.ADD_OPERATOR:
      return {
        ...state,
        operator: action.key,
      };
    case OPERATION_TYPES.ADD_RESULT: {
      const result = numberOperations[state.operator](state.leftValue, state.rightValue);
      return {
        ...state,
        result,
      };
    }
    case OPERATION_TYPES.REMOVE_LEFT_VALUE:
      return {
        ...state,
        leftValue: removeChar(state.leftValue),
      };
    case OPERATION_TYPES.REMOVE_RIGHT_VALUE:
      return {
        ...state,
        rightValue: removeChar(state.rightValue),
      };
    case OPERATION_TYPES.REMOVE_RESULT:
      return {
        ...state,
        rightValue: '',
        result: undefined,
      };
    case OPERATION_TYPES.REMOVE_OPERATOR:
      return {
        ...state,
        operator: '',
      };
    case OPERATION_TYPES.REMOVE_ALL:
      return {
        ...DEFAULT_STATE,
      };
    case OPERATION_TYPES.NEW_OPERATION_FROM_RESULT:
      return {
        ...DEFAULT_STATE,
        leftValue: state.result,
        operator: action.key,
      };
    case OPERATION_TYPES.NEW_OPERATION: {
      const result = numberOperations[state.operator](state.leftValue, state.rightValue);
      return {
        ...DEFAULT_STATE,
        leftValue: `${result}`,
        operator: action.key,
      };
    }
    default:
      return state;
  }
}
