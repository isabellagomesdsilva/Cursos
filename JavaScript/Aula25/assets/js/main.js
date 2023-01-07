const paragrafoDiv = document.querySelector('.paragrafos');
const paragrafosText = paragrafoDiv.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafosText ) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#ffffff';
    p.style.padding = '10px';
    p.style.borderRadius = '5px';
}