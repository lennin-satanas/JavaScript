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
  console.log(`sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(44444444444) //remmplazalo por 1 //con 444444444444444 id no existe, onError
  .then(function(personaje){
    console.log(`El personaje 1 es ${personaje.name}`);
  })
  .catch(onError)

/*
https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/
Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros,
 resolve y reject, que nos permiten indicarle a esta que se resolvió o se rechazó.*/

const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);
	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));

/*Lo que acabamos de hacer es crear una nueva promesa que se va a completar luego de 1 segundo,
si el número aleatorio que generamos es mayor a 5 entonces se resuelve,
si es menor a 5 entonces es rechazada y obtenemos un error.
Estados de las promesas
Esto nos lleva a hablar del estado de una promesa, básicamente existen 3 posibles estados.

Pendiente
Resuelta
Rechazada
Una promesa originalmente esta Pendiente. Cuando llamamos a resolve entonces la promesa pasa a estar Resuelta,
si llamamos a reject pasa a estar Rechazada, usualmente cuando es rechazada obtenemos un error que nos va a
indicar la razón del rechazo. Cuando una promesa se resuelve entonces se ejecuta la función que pasamos al
 método .then, si la promesa es rechazada entonces se ejecuta la función que pasamos a .catch, de esta forma
 podemos controlar el flujo de datos.

También es posible pasar una segunda función a .then la cual se ejecutaría en caso de un error en vez de
ejecutar el .catch


*/
function randomDelayed(max = 10, expected = 5, delay =  1000) {
	return new Promise((resolve, reject) => {
		const number = Math.floor(
			Math.random() * max
		)

		setTimeout(
			() => number > expected
				? resolve(number)
				: reject(new Error('número menor al esperado')),
			delay
		)
	})
}

randomDelayed(100, 75, 2500)
    .then(number => console.log(number))
    .catch(error => console.error(error));

/*Cuando ejecutamos randomDelayed(100, 75, 2500) creamos una promesa que luego de 2.5
segundos se va a resolver siempre que el número generado (entre 0 y 100) sea mayor a 75.
 Lo mismo que habíamos hecho antes, pero esta vez personalizable.*/
