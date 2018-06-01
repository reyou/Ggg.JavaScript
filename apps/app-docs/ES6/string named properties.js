let sym = Symbol("myKey");
let obj = {
  [sym]: "I am the value of the symbol key",
  a: 4,
  method() {
    return 99;
  }
};

console.log(obj); //{a: 4, Symbol(myKey): "I am the value of the symbol key", method: ƒ}
console.log(obj.method());
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
