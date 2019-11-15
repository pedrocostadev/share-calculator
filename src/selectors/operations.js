import { createSelector } from 'reselect';

const selectOperation = ({ operations }) =>
  `${operations.leftValue} ${operations.operator} ${operations.rightValue}`;

const selectLeftValue = ({ operations }) => operations.leftValue;
const selectOperator = ({ operations }) => operations.operator;
const selectRightValue = ({ operations }) => operations.rightValue;
const selectResult = ({ operations }) => operations.result;

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
};
