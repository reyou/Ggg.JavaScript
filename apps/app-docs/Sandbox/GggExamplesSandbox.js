// Defines that JavaScript code should be executed in "strict mode".
"use strict";

var GggCore = require("../Ggg.Core");
var GggMath = require("../Ggg.Math");
var GggText = require("../Ggg.Text");
var GggDataStructures = require("../Ggg.DataStructures");
var gggCore = new GggCore();
var gggMath = new GggMath();
var gggText = new GggText();
var gggDataStructures = new GggDataStructures();

  


// GggExample


// GggExample
// Unhandled exceptions in Node.js can be caught at the Process level by attaching a handler for uncaughtException event.
process.on('uncaughtException', function (err) {
    // https://nodejs.org/api/domain.html
    // However, uncaughtException is a very crude mechanism for exception 
    // handling and may be removed from Node.js in the future.
    // An exception that has bubbled all the way up to the Process level means 
    // that your application, and Node.js may be in an undefined state, 
    // and the only sensible approach would be to restart everything.
    console.log('Caught exception: ' + err);
});

// GggExample
// If you have to debug a huge codebase, and you don't know which 
// Promise can potentially hide an issue, you can use the
// unhandledRejection hook. It will print out all
//  unhandled Promise rejections.
process.on('unhandledRejection', (err) => {
    console.log(err)
})

// GggExample
// How does Node.js support multi-processor platforms, 
// and does it fully utilize all processor resources?
// Node.js provides support for deployment on multiple-core systems,
//  to take greater advantage of the hardware. 
// The Cluster module is one of the core Node.js modules 
// and it allows running multiple Node.js worker processes 
// that will share the same port.

// GggExample
// A typical callback handler could therefore perform error handling as follows:
function callback(err, results) {
    // usually we'll check for the error before handling results
    if (err) {
        // handle error somehow and return
    }
    // no error, perform standard callback handling
}

// GggExample
// The time required to run this code in Google Chrome is 
// considerably more than the time required to run it in 
// Node.js. Explain why this is so, even though 
// both use the v8 JavaScript Engine.
// declaring the variable i outside of any function’s scope makes 
// it global and therefore binds it as a property of the window object. 
// In Node.js, however, declaring any variable outside 
// of any function’s scope binds it only to the module’s own scope (not the window object) 
{
    console.time("loop");
    for (var i = 0; i < 1000000; i += 1) {
        // Do nothing
    }
    console.timeEnd("loop");
}

// GggExample
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('qqq: result')
    }, 100)
}).then(console.log)
    .catch(console.error)

// GggExample
new Promise((resolve, reject) => {
    try {
        throw new Error('error')
    }
    catch (err) {
        console.log("eee: " + err.message);
    }
}).then(console.log).catch("www: " + console.error)

// GggExample
// What's the output of following code snippet?
console.log("What's the output of following code snippet?");
Promise.resolve(1)
    .then((x) => x + 1)
    .then((x) => { throw new Error('rrr: My Error') })
    .catch(() => 1)
    .then((x) => x + 1)
    .then((x) => console.log("What's the output of following code snippet: " + x))
    .catch("ttt: " + console.error);

  // GggExample
  // REPL stands for Read Eval Print Loop
  /*Read - Reads user's input, parse the input into JavaScript data-structure and stores in memory.
   Eval - Takes and evaluates the data structure
   Print - Prints the result
   Loop - Loops the above command until user press ctrl-c twice.*/


