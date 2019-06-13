console.log("Entro al JS");

setTimeout(() => {
  startAnimation();
}, 3000);

function startAnimation() {
  // alert("hola");
  
  document.getElementById("personaje").style.MsAnimationPlayState = "running";
  document.getElementById("personaje").style.webkitAnimationPlayState = "running";
  document.getElementById("personaje").style.MozAnimationPlayState = "running";
  document.getElementById("personaje").style.OAnimationPlayState = "running";
  document.getElementById("personaje").style.animationPlayState = "running";  
  setTimeout(() =>{
    saludar();
  },2000);  
}

function StartFondo() {
  
  document.getElementById("fondo").style.MsAnimationPlayState = "running";
  document.getElementById("fondo").style.webkitAnimationPlayState = "running";
  document.getElementById("fondo").style.MozAnimationPlayState = "running";
  document.getElementById("fondo").style.OAnimationPlayState = "running";
  document.getElementById("fondo").style.animationPlayState = "running";  
}

// function redireccionar() {
//   alert("Redireccionar");
// }

entrar.onclick = function() {
  

  setTimeout(()=> {
    
    window.open("html/saludo.html", "_self");
  },2000);
}


var saludo = document.getElementById("saludo");

function saludar() {
  console.log("Estoy en saludar");




  // saludo.muted = false;

}

// function boton() {
//  // alert("presiono el boton");
//   document.location.href("/html/saludo.html");
// }