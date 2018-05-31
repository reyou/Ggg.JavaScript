/*Destructing assignment in another improvement in Es6. 
It allows us to extract data from array and objects into separate variables.
Example: */
let full_name = ["John", "Deo"];

let [first_name, last_name] = full_name;

console.log(first_name, last_name);
// outputs John Deo

let c = [100, 200, 330, 400];

let [a, ...b] = c;

console.log(a, b);

// outputs 100 [200, 330, 400]
