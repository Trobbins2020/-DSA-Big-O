// 1. Counting Sheep
const countingSheep = (sheepNumber) => {
  for (let i = sheepNumber; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence`);
  }
  console.log(`All sheep jumped over the fence`);
};
// let sheepNumber = 10;
// countingSheep(sheepNumber);

// 2. Power Calculator
const powerCalculator = (num, power) => {
  let temp = num;
  if (power <= 0) {
    return `exponent should be >= 0`;
  }
  for (let i = 1; i < power; i++) {
    temp *= num;
  }
  return temp;
};
// let num = 10;
// let power = 2;
// console.log(powerCalculator(num, power));

// 3. Reverse String
const reverseString = (str) => {
  let newString = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};
// let str = `Talon Robbins`;
// console.log(reverseString(str));

// 4. nth Triangular Number
const triangularNumber = (nth) => {
  let temp = 0;
  for (let i = 0; i <= nth; i++) {
    temp += i;
  }
  return temp;
};
// let nth = 4;
// console.log(triangularNumber(nth));

// 5. String Splitter
const stringSplitter = (string, splitter) => {
  let arr = [];
  let temp = ``;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === splitter || i === string.length) {
      arr.push(temp);
      temp = ``;
    } else temp += string[i];
  }
  return arr;
};
// console.log(stringSplitter("02/20/2020", "/"));

// 6. Fibonacci
const fibonacci = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1 || i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
};
// console.log(fibonacci(10));

// 7. Factorial
const Factorial = (num) => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};
// console.log(Factorial(5));
