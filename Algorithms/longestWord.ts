const findLongestWordLength = (phrase: string) => {
  const arrayString = phrase.split(" ");
  let wordLengths: Array<number> = [];

  for (let words of arrayString) {
    wordLengths.push(words.length);
  }
  const longestWord = wordLengths.reduce((accum, value): number => {
    return Math.max(accum, value);
  });
  return longestWord;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");
