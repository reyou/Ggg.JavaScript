// https://notifyjs.com/
// https://cdnjs.cloudflare.com/ajax/libs/notify/0.4.2/notify.js
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
/*The Document method querySelector() returns the first Element within the 
document that matches the specified selector, or group of selectors. If no 
matches are found, null is returned. */
var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result = document.querySelector('.result');
var logOptions = {
	className: 'info',
	clickToHide: true,
	autoHide: true,
	globalPosition: 'bottom right',
	autoHideDelay: 5000
};
$.notify("Service_Worker_API-simple-web-worker-gh-pages-main.js", logOptions);
if (window.Worker) {
	$.notify("window.Worker available", logOptions);
	// Check if Browser supports the Worker api.
	// Requires script name as input
	/*The Worker interface of the Web Workers API represents a background 
	task that can be easily created and can send messages back to its creator. 
	Creating a worker is as simple as calling the Worker() constructor and specifying 
	a script to be run in the worker thread. */
	// https://developer.mozilla.org/en-US/docs/Web/API/Worker
	var myWorker = new Worker("worker.js");

	// onkeyup could be used instead of onchange if you wanted to update the answer every time
	// an entered value is changed, and you don't want to have to unfocus the field to update its .value

	first.onchange = function () {
		myWorker.postMessage([first.value, second.value]); // Sending message as an array to the worker
		console.log('Message posted to worker');
	};

	second.onchange = function () {
		myWorker.postMessage([first.value, second.value]);
		console.log('Message posted to worker');
	};

	myWorker.onmessage = function (e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	};
}
else {
	$.notify("Your browser does not support Worker!", logOptions);
}