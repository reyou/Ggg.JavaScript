/*The following code shows how map works when a function 
requiring one argument is used with it. The argument will 
automatically be assigned from each element of the array as map 
loops through the original array. */
var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
    return num * 2;
});
console.log("\n numbers");
console.log(numbers);
console.log("\n doubles");
console.log(doubles);
// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]
