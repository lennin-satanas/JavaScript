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

function imprimir(obj_persona){
  //var nombre = obj_persona.nombre
  var {nombre} = obj_persona
  console.log(nombre.toUpperCase())
}
imprimir(lennin)

function imprimir2(obj){
var {nombre} = obj, {apellido}= obj
console.log(`Mi nombre es ${nombre} ${apellido}`);
}
imprimir2(lennin)
imprimir2(valentina)

//desestructuración de objetos

function imprimirNombreYEdad(obj_persona){
  // var {nombre} = obj_persona;
  // var {edad} = obj_persona;
  var {nombre, edad} = obj_persona;
  console.log (`La persona ${nombre} tiene ${edad} edad`);
 }

 imprimirNombreYEdad(valentina);

 imprimirNombreYEdad(lennin);

 var estudiante = {
   Marx : {
     nombre: 'Carlos',
     edad: 58,
     partido: 'PCC'
   },
   Mao :{
     nombre: 'Mao Zedong',
     edad: 70,
     partido: 'PCCH'
   }
 }

 function infoPersonal(obj){
    var {Mao :{nombre, partido}} = obj;
    console.log(`Mi nombre es ${nombre} y soy el presidente de ${partido}`);
 }
 infoPersonal(estudiante);