var nombre = 'Lennin', edad = '37'
function imprimirEdad(){
  console.log(`${nombre} tiene ${edad} años`);
}
imprimirEdad()
// Enviando parametros

function imprimirEdad2(name, date){
console.log(`Enviando paramatros ${name} tiene ${date} años`);
}
imprimirEdad2('lennin', 38)
imprimirEdad2(nombre, edad)
//lenguaje debilmente tipado
imprimirEdad2('Geovanny', '78')

function sumar(num_1, num_2){
console.log(`La suma de ${num_1} + ${num_2} es igual a: ${num_1 + num_2}`);
}
sumar(5,4)

n1 = 7
n2 = 5

sumar(n1, n2)
sumar(69, 69)
