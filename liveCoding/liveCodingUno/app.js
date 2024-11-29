// Escribe tu código aquí.
const arregloPalabras = [
   'mesa', 'silla', 'cama', 'ventana', 'cuadro', 'audifonos', 'lampara', 'botella', 'celular'
]

function palabraMayor(palabra, arreglo) {
   const nuevoArreglo = [];
   for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].length > palabra.length) {
         nuevoArreglo.push(arreglo[i]);
      }
   }
   return nuevoArreglo;
}

function imprimirFiltrado(nuevoArreglo) {
   const ulElement = document.querySelector('#lista-palabras'); // Seleccionamos el <ul> por id
   ulElement.innerHTML = '';
   nuevoArreglo.forEach(item => {
      const liElement = document.createElement('li'); // Creamos un <li> para cada palabra
      liElement.textContent = item; // Establecemos el texto del <li>
      ulElement.appendChild(liElement); // Agregamos el <li> al <ul>
   });

}
document.querySelector('#boton-filtro').addEventListener('click', () => {
   const palabraAgregada = document.querySelector('#input-palabra').value; // Obtenemos el valor del input
   const filtro = palabraMayor(palabraAgregada, arregloPalabras); // Filtramos las palabras
   imprimirFiltrado(filtro); // Imprimimos el resultado en la lista
});
