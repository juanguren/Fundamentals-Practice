/**
 * Return the provided string with the first letter of each word capitalized.
 *  Make sure the rest of the word is in lower case.
 */

const titleCase = (word: string): string => {
  const lowerCaseWord = word.toLowerCase();
  const wordStacked = lowerCaseWord.split(" ");

  const titleCase = wordStacked.map((letter) => {
    let updated = letter[0].toUpperCase();
    const letters = letter.replace(letter[0], updated);

    return letters;
  });
  return titleCase.join(" ");
};

titleCase("I'm a little tea pot");
