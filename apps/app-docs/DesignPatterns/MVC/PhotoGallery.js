var PhotoGallery = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: Photo,
    // Filter down the list of all photos
    // that have been viewed
    viewed: function () {
        return this.filter(function (photo) {
            return photo.get('viewed');
        });
    },
    // Filter down the list to only photos that
    // have not yet been viewed
    unviewed: function () {
        return this.without.apply(this, this.viewed());
    }
});