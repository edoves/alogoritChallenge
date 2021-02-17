function findUniq(arr: number[]): number {
  // do magic
  return arr.filter((currentValue) => arr.indexOf(currentValue))[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
