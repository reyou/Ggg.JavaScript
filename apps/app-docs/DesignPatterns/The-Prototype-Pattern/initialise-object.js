var MY_GLOBAL = {
    nextId: function () {
        var random = Math.random();
        return random;
    }
}
var vehicle = {
    getModel: function () {
        console.log('The model of this vehicle is..' + this.model);
    }
};
var car = Object.create(vehicle, {
    'id': {
        value: MY_GLOBAL.nextId(),
        enumerable: true // writable:false, configurable:false by default
    },
    'model': {
        value: 'Ford',
        enumerable: true
    }
});
console.log("car", JSON.stringify(car));
console.log("car.getModel()", car.getModel());