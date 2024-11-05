function validarFormulario() {
   const nombre = document.getElementById('nombre').value.trim();
   const correo = document.getElementById('correo').value.trim();
   const curso = document.getElementById('curso').value.trim();
   const telefono = document.getElementById('telefono').value.trim();

   if (nombre === '' || correo === '' || curso === '') {
      alert('Por favor, complete todos los campos obligatorios (nombre, correo y curso).');
   } else {
      alert('Formulario enviado correctamente.');
   }
}