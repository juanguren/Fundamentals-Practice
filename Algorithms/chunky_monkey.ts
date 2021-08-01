/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 * @param array One-dimensional array of numbers
 * @param size Number
 * @returns Two-dimensional array. Their lengths are indicated by the size parameter
 */

const chunkArrayInGroups = (
  array: Array<number>,
  size: number
): Array<Array<number>> => {
  const stack = [];
  let counter = 1;

  array.forEach(() => {
    counter++;
    if (counter % size === 0) stack.push(array.splice(0, size));
  });
  const array1 = stack;
  const array2 = array.splice(0, size);
  const finalArray = array1.concat([array2]);

  if (array.length === 0) return finalArray;
  return finalArray.concat([array]);
};

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
