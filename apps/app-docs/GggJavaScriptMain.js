//=============================================================================
"use strict";
//=============================================================================

//=============================================================================
// Technically, Node.js does spawn child threads for certain tasks such as 
// asynchronous I/O, but these run behind the scenes and do not execute any 
// application JavaScript code, nor block the main event loop. If threading
// support is desired in a Node.js application, there are tools available to
// enable it, such as the ChildProcess module.
// https://nodejs.org/api/child_process.html
//=============================================================================
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
let setImmediateFun = function () {
    console.log("setImmediateFun");
    // it checks the queue of I/O event handlers. 
    // If all I/O events in the current snapshot are processed,
    // it executes the callback. It queues them immediately after the last 
    // I/O handler somewhat like process.nextTick. 
    // This is faster than setTimeout(fn, 0).
    console.log("setImmediateFun: ", "first");
    setTimeout(function () {
        console.log("setImmediateFun: ", "second setTimeout");
    }, 0);
    setImmediate(function () {
        console.log("setImmediateFun: ", "third setImmediate");
    }, 0);
    console.log("setImmediateFun: ", "fourth");
    console.log("");
}
setImmediateFun();
//=============================================================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
let letFun = function () {
    console.log("letFun");
    let movie = "Titanic";
    function theNoteBook() {
        // only accessible from same block
        let movie = "The Notebook";
        let movieFunny = "Funny Story";
        return movie;
    }
    console.log(theNoteBook());
    console.log(movie);
    try {
        console.log(movieFunny);
    }
    catch (ex) {
        console.log("Error: " + ex.message);
    }
    console.log("");
}
// 
letFun();
//=============================================================================