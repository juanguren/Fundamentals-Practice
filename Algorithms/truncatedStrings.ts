/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 */

function truncateString(word: string, num: number) {
  if (word.length > num) {
    let truncated = word.substring(0, num);
    return (truncated += "...");
  }
  return word;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
