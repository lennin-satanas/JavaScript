var nombre = 'Lennin', apellido='Ibarra';


var nombreEnMayusculas = nombre.toUpperCase();
var nombreEnMinusculas = apellido.toLowerCase();

//primera letra de una cadena
var primeraLetraApellido = apellido.charAt(0);


//longitud de las palabras
const longitud = nombre.length;

//ubica las letras de las posiciones solicitadas
const str = nombre.substr(2,2);


let nombre = 'Pepe'

    const persona = {
      nombre: 'Sacha',
      apellido: 'Lifszyc',
      edad: 28,
      saludar: function () {
        console.log(`Hola, me llamo ${this.nombre}`)
      },
      decirAdios: function () {
        console.log('Chau, me voy!')
      }
    }

    const otraPersona = {
      ...persona,
      nombre: 'Eric',
      edad: 24
    }

    nombre = 'Lucas'
    otraPersona.saludar()
    