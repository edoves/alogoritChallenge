let arr = [5, 10, 15, 20, 24];

//================ while loop;
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//================ do while
let i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);

//================ for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//================ for in loop
for (let i in arr) {
  console.log(arr[i]);
}

//================ for of loop
for (let i of arr) {
  console.log(i);
}

//================ forEach
arr.forEach((i) => {
  console.log(i);
});

//================ interator(Symbol) it loops one at a time
let item = arr[Symbol.iterator]();
console.log(item.next());
console.log(item.next());
console.log(item.next());
