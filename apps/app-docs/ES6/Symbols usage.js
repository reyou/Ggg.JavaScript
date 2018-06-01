/*Since Symbols have a unique ID and will not clash with 
other Symbols, one good use it property keys and method definitions. */
let mySymKey = Symbol();
let mySymMethod = Symbol();
console.log(mySymKey);
console.log(mySymMethod);
let object = {
  [mySymKey]: "value",
  [mySymMethod]() {
    return "some actions";
  }
};

console.log(object[mySymKey]); //"value"
console.log(object[mySymMethod]()); //"some actions"
