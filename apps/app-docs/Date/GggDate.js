//=============================================================================
// https://docs.microsoft.com/en-us/scripting/javascript/calculating-dates-and-times-javascript
"use strict";
function GggDate() {
    this.createDate = function (year, month, day) {
        // spread operator
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator        
        var dateFields = [year, month, day];
        var date = new Date(...dateFields);
        return date; l
    }
}

module.exports = GggDate;
//=============================================================================
// The following example shows how to instantiate a date without using any
// parameters and display it in the format mm-dd-yy. +
let instantiateADataFun = function () {
    console.log("instantiateADataFun");
    var dt = new Date();
    // Display the month, day, and year. getMonth() returns a 0-based number.  
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var year = dt.getFullYear();
    console.log(month + '-' + day + '-' + year);
    console.log("\n");
}
instantiateADataFun();
//=============================================================================
// Calculating Elapsed Time
// https://docs.microsoft.com/en-us/scripting/javascript/calculating-dates-and-times-javascript
let elapsedTimeFun = function () {
    console.log("elapsedTimeFun");
    var startTime = new Date("1/1/1990");
    var startMsec = startTime.getMilliseconds();
    startTime.setTime(5000000);
    var elapsed = (startTime.getTime() - startMsec) / 1000;
    console.log(elapsed);
    console.log("\n");
}
elapsedTimeFun();
//=============================================================================
let elapsedSecondsFun = function () {
    var timeout = 3000;
    var dateNow = new Date();
    setTimeout(function () {
        console.log("elapsedSecondsFun");
        var datePassed = new Date();
        var elapsed = datePassed - dateNow;
        console.log(elapsed);
        console.log(parseInt(elapsed / 1000), "seconds");
        console.log("\n");
    }, timeout);

}
elapsedSecondsFun();
//=============================================================================