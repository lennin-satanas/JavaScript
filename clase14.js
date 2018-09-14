var lennin ={
  nombre: 'Lennin',
  apellido: 'Ibarra',
  edad: 37,
  peso: 65
}


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const INCREMENTO_PESO = 0.3

const META = lennin.peso -3

const comeMucho = () => Math.random() < 0.3
const realizaDeporte=()=> Math.random() < 0.4

var dias = 0

while (lennin.peso > META) {

  //para poder mirar un error
  //debugger

  if(comeMucho()){
    aumentarDePeso(lennin)

  }
  if(realizaDeporte()){
    adelgazar(lennin)
  }
  dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${lennin.nombre} adelgazo 3 kg`);
