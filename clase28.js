/*En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después,
dentro de la función externa para completar alguna acción.
*/

const API_URL = 'http://pokeapi.co/api/v2/'
const PEOPLE_URL = ' pokemon/:id'
//primer parametro del get
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',2)}`

const lenin = 'https://pokeapi.co/api/v2/pokemon/2/'

//segundo parametro, indica que se hace el request a otra pagina
const opts = {crossDomain: true}

/*

//jQuery.get( url [, data ] [, success ] [, dataType ] )
/*success
Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )
A callback function that is executed if the request succeeds. Required if dataType is provided, but you can use null or jQuery.noop as a placeholder.

$.get(lukeUrl,opts, function(luke) {


//console.log(arguments) //permite ver los argumetos que llegan
console.log(`Hola yo soy ${luke.name}`);
})
*/

const onPeopleResponse = function(persona){
  console.log(arguments);
 console.log(`Hola yo soy, ${persona.name}`);
}

//callback es una funcion que se va a ejecutar en algun futuro, o que nunca se llame
$.get(lenin, opts, onPeopleResponse)
