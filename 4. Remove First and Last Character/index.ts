const removeChar = (str: string) => {
  return str.slice(1, -1);
};

console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
console.log(removeChar("place"));
