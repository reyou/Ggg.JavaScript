// Using call to invoke an anonymous function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
];
// first
for (var i = 0; i < animals.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
    }).call(animals[i], i);
}
// second 
for (var j = 0; j < animals.length; j++) {
    (function (j) {
        this.print = function () {
            console.log(JSON.stringify(this));
        }
        this.print();
    }).call(animals[j], j);
}