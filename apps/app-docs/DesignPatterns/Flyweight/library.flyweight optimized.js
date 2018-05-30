// flyweight optimized version
var Book = function (title, author, genre, pageCount, publisherID, ISBN) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};

Book.prototype = {
    getTitle: function () {
        return this.title;
    },
    getAuthor: function () {
        return this.author;
    },
    getISBN: function () {
        return this.ISBN;
    },
    // other getters not shown for brevity
    updateCheckoutStatus: function (bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
        this.id = bookID;
        this.availability = newStatus;
        this.checkoutDate = checkoutDate;
        this.checkoutMember = checkoutMember;
        this.dueReturnDate = newReturnDate;
    },
    extendCheckoutPeriod: function (bookID, newReturnDate) {
        this.id = bookID;
        this.dueReturnDate = newReturnDate;
    },
    isPastDue: function (bookID) {
        var currentDate = new Date();
        return currentDate.getTime() > Date.parse(this.dueReturnDate);
    }
};