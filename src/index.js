import validator from './validator.js';



const myInput = document.getElementById("numero");            // Obtém o elemento de entrada do usuário para o número do cartão de crédito
const bandeiraVisa = document.getElementById("bandeira-visa");// Obtém os elementos de imagem das bandeiras de cartão de crédito
const bandeiraMastercard = document.getElementById("bandeira-mastercard");
const bandeiraElo = document.getElementById("bandeira-elo");




myInput.addEventListener("input", function() {             // Adicionando um event listener no input "myInput"
  const numeroCartao = myInput.value.replace(/\s/g, '');   // Pegando o valor do input e removendo todos os espaços em branco
  
  
  if (numeroCartao.startsWith("4")) {           // Verificando se o número do cartão começa com "4"
    bandeiraVisa.style.display = "inline";        // Se começa com "4", exibe a bandeira Visa e esconde as outras bandeiras
    bandeiraMastercard.style.display = "none";
    bandeiraElo.style.display = "none";
  }
  
  else if (numeroCartao.startsWith("5")) {      // Verificando se o número do cartão começa com "5"
    bandeiraMastercard.style.display = "inline";  // Se começa com "5", exibe a bandeira Mastercard e esconde as outras bandeiras
    bandeiraVisa.style.display = "none";
    bandeiraElo.style.display = "none";
  }
  
  else if (numeroCartao.startsWith("6")) {      // Verificando se o número do cartão começa com "6"
    bandeiraElo.style.display = "inline";         // Se começa com "6", exibe a bandeira Elo e esconde as outras bandeiras
    bandeiraVisa.style.display = "none";
    bandeiraMastercard.style.display = "none";
  }
 
  else {
    bandeiraVisa.style.display = "none";           // Se o número do cartão não começa com nenhum dos valores acima, esconde todas as bandeiras
    bandeiraMastercard.style.display = "none";
    bandeiraElo.style.display = "none";
  }
});
  
bandeiraVisa.style.display = "none";           // Escondendo todas as bandeiras inicialmente
bandeiraMastercard.style.display = "none";
bandeiraElo.style.display = "none";


console.log(validator)
