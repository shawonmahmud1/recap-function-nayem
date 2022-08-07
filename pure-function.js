// pure function
function sum() {
  //   return a + b;
}
sum(10, 20); // 30
// side effect of pure function
const limit = 100;
function changeLimit(limit) {
  limit = 500;
  return limit;
}
changeLimit(limit);
console.log(limit);

const arr = [1, 2, 3];
function add(arr, data) {
  console.log(data);
  //   arr.push(data);
}
add(arr);

// impure function

function log(msg) {
  console.log(msg);  //cause this console return to us a undefined. 
}
