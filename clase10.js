var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones(persona){
  console.log(`${persona.nombre} es:`)
  //if(persona.ingeniero === true) // es lo mismo
  if(persona.ingeniero){
    console.log('Ingeniero')
  }
  else{
    console.log('No es ingeniero');
  }
  if(persona.cocinero){
    console.log('cocinero')
  }
  if(persona.cantante){
    console.log('Cantante')
  }
  if(persona.dj){
    console.log('Dj')
  }
  if(persona.guitarrista){
    console.log('Guitarrista')
  }
  if(persona.drone){
    console.log('Vuela Drones')
  }
}

function imprimirMayoriaDeEdad(persona){
  if(persona.edad < 18){
    console.log('Es menor de edad')
  }
  else{
    console.log('Es mayor de edad')
  }

}

let imprimirMayoriaDeEdad2 = (persona) =>{
  if(persona.edad < 18){
    console.log('Es menor de edad')
  }
  else{
    console.log('Es mayor de edad')
  }
}


imprimirProfesiones(sacha)
imprimirMayoriaDeEdad(sacha)
imprimirMayoriaDeEdad2(sacha)
