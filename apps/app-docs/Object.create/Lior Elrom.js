// https://stackoverflow.com/a/25123541/929902
function Person(name) {
    this.name = name;
    this.type = 'human';
}
Person.prototype.info = function () {
    console.log("Name:", this.name, "Type:", this.type);
}

function Robot(name) {
    // 
    Person.call(this, name);
    this.type = 'robot';
}

// Set Robot's prototype to Person's prototype
Robot.prototype = Object.create(Person.prototype);

// Set constructor back to Robot
Robot.prototype.constructor = Robot;

person = new Person("Bob");
robot = new Robot("Boutros");

person.info(); // Name: Bob Type: human
robot.info();  // Name: Boutros Type: robot
