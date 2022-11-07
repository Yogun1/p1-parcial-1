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

    do {

        let codigo;
        
        // Pedimos codigo de disco
                
            do {
            codigo = +prompt('Ingrese un codigo')
            //validacion            
        } while (codigo <= 0 || codigo >= 1000 || isNaN(codigo));
        
        
        //Si el usuario ingresa un código numérico que ya fue cargado, se deberá pedir otro código
        


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
            let nombre = '';
            do {
                nombre = prompt('Ingrese el nombre de la pista')
            } while (nombre.length == 0);
            //Pedir la duracion

            let duracion = 0;
            do {
                duracion = prompt('Ingrese duracion de la pista')
            } while (duracion <= 0 || duracion >= 7201 || isNaN(duracion));

            let pista = {

                nombre: nombre,
                duracion: duracion
            };

            //guardar la pista
            pistas.push(pista)

        }
        while (confirm('Desea ingresar otra pista?'));

        // genera el disco 
        const nuevoDisco = {
            ...disco,
            codigo: codigo,
            nombre: nombre,
            autor: autor,
            pistas: pistas,

        }
        //Guardamos el disco
        discos.push(nuevoDisco);

    } while (confirm('Desea ingresar un nuevo disco?'));

};

// Función Mostrar:

const mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    discos.forEach(disco => {

        html += `<p>Nombre: ${disco.nombre}</p>`;
        html += `<p>Autor: ${disco.autor}</p>`;
        html += `<p>Codigo: ${disco.codigo}</p>`;

        // recorrer pistas con ul y li + .map:
        let detallePistas = disco.pistas.map(pista => {
            return `<li>Pista: ${pista.nombre} </br> Duracion: ${pista.duracion}</li>`
        })

        html += `<ul>${detallePistas}</ul>`;

    });
    // Recorrer discos con ul y li + .map:

    let cantidadDiscos = discos.length;

    html += `<ul>${cantidadDiscos}</ul>`;

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites (validaciones):

// para cambiar el color Hay que destacar visualmente con rojo las duraciones mayores a 180.
let duracion = 0;

function MostrarColor() {

    let color = 'red';

    if (duracion <= 80) {
        color = red;
    } else {
        //cambio el color a green
        color = green;
    }

    html = `<p>aca conecto con front</p>`;

    document.getElementById('info').innerHTML = html;

}

/*
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) {
  console.log(color)
})
// red
// green
// blue
/*


// Si el usuario ingresa un código numérico que ya fue cargado, se deberá pedir otro código (hasta ingresar uno que no haya sido utilizado anteriormente)



// para el 10:
/*Informen por cada disco:
  - La cantidad de pistas que tiene cada disco.
  - La duración total del disco.
  - El promedio de duración de cada disco.
  - La pista con mayor duración de cada disco. 
*/
