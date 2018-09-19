/*Múltiples promesas en paralelo
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego
construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ),
con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.*/


const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain:true}

function obtenerPersonaje(id){
  return new Promise((resolve, reject)=>{
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

    $.
      get(url, opts, function(data){
        resolve(data)
      })
      .fail(()=> reject(id))
  })
}

function onError(id){
  console.log(`sucedio un error al obtener el personaje ${id}`)
}


var ids = [1, 2, 3, 4, 5, 6, 7]

// var promesas = ids.map(function(id){
//   return obtenerPersonaje(id)
// })

var promesas = ids.map(id => obtenerPersonaje(id))
//metodo de Promise
Promise.all(promesas)
.then(personajes => console.log(personajes))
.catch(onError)






// obtenerPersonaje(1)
//   .then(personaje=>{
//     console.log(`El personaje 1 es ${personaje.name}`)
//     return obtenerPersonaje(2)
//   })
//   .then(personaje=>{
//     console.log(`el personaje 2 es ${personaje.name}`)
//     return obtenerPersonaje(3)
//   })
//   .then(personaje=>{
//     console.log(`El personaje 3 es ${personaje.name}`)
//     return obtenerPersonaje(4)
//   })
//   .then(personaje=>{
//     console.log(`El personaje 4 es ${personaje.name}`)
//   })
//   .catch(onError)
