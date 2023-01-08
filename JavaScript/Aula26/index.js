// while - checa a condição antes de executar o bloco
const array = ['a', 'b', 'c', 'd', 'e'];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}
console.log('-----------------');

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('-----------------');

// do while - executa pelo menos uma vez o bloco

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);