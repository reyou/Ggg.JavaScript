// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//=============================================================================
/*The map() method creates a new array with the results of calling a provided 
function on every element in the calling array. */
//=============================================================================
var array1 = [1, 4, 9, 16];

// pass a function to map
/*callback is invoked with three arguments: the value of the element, the index 
of the element, and the Array object being traversed. */
const map1 = array1.map(function (val, index, arr) {
    console.log("val:");
    console.log(val);
    console.log("index:");
    console.log(index);
    console.log("arr:");
    console.log(JSON.stringify(arr));
    console.log("\n");
    return val * 2;
});

console.log(map1);
// expected output: Array [2, 8, 18, 32]