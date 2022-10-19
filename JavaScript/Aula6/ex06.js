// Exercício1:

const nome = prompt("Digite seu nome completo: ");
document.body.innerHTML = `Seu nome é <strong>${nome}</strong> <br/>`;
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras. <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é $<strong>{nome[1]}</strong>. <br/>`;
document.body.innerHTML += `O primeiro índice da letra 'a' é <strong>${nome.indexOf('a')}</strong>. <br/>`;
document.body.innerHTML += `O último índice da letra 'a' é <strong>${nome.lastIndexOf('a')}</strong>. <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são <strong>${nome.slice(-3)}</strong>. <br/>`;
document.body.innerHTML += `As palavras do seu nome são $<strong>{nome.split(' ')}</strong>. <br/>`;
document.body.innerHTML += `Seu nome em maiúsculo é <strong>${nome.toUpperCase()}</strong>. <br/>`;
document.body.innerHTML += `Seu nome em minúsculo é <strong>${nome.toLowerCase()}</strong>. <br/>`;