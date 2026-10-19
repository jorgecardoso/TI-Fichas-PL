console.log("Olá");


let logoEl = document.querySelector("header img");
console.log(logoEl);

logoEl.addEventListener("click", myClickListener);

function myClickListener() {
    console.log("Logo clicado!");
    let h1El = document.querySelector("h1");

    h1El.textContent = "Logo clicado!";

    h1El.setAttribute("id", "teste");
    h1El.setAttribute("class", "teste");
}