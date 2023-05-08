const validator = {
  isValid(cardNumber) {
    function isValid(numeroCartao) {
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
    return isValid(cardNumber);
  },
  
  maskify(cardNumber) {
    if (cardNumber.length > 4) {
      const lastFourDigits = cardNumber.slice(-4);
      const maskedValue = "#".repeat(cardNumber.length - 4) + lastFourDigits;
      return maskedValue;
    } else {
      return cardNumber;
    }
  },

  init() {
    const enviarBtn = document.getElementById("enviar-btn");
    const numeroCartaoInput = document.getElementById("numero");
    enviarBtn.addEventListener("click", function() {
      const numeroCartao = numeroCartaoInput.value;
      const isValid1 = validator.isValid(numeroCartao);
      if (numeroCartao === '') {
        alert('Por favor, insira um número de cartão válido');
      } else if (isValid1) {
        alert('sua compra foi aprovada com sucesso!!! numero de cartão válido! ' + validator.maskify(numeroCartao));
      } else {
        alert('Sua compra infelizmente não foi aprovada, digite um número de cartão válido');
      }
    });
  }
};

validator.init();

export default validator;