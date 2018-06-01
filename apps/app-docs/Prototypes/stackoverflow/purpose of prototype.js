// Using the prototype makes for faster object creation,
// since that function does not have to be re-created
// each time a new object is created.

// When you do this:
/*There is one advantage to using the first syntax though: 
functions created in this manner will have access to 
private data: */
function animal() {
  this.name = "rover";
  this.set_name = function(name) {
    this.name = name;
  };
}
// The set_name function is created de novo each and every time you create an animal. But when you do this
/*Using the second method you can also modify or add methods to a class in a way 
that also affects instances that were already created. */
animal.prototype.set_name2 = function(name) {
  this.name = name;
};
/*The function does not have to be re-created each time; it exists in one 
place in the prototype. So when you call someAnimal.set_name("Ubu"); 
the this context will be set to someAnimal and (the one and only) 
set_name function will be called. */
let someAnimal = new animal();
someAnimal.set_name2("Ubu");
