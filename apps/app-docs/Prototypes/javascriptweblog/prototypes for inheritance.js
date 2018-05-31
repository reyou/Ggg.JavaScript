/*I want to use prototypes for inheritance. What do I do now?
It rarely makes sense to set a prototype for one instance and 
only one instance, since it would be equally efficient just to add 
properties directly to the instance itself. I suppose if we have 
created a one off object which we would like to share the functionality 
of an established object, such as Array, we might do something 
like this (in __proto__ supporting browsers). */
var a = {};
a.__proto__ = Array.prototype;
console.log(a.length);
