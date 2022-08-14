// window - objeto global do browser que representa a janela do navegador (front-end)
// alert("Com a nossa mensagem"); igual a window.alert("Com a nossa mensagem") - alerta a mensagem
// confirm("Confirmar?"); igual a window.confirm("Confirmar?") - confirma a mensagem
//prompt("Digite algo:"); igual a window.prompt("Digite algo:") - pede para o usuario digitar algo e o valor que é retornado vem como string

const nome = prompt("Digite seu nome:"); // pede para o usuario digitar algo e armazena na variavel nome
console.log(nome); // mostra no console o valor da variavel nome

// Exercicio 1
let num1 = prompt("Digite o primeiro numero:");
let num2 = prompt("Digite o segundo numero:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

const soma = num1 + num2;
alert(`A soma é ${soma}`);

