const validator = {

  isValid(cardNumber) {
    const reversedNumber = cardNumber.split("").reverse();
    const doubledNumber = reversedNumber.map((number, index) => {
      let digit = parseInt(number);
      if (index % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      return digit;
    });
    const sum = doubledNumber.reduce((acc, curr) => acc + curr);
    return sum % 10 === 0;
  },

  init() {
    const enviarBtn = document.querySelector('#enviarBtn');
    const myInput = document.querySelector('#myInput');
    enviarBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const valueInput = myInput.value.replace(/\s/g, '');
      const isValid = this.isValid(valueInput);
      const maskify = '** ** ** ' + valueInput.slice(-4);
      if (valueInput === '') {
        alert('Por favor, insira um número de cartão válido');
      } else if (isValid) {
        alert('Número de cartão válido ' + maskify);
      } else {
        alert('Número de cartão inválido');
      }
    });
  },
};


export default validator;
