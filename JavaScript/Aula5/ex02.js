// EXERCICIO 2

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

/* let temp = varA; 

varA =  varB
varB =  varC
varC =  temp

console.log(varA, varB, varC) */

// FORMA SIMPLES DE FAZER
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
