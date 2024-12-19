export const nounDeclension = (
  number: number,
  one: string,
  few: string,
  many: string
) => {
  number %= 100;
  if (number >= 5 && number <= 20) {
    return many;
  }
  number %= 10;
  if (number === 1) {
    return one;
  }
  if (number >= 2 && number <= 4) {
    return few;
  }
  return many;
};
