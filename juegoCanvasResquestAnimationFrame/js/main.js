var bucle;
var playing = false;


var x = 0;
var y = 0;
var t = 50;
var xdir = 5;
var ydir = 5;
var canvas = document.getElementById("canvas");
var areaW = canvas.width;
var areaH = canvas.height;
var ctx = canvas.getContext('2d');

function dibujar() {
  //limpiar el canvas
  ctx.clearRect(0, 0, areaW, areaH);
  //dibujando un cuadro
  ctx.fillRect(x,y,t,t);
   
}
//funcion para el moviemiento del cuadro
function movimiento() {
  x+= xdir;
  y+= ydir;
}


//funcion para verificar el choque del cuadro
function choqueVertical() {
  if(y<= 0 || y >= (areaH - t)) {
    ydir = -ydir;
  }
}

function choqueHorizontal() {
  if(x <= 0 || x >= (areaW - t)) {
    xdir = -xdir;
  }
}


function frame() {
  movimiento();
  choqueVertical();
  choqueHorizontal();
  dibujar();
  bucle = requestAnimationFrame(frame);
}

// frame();

// setInterval("frame()", 1000 / 60);

function control() {
  if(playing) {
    cancelAnimationFrame(bucle);
    playing = false;
    imgboton.src = "img/play.png";
  }
  else {
    frame();
    playing = true;
    imgboton.src = "img/pause.png";
  }
}

