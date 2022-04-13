export const multiplyByX = (array: any[], multiplier: number): any => {
  const multiply = (value: number) => value * multiplier;
  const isNumber = (value: any): value is number => typeof value === "number";

  const multiplied = array.map((value) =>
    isNumber(value) ? multiply(value) : value
  );

  return multiplied.filter(isNumber);
};
