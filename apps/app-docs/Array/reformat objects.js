/*The following code takes an array of objects and creates a 
new array containing the newly reformatted objects. */
var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
})
console.log("reformattedArray:");
console.log(JSON.stringify(reformattedArray));
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]
