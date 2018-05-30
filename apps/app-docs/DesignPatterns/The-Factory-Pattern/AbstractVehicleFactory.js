var Car = function (options) {
    console.log("Car" + " function has been called: " + JSON.stringify(options));
}
Car.prototype.drive = 1;
Car.prototype.breakDown = 20;

var Truck = function (options) {
    console.log("Truck" + " function has been called: " + JSON.stringify(options));
}
Truck.prototype.drive = 5;
Truck.prototype.breakDown = 10;
var AbstractVehicleFactory = (function () {
    var types = {};
    return {
        getVehicle: function (type, customizations) {
            var Vehicle = types[type];
            return (Vehicle) ? new Vehicle(customizations) : null;
        },
        registerVehicle: function (type, Vehicle) {
            var proto = Vehicle.prototype;
            // only register classes that fulfill the vehicle contract
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
                console.log("registerVehicle", JSON.stringify(types));
            }
            return AbstractVehicleFactory;
        }
    }
})();

AbstractVehicleFactory.registerVehicle("car", Car);
AbstractVehicleFactory.registerVehicle("truck", Truck);

var car = AbstractVehicleFactory.getVehicle("car", { color: "yellow", turbo: true });
var truck = AbstractVehicleFactory.getVehicle("truck", { monster: true, cylinders: 12 });
console.log("car", JSON.stringify(car));
console.log("truck", JSON.stringify(truck));