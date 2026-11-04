
let btnEl = document.querySelector("button");
let navEl = document.querySelector("nav");

btnEl.addEventListener("click", botaoClickado);

function botaoClickado() {
    console.log("Botao clicado");
    navEl.classList.toggle("escondido");
}

