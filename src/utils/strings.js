export const removeChar = text => text && text.substring(0, text.length - 1);

export const isEmpty = str => str === undefined || str === '';

export const isPlusOrMinus = str => ['+', '-'].includes(str);
