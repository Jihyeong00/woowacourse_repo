import ChristmasError from './error-helper';

export const validationCheck = (boolean, errorMessage) => {
  if (boolean) {
    throw new ChristmasError(errorMessage);
  }
};

export const isNumber = (number) => {
  let reqExp = /^\d*$/;
  return !reqExp.test(number);
};
