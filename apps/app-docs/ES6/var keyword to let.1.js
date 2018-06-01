let x = 1984;
(function() {
  if (false) {
    let x = 1948; //scoped declaration
  }
  console.log(x); //1984
})();
