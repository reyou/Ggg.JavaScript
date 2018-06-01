let printArity = function() {
  console.log(typeof arguments, arguments.length);
  console.log(arguments);
  console.log(arguments[5]);
  var args = Array.prototype.slice.call(arguments);
  console.log(args.pop());
};

printArity(1, 2, 3, 4, 5, { title: "hello" });
