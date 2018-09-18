function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
   this.altura > 1.8 ? console.log('soy alto'):console.log('soy bajo')
}

/*
En esta clase explicamos por qué al introducir el arrow function salió un error. El error del contexto de this en javascrip es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

*/


//Persona.prototype.soyAlto = () => this.altura > 1.8 ? console.log('soy alto'):console.log('soy bajo')

//this === windows

var lennin = new Persona('Lennin', 'Ibarra', 1.68)
var valentina = new Persona('Valentina', 'Martinez', 1.84)

lennin.soyAlto()
valentina.soyAlto()
