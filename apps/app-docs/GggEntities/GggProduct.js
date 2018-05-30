"use strict";

var GggCore = require("../Ggg.Core");
var gggCore = new GggCore();

class GggProduct {
    constructor(title) {
        this.Title = title;
    }
    logToString() {
        gggCore.log(`GggProduct Title: ${this.Title}.`);
    }
}

class GggBestSellerProduct extends GggProduct {
    constructor(title, category) {
        super(title);
        this.Category = category;
    }
    logToString() {
        gggCore.log(`GggBestSellerProduct Title: ${this.Title}, Category: ${this.Category}.`);
    }
}

// examples
/* 
var product = new GggProduct("fifa 17");
var bestsellerProduct = new GggBestSellerProduct("Uncharted", "Action-Adventure");
product.logToString();
bestsellerProduct.logToString();
*/