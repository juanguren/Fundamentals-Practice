/**
 * Return true if the string in the first element of the array contains all of the letters of the string in the
 * second element of the array.
 * @param wordsArray Array containing two strings
 * @returns Boolean
 */

const mutation = (wordsArray: Array<string>): Boolean => {
  const firstWord = wordsArray[0].toLowerCase();
  const secondWord = wordsArray[1].toLowerCase();

  for (let i = 0; i < secondWord.length; i++) {
    const lettersSecondWord = secondWord[i];

    if (firstWord.indexOf(lettersSecondWord) < 0) return false;
  }
  return true;
};

mutation(["hello", "hey"]);
