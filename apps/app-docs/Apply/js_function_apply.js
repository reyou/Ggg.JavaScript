// https://www.w3schools.com/js/js_function_apply.asp
// The apply() method is similar to the call() method:

var person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName: "Mary",
    lastName: "Doe",
}
let res = person.fullName.apply(myObject);  // Will return "Mary Doe"
console.log("\n res:");
console.log(res);

