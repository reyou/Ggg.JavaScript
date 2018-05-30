// Suppose you want to use a variable for counting something,
// and you want this counter to be available to all functions.
// You could use a global variable, and a function to increase the counter:

var counter = 0;

function add() {
  counter += 1;
}

add();
add();
add();

// the counter is now equal to 3
