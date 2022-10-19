// NUMBERS
let num1 = 10;
let num2 = 2.5;
console.log(num1 + num2);

// Como transformar um número em string somente no console:
console.log(num1.toString() + num2);

// Como alterar o tipo de número para string:
let num3 = num1.toString();
console.log(typeof num3);

// Como transformar em um número binário:
let num4 = 1500
console.log(num4.toString(2));

// Como transformar em um número inteiro, ou arredondar:
let num5 = 15.5312381;
console.log(num5.toFixed(2))

// Como saber se um número é inteiro ou decimal:
let num6 = 15;
let num7 = 15.5;
console.log(Number.isInteger(num6));
console.log(Number.isInteger(num7));

// Como saber se um número é válido:
let temp = num6 * "Olá"
let num8 = num6 + num7;
console.log(Number.isNaN(temp));
console.log(Number.isNaN(num8));
