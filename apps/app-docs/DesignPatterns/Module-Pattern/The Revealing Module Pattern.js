var myRevealingModule = (function () {
    var name = 'John Smith';
    var age = 40;
    function updatePerson() {
        name = 'John Smith Updated';
    }
    function setPerson() {
        name = 'John Smith Set';
    }
    function getPerson() {
        return name;
    }
    return {
        set: setPerson,
        get: getPerson
    };
}());
// Sample usage:
var name = myRevealingModule.get();
console.log("name", name);
myRevealingModule.set();
name = myRevealingModule.get();
console.log("name", name);