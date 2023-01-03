/*
Operador Ternário

O operador ternário é um operador composto por três partes. A primeira parte é uma expressão que será avaliada como verdadeira ou falsa. A segunda parte é o que será executado caso a expressão seja verdadeira. A terceira parte é o que será executado caso a expressão seja falsa.
(condição) ? 'Valor para verdadeiro' : 'Valor para falso';
*/

const pontuacaoUsuario = 1000;

/* if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
} else {
    console.log("Usuário normal");
} */

// Operador ternário
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);

// Depos do ? é o que será executado caso a expressão seja verdadeira e depois do : é o que será executado caso a expressão seja falsa.
