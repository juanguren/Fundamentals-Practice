// Remove all falsy values from an array:

function bouncerOne(values: any[]) {
  const truthyStack = [];
  values.forEach((element: any) => {
    if (element) truthyStack.push(element);
  });

  return truthyStack;
}

bouncerOne([7, "ate", "", false, 9, NaN, true, "HEY"]);

// **

const bouncerTwo = (values: any[]) => values.filter(condition);

const condition = (value: any) => {
  if (value) return value;
};

bouncerTwo([7, "ate", "", false, 9, NaN, true, "HEY"]);
