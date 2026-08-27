console.log(message);

var message = "Hoisting example";

sayHello();

function sayHello() {
  console.log("Hello");
}