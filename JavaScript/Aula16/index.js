// Date
/* const data = new Date(); // formada por milésimos de segundos desde 01/01/1970 */

//Formas de usar o Date
/* const duasHoras = 60 * 60 * 2 * 1000; // 2 horas em milésimos de segundos
const data = new Date(0 + duasHoras);  */
/* const umDia = 60 * 60 * 24 * 1000; // 1 dia em milésimos de segundos
const data = new Date(0 + umDia); */
/* const data = new Date(2020, 9, 19, 20, 30, 0, 0); // ano, mês, dia, hora, minuto, segundo, milésimo de segundo*/
/* const data = new Date("2020-10-19 20:30:00"); // ano, mês, dia, hora, minuto, segundo, milésimo de segundo */

// console.log("Dia", data.getDate()); // Dia do mês
// console.log("Mês", data.getMonth() + 1); // Mês começa em 0
// console.log("Ano", data.getFullYear()); // Ano
// console.log("Hora", data.getHours()); // Hora
// console.log("Min", data.getMinutes()); // Minuto
// console.log("Seg", data.getSeconds()); // Segundo
// console.log("Dia semana", data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log("ms", data.getMilliseconds()); // Milésimos de segundo

function addZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth() + 1);
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    const seg = addZero(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);