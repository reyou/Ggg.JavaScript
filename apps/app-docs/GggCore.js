// Defines that JavaScript code should be executed in "strict mode".
// With strict mode, you can not, for example, use undeclared variables.
// Strict mode makes it easier to write "secure" JavaScript.
// https://www.w3schools.com/js/js_strict.asp
"use strict";

function GggCore() {
    this.Log = q => console.log(q);
    this.log = q => this.Log(q);
    this.logWithTime = function (q) {
        // Template Literals
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        var date = new Date();
        console.log(`${date}: ${q}`);
    }
}
/* Usage:
let GggCore = require('../Ggg.GggCore');
let gggCore = new GggCore();
*/
module.exports = GggCore;
