// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// to test a function and get back its return
function printElapsedTime(fTest) {
    var nStartTime = Date.now(),
        vReturn = fTest(),
        nEndTime = Date.now();

    console.log('Elapsed time: ' + String(nEndTime - nStartTime) + ' milliseconds');
    return vReturn;
}

var yourFunctionReturn = printElapsedTime(yourFunction);

function yourFunction() {
    for (var i = 0; i < 1000000000; i++) {
        if (i % 1000000 == 0) {
            console.log("\ni:");
            console.log(i);
        }
    }
}