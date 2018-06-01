/*Arrow functions are an improvement comparing to ES5 and prior, 
first because they are less verbose. You code less when using them. 
A second reason is the arrow function uses the 'this' of its lexical 
content. Losing the 'this' is a common scenario if you developed in 
ES5 and previous versions before. Though there are patterns to overcome 
it, ES6 offers 'off the shelve' solution. */
// prior to ES6, no arrow function:

var myObj = {
  run: function() {
    // be careful this is not a function declaration
    // that's this statement refers to "global" context.
    return function() {
      console.log(this);
    };
  }
};
//it will log the window object and not myObj context.
myObj.run()();

/*A common pattern to keep the reference to `myObj` context is to use 
`var self = this` in the desired context and keeping it available 
in the scope. */
var myObj2 = {
  run: function() {
    var self = this;

    return function() {
      console.log(self);
    };
  }
};

myObj2.run()(); //it will log the myObj object, we kept the 'this' reference to the object.
