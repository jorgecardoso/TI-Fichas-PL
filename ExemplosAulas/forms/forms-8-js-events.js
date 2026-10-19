const nomeInput = document.querySelector("#nome");
const corSelect = document.querySelector("#cor");
const newsletterCheckbox = document.querySelector("#newsletter");
const resultado = document.querySelector("#resultado");

nomeInput.addEventListener("input", function () {
  resultado.textContent = "Nome escrito: " + nomeInput.value;
});

nomeInput.addEventListener("change", function () {
  resultado.textContent = "Nome escrito final: " + nomeInput.value;
});

corSelect.addEventListener("change", function () {
  resultado.textContent = "Cor escolhida: " + corSelect.value;
  resultado.classList.remove(
    "resultado-vermelho",
    "resultado-verde",
    "resultado-azul"
  );

  if (corSelect.value === "red") {
    resultado.classList.add("resultado-vermelho");
  } else if (corSelect.value === "green") {
    resultado.classList.add("resultado-verde");
  } else if (corSelect.value === "blue") {
    resultado.classList.add("resultado-azul");
  }
});

newsletterCheckbox.addEventListener("change", function () {
  if (newsletterCheckbox.checked) {
    resultado.textContent = "O utilizador quer receber novidades.";
  } else {
    resultado.textContent = "O utilizador não quer receber novidades.";
  }
});
