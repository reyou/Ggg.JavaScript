// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
/*The call() method calls a function with a given this value and arguments 
provided individually. */
/**Note: While the syntax of this function is almost identical to that of apply(), 
 * the fundamental difference is that call() accepts an argument list, while apply() 
 * accepts a single array of arguments. */
function Product(name, price) {
    this.name = name;
    this.price = price;
}
function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}
function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
}
var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
console.log("cheese", cheese);
console.log("fun", fun);
