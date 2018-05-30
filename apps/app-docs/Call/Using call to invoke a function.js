// Using call to invoke a function and specifying the context for 'this'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ');
    console.log(reply);
}
var obj = {
    person: 'Douglas Crockford',
    role: 'Javascript Developer'
};

greet.call(obj);


