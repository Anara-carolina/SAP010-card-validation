let container = document.querySelector(".container");

let nome = prompt("Qual é o seu nome?");
if (nome != null) {
  alert(`Bem-vindes, ${nome}!`);
}

container.addEventListener("submit", function(event) {
  event.preventDefault();
  window.location.href = "validator.html";
});