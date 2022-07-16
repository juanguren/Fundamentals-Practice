/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 * @param values One-dimensional array of numbers
 * @param size Number
 * @returns Two-dimensional array. Their lengths are indicated by the size parameter
 */

function chunkArrayInGroups(values: number[], size: number) {
  const stack = [];
  for (let i = 1; i <= values.length; i++) {
    if (i % size === 0) {
      // forms even pairs by cutting the values array
      stack.push(values.splice(0, size));
      // restarts the counter in order to produce the next pair
      i = 0;
    }
  }
  // values may be empty if its length was a multiple of size
  if (values.length == 0) return stack;
  // If not empty, we merge the two arrays
  stack.push(values);
  return stack;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
