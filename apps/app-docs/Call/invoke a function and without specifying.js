// Using call to invoke a function and without specifying the first argument
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
var sData = 'Wisen';

function display() {
    console.log('sData value is %s ', this.sData);
}
// sData value is Wisen in browser but not in Node.js env
display.call();  

