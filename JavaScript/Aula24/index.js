// for classico - Geralmente com iteraveis (array ou strings)
// for in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteraveis, arrays ou strings)

const nome = "Isa";

for (let valor of nome) {
    console.log(valor);
}

console.log('---------------------');

const nomes = ['Isa', 'Santos', 'Silva'];

for (let valor of nomes) {
    console.log(valor);
}