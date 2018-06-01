/*Question #6: How can we use the ES6 spread operator 
instead of `apply()`?
We can use Javascript's `apply()` to pass an array to a function 
that requires one or more separate arguments.  
Explain how can we use the spread operator instead of `apply()`. */
console.log(Math.min(4, 8, 5));
console.log(Math.min([4, 8, 5])); //NaN
console.log(Math.min(...[4, 8, 5])); //4
/*The spread operator will spread the array to single separated 
values and those can be passed to methods such as `Math.min()`. */
