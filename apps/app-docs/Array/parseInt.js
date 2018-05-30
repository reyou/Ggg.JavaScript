// http://www.wirfs-brock.com/allen/posts/166
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//=============================================================================
/*It is common to use the callback with one argument (the element being traversed). 
Certain functions are also commonly used with one argument, even though they 
take additional optional arguments. These habits may lead to confusing behaviors. */
// Consider:
let mappedInts = ['1', '2', '3'].map(parseInt);
// While one could expect [1, 2, 3]
// The actual result is [1, NaN, NaN]
console.log("mappedInts:");
console.log(JSON.stringify(mappedInts));
// parseInt is often used with one argument, but takes two.
// The first is an expression and the second is the radix.
// To the callback function, Array.prototype.map passes 3 arguments: 
// the element, the index, the array
// The third argument is ignored by parseInt, but not the second one,
// hence the possible confusion. See the blog post for more details

function returnInt(element) {
    return parseInt(element, 10);
}

mappedInts = ['1', '2', '3'].map(returnInt); // [1, 2, 3]
console.log("\nmappedInts2:");
console.log(JSON.stringify(mappedInts));
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
mappedInts = ['1', '2', '3'].map(str => parseInt(str));
console.log("\nmappedInts3:");
console.log(JSON.stringify(mappedInts));
// A simpler way to achieve the above, while avoiding the "gotcha":
mappedInts = ['1', '2', '3'].map(Number); // [1, 2, 3]
console.log("\nmappedInts4:");
console.log(JSON.stringify(mappedInts));
// but unlike `parseInt` will also return a float or (resolved) exponential notation:
let mappedNumbers = ['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
console.log("\nmappedNumbers:");
console.log(JSON.stringify(mappedNumbers));