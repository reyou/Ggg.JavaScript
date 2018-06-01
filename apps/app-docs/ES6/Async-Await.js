const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
};
getData().then(res => {
  console.log(res);
});
// Now let's log the result to the console using `then` method:
const makeAsync = () => {
  getData().then(data => {
    console.log(data);
  });
};

makeAsync(); //"data" after 3 seconds.
// What we have here is a typical way of using data returned form promise.
// Let's see how the same behavior can be implemented using
// Async function and `await`.
const makeAsync2 = async () => {
  const result = await getData();
  console.log(result);
};

makeAsync2();
