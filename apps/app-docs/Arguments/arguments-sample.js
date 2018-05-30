// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
/*The arguments object is an Array-like object corresponding to the 
arguments passed to a function. */
function printArguments(title, color, age) {
    var args = Array.prototype.slice.call(arguments);
    var args2 = [].slice.call(arguments);
    // ES2015
    const args3 = Array.from(arguments);
    //
    var args4 = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    //
    console.log("args", args)
    console.log("args2", args2)
    console.log("args3", args3)
    console.log("args4", args4)
}

printArguments("title-qqq", "color-qqq", "age-qqq");



