var lennin ={
  nombre: 'Lennin',
  apellido: 'Ibarra',
  altura: 1.76
}

var valentina={
  nombre: 'Valentina',
  apellido: 'Martinez',
  altura: 1.40
}

var leidy={
  nombre: 'Leidy',
  apellido: 'Burbano',
  altura: 1.60
}

var persona = [lennin, valentina, leidy]
/*
const pasarAlturaCms = persona =>{
  //persona.altura = persona.altu * 100

  //esto crea otro objeto para no modificar el objeto personas
  return {
    ...persona,
    altura:   persona.altura * 100
  }
}
*/

const pasarAlturaCms = persona => ({
  ...persona,
  altura: persona.altura * 100
})



//map nos devuelve un nuevo Array

var personasCms = persona.map(pasarAlturaCms)

console.log(personasCms)
