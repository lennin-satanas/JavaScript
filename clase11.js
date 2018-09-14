var sacha = {
  nombre: 'Lennin',
  edad: 7
}

var juan = {
  nombre: 'Govanny',
  edad: 37
}

/*
function imprimirMayoriaEdad(persona){

  if( persona.edad < 18){
    console.log(`${persona.nombre} es menor de edad`)
  }
  else{
    console.log(`${persona.nombre} es mayor de edad`)
  }
}
*/

//LAS CONSTANTES SE DEFINEN CON MAYUSCULAS
const MAYORIA_DE_EDAD = 18


//ESTA FUNCIONES ME DEVUELVE SI ES MAYOR DE EDAD
let esMayorDeEdad = (persona) =>{
  return persona.edad >= MAYORIA_DE_EDAD
}


let imprimirMayoriaEdad = (persona) => {
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`)
  }
  else{
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirMayoriaEdad(sacha)
imprimirMayoriaEdad(juan)
