function sumAll(values: [number, number]): number {
  const ordered = values.sort((a, b) => (a < b ? -1 : 1));
  let sum = ordered[0] + ordered[1];

  for (let i = ordered[0] + 1; i < ordered[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([5, 15]);
