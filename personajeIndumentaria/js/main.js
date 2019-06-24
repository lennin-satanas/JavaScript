
//guardamos todos los elementos de la ropa con clase parts
var parts_clothing = document.getElementsByClassName('parts');

var parts_colors = document.getElementsByClassName('clothing');

//medida de ancho y alto de cada pieza en los arrays

//vestido ancho: 130px alto: 187px
//cabello ancho: 120px alto: 143px
//zapatos ancho: 107px alto: 61px

//ancho
var tamWidth = [130, 120, 107];
//alto
var tamHeight = [187, 143, 61];

//posición en X
var posX = [500, 500, 500];
//posición en Y
var posY = [10, 160, 400];


for(var i=0; i<parts_clothing.length; i++){
    //alert('hola mundo');
    //agregamos con setAtrribute el ancho y alto de las imagenes en partes
    parts_clothing[i].setAttribute("width", tamWidth[i]);
    parts_clothing[i].setAttribute("height", tamHeight[i]);

    //agregamos la posición de forma aleatoria sin sobreponerse a la imagen
    // parts_clothing[i].setAttribute("x", Math.floor((Math.random()*10+1)));
    // parts_clothing[i].setAttribute("y", Math.floor((Math.random()*409+1)));
    parts_clothing[i].setAttribute("x", posX[i]);
    parts_clothing[i].setAttribute("y", posY[i]);

    parts_clothing[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}


//inicializamos variables para almacenar información del movimiento
var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;

function seleccionarElemento(evt) {
    //almacenamos la información de la pieza que dispara el evento
    elementSelect = evt.target;
    //transferimos el elemento seleccionado
    elementSelect = reordenar(evt);
    //almacenamos la info de X y Y que se disparo en el evento
    currentX = evt.clientX;
    currentY = evt.clientY;

    currentPostX = parseFloat(elementSelect.getAttribute("x"));
    currentPostY = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}


function moverElemento(evt) {

    //calculamos la distancia recorrida (pos ant - pos actual)
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;

    //para que el elemento se movilice la misma distancia que se ha  movido el mouse agregamos esta diferencia
    // a us posicion almacenada
    currentPostX = currentPostX + dx;
    currentPostY = currentPostY + dy;

    //actualizamos la posicion del elemento
    elementSelect.setAttribute("x", currentPostX);
    elementSelect.setAttribute("y", currentPostY);

    //guardamos la posición del mouse
    currentX = evt.clientX;
    currentY = evt.clientY;

    //para solucionar el problema que la ficha se quedaba pegada al mouse
    elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    iman();
}

function deseleccionarElemento() {
    testing();
    if(elementSelect != 0){
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

//creamos una variable global que guardara todo el entorno grafico
 var entorno = document.getElementById('lienzo');

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    //mando a la funcion animar fondo
    animatioTab(clone,id);

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;

}
// ++++++++++++++++++++++++++
function animatioTab(clone,id) {
    switch(id){
        case '0': parts_colors[0].classList.add('prueba');
                  setTimeout(()=>removeClass(id), 3000);
        return;
        case '1': parts_colors[1].classList.add('prueba');
                  setTimeout(()=>removeClass(id), 3000);
        return;
        case '2': parts_colors[2].classList.add('prueba');
                  setTimeout(()=>removeClass(id), 3000);
        return;
    }
}

function removeClass(id){
    switch(id){
        case '0': parts_colors[0].classList.remove('prueba');
        return;
        case '1': parts_colors[1].classList.remove('prueba');
        return;
        case '2': parts_colors[2].classList.remove('prueba');
    }
}




// ******************
//posiciones originales para el iman
//vestido X = 174 , Y = 200
//cabello X = 194 , Y = 83
//zapatos X = 200 , Y = 496

var origX = [174, 194, 200];
var origY = [200, 83, 496];

function iman() {
    for(var i=0; i<parts_clothing.length; i++){
     //si la pieza se aproxima a 15 pixeles de la posición esta es atraida
     if(Math.abs(currentPostX-origX[i])<15 && Math.abs(currentPostY-origY[i])<15) {
        //actualizamos coordenadas de la figura
        elementSelect.setAttribute("x", origX[i]);
        elementSelect.setAttribute("y", origY[i]);
      }   
    }
}

var win = document.getElementById("win");
function testing(){
   
    //alert("bitch");
    var bien_ubicadas = 0;

    var padres = document.getElementsByClassName('clothing_parts');
   // console.log(padres);
     for(var i=0; i<parts_clothing.length; i++){
        
    // console.log("entro");
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        //console.log("posx", posx);
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        //console.log("posy", posy);
        ide = padres[i].getAttribute("id");
        //console.log("ide", ide);
                
       // console.log("origX[ide]",origX[ide])
       // console.log("origY[ide]", origY[ide]);
         if(origX[ide] == posx && origY[ide] == posy){
            bien_ubicadas= bien_ubicadas+1;
         //   console.log("bien_ubicadas:",bien_ubicadas);
         }
    }
    if(bien_ubicadas == 3){
        win.play();
    }
}

