let array = [1, 2, 3, 4, 5];

for (a of array) {
  console.log(a);
}
//
try {
  let object = {
    a: "1",
    b: "2",
    c: "3",
    d: "4"
  };

  for (a of object) {
    console.log(a);
  }
} catch (ex) {
  console.log(ex);
}
