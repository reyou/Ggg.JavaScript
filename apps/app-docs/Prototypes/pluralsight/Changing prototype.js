function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 3;
var fluffy = new Cat("Fluffy", "White");
var scratchy = new Cat("Scratchy", "Black");
console.log(fluffy.age);
console.log(scratchy.age);
Cat.prototype.age = 4;
console.log(fluffy.age);
console.log(scratchy.age);
