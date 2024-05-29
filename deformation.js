let A = [1, 2, 3];
let B = [4, 5, 6];
let C = [...A, ...B];
console.log(C)

const numbers = [2, 4, 6, 34, 6, 7, 8];
const [a, b, c, ...others] = numbers;
console.log(others);

