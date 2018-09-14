
var contador = 0

const llueve = () => Math.random() < 0.25

do{
  contador++
}while(!llueve())

//otra forma de hacer un if
var frecuencia = contador === 1 ? "vez" : "veces"

console.log(`Fui a ver si llovia ${contador} ${frecuencia}`);
