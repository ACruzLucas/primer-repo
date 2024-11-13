// Importa la función calculate
const { calculate } = require('./calculator');
beforeEach(() => {
// Configura el DOM simulado para Jest
document.body.innerHTML = `
  <input id="number1" />
  <input id="number2" />
  <div id="result"></div>
`;
});
describe('Pruebas para la función calculate', () => {
  test('debería dividir dos números positivos correctamente', () => {
    document.getElementById('number1').value = "10";
    document.getElementById('number2').value = "2";
    calculate('divide');
    expect(document.getElementById('result').innerText).toBe('Resultado: 5');
  });

  test('debería manejar la división por cero', () => {
    document.getElementById('number1').value = "10";
    document.getElementById('number2').value = "0";
    calculate('divide');
    expect(document.getElementById('result').innerText).toBe('Resultado: No se puede dividir por cero');
  });

  test('debería mostrar un mensaje de error cuando se ingresa un valor no numérico', () => {
    document.getElementById('number1').value = "abc";
    document.getElementById('number2').value = "2";
    calculate('divide');
    expect(document.getElementById('result').innerText).toBe('Resultado: Por favor ingrese números válidos');
  });
});
