const factorialize = (input: number) => {
  let holder = 1;

  for (let i = 1; i <= input; i++) {
    holder = holder * i; // holder *= i
  }
  return holder;
};

factorialize(5);
