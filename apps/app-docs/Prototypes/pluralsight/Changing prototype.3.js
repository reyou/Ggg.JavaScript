function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 3;
var fluffy = new Cat("Fluffy", "White");
var scratchy = new Cat("Scratchy", "Black");
fluffy.age = 4;
console.log(fluffy.age);
console.log(scratchy.age);
/*This illustrates the point that a function's prototype property 
"is the object instance which will become the prototype 
(or __proto__) for objects created using this function as a 
constructor." */
Cat.prototype = { age: 4 };
fluffy.__proto__.age = 5;
console.log(fluffy.age);
console.log(scratchy.age);
var muffin = new Cat("Muffin", "Brown");
console.log(muffin.age);
