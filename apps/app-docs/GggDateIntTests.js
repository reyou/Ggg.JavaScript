//=============================================================================
"use strict";
var GggDate = require("./GggDate");
var gggDate = new GggDate();
//=============================================================================
let createDateTest = function () {
    let year = 2020;
    let month = 11;
    let day = 1;
    let date = gggDate.createDate(year, month, day);
    console.log("date", date);
}
// 
createDateTest();
