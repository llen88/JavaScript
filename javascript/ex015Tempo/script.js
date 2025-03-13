var agora1 = new Date();
var hora1 = agora.getHours();
var tempo=window.document.getElementById('tempo');
var horas = window.document.getElementById('horas');
let img = window.document.getElementById('imagem');


if(hora1 >= 0 && hora1<=5 ){

tempo.innerText= `boa madrugada`;
horas.innerText=hora1;
img.scr='madrugada.jpg';    
}
else if(hora<12){
    tempo.innerText= `bom dia`;
    horas.innerText=hora1;
    img.scr='manha.jpg'; 

}
else if(hora<18){
    tempo.innerText= `boa noite`;
    horas.innerText=hora1;
    img.scr='tarde.jpg'; 
}
else{
    tempo.innerText= `boa noite`;
    horas.innerText=hora1;
    img.scr='noite.jpeg'; 

}
