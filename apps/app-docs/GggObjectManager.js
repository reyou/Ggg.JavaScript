'use strict';
function GggObjectManager() {
    this.spreadOperatorSample = function () {
        const nums = [1, 2, 3, 4, 5];
        const doIt = (a, b, c, d, e) => {
            console.log(a, b, c, d, e);
        }        
        doIt(...nums);
    }
    this.initializeArraySample = function () {
        const colors = ["red", "blue", "green", "yellow", "orange"];
        const [favColors, sendFavColor, ...otherColors] = colors;
        console.log("initializeArraySample: ");
        console.log(favColors);
        console.log(sendFavColor);
        console.log(otherColors);
    }
    this.initializeVariableSample = function () {
        const person = {
            firstName: "Bob",
            lastName: "Smith"
        }
        const { firstName, lastName } = person;
        const { firstName: fn, lastName: ln } = person;
        console.log("firstName, lastName: ");
        console.log(firstName);
        console.log(lastName);
        console.log("firstName: fn, lastName: ln: ");
        console.log(fn);
        console.log(ln);
    }
    this.getObjectSample = function () {
        var obj = {
            foo: 1,
            get bar() {
                return 2;
            }
        };
        return obj;
    }
    this.objectAssignSample = function () {
        const person = {
            firstName: 'Bob',
            lastName: 'Smith'
        }
        //=============================================================================
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        // The Object.assign() method is used to copy the values of all enumerable
        // own properties from one or more source objects to a target object.
        // It will return the target object.
        // Object.assign(target, ...sources)
        const child = Object.assign({}, person);
        // This feature is non-standard and is not on a standards track. Do not use
        // it on production sites facing the Web
        // Displays an interactive list of the properties of the specified JavaScript 
        // object. The output is presented as a hierarchical listing with disclosure 
        // triangles that let you see the contents of child objects.
        console.dir(person);
        console.dir(child);
        console.log("Are person and child same reference?: " + (person == child));
        console.log("Are person and child same value?: " + (person === child));
    }
    this.deepCloneSample = function () {
        // For deep cloning, we need to use other alternatives because Object.assign()
        // copies property values. If the source value is a reference to an object, 
        // it only copies that reference value.
        let obj1 = { a: 0, b: { c: 0 } }
        let obj2 = Object.assign({}, obj1);
        console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
        //
        obj1.a = 1;
        console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
        console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
        //
        obj2.a = 2;
        console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
        console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 0}}
        //
        obj2.b.c = 3;
        console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
        console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}
        // deep clone
        obj1 = { a: 0, b: { c: 0 } };
        let obj3 = JSON.parse(JSON.stringify(obj1));
        obj1.a = 4;
        obj1.b.c = 4;
        console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}

    }
    this.mergingObjectsWithSamePropertiesSample = function () {
        var o1 = { a: 1, b: 1, c: 1 };
        var o2 = { b: 2, c: 2 };
        var o3 = { c: 3 };
        var obj = Object.assign({}, o1, o2, o3);
        console.log(obj); // { a: 1, b: 2, c: 3 }
    }
    this.mergingObjectsSample = function () {
        var o1 = { a: 1 };
        var o2 = { b: 2 };
        var o3 = { c: 3 };
        var obj = Object.assign(o1, o2, o3);
        console.log(obj); // { a: 1, b: 2, c: 3 }
        console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
    }
    this.deepClone = function (objToClone) {
        var objString = JSON.stringify(objToClone);
        var clonedObj = JSON.parse(objString);
        return clonedObj;
    }
    // This is an assign function that copies full descriptors
    this.completeAssign = function (target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                return descriptors;
            }, {});
            // by default, Object.assign copies enumerable Symbols too
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym);
                if (descriptor.enumerable) {
                    descriptors[sym] = descriptor;
                }
            });
            Object.defineProperties(target, descriptors);
        });
        return target;
    }


}
module.exports = new GggObjectManager();