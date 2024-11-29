// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const li = document.querySelector("#lista-de-productos");//Se utiliza query Selector en lugar de getElementByName
const $i = document.querySelector('#filtro-input'); //Se agrego el id 

//Se creó una función para crear producto 

function crearProducto(producto) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var ti = document.createElement("p");
  ti.classList.add("titulo");
  ti.textContent = producto.nombre;

  var imagen = document.createElement("img");
  imagen.setAttribute('src', producto.img);

  d.appendChild(ti);
  d.appendChild(imagen);

  return d;
}

//Se creó la function displayProductos
function displayProductos(productos) {
  productos.forEach(producto => {
    const d = crearProducto(producto);
    li.appendChild(d);
  });
}
displayProductos(productos);
const botonDeFiltro = document.querySelector("#filtro-btn");

botonDeFiltro.onclick = function () {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);

  const productosFiltrados = filtrado(productos, texto);

  //Se utiliza forEach en lugar de ciclo for 
  productosFiltrados.forEach(producto => {
    const d = crearProducto(producto);
    li.appendChild(d);
  });
};
//Se utiliza function en lugar de const
function filtrado(productos = [], texto) {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}

