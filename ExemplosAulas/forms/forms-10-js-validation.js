const formulario = document.querySelector("#formularioInscricao");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  limparEstados();

  let valido = true;

  if (nome.value.trim() === "") {
    marcarErro(nome);
    valido = false;
  } else {
    marcarSucesso(nome);
  }

  if (email.value.trim() === "") {
    marcarErro(email);
    valido = false;
  } else {
    marcarSucesso(email);
  }

  if (idade.value === "" || Number(idade.value) <= 0) {
    marcarErro(idade);
    valido = false;
  } else {
    marcarSucesso(idade);
  }

  if (curso.value === "") {
    marcarErro(curso);
    valido = false;
  } else {
    marcarSucesso(curso);
  }

  if (valido) {
    mensagem.textContent = "Inscrição enviada com sucesso!";
    mensagem.style.color = "green";
  } else {
    mensagem.textContent = "Por favor, preenche corretamente todos os campos.";
    mensagem.style.color = "crimson";
  }
});

function marcarErro(campo) {
  campo.classList.add("campo-erro");
}

function marcarSucesso(campo) {
  campo.classList.add("campo-sucesso");
}

function limparEstados() {
  const campos = [nome, email, idade, curso];

  campos.forEach(function (campo) {
    campo.classList.remove("campo-erro", "campo-sucesso");
  });
}
