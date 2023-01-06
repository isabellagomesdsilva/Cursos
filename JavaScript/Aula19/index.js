/* const a = 'A';
const b = 'B';
const c = 'C';
 
// atribuição por desestruturação de arrays
const numbers = [1, 2, 3];
[a, b, c] = numbers; */

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const [primeiroNumero, segundoNumero, ...resto] = numbers;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
 
// ... rest operator - junta o resto dos elementos em um array
// ... spread operator - espalha os elementos de um array
