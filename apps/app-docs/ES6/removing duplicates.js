const array = [1, 4, 99, 3, 1, 4, 15];

const noDups = Array.from(new Set(array));

console.log(noDups); //[1, 4, 99, 3, 15]
