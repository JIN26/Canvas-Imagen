
var base = document.getElementById("Mapa").getContext("2d");
var mapa = Imagenes/Mapa.jpg;
var imagen = new Image(); 
imagen.src = mapa;
console.log(base);
imagen.addEventListener("load", dibujar);
function dibujar(){
    base.drawImage(imagen,0,0);
}

function aleatorio(min, max){
    var resultado = Math.floor(Math.random()*(max - min +1))+min;
    return resultado;
}