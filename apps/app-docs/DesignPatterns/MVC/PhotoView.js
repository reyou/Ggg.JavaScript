var PhotoView = Backbone.View.extend({
    //... is a list tag.
    tagName: "li",
    // Pass the contents of the photo template through a templating
    // function, cache it for a single photo
    template: _.template($('#photo-template').html()),
    // The DOM events specific to an item.
    events: {
        "click img": "toggleViewed"
    },
    // The PhotoView listens for changes to
    // its model, re-rendering. Since there's
    // a one-to-one correspondence between a
    // **Photo** and a **PhotoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function () {
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        this.model.bind('destroy', this.remove);
    },
    // Re-render the photo entry
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    // Toggle the `"viewed"` state of the model.
    toggleViewed: function () {
        this.model.viewed();
    }
});