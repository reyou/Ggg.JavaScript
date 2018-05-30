/*All functions have access to the global scope.  
In fact, in JavaScript, all functions have access to the scope "above" them.
JavaScript supports nested functions. Nested functions have access to the 
scope "above" them.
In this example, the inner function plus() has access to the counter 
variable in the parent function: */
function add() {
  var counter = 0;
  function plus() {
    counter += 1;
  }
  plus();
  return counter;
}
console.log(add());
console.log(add());
console.log(add());
