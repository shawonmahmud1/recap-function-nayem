/*
 * There are two principle to became a Higher Order Function
 * --1. function can be passed as an arguments.
 * --2. function can be return from another function.
 * 
//  * Hidden concepts to understand higher function
 *--A. Scope
 *--B. Closure
 *--C. Function concepts
 *--D. Hoisting
 */

function generateTwoNum(max, cb) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  return cb(random1, random2);
}

generateTwoNum(100, (rand1, rand2) => {
  console.log(rand1, rand2);
});

generateTwoNum(1000, (rand1, rand2) => {
  console.log(rand1 + rand2);
});

generateTwoNum(10, (rand1, rand2) => {
  console.log(rand1 * rand2);
});

generateTwoNum(10, (rand1, rand2) => {
  console.log(rand1 * rand1 + rand2 * rand2);
});

/* function sum(max) {
    const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);

  const { random1, random2 } = generateTwoNum();
  return random1 + random2;
}
function sum(max) {
   const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  const { random1, random2 } = generateTwoNum();
  return random1 - random2;
}
function sum(max) {
  const random1 = Math.floor(Math.random() * max);
  const random2 = Math.floor(Math.random() * max);
  const { random1, random2 } = generateTwoNum();
  return random1 * random1 + random2 * random2;
} 
 */
