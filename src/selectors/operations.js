import { createSelector } from 'reselect';

import { isValidNumber, isInvalidNumber, isEmpty } from '../utils';

const selectOperation = ({ operations }) =>
  `${operations.leftValue} ${operations.operator} ${operations.rightValue}`;

const selectLeftValue = ({ operations }) => operations.leftValue;
const selectOperator = ({ operations }) => operations.operator;
const selectRightValue = ({ operations }) => operations.rightValue;
const selectResult = ({ operations }) => operations.result;

const isEmptyLeftValue = createSelector(
  [selectLeftValue],
  leftValue => isEmpty(leftValue),
);

const isEmptyRightValue = createSelector(
  [selectRightValue],
  rightValue => isEmpty(rightValue),
);

const isEmptyResult = createSelector(
  [selectResult],
  result => isEmpty(result),
);

const isInvalidLeftValue = createSelector(
  [selectLeftValue],
  leftValue => isInvalidNumber(leftValue),
);

const isInvalidRightValue = createSelector(
  [selectRightValue],
  rightValue => isInvalidNumber(rightValue),
);

const isInvalidResult = createSelector(
  [selectResult],
  result => isInvalidNumber(result),
);

const isEmptyOperator = createSelector(
  [selectOperator],
  operator => isEmpty(operator),
);

const isValidLeftValue = createSelector(
  [selectLeftValue],
  leftValue => isValidNumber(leftValue),
);

const isValidRightValue = createSelector(
  [selectRightValue],
  rightValue => isValidNumber(rightValue),
);

const isValidResult = createSelector(
  [selectResult],
  result => isValidNumber(result),
);

const selectOperationWithResult = createSelector(
  [selectOperation, selectResult],
  (operation, result) => {
    if (result === undefined) {
      return operation;
    }
    return `${operation} = ${result}`;
  },
);

export {
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
};
