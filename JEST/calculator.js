function calculate(operation) {
   const number1 = parseFloat(document.getElementById('number1').value);
   const number2 = parseFloat(document.getElementById('number2').value);
   let result;

   if (isNaN(number1) || isNaN(number2)) {
       result = "Por favor ingrese números válidos";
   } else {
       if (operation === 'divide') {
           result = number2 !== 0 ? number1 / number2 : "No se puede dividir por cero";
       } else {
           result = "Operación no válida";
       }
   }

   document.getElementById('result').innerText = `Resultado: ${result}`;
}

module.exports = { calculate };


