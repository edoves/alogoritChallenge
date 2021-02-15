const summation = (num: number) => {
  // Code here
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

summation(8);
