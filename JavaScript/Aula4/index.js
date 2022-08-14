/* OPERADORES ARITMETICOS => + - * / % **
    + => soma / concatenação
    - => subtração
    * => multiplicação
    / => divisão
    % => resto da divisão
    ** => potenciação

    PRECEDENCIA => () => ** => * / % => + -
    ++ => incremento
    -- => decremento

    OPERADORES DE ATRIBUIÇÃO => = += -= *= /= %= **=
    += => atribuição +
    -= => atribuição -
    *= => atribuição *
    /= => atribuição /
    %= => atribuição %
    **= => atribuição **

    NaN => Not a Number
    parseInt => converte para inteiro
    parseFloat => converte para decimais
    Number => converte para número
*/

const numero1 = 2;
const numero2 = 5;
console.log("SOMA =", numero1 + numero2); // 7
console.log("SUB =", numero1 - numero2); // -3
console.log("MULT =", numero1 * numero2); // 10
console.log("DIVISÃO =", numero1 / numero2); // 0.4
console.log("RESTA =", numero1 % numero2); // 2
console.log("POTENCIA =", numero1 ** numero2); // 32

// CONCATENAÇÃO
const numero3 = "10";
const numero4 = 5;
console.log("CONCAT =", numero3 + numero4); // 105

// INCREMENTO
let numero5 = 10;
numero5++; // 11
console.log("INCREMENTO =", numero5); // 11

// DECREMENTO
let numero6 = 10;
numero6--; // 9
console.log("DECREMENTO =", numero6); // 9

// ATRIBUICAO +
let numero7 = 10;
numero7 += 5; // 15
console.log("ATRIBUICAO + =", numero7); // 15

// ATRIBUICAO -
let numero8 = 10;
numero8 -= 5; // 5
console.log("ATRIBUICAO - =", numero8); // 5

// ATRIBUICAO *
let numero9 = 10;
numero9 *= 5; // 50
console.log("ATRIBUICAO * =", numero9); // 50

// ATRIBUICAO /
let numero10 = 10;
numero10 /= 5; // 2
console.log("ATRIBUICAO / =", numero10); // 2

// ATRIBUICAO %
let numero11 = 10;
numero11 %= 5; // 0
console.log("ATRIBUICAO % =", numero11); // 0

// ATRIBUICAO **
let numero12 = 10;
numero12 **= 5; // 100000
console.log("ATRIBUICAO ** =", numero12); // 100000

// NaN
const numero13 = "L5";
const numero14 = 5;
console.log("CONCAT =", numero13 * numero14); // NaN

// parseInt
const numero15 = parseInt("5");
const numero16 = 10;
console.log("parseInt =", numero15 + numero16); // 15

// parseFloat
const numero17 = parseFloat("5.5");
const numero18 = 10;
console.log("parseFloat =", numero17 + numero18); // 15.5

// Number
const numero19 = Number("5");
const numero20 = 10;
console.log("Number =", numero19 + numero20); // 15

