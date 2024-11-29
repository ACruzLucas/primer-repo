var formulario = document.querySelector("#form");

formulario.onsubmit = function (e) {

  e.preventDefault();//utilizar el método correcto

  var inputNombre = formulario.elements[0];//nombres de variables más intuitivos
  var inputEdad = formulario.elements[1];
  var inputNacionalidad = formulario.elements[2];

  var nombre = inputNombre.value.trim();
  var edad = inputEdad.value.trim();
  var i = inputNacionalidad.selectedIndex;
  var nacionalidad = inputNacionalidad.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    inputNombre.classList.add("error");
  } else {
    inputNombre.classList.remove("error");
  }
  if (edad < 18 || edad > 120) {
    inputEdad.classList.add("error");
  } else {
    inputEdad.classList.remove("error");
  }
  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
}


function agregarInvitado(nombre, edad, nacionalidad) {
//utilizamos switch en lugar de if else
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
  }

  var lista = document.getElementById("lista-de-invitados");
  if (!lista) {
    console.error("No se encontró el elemento con id 'lista-de-invitados'");
    return;
  }
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");//Se cambió added por add que es el método correcto
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var espacio = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    input.readOnly = true;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  };
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);
}