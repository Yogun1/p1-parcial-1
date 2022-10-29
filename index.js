'use strict';

/*
 * SEBASTIAN, SCHERER
 */

// Ejemplo de la estructura de un disco:
let disco = {
    nombre: '',
    autor: '',
    codigo: 0,
    pistas: [
        {
            nombre: '',
            duracion: 0,  
        }
    ]
}
// Discos:
let discos = [];

// Función Cargar:
const cargar = () => {
    let codigo;
// Pedimos codigo de disco
    do {
        codigo = +prompt('Ingrese un codigo')
        //validacion
    } while (codigo <= 0 || codigo >= 1000 || isNaN(codigo));
    // pide el nombre del disco 
    let nombre = '';

    do {
        nombre = prompt('Ingrese el nombre del disco')
    } while (nombre.length == 0);

    // hacer un do while para autor
    let autor = '';

    do {
        autor = prompt('Ingrese el autor del disco')
    } while (autor.length == 0);

    //Generar un lugar donde guardar las pistas
    let pistas = [];

    // pedir las pistas
    do {
        //pedir el nombre
        //Pedir la duracion
        
        let pista = {
            nombre: '',
            duracion: ''
        };
        //guardar la pista
        pistas.push(pista)

    }
    while (confirm('Ingrese la pista'));

    // genera el disco 
    const nuevoDisco = {
        ...disco,
        codigo: codigo,
        nombre: nombre,
        autor: autor,
        pistas: pistas
    };
    //Guardamos el disco
    discos.push(nuevoDisco);
};

// Función Mostrar:

 const mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';
    html += `<p>nombre: ${discos[0].nombre}</p>`;
    html += `<p>autor: ${discos[0].autor}</p>`;
    html += `<p>codigo: ${discos[0].codigo}</p>`;
    
    // recorrer pistas con ul y li + .map:
    let detallePistas = discos[0].pistas.map(pista => {
        return `<li>${pista.nombre} ${pista.duracion}</li>` 
    })    

    html += `<ul>${detallePistas}</ul>`;

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
    };

// Todas las funciones que necesites:

// para cambiar el color

let duracion = 80;

const MostrarColor = function () {

        let color = 'red'

        if (duracion <= 80) {
            color = red;
        } else {
            //cambio el color a green
        }
    
    html =  `<p>aca conecto con front</p>`;

    document.getElementById('info').innerHTML = html;

}
// para la funcion mostrar  pued hacer un 
//console.log(disco.pista)


// puedo usar array asosciativo para los discos y pistas

//let array = ['Alejandro', 'Diaz', 'true']
//let array2 = []


// para las pistas hacer un ul y li con un .map
