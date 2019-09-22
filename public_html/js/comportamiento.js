var vp = document.getElementById("Mapa");
var papel = vp.getContext("2d");

var fondo = {
  url: "js/Imagenes/mapa.jpg",
  cargaOK: false
};

var azul = {
  url: "js/Imagenes/Azul_1.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image(); 
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

azul.imagen = new Image(); 
azul.imagen.src = azul.url;
azul.imagen.addEventListener("load", cargarAzul);

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarAzul(){
  azul.cargaOK = true;
  dibujar();
}

function dibujar(){
    
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  
  if(azul.cargaOK){
    console.log(cantidad);
    for(var i=0; i < cantidad; i++){
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(azul.imagen, x, y);
    }
  }
}

function aleatorio(min, max){
    var resultado = Math.floor(Math.random()*(max - min +1))+min;
    return resultado;
}