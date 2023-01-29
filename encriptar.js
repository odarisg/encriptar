function encriptar(){
  let original = document.getElementById("texto").value;
  let encriptada="";

  for(i=0; i<original.length; i++){
    if(original[i]=="a"){
      encriptada+="ai";
    }
    else if(original[i]=="e"){
      encriptada+="enter";
    }
    else if(original[i]=="i"){
      encriptada+="imes";
    }
    else if(original[i]=="o"){
      encriptada+="ober";
    }
    else if(original[i]=="u"){
      encriptada+="ufat";
    }
    else{
      encriptada+=original[i];
    }
  }

  document.getElementById("resultado").innerHTML = encriptada;
  document.querySelector(".copiar").style.display = "block";
  document.getElementById("texto").value="";

}

function desencriptar(){
  let encriptada = document.getElementById("texto").value;
  let original="";
  encriptada= encriptada.replace(/ai/g,"a");
  encriptada= encriptada.replace(/enter/g,"e");
  encriptada= encriptada.replace(/imes/g,"i");
  encriptada= encriptada.replace(/ober/g,"o");
  encriptada= encriptada.replace(/ufat/g,"u");

  original=encriptada;
  document.getElementById("resultado").innerHTML = encriptada;
  document.querySelector(".copiar").style.display = "block";
  document.getElementById("texto").value="";
}

function copy() {

  let newClip = document.getElementById("resultado").innerHTML

  navigator.clipboard.writeText(newClip).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
  });  

}

