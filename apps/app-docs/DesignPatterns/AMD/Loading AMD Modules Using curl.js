curl(['app/myModule.js'], function (myModule) {
    // start the main module which in-turn
    // loads other modules
    var module = new myModule();
    module.doStuff();
});
