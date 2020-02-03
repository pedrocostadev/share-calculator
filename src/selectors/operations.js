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

const selectIsInsertingLeftValue = createSelector(
  isValidLeftValue,
  isEmptyOperator,
  isEmptyResult,
  (validLeftValue, emptyOperator, emptyResult) => !validLeftValue || emptyOperator || !emptyResult,
);

const selectIsDivisionOperation = createSelector(
  selectOperator,
  operator => operator === '/',
);

const selectIsDivisionByZero = createSelector(
  selectIsDivisionOperation,
  selectRightValue,
  // eslint-disable-next-line eqeqeq
  (isDivisionOperator, rightValue) => isDivisionOperator && rightValue == 0,
);

const selectIsValidForResult = createSelector(
  isValidLeftValue,
  isValidRightValue,
  isEmptyOperator,
  selectIsDivisionByZero,
  (validLeftValue, validRightValue, emptyOperator, isDivisionByZero) =>
    validLeftValue && validRightValue && !emptyOperator && !isDivisionByZero,
);

const selectShouldInsertLeftNumber = createSelector(
  isEmptyLeftValue,
  isInvalidLeftValue,
  (emptyLeftValue, invalidLeftValue) => !emptyLeftValue && invalidLeftValue,
);

const selectShouldInsertRightNumber = createSelector(
  isEmptyRightValue,
  isInvalidRightValue,
  (emptyRightValue, invalidRightValue) => !emptyRightValue && invalidRightValue,
);

const selectIsValidForOperator = createSelector(
  selectShouldInsertLeftNumber,
  selectShouldInsertRightNumber,
  (shouldInsertLeftNumber, shouldInsertRightNumber) =>
    !shouldInsertLeftNumber && !shouldInsertRightNumber,
);

const selectIsValidForNewOperation = createSelector(
  isEmptyResult,
  isValidRightValue,
  isValidLeftValue,
  (emptyResult, validRightValue, validLeftValue) =>
    emptyResult && validRightValue && validLeftValue,
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
  selectIsInsertingLeftValue,
  selectIsValidForResult,
  selectIsValidForOperator,
  selectIsValidForNewOperation,
};
