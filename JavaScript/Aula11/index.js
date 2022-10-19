// OBJETOS

const pessoas = {
  nome: "Isabella",
  sobrenome: "Gomes",
  idade: 21,

  fala() {
    console.log(
      `Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`
    );
  },
};

console.log(pessoas.nome); //acessando o nome
console.log(pessoas.sobrenome); //acessando o sobrenome
pessoas.fala();

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
}

const pessoa1 = criaPessoa("Rita", "Gomes", 21);
const pessoa2 = criaPessoa("João", "Silva", 20);
