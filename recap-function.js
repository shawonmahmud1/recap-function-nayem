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
generateTwoNum(1000, (rand1, rand2) => {
  console.log(Math.abs(rand1 - rand2));
});
generateTwoNum(10, (rand1, rand2) => {
  console.log(rand1 * rand2);
});
generateTwoNum(10, (rand1, rand2) => {
  console.log(rand1 * rand1 + rand2 * rand2);
});

function sum() {
  //   const random1 = Math.floor(Math.random() * max);
  //   const random2 = Math.floor(Math.random() * max);
  const { random1, random2 } = generateTwoNum();
  return random1 + random2; //placeholder
}

function sub() {
  // const random1 = Math.floor(Math.random() * max);
  // const random2 = Math.floor(Math.random() * max);
  const { random1, random2 } = generateTwoNum();
  return random1 - random2; //placeholder
}
function times() {
  // const random1 = Math.floor(Math.random() * max);
  // const random2 = Math.floor(Math.random() * max);
  const { random1, random2 } = generateTwoNum();
  return random1 * random2; //placeholder
}
function squ() {
  //   const random1 = Math.floor(Math.random() * max);
  //   const random2 = Math.floor(Math.random() * max);
  const { random1, random2 } = generateTwoNum();
  return random1 * random1 + random2 * random2; //placeholder
}
