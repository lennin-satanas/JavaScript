var lennin ={
  nombre: 'Lennin',
  apellido: 'Ibarra',
  altura: 1.85,
  cantidadDeLibros: 132
}

var valentina={
  nombre: 'Valentina',
  apellido: 'Martinez',
  altura: 1.45,
  cantidadDeLibros: 300
}

var leidy={
  nombre: 'Leidy',
  apellido: 'Burbano',
  altura: 1.70,
  cantidadDeLibros: 560
}

var personas = [lennin, valentina, leidy]
/*
var acum = 0
for (var i=0; i<personas.length; i++){
  acum = acum + personas[i].cantidadDeLibros
}
console.log(acum)
*/

/*
const reducir = (acum, persona) =>{
  return acum + persona.cantidadDeLibros
}
*/

const reducir = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducir, 0)

console.log(totalDeLibros);
