// EXERCÍCIO
/* Seu número é n achar:
1 - Raiz quadrada de n
2 - n é inteiro?
3 - n é NaN?
4 - Arredondar para cima 
5 - Arredondar para baixo
6 - Com duas casas decimais
*/

const num = Number(prompt("Digite um número: "));
const numeroTitulo = (document.getElementById("numeroTitulo").innerHTML = num);
const texto = document.getElementById("texto");
const raiz = Math.sqrt(num);
const inteiro = Number.isInteger(num);
const nan = Number.isNaN(num);
const arredondarBaixo = Math.floor(num);
const arredondarCima = Math.ceil(num);
const arredondarDuasCasas = num.toFixed(2);

texto.innerHTML = `<p>Raiz quadrada: ${raiz}.</p> <p>${num} é inteiro: ${inteiro}.</p> <p>É Nan: ${nan}.</p> <p>Arredondando para baixo: ${arredondarBaixo}.</p> <p>Arredondando para cima: ${arredondarCima}.</p> <p>Com duas casas decimais: ${arredondarDuasCasas}.</p>`;
