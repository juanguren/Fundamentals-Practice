
/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 * @param values A two-number only array.
 * @returns The sum of the two numbers and all the numbers between them.
 */
function sumAll(values: [number, number]): number {
  const ordered = values.sort((a, b) => (a < b ? -1 : 1));
  let sum = ordered[0] + ordered[1];

  for (let i = ordered[0] + 1; i < ordered[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([5, 15]);
