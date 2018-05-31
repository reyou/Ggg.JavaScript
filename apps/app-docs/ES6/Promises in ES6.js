var wait1000 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000);
}).then(function() {
  console.log("Yay!");
});
// Or with ES6 arrow functions:
var wait1001 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
}).then(() => {
  console.log("Yay 2!");
});
// Can be re-written with ES6 promises:
var wait1003 = function() {
  console.log("wait1003");
};
var wait1002 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
wait1002()
  .then(function() {
    console.log("Yay 3!");
    return wait1003();
  })
  .then(function() {
    console.log("Wheeyee!");
  });
