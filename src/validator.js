const validator = {   //Aqui, estamos criando um objeto chamado validator. Esse objeto possui duas funções: isValid e maskify.

  isValid(cardNumber) { // Essa é a primeira função do objeto validator. É uma função que recebe um parâmetro cardNumber(VALIDAÇÃO DO CARTÃO).
    function isValid(numeroCartao) { //Aqui, estamos definindo uma função interna chamada isValid. Essa função recebe um parâmetro numeroCartao.
      let soma = 0; //Essa variável soma será usada para armazenar a soma dos dígitos do cartão de crédito.
      let digitosPares = false; //Aqui, estamos criando uma variável booleana digitosPares para controlar quais dígitos serão multiplicados por 2.
      for (let i = numeroCartao.length - 1; i >= 0; i--) { //Esse é um laço de repetição for. Ele percorre todos os dígitos do cartão de crédito, começando pelo último e indo até o primeiro.
        let digito = parseInt(numeroCartao.charAt(i)); //Aqui, estamos convertendo o caractere na posição i do número do cartão em um número inteiro.
        if (digitosPares) { //Aqui, estamos verificando se o dígito atual é um dígito par. Se for, o próximo passo é multiplicar por 2
          digito *= 2; // Aqui, estamos multiplicando o dígito atual por 2.

          if (digito > 9) {  //Aqui, estamos verificando se o dígito multiplicado por 2 é maior do que 9. Se for, precisamos subtrair 9 do resultado.
            digito -= 9; //Aqui, estamos subtraindo 9 do dígito.

          }
        }
        soma += digito; //Aqui, estamos adicionando o dígito à soma dos dígitos do cartão de crédito.
        digitosPares = !digitosPares; //Aqui, estamos alternando a variável digitosPares entre verdadeiro e falso para garantir que apenas os dígitos pares sejam multiplicados por 2.
      }
      return soma % 10 === 0; // Se a soma dos dígitos do cartão de crédito for divisível por 10, o cartão é válido
    }
    return isValid(cardNumber); //Aqui, estamos chamando a função interna isValid com o parâmetro cardNumber recebido pela função isValid do objeto validator.
  },

  maskify(cardNumber) { // Essa é a segunda função do objeto validator. É uma função que recebe um parâmetro cardNumber.
    if (cardNumber.length > 4) { // Aqui, estamos verificando se o número do cartão tem mais de 4 dígitos. Se tiver, precisamos mascarar todos os dígitos, exceto os últimos 4.
      const lastFourDigits = cardNumber.slice(-4); // Extrai os últimos 4 dígitos do número do cartão

      const maskedValue = "#".repeat(cardNumber.length - 4) + lastFourDigits; //// Gera uma string com "#" repetidos o número de vezes necessário para mascarar os dígitos
      return maskedValue; //// Retorna o valor mascarado
    } else { 
      return cardNumber; 
    }
  },
};



export default validator;