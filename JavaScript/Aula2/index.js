// SEM VARIÁREIS
console.log("SEM VARIÁREIS");
console.log("João nasceu em 1984.");
console.log("Em 2000 João conheceu Maria.");
console.log("João casou-se com Maria em 2012.");
console.log("Maria teve um filho com João em 2018.");
console.log("O filho de João chama-se Eduardo. \n");

// COM VARIÁREIS
// Não podemos criar variáveis com nomes iguais, com palavras reservadas.
// Não pode começar com números.
// Não pode conter espaços ou traços.
// Utilizamos camelCase para nomes de variáveis.
// São Case Sensitive (maiúsculo e minúsculo fazem diferença).
// Não podemos redeclarar variáveis com let.
// NÃO UTILIZE VAR, POIS É MAIS COMUM UTILIZAR LET.
/* DIFERENÇA ENTRE LET E VAR
    Var é uma váriavel global, e pode ser redeclarada.
    Let é uma variável local, e não pode ser redeclarada.
*/
let nome = "Otávio";
console.log("COM VARIÁREIS - LET");
console.log(nome, `nasceu em 1984.`);
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve um filho com", nome, "em 2018.");
console.log("O filho de", nome, "chama-se Eduardo. \n");

// CONSTANTES
// Não podemos alterar o valor de uma constante.
// Não podemos criar constantes com nomes iguais, com palavras reservadas.
// Não pode começar com números.
// Não pode conter espaços ou traços.
// Utilizamos camelCase para nomes de variáveis.
// São Case Sensitive (maiúsculo e minúsculo fazem diferença).
// NÃO UTILIZE VAR, POIS É MAIS COMUM UTILIZAR CONST.

const numero1 = 5;
const numero2 = 10;
const conta = numero1 * numero2;
const resultado = conta * numero1;
console.log("CONSTANTES - CONST");
console.log(numero1, "x", numero2, "=", conta);
console.log(conta, "x", numero1, "=", resultado);
console.log(
  typeof resultado,
  "Typeof - mostra o tipo da variável resultado. \n"
);

// EXERCÍCIO
const nomeEx = "Isabella";
const sobrenome = "Gomes";
const idade = 21;
const peso = 60;
const altura = 1.57;
let imc = peso / (altura * altura);
let anoNascimento = 2022 - idade;
console.log("EXERCÍCIO");
console.log(
  nomeEx,
  sobrenome,
  "tem",
  idade,
  "anos, pesa",
  peso,
  "kg,",
  "tem",
  altura,
  "de altura,",
  "seu IMC é de",
  imc
);
console.log(nomeEx, "nasceu em", anoNascimento, ".\n");

// TEMPLATE STRINGS
console.log("TEMPLATE STRINGS");
console.log(
  `${nomeEx} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, seu IMC é de ${imc}.`
);
console.log(`${nomeEx} nasceu em ${anoNascimento}.`);
