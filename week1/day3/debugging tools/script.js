function x() {
  console.log("done");
}
x();
console.log("==========");
function y() {
  console.log("yes");
  return function z() {
    console.log("done2");
  };
}
console.log("=====2=====");
let a = y();

console.log("=====2=====");
y()();
console.log("==========");
a();
