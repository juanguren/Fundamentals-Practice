const bouncer = (array: Array<any>): Array<string | number> => {
  const noFalsy = array.filter((element: any) => {
    if (element) return element;
  });
  return noFalsy;
};

bouncer([7, "ate", "", false, 9, NaN, true, "HEY"]);
