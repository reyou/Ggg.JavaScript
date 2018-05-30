/*Using map generically
This example shows how to use map on a String to get 
an array of bytes in the ASCII encoding representing the character values: */
var map = Array.prototype.map;
var a = map.call('Hello World', function (x) {
    return x.charCodeAt(0);
});
console.log("a:");
console.log(JSON.stringify(a));
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
