var lennin = {
  nombre: 'Lennin',
  apellido: 'Ibarra',
  edad: 28,
  peso: 75
}
console.log(`Al inciio del año ${lennin.nombre} pesa ${lennin.peso} kg`);

const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

var i = 1
const DIAS_DEL_ANO = 365

for(i; i<=DIAS_DEL_ANO; i++){
    var random = Math.random()
    if(random < 0.25) {
      //aumenta de peso
      aumentarDePeso(lennin)
    }
    else if(random < 0.5){
      //disminuye de peso
      adelgazar(lennin)
    }
}
console.log(`Al final del año ${lennin.nombre} pesa ${lennin.peso.toFixed(1)} kg`);
