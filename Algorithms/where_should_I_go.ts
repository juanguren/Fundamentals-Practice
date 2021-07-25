/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 * once it has been sorted. The returned value should be a number.
 */

const calculateIndex = (stack: Array<number>, value: number): number => {
  stack.push(value);
  const sortedArray = stack.sort((a, b) => {
    if (a < b) return -1;
  });
  return sortedArray.indexOf(value);
};

calculateIndex([10, 5, 65, 2.5, 87, 6, 60, 65, 1, 799, 100], 20.5);
