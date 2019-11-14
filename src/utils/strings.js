export const removeChar = text => text.substring(0, text.length - 1);

export const screenContentToText = ({ leftValue, operator, rightValue, result }) => {
  const operation = `${leftValue} ${operator} ${rightValue}`;

  if (result === undefined) {
    return operation;
  }
  return `${operation} = ${result}`;
};
