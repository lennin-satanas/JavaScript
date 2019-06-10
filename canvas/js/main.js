var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Defina un punto inicial en la posición (0,0) y 
// un punto final en la posición (200,100). 
// Luego usa el método stroke () para dibujar la línea:

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

// beginPath () - comienza un camino
// arco (x, y, r, startangle, endangle): crea un arco / curva.
// Para crear un círculo con arco (): establezca el ángulo de inicio
// en 0 y el ángulo de final en 2 * Math.PI. Los parámetros x e y definen
// las coordenadas x e y del centro del círculo. El parámetro r define el radio
// del círculo.
ctx.beginPath();
ctx.arc(150,120,80,0,2*Math.PI);
ctx.stroke();



// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

ctx.font = "30px Comic Sans MS";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2); 