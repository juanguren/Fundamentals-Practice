/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument)
 * once it has been sorted. The returned value should be a number.
 */

function calculateMinIndex(values, num) {
  values.push(num);
  values.sort((a, b) => a - b);

  return values.indexOf(num);
}

calculateMinIndex([10, 5, 65, 2.5, 87, 6, 60, 65, 1, 799, 100], 20.5);
