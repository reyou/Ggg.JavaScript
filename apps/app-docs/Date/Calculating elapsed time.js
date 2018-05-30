// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// using Date objects
var start = Date.now();
console.log("start:", start);
// the event to time goes here:
doSomethingForALongTime();
var end = Date.now();
console.log("end:", end);
var elapsed = end - start; // elapsed time in milliseconds
console.log("elapsed:", elapsed);
function doSomethingForALongTime() {
    for (var i = 0; i < 1000000000; i++) {
        if (i % 1000000 == 0) {
            console.log("\ni:");
            console.log(i);
        }
    }
}