
//ancho y alto para el canvas
const canvasWidth = 850;
const canvasHeight = 350;

const canvas = document.getElementById('canvas');

//inicializando el ancho y el alto del canvas

canvas.width = canvasWidth;
canvas.height = canvasHeight;


//contexto 2d para el canvas
const ctx = canvas.getContext("2d");

//****************************************


//ancho y alto para usar en el spritesheet, tomado de las propiedades de la imagen
const spriteWidth = 864;
const spriteHeight= 280;

//manejo de 8 columnas y 2 filas para los spritesheet
const rows = 2;
const cols = 8;

// x y y cordenadas para renderizar el sprite
//X sirve para  moverse sobr el eje x
var x = 0;

//sirve para moverse en el eje y en este caso es estatica
var y = 0;

// Para obtener el ancho de un solo sprite dividimos el ancho del sprite con el número de columnas
// porque todos los sprites son de igual anchura y altura
//son dos contantes alto y ancho de los fotogramas

var width = spriteWidth / cols; // 864/8 = 108

var heigth = spriteHeight / rows; // 280 / 2 = 140

//velocidad del movimiento
var speed = 25;

// Cada fila contiene 8 cuadros y al inicio mostraremos el primer cuadro
// (asumiendo que el índice es 0)
var curFrame = 0;

//El numero de frame es 8;
var frameCount = 8;



////x and y coordinates of the canvas to get the single frame 
// coordenadas x e y del lienzo para obtener el cuadro único
var srcX = 0;
var srcY = 0;

///The 0th (first) row is for the right movement
/// La fila 0 (primera) es para el movimiento correcto
var trackRigth = 0;

//1st (second) row for the left movement (counting the index from 0)
// 1ª fila (segunda) para el movimiento a la izquierda (contando el índice desde 0)
var trackLeft = 1;



// siguiendo el movimiento a la izquierda y escribe
var left = false;

// Suponiendo que al inicio el personaje se moverá al lado derecho
var right = true;


//creando un objeto imagen
var character = new Image();

character.src = "img/character.png"

function moverLeft() {
  left = true;
  right = false;
}

function moverRight() {
  left = false;
  right = true;
}

// Ahora crearemos una función para actualizar el índice de cuadros.
// Como puede ver una variable llamada curFrame que se inicializa con 0.
// Tenemos que actualizarla cada vez que procesemos un sprite. Así que crea
// una función llamada updateFrame () 

function updateFrame(){
//enemos que borrar el sprite ya dibujado antes de renderizar el nuevo sprite.
  //Para ello utilizaremos el método clearRect () .
  ctx.clearRect(x, y, width, heigth);
  

  //actualizando el frame index
  curFrame = ++curFrame % frameCount;

  //calculando la cordenada x del spriteSheet
  srcX = curFrame * width;
  

  


  if(left && x > 0) {
    srcY = trackLeft * heigth;
    //pixles a avanzar en x
    x-= speed;
  }

  if(right && x < (canvasWidth - width)){
    srcY = trackRigth * heigth;
    x+= speed;
  }


  console.log("variable x", x);
  console.log("variable y", y);
  console.log("variable width", width);
  console.log("variable heigth", heigth);
  console.log("variable curFrame", curFrame)
  console.log("variable scrX", srcX);
  console.log("variable scrY", srcY);
  
 
}

// Ahora finalmente vamos a crear la función para renderizar el sprite.
// Representamos la imagen utilizando el método drawImage () con el contexto
// que se ha establecido para el lienzo.

function draw() {
  //actualizamos el frame
  updateFrame();
  // ctx.context.drawImage(Image, dX, dY, dWidth, dHeight);
  ctx.drawImage(character, srcX, srcY, width, heigth, x, y, width, heigth);

  
  
}

// Necesitamos llamar a la función de dibujo repetidamente para continuar renderizando los sprites
// en el lienzo. Esto se puede hacer fácilmente usando el método setInterval .

setInterval(draw, 100);
