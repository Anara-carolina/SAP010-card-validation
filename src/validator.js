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
};



export default validator;