var CarManager = (function () {
    return CarManager = {
        // request information
        requestInfo: function (model, id) {
            console.log("requestInfo");
            return 'The information for ' + model +
                ' with ID ' + id + ' is foobar';
        },
        // purchase the car
        buyVehicle: function (model, id) {
            console.log("buyVehicle");
            return 'You have successfully purchased Item '
                + id + ', a ' + model;
        },
        // arrange a viewing
        arrangeViewing: function (model, id) {
            console.log("arrangeViewing");
            return 'You have successfully booked a viewing of '
                + model + ' ( ' + id + ' ) ';
        }
    };
})();
CarManager.execute = function (name) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    /*The apply() method calls a function with a given this value, 
    and arguments provided as an array (or an array-like object).*/
    /*While the syntax of this function is almost identical to that of call(), 
    the fundamental difference is that call() accepts an argument list, 
    while apply() accepts a single array of arguments. */
    return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
};

CarManager.execute("arrangeViewing", "Ferrari", "14523");
CarManager.execute("requestInfo", "Ford Mondeo", "54323");
CarManager.execute("requestInfo", "Ford Escort", "34232");
CarManager.execute("buyVehicle", "Ford Escort", "34232");
