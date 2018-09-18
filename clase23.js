function hereraDe(prototipoHijo, prototipoPadre){
    var fn = function(){
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
  }
}

function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.soyAlto = function(){
  this.altura > 1.8 ? console.log(`${this.nombre} es alto mide ${this.altura}`) : console.log(`${this.nombre} es bajo mide ${this.altura}`)
}

Persona.prototype.saludar = function(){
  console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
}



function Desarrollador(nombre, apellido){
  this.nombre = nombre
  this.apellido = apellido
}

hereraDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`);
}


/*
var lennin= new Persona('Lennin', 'Ibarra', 1.9)

lennin.saludar()
lennin.soyAlto()

*/
