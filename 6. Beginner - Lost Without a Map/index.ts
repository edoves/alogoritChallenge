//ES 5 Syntax Possible Solution:
function maps1(x:number[]){
    return x.map(newx => newx * 2);
}

console.log(maps1([1, 2, 3]));
console.log(maps1([4, 1, 1, 1, 4]));
console.log(maps1([2, 2, 2, 2, 2, 2]);

// ES 6 Syntax Possible Solution:
const maps2 = (x) => x.map(newX => newX * 2);