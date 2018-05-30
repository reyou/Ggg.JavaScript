(function() {
  try {
    var foo = 1;
    console.log(foo + " " + bar + " " + baz);
    var bar = 2;
  } catch (ex) {
    console.log(ex);
  }
})();
