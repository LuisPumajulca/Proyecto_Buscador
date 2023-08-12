//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la búsqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas :'',
    transmision :'',
    color : ''
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los autois al cargar
    mostrarAutos();

    //Llena las opciones de años
    llenarSelect();
})

// Event listener para los select de búsqueda
marca.addEventListener('change', e => {
    console.log(`Marca: ${e.target.value}`);
})


//Funciones
function mostrarAutos() {
    autos.forEach( auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML)
    })
}

// Genera los años del select
function llenarSelect(){

    for( let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion) // Agrega en las opciones de año al select
    }

}
