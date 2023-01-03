const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value)/100;


    if (!peso) {
        setResult('Peso inválido!', false);
        return;
    }
    if (!altura) {
        setResult('Altura inválida!', false);
        return;
    }
    
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    if (nivelImc === 'Abaixo do peso') {
        document.querySelector('#result').style.color = '#e74c3c';
    } else if (nivelImc === 'Peso normal') {
        document.querySelector('#result').style.color = '#2ecc71';
    } else if (nivelImc === 'Sobrepeso') {
        document.querySelector('#result').style.color = '#f1c40f';
    } else if (nivelImc === 'Obesidade grau 1') {
        document.querySelector('#result').style.color = '#e67e22';
    } else if (nivelImc === 'Obesidade grau 2') {
        document.querySelector('#result').style.color = '#e74c3c';
    } else if (nivelImc === 'Obesidade grau 3') {
        document.querySelector('#result').style.color = '#c0392b';
    }

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResult(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc < 18.5) {
        return nivel[0];
    } else if (imc >= 18.5 && imc < 25) {
        return nivel[1];
    } else if (imc >= 25 && imc < 30) {
        return nivel[2];
    } else if (imc >= 30 && imc < 35) {
        return nivel[3];
    } else if (imc >= 35 && imc < 40) {
        return nivel[4];
    } else if (imc >= 40) {
        return nivel[5];
    } else {
        return 'Erro';
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function createParagraph() {
    const msgParagraph = document.createElement('p');
    return msgParagraph;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const msgParagraph = createParagraph();

    if (!isValid) {
        result.classList.add('isValidError');
    }

    msgParagraph.innerHTML = msg;
    result.appendChild(msgParagraph);
}

