// Book Factory singleton
var BookFactory = (function () {
    var existingBooks = {};
    return {
        createBook: function (title, author, genre, pageCount, publisherID, ISBN) {
            // Find out if a particular book meta-data combination has been created before
            var existingBook = existingBooks[ISBN];
            if (existingBook) {
                return existingBook;
            } else {
                // if not, let's create a new instance of it and store it
                var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                existingBooks[ISBN] = book;
                return book;
            }
        }
    }
});