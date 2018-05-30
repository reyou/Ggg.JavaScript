var Car = function (options) {
    console.log("Car" + " function has been called: " + JSON.stringify(options));
}
var Truck = function (options) {
    console.log("Truck" + " function has been called: " + JSON.stringify(options));
}
function VehicleFactory() { }
VehicleFactory.prototype.vehicleClass = Car;
VehicleFactory.prototype.getVehicle = function (options) {
    return new this.vehicleClass(options);
}

var carFactory = new VehicleFactory();
var car = carFactory.getVehicle({ color: 'yellow', turbo: true });
console.log("car instanceof Car", car instanceof Car);

// approach #1: Modify a VehicleFactory instance to use the Truck class
carFactory.vehicleClass = Truck;
var mover = carFactory.getVehicle({ enclosedCargo: true, length: 26 });
console.log("mover instanceof Truck", mover instanceof Truck);

// approach #2: Subclass VehicleFactory to create a factory class that
// builds Trucks
function TruckFactory() { }
TruckFactory.prototype = new VehicleFactory();
TruckFactory.prototype.vehicleClass = Truck;
var truckFactory = new TruckFactory();
var bigfoot = truckFactory.getVehicle({ monster: true, cylinders: 12 });
console.log("bigfoot instanceof Truck", bigfoot instanceof Truck);
