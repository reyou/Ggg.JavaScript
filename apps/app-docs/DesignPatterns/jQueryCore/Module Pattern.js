!function (exports, $, undefined) {
    var Plugin = function () {
        // Our private API
        var priv = {},
            // Our public API
            Plugin = {},// Plugin defaults
            defaults = {};
        // Private options and methods
        priv.options = {};
        priv.method1 = function () { };
        priv.method2 = function () { };
        // Public methods
        Plugin.method1 = function () {
            console.log("method1");
        };
        Plugin.method2 = function () {
            console.log("method2");
        };
        // Public initialization
        Plugin.init = function (options) {
            $.extend(priv.options, defaults, options);
            priv.method1();
            return Plugin;
        }
        // Return the Public API (Plugin) we want
        // to expose
        return Plugin;
    }
    exports.Plugin = Plugin;