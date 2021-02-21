//ES 5 Syntax Possible Solution:
function combine1(arr1: number[], arr2: number[]) {
  const combineArray = arr1.concat(arr2);
  const newArr = [];
  for (let i = 0; i < combineArray.length; i++) {
    if (newArr.indexOf(combineArray[i]) === -1) {
      newArr.push(combineArray[i]);
    }
  }
  return newArr.sort((a, b) => a - b);
}

console.log(combine1([1, 2, 3], [3, 4, 5]));
console.log(combine1([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// ES 6 Syntax Possible Solution:
const combine2 = (arr1: number[], arr2: number[]) => {
  const merge = arr1.concat(arr2);
  const newArr = merge.filter((item, pos) => merge.indexOf(item) === pos);
  return newArr.sort((a, b) => a - b);
};
console.log(combine2([1, 2, 3], [3, 4, 5]));
console.log(combine2([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// other solution jschallenger.com
function myFunction(first, second) {
  return [...new Set([...first, ...second])].sort((a, b) => a - b);
}
