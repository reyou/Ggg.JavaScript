let sym = Symbol("string");

let string = "some string";

try {
  let newString = string + sym; //Uncaught TypeError: Cannot convert a Symbol value to a string
} catch (ex) {
  console.log(ex);
}
// Either use String factory or the toString() method.
console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
let newString = "string-" + sym.toString();
console.log(newString);
let newString2 = "string-" + String(sym);
console.log(newString2);
