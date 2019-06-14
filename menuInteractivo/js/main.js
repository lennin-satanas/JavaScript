const btnKamentsa = document.getElementById("kamentsa");
const btnInga = document.getElementById("inga");
const btnCofan = document.getElementById("cofan");
const btnZiona = document.getElementById("ziona");
var fondo = document.getElementById("fondo");

btnKamentsa.addEventListener('click', msn);
btnInga.addEventListener('click', msn);
btnCofan.addEventListener('click', msn);
btnZiona.addEventListener('click', msn);

function msn(ev) {
  console.log(ev);
  const dataZona = ev.target.dataset.zona;

  switch(dataZona) {
    
     case 'z-kamentsa' : 
      startAnimation(dataZona);
      // setTimeout(()=> {
      //    restartCss(dataZona);
      // },6000);
     
      goPresentation();
      return 
     case 'z-inga' : 
      
      startAnimation(dataZona);
    //   setTimeout(()=> {
    //     restartCss(dataZona);
    //  },6000);
     goPresentation();
       return 
     case 'z-ziona' : 
      startAnimation(dataZona);
    //   setTimeout(()=> {
    //     restartCss(dataZona);
    //  },6000);
      goPresentation();
      return 
     case 'z-cofan' : 
      startAnimation(dataZona);
      // setTimeout(()=> {
      //   restartCss(dataZona);
    //  },6000);
      goPresentation();
      return 
  }
}

function restartCss (dataZona){
  if(dataZona === 'z-kamentsa'){
    fondo.classList.remove("moveKamentsa");
    console.log("removiendo opacity")
    btnKamentsa.classList.remove("opacity");
  }if(dataZona === 'z-inga'){
    fondo.classList.remove("moveInga");
    btnInga.classList.remove("opacity")
  }
  if(dataZona === 'z-ziona'){
    fondo.classList.remove("moveZiona");
    btnZiona.classList.remove("opacity");
  }
  if(dataZona === 'z-cofan'){
    fondo.classList.remove("moveCofan");
    btnCofan.classList.remove("opacity");
  }
}

function startAnimation(dataZona) {
    if(dataZona === 'z-kamentsa'){
      fondo.classList.add("moveKamentsa");
      btnKamentsa.classList.add("clarity");
    }
    if(dataZona === "z-inga"){
       fondo.classList.add("moveInga");
       btnInga.classList.add("clarity");
    }
    if(dataZona === 'z-ziona'){
      fondo.classList.add("moveZiona");
      btnZiona.classList.add("clarity");
    }
    if(dataZona === 'z-cofan'){
      fondo.classList.add("moveCofan");
      btnCofan.classList.add("clarity");
    }
  }
  
function goPresentation() {
  setTimeout(()=> {
    window.open("presentacion.html", "_self");
  },6000);
}