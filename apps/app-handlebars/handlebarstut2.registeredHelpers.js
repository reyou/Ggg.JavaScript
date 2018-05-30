// 4b. You can create your own helper functions
// This returns a link when text and url are passed in
// escapeExpression() escapes the passed string so it is
// safe to use in content. Helpers should use this method
// when returning content to avoid code injection
Handlebars.registerHelper("makeLink", function (text, url) {
    text = Handlebars.Utils.escapeExpression(text);
    url = Handlebars.Utils.escapeExpression(url);
    var theLink = '<a href="' + url + '">' + text + '</a>';
    // SafeString prevents the string from being escaped
    return new Handlebars.SafeString(theLink);
});

// 5b. Pass an attribute to a helper function
Handlebars.registerHelper("changeColor", function (text, options) {
    text = Handlebars.Utils.escapeExpression(text);
    // You can access the attributes by name
    if (options.hash.color === "red") {
        return new Handlebars.SafeString("<span class='redText'>" + text + "</span>");
    }
    else if (options.hash.color === "blue") {
        return new Handlebars.SafeString("<span class='blueText'>" + text + "</span>");
    }
    else if (options.hash.color === "yellow") {
        return new Handlebars.SafeString("<span class='yellowText'>" + text + "</span>");
    }
    else {
        return new Handlebars.SafeString("<span class='greenText'>" + text + "</span>");
    }
});
// 6b. You can also pass options that can be used by all
// helpers in the template
Handlebars.registerHelper("sayHello", function (options) {
    switch (options.data.lang) {
        case "spanish":
            return "Hola";
            break;
        case "french":
            return "Bonjour";
            break;
        default:
            return "Hello";
    }
});
