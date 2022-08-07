function A() {
  console.log("I am A");
}
function B() {
  A();
}
function C() {
  B();
  B();
}
function D() {
  C();
  A();
}
D();

// IIFE - instantly invoked function expression
(function getName(name) {
  console.log(name);
})("Shawon");

(() => {
  console.log("Bonna");
})("Shawon");
