//=============================================================================
// A car 'class'
function Car(model) {
    this.model = model;
    this.color = 'silver';
    this.year = '2012';
    this.getInfo = function () {
        return this.model + ' ' + this.year;
    }
}
// We can then instantiate the object using the Car constructor we defined 
// above like this:
var myCar = new Car('ford');
myCar.year = '2010';
console.log(myCar.getInfo());
