// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(word: string, target: string): boolean {
  const stringLength = word.length;
  const targetLength = target.length;
  const lastCharacter = word.substring(
    stringLength,
    stringLength - targetLength
  );

  return lastCharacter == target;
}

confirmEnding("Bastian", "n");
