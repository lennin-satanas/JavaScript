class Persona {
  constructor(nombre, apellido, altura, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    this.edad = edad
  }
  soyAlto(){
    this.altura > 1.8 ? console.log(`${this.nombre} es alto mide ${this.altura}`) : console.log(`${this.nombre} es bajo mide ${this.altura}`)
  }
  saludar(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`)
  }

}


class Desarrollador extends Persona{
  constructor(nombre, apellido, altura, edad, sexo){
    super(nombre,apellido,altura, edad)
    this.sexo = sexo
  }
  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a de genero ${this.sexo}`);
  }
}

class Programador extends Desarrollador{
  constructor(nombre, apellido, altura, edad, sexo, nivel){
    super(nombre, apellido, altura, edad, sexo)
    this.nivel = nivel
  }
  saludar()
  {
    //debugger
    console.log(`Me llamo ${this.nombre} ${this.apellido} soy Programador de nivel ${this.nivel} y mi genero es ${this.sexo}, tengo ${this.edad} años`)
  }
}

/*
var lennin= new Persona('Lennin', 'Ibarra', 1.9)
var valentina = new Desarrollador('Valentina', 'Martinez', 2.2, 'Femenino')
lennin.saludar()
lennin.soyAlto()

valentina.saludar()
valentina.soyAlto()
*/
