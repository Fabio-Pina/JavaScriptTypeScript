 /*
* * * Mais sobre Numbers 
  */

//* IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1

num1 = parseFloat(num1).toFixed(2);

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString( ) + num2)
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));
// let temp = num1 * 'Olá'
// console.log(Number.isNaN(temp))
// let temp = num1 + '5';
// console.log(temp)