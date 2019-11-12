import { OPERATION_TYPES } from '../actionsTypes';

export const addLeftValue = key => ({ type: OPERATION_TYPES.ADD_LEFT_VALUE, key });
export const addRightValue = key => ({ type: OPERATION_TYPES.ADD_RIGHT_VALUE, key });
export const addOperator = key => ({ type: OPERATION_TYPES.ADD_OPERATOR, key });
export const addResult = () => ({ type: OPERATION_TYPES.ADD_RESULT });
export const removeLeftValue = () => ({ type: OPERATION_TYPES.REMOVE_LEFT_VALUE });
export const removeRightValue = () => ({ type: OPERATION_TYPES.REMOVE_RIGHT_VALUE });
export const removeResult = () => ({ type: OPERATION_TYPES.REMOVE_RESULT });
export const removeOperator = () => ({ type: OPERATION_TYPES.REMOVE_OPERATOR });
