// script.js

// Función para hacer la llamada al API y manejar la respuesta
function fetchAnswer() {
   const questionInput = document.getElementById('pregunta');
   const answerDiv = document.getElementById('respuesta');
   const errorDiv = document.getElementById('error');

   errorDiv.textContent = '';
 
   // Validar que el input no esté vacío
   if (questionInput.value.trim() === '') {
     errorDiv.textContent = 'Por favor, ingresa una pregunta.';
     return;
   }
 
   // Llamada al API
   fetch('https://yesno.wtf/api')
     .then((response) => response.json())
     .then((data) => {

       answerDiv.textContent = data.answer.toUpperCase();
       answerDiv.style.animation = "fadeIn 0.5s";
 
       // Limpiar después de 5 segundos
       setTimeout(() => {
         questionInput.value = ''; // Limpiar el input
         answerDiv.textContent = ''; // Limpiar la respuesta
         answerDiv.style.animation = "none"; // Resetear animación
       }, 5000);
     })
     .catch((error) => {
       errorDiv.textContent = 'Hubo un error al obtener la respuesta. Inténtalo de nuevo.';
       console.error('Error fetching API:', error);
     });
 }
 
 // Función para manejar el evento "Enter" en el input
 function handleKeyEnter(event) {
   if (event.key === 'Enter') {
     fetchAnswer();
   }
 }
 
 // Agregar el eventListener al botón después de cargar el DOM
 document.addEventListener('DOMContentLoaded', () => {
   const fetchButton = document.getElementById('botonfetch');
   fetchButton.addEventListener('click', fetchAnswer);
 });
 

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
