/**
 * Binary Search | Complexity O(log n)
 * @param list Array of numbers
 * @param target number to search for
 * @returns The number if it exists, otherwise throws an error
 */

const getElement = (list: number[], target: number): number | Error => {
  try {
    if (list.length === 0) throw "List is empty";

    const orderedList = list.sort(orderSort);
    const index = Math.floor(orderedList.length / 2);

    for (let i = 0; i <= index; i++) {
      if (orderedList[i] === target) {
        return orderedList[i];
      }
    }
    const half = orderedList.splice(index);
    if (half.length <= 2) {
      if (half.includes(target)) return target;
      throw "Element does not exist";
    }

    return getElement(half, target);
  } catch (error) {
    return error;
  }
};

const orderSort = (a: number, b: number) => (a < b ? -1 : 1);

const listArray = [8, 4, 10, 2, 9, 8, 6, 7, 50, 60, 22, 16, 1, 5, 100];

console.log(getElement(listArray, 100));
