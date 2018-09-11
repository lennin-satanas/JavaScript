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

// esto me modifica la edad
function cumpleanos(persona){
  persona.edad +=1
  console.log(persona.edad)
}
cumpleanos(lennin)

//para evitar esto y guardar la info

function cumpleanos2(persona){

  return{
    ...persona,
    edad: persona.edad + 1
  }
}

var lenninMasViejo = cumpleanos2(lennin)

console.log(lenninMasViejo)
