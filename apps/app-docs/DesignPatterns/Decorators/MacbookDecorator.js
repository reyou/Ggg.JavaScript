// Macbook decorator abstract decorator class
var MacbookDecorator = function (macbook) {
    Interface.ensureImplements(macbook, Macbook);
    this.macbook = macbook;
}

MacbookDecorator.prototype = {
    addEngraving: function () {
        return this.macbook.addEngraving();
    },
    addParallels: function () {
        return this.macbook.addParallels();
    },
    add4GBRam: function () {
        return this.macbook.add4GBRam();
    },
    add8GBRam: function () {
        return this.macbook.add8GBRam();
    },
    addCase: function () {
        return this.macbook.addCase();
    },
    getPrice: function () {
        return this.macbook.getPrice();
    }
}

var CaseDecorator = function (macbook) {
    /*call the superclass's constructor next*/
    this.superclass.constructor(macbook);
}

function extend(obj1, obj2) {
    // https://stackoverflow.com/questions/10430279/extending-an-object-in-javascript
    obj1.prototype = Object.create(obj2.prototype);
    obj1.prototype.constructor = obj1;
}

// Let's now extend the superclass
extend(CaseDecorator, MacbookDecorator);
CaseDecorator.prototype.addCase = function () {
    return this.macbook.addCase() + " Adding case to macbook ";
};
CaseDecorator.prototype.getPrice = function () {
    return this.macbook.getPrice() + 45.00;
};

function MacbookPro() {
    this.cost = function () {
        return 997;
    };
    this.screenSize = function () {
        return 13.3;
    };
    this.getPrice = function () {
        return 900;
    }
}

// Instantiation of the macbook
var myMacbookPro = new MacbookPro();
// This will return 900.00
console.log(myMacbookPro.getPrice());
// Decorate the macbook
myMacbookPro = new CaseDecorator(myMacbookPro); /*note*/
// This will return 945.00
console.log(myMacbookPro.getPrice());