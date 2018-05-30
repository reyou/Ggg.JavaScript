/*JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations. */
try {
  foo();

  var foo = function() {
    alert("Hello!");
  };
} catch (ex) {
  console.log(ex);
}
