// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// using built-in methods
var start = new Date();

// the event to time goes here:
doSomethingForALongTime();
var end = new Date();
// elapsed time in milliseconds
var elapsed = end.getTime() - start.getTime();
console.log("elapsed:", elapsed);
function doSomethingForALongTime() {
    for (var i = 0; i < 1000000000; i++) {
        if (i % 1000000 == 0) {
            console.log("\ni:");
            console.log(i);
        }
    }
}