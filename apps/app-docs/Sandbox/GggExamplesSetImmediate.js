// https://stackoverflow.com/questions/15349733/setimmediate-vs-nexttick
//=============================================================================
// Use setImmediate if you want to queue the function behind 
// whatever I/O event callbacks that are already in the event queue.
// Use process.nextTick to effectively queue the function at the
// head of the event queue so that it executes immediately 
// after the current function completes.
// So in a case where you're trying to break up a long running,
// CPU-bound job using recursion, you would now want to use setImmediate 
// rather than process.nextTick to queue the next iteration as otherwise 
// any I/O event callbacks wouldn't get the chance to run between iterations.
var fs = require('fs');
var http = require('http');

const options = {
    host: 'www.stackoverflow.com',
    port: 80,
    path: '/index.html'
};

console.log('Start');
setTimeout(() => console.log('TO1'), 0);
setImmediate(() => console.log('IM1'));
process.nextTick(() => console.log('NT1'));
setImmediate(() => console.log('IM2'));
process.nextTick(() => console.log('NT2'));
http.get(options, () => console.log('IO1'));
fs.readdir(process.cwd(), () => console.log('IO2'));
setImmediate(() => console.log('IM3'));
process.nextTick(() => console.log('NT3'));
setImmediate(() => console.log('IM4'));
fs.readdir(process.cwd(), () => console.log('IO3'));
console.log('Done');
