var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d"); //Retornas un contexto de dibujo en el lienzo
var img_rojo = new Image();
var img_verde = new Image();
var img_azul = new Image();
var img_celeste = new Image();
var img_naranja = new Image();
var img_amarillo = new Image();

img_rojo.src = "img/Pintar_1/COLORES/Rojo.png";
img_verde.src = "img/Pintar_1/COLORES/Verde.png";
img_azul.src = "img/Pintar_1/COLORES/Azul.png";
img_celeste.src = "img/Pintar_1/COLORES/Celeste.png";
img_naranja.src = "img/Pintar_1/COLORES/Naranja.png";
img_amarillo.src = "img/Pintar_1/COLORES/Amarillo.png";

img_rojo.onload = function() {
    ctx.drawImage(img_rojo, 780, 65, 84, 66);
}
img_verde.onload = function() {
    ctx.drawImage(img_verde, 780, 165, 84, 66);
}
img_azul.onload = function() {
    ctx.drawImage(img_azul, 780, 265, 84, 66);
}
img_celeste.onload = function() {
    ctx.drawImage(img_celeste, 780, 365, 84, 66);
}
img_naranja.onload = function() {
    ctx.drawImage(img_naranja, 780, 465, 84, 66);
}
img_amarillo.onload = function() {
    ctx.drawImage(img_amarillo, 780, 565, 84, 66);
}

