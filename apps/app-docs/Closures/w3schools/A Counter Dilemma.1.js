/*The counter should only be changed by the add() function.
The problem is, that any script on the page can change the counter, 
without calling add().
If I declare the counter inside the function, nobody will be 
able to change it without calling add(): */

function add() {
  var counter = 0;
  counter += 1;
  return counter;
}

console.log(add());
console.log(add());
console.log(add());

// the counter should now be 3, but it does not work !
