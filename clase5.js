var nombre = 'Lennin'

/*
//efecto de lado modifica la variable global
function imprimirEnMayusculas(){
  nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimirEnMayusculas() //Lennin
console.log(nombre) //Lennin

function imprimir2(n){
n=n.toUpperCase()
console.log('imprimiendo n: ' + n)
}

imprimir2(nombre) // imprime Lennin
//console.log(n)// undefine la variable no existe por fuera de la Funciones

*/
//utilizar el mismo nombre de la variable
function imprimir3(nombre){
  nombre = nombre.toUpperCase()
  console.log('imprimir nombre: ' + nombre)
}
imprimir3(nombre)
console.log(nombre);
