const pessoa = {
    nome: 'João',
    sobrenome: 'Oliveira',
    idade: 25,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// atribuição por desestruturação de objetos
const { nome, sobrenome, ...resto } = pessoa;
const { endereco: { rua, numero } } = pessoa;
console.log(nome, sobrenome);
console.log(resto);
console.log(rua, numero);