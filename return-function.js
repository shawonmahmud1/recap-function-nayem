function sqr(n) {
  return n * n;
}
function qub(n) {
  return n * n * n;
}

function power(p) {
  return function (n) {
    let result = 1;
    for (let i = 1; i <= p; i++) {
      result = result * n;
    }
    return result;
  };
}
const square = power(2);
const cube = power(3);
const power8 = power(8);

console.log(square(5));

/* console.log(power8(4));
console.log(power8(3));
console.log(power8(5)); */

// console.log(square, cube, power8);

const rs1 = power(10)(2);
console.log(rs1);

function myFn(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * n;
  }
  return result;
}
const rs = myFn(10);
// console.log(rs);

// scope in javascript


/* 
 --1. Global scope
 --2. Local scope
 --3. Block scope
*/

{
  let ex = "no one";
  {
    {
      {
        console.log(ex);
      }
    }
  }
}
