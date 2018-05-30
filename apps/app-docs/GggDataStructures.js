//=============================================================================
"use strict";
var GggCore = require("./GggCore");
var gggCore = new GggCore();
function GggDataStructures() {
    this.reverseArray = function (arr) {
        //validation
        if (arr === undefined || arr === null || arr.length === 0) {
            return arr;
        }
        //copy array to empty one reverse order
        var reversedArray = [];
        var counter = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            reversedArray[counter] = arr[i];
            counter++;
        }
        //return copied array
        return reversedArray;
    }
    this.concatArrays = function (arr1, arr2) {
        // The concat() method is used to merge two or more arrays. 
        // This method does not change the existing arrays, but instead returns a new array.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
        let result = arr1.concat(arr2);
        return result;
    }
    //=============================================================================
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    // The unshift() method adds one or more elements to the beginning of an 
    // array and returns the new length of the array.
    // var a = [1, 2, 3];
    // a.unshift(4, 5);
    // console.log(a); // [4, 5, 1, 2, 3]
    this.unshiftArray = function (arrParam, elemParam) {
        arrParam.unshift(elemParam);
        return arrParam;
    }
    this.applyUnshift = function (arr1, arr2) {
        // The unshift() method adds one or more elements to the 
        // beginning of an array and returns the new length of the array.
        // Prepend all items from arr2 onto arr1  
        // arr1 is now [3, 4, 5, 0, 1, 2]      
        Array.prototype.unshift.apply(arr1, arr2)
        //arr1 = arr1.unshift(arr2);
        return arr1;
    }
    this.printSpreadArray = function () {
        // https://www.youtube.com/watch?v=oTuM8aS62Bg
        var meats = ['Bacon', 'Ham'];
        var foods = ['Apple', ...meats, 'Orange', 'Kiwi'];
        gggCore.log(`Spreaded Arrays: ${foods}`);
    }
}
module.exports = GggDataStructures;

//=============================================================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// removes item from array
var sliceFun = function () {
    console.log("sliceFun");
    var sourceArr = ["red", "green", "blue"];
    var index = 0; // remove green
    var sourceArr = sourceArr.slice(index, 1);
    // https://stackoverflow.com/questions/11954152/whats-the-difference-between-console-dir-and-console-log
    // What's the difference between console.dir and console.log?
    // log only prints out a toString representation, whereas dir prints out a 
    // navigable tree.
    console.dir(sourceArr);
    console.log("\n");
}
sliceFun();
//=============================================================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// The slice() method returns a shallow copy of a portion of an array into a
// new array object selected from begin to end (end not included). 
// The original array will not be modified.
var slicedFun = function () {
    console.log("slicedFun");
    var arr = ['zero', 'one', 'two', 'three'];
    console.log("initial arr", arr);
    var sliced = arr.slice(1, 3);
    console.log("var sliced = arr.slice(1, 3);");
    console.log("after slice arr", arr);      // ['zero', 'one', 'two', 'three']
    console.log("sliced", sliced); // ['one', 'two']
    console.log("\n");
}
slicedFun();
//=============================================================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
/* slice method can also be called to convert Array-like objects / collections 
to a new Array. You just bind the method to the object. The arguments inside a 
function is an example of an 'array-like object'. */
let arrayLikeObjectFun = function () {
    console.log("arrayLikeObjectFun");
    function list() {
        return Array.prototype.slice.call(arguments);
    }
    var list1 = list(1, 2, 3); // [1, 2, 3]
    console.log(list1);
    console.log("\n");
}
arrayLikeObjectFun();
//=============================================================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
let unboundSliceFun = function () {
    console.log("unboundSliceFun");
    var unboundSlice = Array.prototype.slice;
    var slice = Function.prototype.call.bind(unboundSlice);
    function list() {
        return slice(arguments);
    }
    var list1 = list(1, 2, 3); // [1, 2, 3]
    console.log(list1);
    console.log("\n");
}
unboundSliceFun();
//=============================================================================

//=============================================================================