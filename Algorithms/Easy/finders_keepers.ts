/**
 * Create a function that looks through an array arr and returns the first element in it
 * that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if
 *  func(x) is true. If no element passes the test, return undefined.
 */

function findElement(collection: number[], truthTest: any) {
  return collection.find(truthTest);
}

findElement([1, 2, 3, 4], (num: number) => num % 2 === 0);
