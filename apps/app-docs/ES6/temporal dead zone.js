// https://stackoverflow.com/questions/33198849/what-is-the-temporal-dead-zone
// This example shows that let is hoisted:
let x = "outer value";
(function() {
  // start TDZ for x
  try {
    console.log(x);
  } catch (ex) {
    console.log(ex);
  }
  let x = "inner value"; // declaration ends TDZ for x
})();
// b is in TDZ until its value is assigned
function testDefaults(a = b, b) {}
// throws ReferenceError because the evaluation of a reads b before it has been evaluated.
try {
  testDefaults(undefined, 1);
} catch (ex) {
  console.log(ex);
}
