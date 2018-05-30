var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel;
    },
    getModel: function () {
        console.log('The model of this vehicle is..' + this.model);
    }
};
function vehicle(model) {
    function F() { };
    F.prototype = vehiclePrototype;
    var f = new F();
    f.init(model);
    return f;
}
var car = vehicle('Ford Escort');
car.getModel();

var beget = (function () {
    function F() { }
    return function (proto) {
        F.prototype = proto;
        return new F();
    };
})();

console.log("typeof beget", typeof beget);
 