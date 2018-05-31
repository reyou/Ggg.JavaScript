var a = {};

console.log(Object.getPrototypeOf(a)); //[object Object]

console.log(a.__proto__); //[object Object]

//all browsers
//(but only if constructor.prototype has not been replaced and fails with Object.create)
console.log(a.constructor.prototype); //[object Object]

// When a primitive is asked for it’s prototype it will be coerced to an object.
console.log(false.__proto__ === Boolean(false).__proto__); //true
