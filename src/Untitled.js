// Obtém o elemento de entrada do usuário para o número do cartão de crédito
const myInput = document.getElementById("numero");

// Obtém o botão de envio do formulário
const enviarBtn = document.getElementById("enviar-btn");

// Obtém os elementos de imagem das bandeiras de cartão de crédito
const bandeiraVisa = document.getElementById("bandeira-visa");
const bandeiraMastercard = document.getElementById("bandeira-mastercard");
const bandeiraElo = document.getElementById("bandeira-elo");

// Adiciona um ouvinte de evento ao botão de envio do formulário quando ele é clicado
enviarBtn.addEventListener("click", function(event) {
  event.preventDefault(); // impede que a página seja recarregada quando o botão é clicado
  
  // Remove espaços em branco do valor de entrada do usuário
  const valueInput = myInput.value.replace(/\s/g, ''); 
  
  // Executa a verificação de validade do cartão de crédito usando o algoritmo de Luhn
  const isValid = luhnCheck(valueInput);
  
  // Máscara os primeiros números do cartão de crédito com asteriscos
  const maskify = '**** **** **** ' + valueInput.slice(-4);

  // Exibe uma mensagem de alerta com base no resultado da validação do cartão de crédito
  if (valueInput === '') {
    alert('Por favor, insira um número de cartão válido'); // Se nenhum número foi inserido, exibe uma mensagem de erro
  } else if (isValid) {
    alert('Número de cartão válido ' + maskify); // Se o cartão de crédito for válido, exibe uma mensagem de sucesso com o número do cartão mascarado
  } else {
    alert('Número de cartão inválido'); // Se o cartão de crédito for inválido, exibe uma mensagem de erro
  }
});

// Função para executar a verificação de validade do cartão de crédito usando o algoritmo de Luhn
function luhnCheck(numeroCartao) {
  let soma = 0;
  let digitosPares = false;
  for (let i = numeroCartao.length - 1; i >= 0; i--) {
    let digito = parseInt(numeroCartao.charAt(i));
    if (digitosPares) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }
    soma += digito;
    digitosPares = !digitosPares;
  }
  return soma % 10 === 0; // Se a soma dos dígitos do cartão de crédito for divisível por 10, o cartão é válido
}
// Adicionando um event listener no input "myInput"
myInput.addEventListener("input", function() {
  // Pegando o valor do input e removendo todos os espaços em branco
  const numeroCartao = myInput.value.replace(/\s/g, '');
  
  // Verificando se o número do cartão começa com "4"
  if (numeroCartao.startsWith("4")) {
  // Se começa com "4", exibe a bandeira Visa e esconde as outras bandeiras
    bandeiraVisa.style.display = "inline";
    bandeiraMastercard.style.display = "none";
    bandeiraElo.style.display = "none";
  }
  // Verificando se o número do cartão começa com "5"
  else if (numeroCartao.startsWith("5")) {
  // Se começa com "5", exibe a bandeira Mastercard e esconde as outras bandeiras
    bandeiraMastercard.style.display = "inline";
    bandeiraVisa.style.display = "none";
    bandeiraElo.style.display = "none";
  }
  // Verificando se o número do cartão começa com "6"
  else if (numeroCartao.startsWith("6")) {
  // Se começa com "6", exibe a bandeira Elo e esconde as outras bandeiras
    bandeiraElo.style.display = "inline";
    bandeiraVisa.style.display = "none";
    bandeiraMastercard.style.display = "none";
  }
  // Se o número do cartão não começa com nenhum dos valores acima, esconde todas as bandeiras
  else {
    bandeiraVisa.style.display = "none";
    bandeiraMastercard.style.display = "none";
    bandeiraElo.style.display = "none";
  }
});
  
// Escondendo todas as bandeiras inicialmente
bandeiraVisa.style.display = "none";
bandeiraMastercard.style.display = "none";
bandeiraElo.style.display = "none";