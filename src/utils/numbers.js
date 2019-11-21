import { isEmpty } from './strings';

export const numberOperations = {
  '+': (x, y) => parseFloat(x, 10) + parseFloat(y, 10),
  '*': (x, y) => parseFloat(x, 10) * parseFloat(y, 10),
  '/': (x, y) => parseFloat(x, 10) / parseFloat(y, 10),
  '-': (x, y) => parseFloat(x, 10) - parseFloat(y, 10),
};

export const isInvalidNumber = number => isNaN(number);

export const isValidNumber = number => !isEmpty(number) && !isInvalidNumber(number);
