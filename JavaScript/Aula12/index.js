/* 
    Primitivos (Valores imutáveis) - string, number, boolean, null (symbol, bigint), undefined = valores copiados
    Referência (Valores mutáveis) - array, object, function = valores passados por referência
*/

/*let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b); - [1, 2, 3, 4] [1, 2, 3, 4] - a e b apontam para o mesmo array, portanto se alterar um, altera o outro */

/*let a = [1, 2, 3];
let b = [...a]; // spread operator - espalha os valores de a em b
console.log(a, b);

a.push(4);
console.log(a, b); // [1, 2, 3, 4] [1, 2, 3] - a e b apontam para arrays diferentes, portanto se alterar um, não altera o outro, b só copia o valor de a não referencia para ele*/
