/**
 * Create a function that looks through an array arr and returns the first element in it
 * that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if
 *  func(x) is true. If no element passes the test, return undefined.
 */

const findElement = (numberArray: Array<number>, method: CallableFunction) => {
  const filtered = numberArray.filter((number): Array<number | any> => {
    return method(number);
  });
  if (filtered[0]) return filtered[0];

  return undefined;
};

findElement([1, 3, 5, 9], (value: number) => value % 2 === 0);
