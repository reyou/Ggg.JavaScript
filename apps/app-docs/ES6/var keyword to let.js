var x = 1984;
(function() {
  if (false) {
    var x = 1948; //scoped declaration
  }
  console.log(x);
})();
