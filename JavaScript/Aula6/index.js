// STRINGS
let umaString = "Um \"texto\" qualquer"; // Um "texto" qualquer - adicionando aspas duplas dentro do texto

console.log(umaString);

let barraInvert = "Um \\texto\\ qualquer"; // Um \texto\ qualquer - adicionando barra invertida dentro do texto

console.log(barraInvert);

// Para pegar um determinado caractere de uma string:
               //01234567 
let caractere = "Um texto"; // Pega o primeiro caractere da string

console.log(caractere[0]); // Imprime o primeiro caractere da string - se pegar uma posição maior que o tamanho do texto ele retorna undefined

console.log(caractere.charAt(1)); // Imprime o segundo caractere da string - se pegar uma posição maior que o tamanho do texto ele retorna undefined

// Para concatenar um valor por uma função:
let concat = "Um texto"
console.log(concat.concat(" qualquer")); // Concatena o texto "qualquer" ao texto "Um texto"
console.log(concat + " qualquer"); // Concatena o texto "qualquer" ao texto "Um texto"
console.log(`${concat} qualquer`); // Concatena o texto "qualquer" ao texto "Um texto"

// Para descobrir o indice de um caractere na string:
let indice = "Um texto qualquer";
console.log(indice.indexOf("texto")); // Imprime o indice do caractere "texto" na string, caso não encontre ele retorna -1
console.log(indice.lastIndexOf("texto")); // Imprime o indice do caractere "texto" na string contando do final para o inicio, caso não encontre ele retorna -1

// Função que retorna um array com as palavras requeridas na expressão regular:
let expressao = "Um texto qualquer";
console.log(expressao.match(/[a-z]/g)); // Imprime um array de acordo com o que foi passado na expressão regular

// Função que substitui o texto por outro:
let substituir = "Um texto qualquer";
console.log(substituir.replace("texto", "outro texto")); // Substitui o texto "texto" por "outro texto"

// Para descobrir o tamanho da string:
let tamanho = "Um texto qualquer";
console.log(tamanho.length); // Imprime o tamanho da string

// Para selecionar um pedaço da string:
let selecionar = "Um texto qualquer";
console.log(selecionar.slice(0, 3)); // Imprime o pedaço da string de 0 a 3

// Para dividir uma string:
let dividir = "Um texto qualquer";
console.log(dividir.split(" ", 3)); // Imprime um array com o que foi passado na expressão regular

// Para colocar tudo em maiúsculo:
let maiusculo = "um texto qualquer";
console.log(maiusculo.toUpperCase()); // Imprime a string em maiúsculo

// Para colocar tudo em minúsculo:
let minusculo = "UM TEXTO QUALQUER";
console.log(minusculo.toLowerCase()); // Imprime a string em minúsculo
