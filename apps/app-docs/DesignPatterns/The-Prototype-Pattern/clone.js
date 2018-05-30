function clone(obj) {
    var val, length, i,
        temp = [];
    if (Array.isArray(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
            // Store reference to this array item's value
            val = obj[i];
            // If array item is an object (including arrays), derive new value by cloning
            if (typeof val === "object") {
                val = clone(val);
            }
            temp[i] = val;
        }
        return temp;
    }
    // Create a new object whose prototype is a new, empty object,
    // Using the second properties object argument to copy the source properties
    return Object.create({}, (function (src) {
        // Initialize a cache for non-inherited properties
        var props = {};
        Object.getOwnPropertyNames(src).forEach(function (name) {
            // Store short reference to property descriptor
            var descriptor = Object.getOwnPropertyDescriptor(src, name);
            // Recurse on properties whose value is an object or array
            if (typeof src[name] === "object") {
                descriptor.value = clone(src[name]);
            }
            props[name] = descriptor;
        });
        return props;
    }(obj)));
}
var Car = {
    name: "Mercedes",
    year: 1970,
    engine: "V6"
}
var carClone = clone(Car);
carClone.engine = "V4";
console.log("Car", Car);
console.log("carClone", carClone);