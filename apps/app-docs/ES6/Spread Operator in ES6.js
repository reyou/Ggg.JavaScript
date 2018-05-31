/*Spread Operator provides a new way to manipulate array and objects 
in Es6.A Spread operator is represented by … followed by the variable name. */
let a = [7, 8, 9];
let b = [1, 2, 3, ...a, 10];
console.log(b); // [1,2,3,7,8,9,10]
function print(...z) {
  console.log(z);
}

console.log(1, 2, 3, 4); //[1,2,3,4]
