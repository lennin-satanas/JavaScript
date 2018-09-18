//MAndar funciones como parametros

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    var nombre = this.nombre
    var apellido = this.apellido
    console.log(`Hola mi nombre es ${nombre} ${apellido}`)
    if(fn){
      fn(nombre,apellido, false)
    }

  }
  soyAlto(){
    this.altura > 1.8 ? console.log(`${this.nombre} ${this.apellido} es Alto`):console.log(`${this.nombre} ${this.apellido} es bajo`)
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }
  saludar(fn){
    //desestructurar
    var {nombre, apellido} = this
    console.log(`${nombre} ${apellido} soy Desarrollador`);
    //si nos pasaron una funcion se ejecuta
    if(fn){
      fn(nombre,apellido, true)

    }


  }
}

function responderSaludo(nombre, apellido, esDev){
  console.log(`Buen día ${nombre} ${apellido}`)
  if(esDev){
    console.log(`ah mira, no sabía que eras Desarrollador`)
  }
}


var lennin = new Desarrollador('Lennin', 'Ibara', 1.72)
var valentina = new Persona('Valentina', 'Martinez', 2.3)
var leidy = new Persona('Leidy', 'Burbano', 1.2)


//envio una funcion como parametro
lennin.saludar(responderSaludo)
valentina.saludar(responderSaludo)
leidy.saludar(responderSaludo)
