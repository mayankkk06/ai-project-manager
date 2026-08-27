function callbackExample(callback) {
  callback("Callback executed");
}

callbackExample((message) => {
  console.log(message);
});

function promiseExample() {
  return new Promise((resolve) => {
    resolve("Promise resolved");
  });
}

promiseExample().then((message) => {
  console.log(message);
});