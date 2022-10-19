// FUNÇÕES - EXECUTAM AÇÕES

function saudacao(/*parametros*/ nome) {
    return `Olá ${nome}`;
}

const variavel = saudacao(/*argumentos*/ "Isa"); // executa a função - reutilizável
console.log(variavel); // sem um retorno, não mostra nada

function soma(a, b) {
    const resultado = a + b;
    return resultado;
}

//O QUE ESTÁ DENTRO DA FUNÇÃO NÃO PODE SER ALTERADO E USADO FORA. A PARTIR DO MOMENTO QUE ADICIONAMOS UM RETURN, O QUE ESTÁ ABAIXO NÃO É EXECUTADO.

const resultado = soma(1, 2);
console.log(resultado);

const raiz = function(numero) {
    return Math.sqrt(numero);
};

console.log(raiz(4));

//Arrow Function - SIMPLIFICAÇÃO DE FUNÇÃO ANONIMA

const raiz2 = (numero) => {
    return Math.sqrt(numero);
}

console.log(raiz2(16));

