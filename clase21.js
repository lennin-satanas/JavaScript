function Persona(nombre, apellido, altura){
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function(){
  console.log(`hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
  this.altura > 1.8 ? console.log(`${this.nombre} soy alto mido ${this.altura}`) : console.log(`${this.nombre} soy bajo mido ${this.altura}`)
}




var lennin = new Persona('Lennin', 'Ibarra', 1.82)
var valentina = new Persona('Valentina', 'Martinez', 1.8)
var leidy = new Persona('Leidy', 'Burbano', 1.5)

lennin.saludar()
valentina.saludar()
leidy.saludar()
lennin.soyAlto()
valentina.soyAlto()
leidy.soyAlto()
