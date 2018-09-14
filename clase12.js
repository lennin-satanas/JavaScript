var lennin = {

  nombre: 'Lennin',
  apellido: 'Ibarra',
  edad: 6
}

var valentina ={
  nombre: 'Valentina',
  apellido: 'Martinez',
  edad: 18
}

const MAYORIA_DE_EDAD = 18
/*
function mayoriaEdad(persona){
 return persona.edad >= MAYORIA_DE_EDAD
}
*/

//const mayoriaEdad = persona => persona.edad >= MAYORIA_DE_EDAD
const mayoriaEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimirEdad(persona){
  if(mayoriaEdad(persona)){
    console.log(`${persona.nombre} es mayor de edad`);
  }
  else{
    console.log(`${persona.nombre} es menor de edad`);
  }
}

function permitirAcceso(persona){
  if(!mayoriaEdad(persona)){
    console.log(`${persona.nombre} Acceso Denegado`);
  }
}



imprimirEdad(lennin)
imprimirEdad(valentina)
permitirAcceso(lennin)
permitirAcceso(valentina)
