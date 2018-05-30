// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
/*The apply() method calls a function with a given this value, 
and arguments provided as an array (or an array-like object).*/
/*Note: While the syntax of this function is almost identical to that of call(), 
the fundamental difference is that call() accepts an argument list, while apply()
 accepts a single array of arguments. */

function MyConstructor() {
    console.log("\n MyConstructor")
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
    }
}

MyConstructor.construct = function (aArgs) {
    console.log("\n aArgs:");
    console.log(aArgs);
    var oNew = Object.create(this.prototype);
    this.apply(oNew, aArgs);
    console.log("\n oNew:");
    console.log(oNew);
    return oNew;
};


var myArray = [4, 'Hello world!', false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1);                // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor);              // logs 'MyConstructor'
