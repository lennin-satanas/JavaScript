var lennin = {
  nombre: 'Lennin',
  apellido: 'Ibarra',
  altura: 1.88
}

var valentina = {
  nombre: 'Valentina',
  apellido: 'Martinez',
  altura: 1.45
}

var leidy = {
  nombre: 'Leidy',
  apellido: 'Burbano',
  altura: 1.97
}

/*
var esAlta = (personas) => {
return personas.altura > 1.8

}
*/

const ALTURA_MAX = 1.8


//var esAlta = personas => personas.altura > ALTURA_MAX
//solo envia la altura del objeto personas
var esAlta = ({altura}) => altura > ALTURA_MAX
var esBaja = ({altura}) => altura < ALTURA_MAX


var personas = [lennin, valentina, leidy]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
//otra forma
/*
var personasAltas = personas.filter(function(personas){
  return personas.altura > ALTURA_MAX
})
*/

console.log(personasAltas)

console.log('bajas')
console.log(personasBajas)
