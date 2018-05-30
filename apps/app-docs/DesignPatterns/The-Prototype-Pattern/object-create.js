// No need for capitalization as it's not a constructor
var someCar = {
    drive: function () { },
    name: 'Mazda 3'
};

// Use Object.create to generate a new car
var anotherCar = Object.create(someCar);
// Now you will hopefully see that one is a prototype of the other
anotherCar.name = "Toyota";
console.log("anotherCar.name", anotherCar.name);
console.log("someCar.name", someCar.name);
console.log("someCar == anotherCar", someCar == anotherCar)

// // Use Object.create to generate a new car
// var anotherCar = Object.create(someCar);
//  // Now you'll hopefully see that one is a prototype of the other
// console.log(anotherCar.name);