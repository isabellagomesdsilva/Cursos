// for in - percorre os índices ou chaves do objeto
const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Isa',
    sobrenome: 'Santos',
    idade: 30,
}

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}