function viewHour() {
    const date = new Date();

    return date.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });
}

function functionInterval() {
    console.log(viewHour());
}

const timer = setInterval(function () {
    console.log(viewHour());
}, 1000); 

setTimeout(function () {
    clearInterval(timer);
}, 3000); // para funções depois de determinado tempo

setTimeout(function () {
    console.log("Olá mundo!");
}, 3000); // para funções depois de determinado tempo