// 7b. Create the helper that generates radio buttons
Handlebars.registerHelper("makeRadio", function (name, options) {

    // Save the string that the function returns
    var radioList = options.fn();

    // Split the results at the \n
    // radioList = radioList.trim().split("\n");
    radioList = radioList.trim().split(" ");

    var output = "";

    // Cycle through the results and place them in radio elements
    for (var val in radioList) {
        var item = radioList[val].trim();
        output += '<input type="radio" name="' + name + '" value="' + item + '">' + item + '<br />';
    }
    return output;
});

// 8b. 2 values are passed and depending on equality we will
// execute fn() or inverse()
Handlebars.registerHelper("areEqual", function (num1, num2, options) {
    if (num1 === num2) {
        // execute first template
        return options.fn(this);
    } else {
        // execute second template
        return options.inverse(this);
    }
});

// 9b. In a similar way we can display different results
// based on a value passed into our function
Handlebars.registerHelper("if", function (data, options) {
    if (data === "isActive") {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});