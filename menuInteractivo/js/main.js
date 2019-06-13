const btnKamentsa = document.getElementById("kamentsa");
const btnInga = document.getElementById("inga");
const btnCofan = document.getElementById("cofan");
const btnZiona = document.getElementById("ziona");


btnKamentsa.addEventListener('click', msn);
btnInga.addEventListener('click', msn);
btnCofan.addEventListener('click', msn);
btnZiona.addEventListener('click', msn);


function msn(ev) {
  //alert("inga")
  console.log(ev);
  const dataZona = ev.target.dataset.zona;
  console.log("dataZona", dataZona);


  
  switch(dataZona) {
     case 'z-kamentsa' : 
      startAnimation();
      return 
     case 'z-inga' : 
      return alert("hola Inga");
     case 'z-cofan' : 
      return alert("hola Cofan");
     case 'z-ziona' : 
      return alert("hola ziona");
  }
}

function startAnimation() {
  // debugger
  document.getElementById("gameBoard").style.MsAnimationPlayState = "running";
  document.getElementById("gameBoard").style.webkitAnimationPlayState = "running";
  document.getElementById("gameBoard").style.MozAnimationPlayState = "running";
  document.getElementById("gameBoard").style.OAnimationPlayState = "running";
  document.getElementById("gameBoard").style.animationPlayState = "running";  

  document.getElementById("fondo").style.MsAnimationPlayState = "running";
  document.getElementById("fondo").style.webkitAnimationPlayState = "running";
  document.getElementById("fondo").style.MozAnimationPlayState = "running";
  document.getElementById("fondo").style.OAnimationPlayState = "running";
  document.getElementById("fondo").style.animationPlayState = "running";

  setTimeout(()=> {
    
    window.open("presentacion.html", "_self");
  },6000);

}

