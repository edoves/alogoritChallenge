//ES 5 Syntax Possible Solution:
function digitize(n: number) {
  const stringArrNumber = Array.from(String(n));
  const arr = [];
  for (let i = 0; i < stringArrNumber.length; i++) {
    arr.push(parseInt(stringArrNumber[i]));
  }
  return arr.reverse();
}

console.log(digitize(348597));

// ES 6 Syntax Possible Solution:
const digitize1 = (n: number) => {
  const jNumbers = Array.from(String(n)).map((convertoNumber) =>
    parseInt(convertoNumber)
  );
  return jNumbers.reverse();
};

console.log(digitize1(348597));
