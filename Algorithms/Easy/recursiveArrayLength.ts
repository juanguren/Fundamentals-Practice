let count = 0;

const getArrayLength = (list: Array<any>) => {
  list.forEach((element) => {
    if (typeof element == "object" && element.length > 0) {
      getArrayLength(element);
    }
    count++;
  });
  return count - 1;
};

const extraList = [5, 6, 8, "PIE", {}, false];

console.log(getArrayLength([1, 2, "HEY", true, extraList]));
