// What is the best way to create Private Properties in ES6?
/*It can only be done for Scoped Accessed in Objects by using Symbols. 
Symbols are unique, you can't gain access to one from the outside except 
with reflection (like privates in Java/C#) but anyone who has access 
to the Symbol on the inside can use it for key access.*/
var property = Symbol();
class Something {
  constructor(property) {
    this[property] = "test";
  }
  printSymbol(property) {
    console.log(this[property]);
  }
}
var instance = new Something("title");
console.log(instance.property); //=> undefined, can only access with access to theSymbol
instance.printSymbol("title");
