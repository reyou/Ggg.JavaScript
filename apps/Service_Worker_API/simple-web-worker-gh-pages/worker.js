onmessage = function (e) {
  console.log('Message received from main script');
  console.log(e.data);
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script: ' + workerResult);
  postMessage(workerResult);
}