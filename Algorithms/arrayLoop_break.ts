const loopMethod1 = (array: Array<number>) => {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === 42) {
      break;
    }
    console.log(array[i]);
  }
};

const loopMethod2 = () => {
  let randomNumber: number;
  while (randomNumber != 5) {
    randomNumber = Math.round(Math.random() * 20);
    if (randomNumber === 5) {
      break;
    }
    console.log(randomNumber);
  }
};

loopMethod1([1, 8, 65, 32, 78, 647, 42, 5, 4563]);
loopMethod2();
