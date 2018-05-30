//=============================================================================
"use strict";
var GggCore = require("./GggCore");
var gggCore = new GggCore();
const PI = 3.14;
//=============================================================================

//=============================================================================
let mathArrowFun = function () {
    console.log("mathArrowFun");
    class MathClass {
        constructor() {
            this.circleAreaLetClean = r => PI * r * r;
            this.circleAreaLet = (r) => {
                return this.circleAreaLetClean(r);
            };
            this.circleArea = function (r) {
                return this.circleAreaLet(r);
            };
            this.printSum = function (q, w) {
                gggCore.log(`Total of ${q} + ${w} = ${q + w}.`);
            };
            this.sum = (a = 0, b = 0) => a + b;
            this.sumThreeNumbers = function (q, w, e) {
                var sum = q + w + e;
                return sum;
            }
            this.sumThreeNumbersPrint = function (q, w, e) {
                // spread operator
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
                var sum = this.sumThreeNumbers(q, w, e);
                gggCore.log(`sumAllNumbersPrint: ${sum}.`);
            }
        }
    }
    let mathClass = new MathClass();
    console.log("mathClass.circleAreaLetClean(3): ", mathClass.circleAreaLetClean(3));
    console.log("mathClass.circleAreaLetClean(1): ", mathClass.circleAreaLetClean(1));
    console.log("mathClass.circleAreaLet(1): ", mathClass.circleAreaLet(1));
    mathClass.printSum(1, 9);
    var args = [1, 2, 3, 4];
    mathClass.sumThreeNumbersPrint(...args);

}
mathArrowFun();
//=============================================================================



