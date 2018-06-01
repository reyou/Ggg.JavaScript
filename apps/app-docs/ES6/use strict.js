/*In strict mode, for example, If you were to declare a function and not 
define it's 'this', the JavaScript engine will not force it to be the 
window object and it will be set to undefined. Let's see an example:
prior to ES6, no arrow function: */
"use strict";

var functionProperty = function() {
  console.log(this);
};

functionProperty(); //undefined

/*If we would declare the function as an arrow function, 
the 'this' reference will be kept (to the window object in this 
specific case) with no need to pass it. See the following code example:
ES6, arrow function: */
var functionProperty2 = () => {
  //notice the syntax
  console.log(this);
};

functionProperty2(); // {Window}
