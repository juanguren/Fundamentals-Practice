function largestOfFour(values: Array<any>) {
  const largestList = [];
  for (let group of values) {
    largestList.push(Math.max(...group));
  }
  return largestList;
}

const values = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
];

console.log(largestOfFour(values));
