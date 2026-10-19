const formulario = document.querySelector("#formularioContacto");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function (event) {
  // Impede o comportamento normal do formulário:
  // enviar os dados, navegar para o action e recarregar a página.
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;

  mensagem.textContent = "Formulário recebido: " + nome + " - " + email;

  console.log("Nome:", nome);
  console.log("Email:", email);
});
