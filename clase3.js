var edad = 27

//edad = edad + 1

edad +=1

console.log(edad)

var peso = 75

//peso = peso - 2
peso -=2

console.log(`El peso es ${peso}`)

var sandwich = 1

peso = peso + sandwich

console.log(peso);

var juagarFutbol = 3

console.log(`otra forma ${peso}-${juagarFutbol} = ${peso - juagarFutbol}`);

var precioVino = 200.3
var total = precioVino * 3
console.log(`El total de su compra es ${total}`);
//600.900000000001
/*tener en cuenta la presicion de los decimales*/

//para resolverlo
var total = Math.round(precioVino * 100 *3) / 100
//corta tres caracteres
var totalStr = total.toFixed(3)
//combierte de caracter a numerico
var total2 = parseFloat(totalStr)


var pizza = 8
var persona = 2
var can_pzz_cadauno = pizza / persona

console.log(`A cada uno le corresponden ${can_pzz_cadauno} pedazos de pizza`);
