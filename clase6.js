//creando objetos

var lennin ={
  nombre: 'Lennin',
  apellido: 'Ibarra',
  edad: 28,
  direccion: 'cra 30 # 10 -10'
}

var valentina = {
  nombre: 'Valentina',
  apellido: 'Martinez',
  edad: 18,
  direccion: 'La colina'
}

function imprimir(){
  //nombre = nombre.toUpperCase()
  console.log(valentina.nombre)
}

imprimir()

function imprmir2(nombre, apellido, edad, direccion){
  console.log(nombre+ ' '+ apellido+ ' '+edad+' '+direccion)
}
imprmir2(lennin.nombre, lennin.edad) //si no envio todos los datos undefine

// se lo corrige de la forma 4


//imprimiendo mandando el obejto
function imprimir3(obj){
console.log(obj.nombre.toUpperCase())
console.log(obj.direccion)
}
imprimir3(valentina)

//la mejor opcion
function imprimir4({nombre, apellido, edad, direccion}){
  console.log("nombre: "+ nombre.toUpperCase() + apellido)
  console.log(`nombre ${nombre}  ${apellido} edad:  ${edad} dirección: ${direccion}`);
}
imprimir4(lennin)
imprimir4({nombre:'pepito'})
