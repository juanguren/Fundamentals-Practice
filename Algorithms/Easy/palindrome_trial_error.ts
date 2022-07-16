const getPalindromePhrase = (input: string) => {
  const stackOne: Array<string[]> = [];
  const finalStack: Array<string> = [];
  const transformToReversedArray = input.split(" ");
  transformToReversedArray.forEach((block: string, i) => {
    stackOne.push(block.split(""));
  });
  stackOne.reverse().forEach((element) => {
    finalStack.push(element.reverse().join());
  });
  const backwardsInput = finalStack.join("").replace(/,/g, "").toLowerCase();
  const originalInput = input.split(" ").join("").toLowerCase();

  if (backwardsInput == originalInput) {
    return {
      palindrome: true,
    };
  }
  return {
    palindrome: false,
  };
};

console.log(getPalindromePhrase("Was it a car or a cat I saw"));
