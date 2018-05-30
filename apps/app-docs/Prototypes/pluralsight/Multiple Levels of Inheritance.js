function Animal(name) {
  this.name = name;
}
Animal.prototype.age = 1;
function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}
Cat.prototype = new Animal(null);
var catC = new Cat("Fluffy", "White");
console.log(catC);
console.log(typeof catC);
console.log(catC.name);
console.log(catC.color);
console.log(catC.age);
console.log(catC.hasOwnProperty("name"));
console.log(catC.hasOwnProperty("color"));
console.log(catC.hasOwnProperty("age"));
// If we were to create a speak() function on the Cat Function like this:
Cat.prototype.speak = function() {
  console.log("meow");
};
// that function would be inherited by all objects that have Cat as
// their prototype, just like with the name, color and age properties.
catC.speak();
