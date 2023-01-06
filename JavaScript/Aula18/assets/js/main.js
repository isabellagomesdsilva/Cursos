// COM SWITCH
const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = formatDate(data);

function addZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function formatDate (data) {
    const dayNumber = addZero(data.getDate());
    const dayText = data.getDay();
    const mes = data.getMonth();

    const nameDay = getDayNow(dayText);
    const nameMonth = getMonthNow(mes);

    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    return `${nameDay}, ${dayNumber} de ${nameMonth} de ${data.getFullYear()} ${hora}:${min}`;
}

function getDayNow (weekDay){
    let weekDayText;

    switch (weekDay) {
        case 0:
            weekDayText = "Domingo";
            return weekDayText;
        case 1:
            weekDayText = "Segunda-feira";
            return weekDayText;
        case 2:
            weekDayText = "Terça-feira";
            return weekDayText;
        case 3:
            weekDayText = "Quarta-feira";
            return weekDayText;
        case 4:
            weekDayText = "Quinta-feira";
            return weekDayText;
        case 5:
            weekDayText = "Sexta-feira";
            return weekDayText;
        case 6:
            weekDayText = "Sábado";
            return weekDayText;
        default:
            weekDayText = "";
    }
}

function getMonthNow (month){
    let monthText;

    switch (month) {
        case 0:
            monthText = "Janeiro";
            return monthText;
        case 1:
            monthText = "Fevereiro";
            return monthText;
        case 2:
            monthText = "Março";
            return monthText;
        case 3:
            monthText = "Abril";
            return monthText;
        case 4:
            monthText = "Maio";
            return monthText;
        case 5:
            monthText = "Junho";
            return monthText;
        case 6:
            monthText = "Julho";
            return monthText;
        case 7:
            monthText = "Agosto";
            return monthText;
        case 8:
            monthText = "Setembro";
            return monthText;
        case 9:
            monthText = "Outubro";
            return monthText;
        case 10:
            monthText = "Novembro";
            return monthText;
        case 11:
            monthText = "Dezembro";
            return monthText;
        default:
            monthText = "";
    }
}
