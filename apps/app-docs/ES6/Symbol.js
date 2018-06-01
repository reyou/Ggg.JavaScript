/*A Symbol is created by the factory function `Symbol()`. 
The factory function can be passed an argument that serves 
as a description, mainly for debugging purposes. */
let mySymbol = Symbol();

console.log(typeof mySymbol); // 'symbol'
let mySymbol2 = Symbol("mySymbol");
console.log(mySymbol2);
// let sym = new Symbol(); //Uncaught TypeError: Symbol is not a constructor

/*Each Symbol has a unique ID and will not clash with other 
Symbols, even if passed the same description.*/
let s1 = Symbol();
let s2 = Symbol();
let s3 = Symbol("description");
let s4 = Symbol("description");

console.log(s1 === s2); //false
console.log(s3 === s4); //false
