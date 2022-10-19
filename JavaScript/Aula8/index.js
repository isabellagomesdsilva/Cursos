// OBJETO MATH
let num1 = 9.203812;
let num2 = Math.floor(num1); // arredonda para baixo
console.log(num2);
let num3 = Math.ceil(num1); // arredonda para cima
console.log(num3);
let num4 = Math.round(num1); // arredonda para cima ou para baixo dependendo da posição do decimal
console.log(num4);

console.log(Math.max(10,20,30,40,50,60,70,80,90,100)); // retorna o maior número da sequência
console.log(Math.min(-100,200,300,400,500,600,700,800,900,1000)); // retorna o menor número da sequência
console.log(Math.random()); // retorna um número aleatório entre 0 e 1 sendo que o 1 nunca será retornado

const aleatorio = Math.random() * (100 - 1) + 1; // retorna um número aleatório entre 1 e 100
console.log(aleatorio);

console.log(Math.PI); // retorna o valor de PI
console.log(Math.E); // retorna o valor de Euler
console.log(Math.pow(2,10)); // retorna o valor de 2 elevado a 10


