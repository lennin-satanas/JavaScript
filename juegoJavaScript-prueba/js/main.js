// guardamos todos los elementos que tengan la clase movil en la variable piezas
var piezas = document.getElementsByClassName('movil');

//mediada de ancho y alto de cada pieza en los arrays

var tamWidh = [215, 215, 215, 215, 215, 215, 215, 215, 215];
var tamHeight = [213, 213, 213, 213, 213, 213, 213, 213, 213];

for(var i=0; i<piezas.length; i++){
  //debugger;
  //agregamos con setAtribute el ancho y alto de las imagenes que se encuentra guardado en el array
  piezas[i].setAttribute("width", tamWidh[i]);
  piezas[i].setAttribute("height", tamHeight[i]);
  //agregando la posición de forma aleatoria sin sobreponerse a la imagen de fondo
  piezas[i].setAttribute("x", Math.floor((Math.random()*10 +1)));
  piezas[i].setAttribute("y", Math.floor((Math.random()*409 +1)));

  //mover las piezas
  piezas[i].setAttribute("onmousedown","seleccionarElemento(evt)")
}

// inicializamos variables para almacenar informacion de movimiento
var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;

function seleccionarElemento(evt) {
  //debugger
  //alamcenamos la información de la pieza que dispara el evento
  // elementSelect = evt.target;
  //transferimos el elemento seleccionado
  elementSelect = reordenar(evt);
  //almacenamos la información de X y Y que se disparo en el evento
  currentX = evt.clientX;
  currentY = evt.clientY;
  //medainte getAttribute obtenemos el valor de x Y 
  currentPostX = parseFloat(elementSelect.getAttribute("x"));
  currentPostY = parseFloat(elementSelect.getAttribute("y"));

  elementSelect.setAttribute("onmousemove","moverElemento(evt)");
  //console.log("salio");
}

function moverElemento(evt) {
  //debugger
  //console.log("entro");
  //calculamos la distancia recorrida (posicion anterior - la actual)
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;

  //para que el elemento se movilice la misma distancia que se ha  movido el mouse agregamos esta diferencia
  // a us posicion almacenada
  currentPostX = currentPostX + dx;
  currentPostY = currentPostY + dy;

  //actualizamos la posicion del elemento
  elementSelect.setAttribute("x", currentPostX);
  elementSelect.setAttribute("y", currentPostY);

  //guardamos la posicion del  mouse
  currentX = evt.clientX;
  currentY = evt.clientY;

  //para solucionar el problema que la ficha se quedaba pegada al mouse
  elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
  iman();
}

function deseleccionarElemento(evt){
  //llamo a tsting
  testing();
  if(elementSelect != 0) {
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect = 0;
  }
}

//creamos una variable global que guardara todo el entorno grafico
var entorno = document.getElementById('entorno');

function reordenar(evt) {
  //guardamos el elemento contendor de la pieza seleccionada
  var padre = evt.target.parentNode;
  //se hace una copia con el elemento cloneNode
  var clone = padre.cloneNode(true);
  //seleccionamos el id del elemento padre
  var id = padre.getAttribute("id");
  //se elimina la pieza seleccionada
  entorno.removeChild(document.getElementById(id));
  //agregamos la copia creada con appendChild
  entorno.appendChild(clone);
  //retornamos el nuevo elemento para que sea seleccionado
  return entorno.lastChild.firstChild;
}

var origX = [300, 515, 730, 300, 515, 730, 300, 515, 730];
var origY = [100, 100, 100, 313, 313, 313, 528, 528, 528];

function iman() {
    //recorrido a todas las piezas
    for(var i=0; i<piezas.length; i++) {
      //si la pieza se aproxima a 15 pixeles de la posición esta es atraida
      if(Math.abs(currentPostX-origX[i])<15 && Math.abs(currentPostY-origY[i])<15) {
        //actualizmos coordenadas de la figura
        elementSelect.setAttribute("x", origX[i]);
        elementSelect.setAttribute("y", origY[i]);
      }

    }
}

var win = document.getElementById("win");

function testing() {
  //contador para llevar a cabo el control de las fichas bien ubicadas
  var bien_ubicada = 0;
  var padres = document.getElementsByClassName('padre');
  for(var i=0; i<piezas.length; i++) {
    var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
    var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
    ide = padres[i].getAttribute("id");
    if(origX[ide] == posx && origY[ide] == posy) {
      bien_ubicada = bien_ubicada + 1;
    }
    
  }
  if(bien_ubicada == 9){
    win.play();
  }
}