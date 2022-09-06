// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript
// input = [1, 2, 3, 4, 5, 6] | output = [21, 20, 18, 15, 11, 6, 0]

/**
 * Version 1 | Not optimized for (very) big arrays.
 * @param ls An n-length number[] type
 * @returns An n-length number[] type, which consists of the list of the sums of its parts.
 */
function partsSums(ls: number[]): number[] {
  if (ls.length === 0) return [0];

  const sum: number[] = [];
  fragmentSum(ls);

  function fragmentSum(arr: number[]): number[] {
    let holder = 0;
    holder += arr.reduce((sum, value) => sum + value);
    sum.push(holder);
    arr.shift();

    if (arr.length === 0) {
      sum.push(0);
      return sum;
    }
    return fragmentSum(arr);
  }
  return sum;
}

/**
 * Version 2 | Optimized for (very) big arrays.
 * @param ls An n-length number[] type
 * @returns An n-length number[] type, which consists of the list of the sums of its parts.
 */
function partsSumsTwo(ls: number[]): number[] {
  if (ls.length === 0) return [0];

  let sum = ls.reduce((sum, value) => sum + value);
  let holder = [sum]; // First and biggest value, it decreases from here.
  // ls[0] was already executed and this iterates only one time. Instead of adding, it substracts each value in ls to *sum*.
  for (let i = 1; i <= ls.length; i++) {
    sum -= ls[i - 1];
    holder.push(sum);
  }
  return holder;
}
