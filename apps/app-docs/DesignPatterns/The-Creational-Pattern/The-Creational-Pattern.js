//=============================================================================
// Each of the following options will create a new empty object:
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();
//=============================================================================
// ECMAScript 3 compatible approaches
// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties
var key = newObject.someKey; // Access properties
console.log('key', key);
// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties
console.log('key', key);
//=============================================================================
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
// 3. Object.defineProperty
Object.defineProperty(newObject, "someKey", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(newObject, "someKey2", {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log("newObject", newObject);
// If the above feels a little difficult to read, a short-hand could
// be written as follows:
var defineProp = function (obj, key, value) {
    var config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true
    }
    Object.defineProperty(obj, key, config);
}
// Create a new empty object
var man = Object.create(null);
// Populate the object with properties
defineProp(man, 'car', 'Delorean');
defineProp(man, 'color', 'Blue');
console.log("man", man);
//=============================================================================
// 4. Object.defineProperties
Object.defineProperties(newObject, {
    "someKey": {
        value: "Hello World",
        writable: true,
        enumerable: true,
        configurable: true
    },
    "anotherKey": {
        value: "Foo bar",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log("newObject", newObject);
//=============================================================================
// As we will see a little later in the book, these methods can even be used 
// for inheritance, as follows:
var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
console.log("driver", driver); // 100mph
//=============================================================================
