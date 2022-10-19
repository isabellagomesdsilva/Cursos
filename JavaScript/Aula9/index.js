// ARRAYS - LISTA DE ITENS
//            01234567
const nome = "Isabella";
console.log(nome[0]); //I

const alunos = ["Isabella", "Pedro", "João", "Maria", "José"];
alunos[1] = "Jorge"; //Pedro -> Jorge = alteração
alunos.push("Fernando"); //Adicionando um item automaticamente no final do array
alunos.unshift("Otávio"); //Adicionando um item automaticamente no início do array
delete alunos[2]; //Deletando um item do array deixando o índice vazio
const remove = alunos.pop(); //Remove o último item do array
console.log(remove); //Mostra o que foi removido
const remove2 = alunos.shift(); //Remove o primeiro item do array
console.log(remove2); //Mostra o que foi removido
console.log(alunos);
console.log(alunos[0]); //Mosta o que tem no índice 0
console.log(alunos.length); //Tamanho do array
console.log(alunos.slice(0, 3)); //Fatiamento - mostra do índice 0 até o 2
console.log(alunos instanceof Array); //Verifica se é um array
console.log(typeof alunos); //Verifica o tipo da variável
