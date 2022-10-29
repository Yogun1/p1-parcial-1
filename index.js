'use strict';

/*
 * SEBASTIAN, SCHERER
 */

// Ejemplo de la estructura de un disco:
let disco = {
    Nombre: '',
    Autor: '',
    codigo: 0,
    Pistas: [
        {
            Nombre: '',
            Duracion: 0,  
        }
    ]
}
// Discos:
let discos = [];

// Función Cargar:
const cargar = () => {
    let codigo;

    do {
        codigo = +prompt('Ingrese un codigo')
        //validacion
    } while (codigo <= 0 || codigo >= 1000 || isNaN(codigo));
    // pide las pistas 

    //Generar un lugar donde guardar las pistas
    /*let pistas = [];

    // pedir las pistas
    do {
        //pedir el nombre
        //Pedir la duracion
        //guardar la pista

        let pista = {
            nombre: 'NOMBRE',
            duracion: 'DURACION'
        };

        pistas.push(pista)

    }
    while (confirm('Ingrese la pista')) {

    }*/

    // genera el disco 
    const nuevoDisco = {
        ...disco,
        codigo: codigo
    };
    //Guardamos el disco
    discos.push(nuevoDisco);
};

// Función Mostrar:

 const mostrar = () => {
    // Variable para ir armando la cadena:
    console.log(this.disco)
    const cantidadDeDiscos = discos.length;
    let html = '';

    // Cositas:

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