ctx.lineWidth = 4;
//Construir muñeco
//circulo
ctx.beginPath();
//parametros(posicionX,posicionY,radio,InicioAngulo,FinAngulo)
ctx.arc(300, 200, 60, 0, 2 * Math.PI); //cabeza
ctx.stroke();
ctx.beginPath();
ctx.arc(285, 180, 15, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
ctx.beginPath();
ctx.arc(330, 180, 15, 0, 2 * Math.PI); //ojo izquierdo
ctx.stroke();
ctx.beginPath();
ctx.arc(300, 220, 25, 0, Math.PI); //boca
ctx.fillStyle = "black";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();
//-------------------
//triangulo (no hay se usa lineas)
//lineas nariz
ctx.beginPath();
//inicio
ctx.moveTo(300, 190);
//fin
ctx.lineTo(310, 205);
ctx.lineTo(290, 205);
ctx.lineTo(300, 190);
ctx.stroke();
//-------------------
//sombrero
//lineas
ctx.beginPath();
//inicio
ctx.moveTo(300, 120);
//fin
ctx.lineTo(370, 170);
ctx.lineTo(400, 75);
ctx.lineTo(300, 120);
ctx.stroke();
ctx.beginPath();
//parametros(posicionX,posicionY,radio,InicioAngulo,FinAngulo)
//ctx.arc(340,350,90,0,2*Math.PI); 
//barriga 
//elipse
ctx.ellipse(340, 350, 90, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();
//rombo dentro del elipse
ctx.beginPath();
//inicio
ctx.moveTo(320, 300);
//fin
ctx.lineTo(300, 360);
ctx.lineTo(340, 420);
ctx.lineTo(360, 360);
ctx.lineTo(320, 300);

ctx.stroke();
//-------------------------------------
//Brazo izquierdo
//rectangulo
ctx.save();
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.translate(420, 255);
ctx.rotate(130 * Math.PI / 180);
ctx.translate(-420, -255);
ctx.rect(360, 220, 100, 50);
ctx.stroke();
ctx.restore();
//cirulo
ctx.beginPath();
ctx.arc(480, 175, 30, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//cuadrado
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rect(455, 90, 50, 50);
ctx.stroke();
//-------------------------------------
//malabares izquierdos
//cirulo
ctx.beginPath();
ctx.arc(470, 40, 25, 0, 2 * Math.PI);
ctx.stroke();
//cirulo
ctx.beginPath();
ctx.arc(400, 30, 25, 0, 2 * Math.PI);
ctx.stroke();
//fin de brazo izquierdo
//----------------------
//brazo derecho
//rectangulo
ctx.save();
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.translate(180, 325);
ctx.rotate(15 * Math.PI / 180);
ctx.translate(-180, -325);
ctx.rect(140, 300, 100, 50);
ctx.stroke();
ctx.restore();
//circulo
ctx.beginPath();
ctx.arc(100, 300, 30, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//cuadrado
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rect(75, 215, 50, 50);
ctx.stroke();
//fin del brazo derecho
//-------------------------
//-------------------------------------
//malabares derechos
//cirulo
ctx.beginPath();
ctx.arc(60, 120, 25, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//cirulo
ctx.beginPath();
ctx.arc(80, 50, 25, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//cirulo
ctx.beginPath();
ctx.arc(140, 80, 25, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//------------
//fin brazo derecho
//Cadera
//triangulo
//lineas
ctx.beginPath();
//inicio
ctx.moveTo(280, 440);
//fin
ctx.lineTo(420, 450);
ctx.lineTo(350, 550);
ctx.lineTo(280, 440);
ctx.stroke();
//fin cadera
//-------
//pierna derecha
//rectangulo
ctx.save();
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.translate(270, 505);
ctx.rotate(320 * Math.PI / 180);
ctx.translate(-270, -505);
ctx.rect(200, 500, 100, 50);
ctx.stroke();
ctx.restore();
//circulo (rodilla)
ctx.beginPath();
ctx.arc(190, 590, 40, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//rectangulo
ctx.save();
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.translate(210, 695);
ctx.rotate(65 * Math.PI / 180);
ctx.translate(-210, -695);
ctx.rect(150, 650, 100, 50);
ctx.stroke();
ctx.restore();
//triangulo
//lineas
ctx.beginPath();
//inicio
ctx.moveTo(170, 720);
//fin
ctx.lineTo(250, 740);
ctx.lineTo(180, 780);
ctx.lineTo(170, 720);
ctx.stroke();
//fin pierna derecha
//---------------------
//inicio pierna izquierda
//rectangulo
ctx.save();
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.translate(550, 475);
ctx.rotate(40 * Math.PI / 180);
ctx.translate(-550, -475);
ctx.rect(450, 580, 100, 50);
ctx.stroke();
ctx.restore();
//circulo (rodilla)
ctx.beginPath();
ctx.arc(510, 590, 40, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//rectangulo
ctx.save();
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.translate(480, 675);
ctx.rotate(300 * Math.PI / 180);
ctx.translate(-480, -675);
ctx.rect(420, 650, 100, 50);
ctx.stroke();
ctx.restore();
//triangulo
//lineas
ctx.beginPath();
//inicio
ctx.moveTo(490, 720);
//fin
ctx.lineTo(540, 790);
ctx.lineTo(460, 790);
ctx.lineTo(490, 720);
ctx.stroke();
//fin pierna izquierda
//---------------------------------------------------
//barra lateral de indicaciones
//circulo
ctx.beginPath();
ctx.arc(675, 100, 30, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//cuadrado
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rect(650, 175, 50, 50);
ctx.stroke();

//triangulo
//lineas
ctx.beginPath();
//inicio
ctx.moveTo(675, 275);
ctx.lineTo(700, 325);
ctx.lineTo(650, 325);
ctx.lineTo(675, 275);
ctx.stroke();

//rectangulo
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rect(620, 375, 100, 50);
ctx.stroke();
//elipse
ctx.beginPath();
ctx.ellipse(675, 500, 25, 37, Math.PI, 0, 2 * Math.PI);
ctx.stroke();

//rombo
ctx.beginPath();
//inicio
ctx.moveTo(675, 550);
//fin
ctx.lineTo(700, 600);
ctx.lineTo(675, 650);
ctx.lineTo(650, 600);
ctx.lineTo(675, 550);

ctx.stroke();
//igual_1
ctx.beginPath();
//inicio
ctx.moveTo(740, 90);
ctx.lineTo(770, 90);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 110);
ctx.lineTo(770, 110);
ctx.stroke();
//---------
//igual_2
ctx.beginPath();
//inicio
ctx.moveTo(740, 190);
ctx.lineTo(770, 190);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 210);
ctx.lineTo(770, 210);
ctx.stroke();
//---------
//igual_3
ctx.beginPath();
//inicio
ctx.moveTo(740, 290);
ctx.lineTo(770, 290);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 310);
ctx.lineTo(770, 310);
ctx.stroke();
//---------
//igual_4
ctx.beginPath();
//inicio
ctx.moveTo(740, 390);
ctx.lineTo(770, 390);

ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 410);
ctx.lineTo(770, 410);
ctx.stroke();
//---------
//igual_5
ctx.beginPath();
//inicio
ctx.moveTo(740, 490);
ctx.lineTo(770, 490);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 510);
ctx.lineTo(770, 510);
ctx.stroke();
//---------
//igual_6
ctx.beginPath();
//inicio
ctx.moveTo(740, 590);
ctx.lineTo(770, 590);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(740, 610);
ctx.lineTo(770, 610);

ctx.stroke();
//---------


//---------
//funciones para pintar
lienzo.addEventListener('click', () => {
    console.log('Click canvas');
})















//Cuadrados
//Relleno
/* ctx.fillStyle ="white";
//ctx.fillRect(posicionX,posicionY,Ancho,Alto)
ctx.fillRect(30,20,100,100);
//contorno
ctx.lineWhidth = 5;
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rotate(45 * Math.PI / 180);
ctx.rect(300,200,100,100);

ctx.stroke(); */
//---------------------