var lennin ={
  nombre: 'Lennin',
  apellido: 'Ibarra',
  edad: 28,
  direccion: 'cra 30 # 10 -10'
}

var valentina = {
  nombre: 'Valentina',
  apellido: 'Martinez',
  edad: 18,
  direccion: 'La colina'
}

function imprimir(obj_persona){
  //var nombre = obj_persona.nombre
  var {nombre} = obj_persona
  console.log(nombre.toUpperCase())
}
imprimir(lennin)

function imprimir2(obj){
var {nombre} = obj, {apellido}= obj
console.log(`Mi nombre es ${nombre} ${apellido}`);
}
imprimir2(lennin)
imprimir2(valentina)
