function repeatStringNumTimes(word: string, num: number) {
  let value = "";
  for (let i = 1; i <= num; i++) {
    value += word;
  }
  return value;
}

repeatStringNumTimes("abc", 3);
