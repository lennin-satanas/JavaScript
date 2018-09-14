var lennin={
  nombre: 'Lennin',
  apellido: 'Ibarra',
  altura: 1.78
}

var valentina={
  nombre: 'Valentina',
  apellido: 'Martinez',
  altura: 1.50
}

var leidy={
  nombre: 'Leidy',
  apellido: 'Burbano',
  altura: 1.58
}

//array de objetos
var persona = [lennin, valentina, leidy]
/*
for(var i=0; i<persona.length; i++){
  console.log(`la persona ${persona[i].nombre} mide ${persona[i].altura}`);
}
*/

for(var i=0; i<persona.length; i++){
  var per = persona[i]
  console.log(`La persona ${per.nombre} mide ${per.altura} mts`)
}
