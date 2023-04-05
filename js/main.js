const numeroConselho = document.querySelector("#conselho");
const textoConselho = document.querySelector("#texto");
const botao = document.querySelector("#botao");

window.onload = () => {
    obterConselho();
}

async function obterConselho(){
    const response = await fetch ("https://api.adviceslip.com/advice");
    const data = await response.json();
    const conselho = data.slip;

    textoConselho.innerHTML = `"${conselho.advice}"`
    numeroConselho.innerHTML = `#${conselho.id}`
}

botao.addEventListener('click',obterConselho);

