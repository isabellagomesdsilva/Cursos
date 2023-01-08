// continue - pula a iteração atual
// break - sai do loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
  if (number === 2) {
    console.log('Pulei o número 2');
    continue;
  }

  if (number === 7) {
    console.log('7 encontrado, saindo...');
    break;
  }

  console.log(number);
}