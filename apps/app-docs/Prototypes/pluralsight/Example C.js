/*Cat is a constructor function. A constructor function really 
is no different than any other function, in fact the term 
"constructor function" is just a common nomenclature that 
suggests that the function will create properties on the 
object being created (represented by this). */
/*Functions can be used to create class-like functionality in JavaScript; 
and all functions have a prototype property. That prototype property 
is somewhat like a class definition in other object-oriented langauge; 
but it is more than that. It is actually an instance of an object and 
every function in JavaScript has one whether you use it or not. 
Every function (constructor function or not) has a prototype object 
instance hanging off of it, interesting, huh? */
/*Objects do not have a prototype property, but they do have a prototype. 
Only, the word prototype means something different when talking 
about objects than it does when talking about functions.  */
function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.age = 0;

var catC = new Cat("Fluffy", "White");
console.log(catC);
console.log(catC.__proto__);
console.log(catC.__proto__.__proto__);
console.log(catC.__proto__.__proto__.__proto__);
console.log(catC.hasOwnProperty("name"));
console.log(catC.hasOwnProperty("color"));
/*This is because age, actually belongs to catC's prototype; 
and yet, if I execute the statement catC.age;, it does 
indeed return 0. */
console.log(catC.hasOwnProperty("age"));
/*What is actually happening here, is when we ask for catC.age, 
it checks to see if catC has a property named age, and if it 
does it returns it, if not, it asks catC's prototype 
if it has an age property. It continues doing this all the 
way up the prototype chain until it finds the matching property 
or finds an object with a null prototype and if it doesn't 
find the property in the prototype chain it will return undefined. */
/*A prototype chain is basically a linked-list of objects 
pointing backwards to the object from which each one inherits. */
console.log(catC.age);
