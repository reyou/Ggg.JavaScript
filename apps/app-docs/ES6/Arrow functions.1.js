/*ES6, arrow function:
We can skip the `var self = this;` and just return an 
arrow function. The latter will keep the reference to the desired 'this'. */
var myObj = {
  run: function() {
    return () =>
      // arrow function uses the 'this' of its lexical content.
      //notice the syntax.
      console.log(this);
  }
};

myObj.run()();
