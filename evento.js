var teclas = {
  LEFT: 37,
  UP: 38,
  RIGTH: 39,
  DOWN: 40
};

document.addEventListener("mousedown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo" );
var boton = document.getElementById("Elejir_color");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
console.log("mousedown");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var movimiento = 10
  switch (evento.keyCode)
  {
    case teclas.LEFT:
    dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
    x = x - movimiento
    break;
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento
    break;
    case teclas.RIGTH:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento
     break;


  }
}
function dibujarTeclado(evento) {
  console.log("movimiento del mouse ");
  console.log(evento);

}
