const largestOfFour = (numbers: Array<Array<number>>): Array<number> => {
  const maxValuesArray: Array<number> = [];

  for (let i = 0; i < numbers.length; i++) {
    const maxPerArray = numbers[i].reduce((accumulator, value): number => {
      return Math.max(accumulator, value);
    });

    maxValuesArray.push(maxPerArray);
  }

  return maxValuesArray;
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
