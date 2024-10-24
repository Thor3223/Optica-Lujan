// Variables

const carrito = document.querySelector('#carrito');
const menuCarrito = document.querySelector('#menu-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#VACIAR');
const listaGafas = document.querySelector('#listaGafas');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    //Cuando añades unas gafas presionando "añadir al carrito"
    listaGafas.addEventListener('click', agregarGafa);
}

//Funciones

function agregarGafa(e) {
    
    if ( e.target.classList.contains('añadir-carrito') ) {
        const gafasSeleccionadas = e.target.parentElement.parentElement;

        leerDatosGafas(gafasSeleccionadas);
    }
        
}
    
// Lee el contenido del html al que le dimos click y extrae la info de las gafas

function leerDatosGafas(gafas){
    

// Crear un objeto con el contenido de las gafas actuales

    const infoGafas = {
        imagen: gafas.querySelector('img').src,
        titulo: gafas.querySelector('h3').textContent,
        precio: gafas.querySelector('.precio span').textContent,
        cantidad: 1
    }

    //console.log(infoGafas);

// Agrega elementos al arreglo de carrito

    articulosCarrito =[...articulosCarrito, infoGafas]

    console.log(articulosCarrito);

    carritoHTML();

}


// muestra el carrito de compras en el html

function carritoHTML(){

    articulosCarrito.forEach ( gafas => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>
               ${gafas.titulo}
          </td>
        `;

        //Agrega el HTML del carrito en el tbody
        menuCarrito.appendChild(row);

        })
}







