var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
console.log("JSON.stringify(roots):");
console.log(JSON.stringify(roots));