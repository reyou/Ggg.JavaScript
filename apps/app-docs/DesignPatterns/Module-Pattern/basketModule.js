var basketModule = (function () {
    var basket = []; //private
    function doSomethingPrivate() {
        console.log("doSomethingPrivate");
    }
    function doSomethingElsePrivate() {
        console.log("doSomethingElsePrivate");
    }
    return {
        addItem: function (values) {
            basket.push(values);
            console.log(`${values} has been added.`);
        },
        getItemCount: function () {
            return basket.length;
        },
        doSomething: doSomethingPrivate,
        doSomethingElse: doSomethingElsePrivate,
        getTotal: function () {
            var q = this.getItemCount(),
                p = 0;
            while (q--) {
                p += basket[q].price;
            }
            return p;
        }
    }
}());

// basketModule is an object with properties which can also be methods
basketModule.addItem({
    item: 'bread',
    price: 0.5
});
basketModule.addItem({
    item: 'butter',
    price: 0.3
});
console.log("getItemCount", basketModule.getItemCount());
console.log("getTotal", basketModule.getTotal());
console.log("doSomething", basketModule.doSomething());
// however, the following will not work:
console.log(basketModule.basket); // (undefined as not inside the returned object)

