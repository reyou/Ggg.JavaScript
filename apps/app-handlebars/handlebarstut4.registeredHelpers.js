Handlebars.registerHelper('with', function (context, options) {
    // Here we are passed the context which points to the
    // techData part of our data
    return options.fn(context);
});