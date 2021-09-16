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
var color_boton = "white";
class Circulo {
    constructor(punto_x, punto_y, radio, color) {
        this.punto_x = punto_x;
        this.punto_y = punto_y;
        this.radio = radio;
        this.color = color;
    }
    dibujar(ctx) {
        ctx.beginPath();
        ctx.arc(this.punto_x, this.punto_y, this.radio, 0, Math.PI * 2, false);
        ctx.strokeStyle = "Black";
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
        this.dibujar(ctx);
    }
    clickCirculo(mouse_x, mouse_y) {
        const distancia =
            Math.sqrt(
                ((mouse_x - this.punto_x) * (mouse_x - this.punto_x)) +
                ((mouse_y - this.punto_y) * (mouse_y - this.punto_y))
            );
        if (distancia < this.radio) {
            this.cambiarColor("blue");
            return true;
        } else {
            return false;
        } {

        }
    }
}


class Cuadrado {
    constructor(punto_x, punto_y, ancho, alto, tran_x, tran_y, rotate_r, color) {
        this.punto_x = punto_x;
        this.punto_y = punto_y;
        this.ancho = ancho;
        this.alto = alto;
        this.tran_x = tran_x;
        this.tran_y = tran_y;
        this.rotate_r = rotate_r;
        this.color = color;
    }
    dibujar(ctx) {
        ctx.save();
        ctx.translate(this.tran_x, this.tran_y);
        ctx.rotate(this.rotate_r * Math.PI / 180);
        ctx.translate(-(this.tran_x), -(this.tran_y));
        ctx.rect(this.punto_x, this.punto_y, this.ancho, this.alto);
        ctx.strokeStyle = "Black";
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
        this.dibujar(ctx);
    }
    clickCuadrado(mouse_x, mouse_y) {
        if (mouse_x > this.punto_x && mouse_y > this.punto_y &&
            mouse_x < (this.punto_x + this.ancho) && mouse_y < (this.punto_y + this.alto)) {
            console.log(mouse_x + " " + mouse_y);
            this.cambiarColor("blue");
            return true;


        } else {
            return false;
        }
    }

}


class Triangulo {
    constructor(punto_x, punto_y, punto_1, punto_2, punto_3, punto_4, color) {
        this.punto_x = punto_x;
        this.punto_y = punto_y;
        this.punto_1 = punto_1;
        this.punto_2 = punto_2;
        this.punto_3 = punto_3;
        this.punto_4 = punto_4;
        this.color = color;
    }
    dibujar(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.punto_x, this.punto_y);
        ctx.lineTo(this.punto_1, this.punto_2);
        ctx.lineTo(this.punto_3, this.punto_4);
        ctx.lineTo(this.punto_x, this.punto_y);
        ctx.strokeStyle = "Black";
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
        this.dibujar(ctx);
    }
    clickTriangulo(mouse_x, mouse_y) {
        if (mouse_x > (this.punto_x && this.punto_y))

        {
            this.cambiarColor("blue");

            return true;
        } else {
            return false;
        } {

        }
    }

}




//CIRCULOS
let circulo1 = new Circulo(300, 200, 60, color_boton); //cabeza
circulo1.dibujar(ctx);
let circulo2 = new Circulo(480, 175, 30, color_boton); //codo izquierdo
circulo2.dibujar(ctx);
let circulo3 = new Circulo(470, 40, 25, color_boton); //malavar izquiero
circulo3.dibujar(ctx);
let circulo4 = new Circulo(400, 30, 25, color_boton); //malavar izquiero
circulo4.dibujar(ctx);
let circulo5 = new Circulo(100, 300, 30, color_boton); //codo izquierdo
circulo5.dibujar(ctx);
let circulo6 = new Circulo(60, 120, 25, color_boton); //malavar derecho
circulo6.dibujar(ctx);
let circulo7 = new Circulo(80, 50, 25, color_boton); //malavar derecho
circulo7.dibujar(ctx);
let circulo8 = new Circulo(140, 80, 25, color_boton); //malavar derecho
circulo8.dibujar(ctx);
let circulo9 = new Circulo(185, 590, 40, color_boton); //rodilla izquierda
circulo9.dibujar(ctx);
let circulo10 = new Circulo(520, 590, 40, color_boton); //rodilla derecha
circulo10.dibujar(ctx);
OjoBocaFijo();

//CUADRADOS
let cuadrado1 = new Cuadrado(360, 220, 100, 50, 420, 255, 130, color_boton); //brazo izquierdo
cuadrado1.dibujar(ctx);
let cuadrado2 = new Cuadrado(455, 90, 50, 50, 0, 0, 0, color_boton); //mano izquierda
cuadrado2.dibujar(ctx);
let cuadrado3 = new Cuadrado(140, 300, 100, 50, 180, 325, 15, color_boton); //brazo derecho
cuadrado3.dibujar(ctx);
let cuadrado4 = new Cuadrado(75, 215, 50, 50, 0, 0, 0, color_boton); //mano derecha
cuadrado4.dibujar(ctx);
let cuadrado5 = new Cuadrado(200, 500, 100, 50, 270, 505, 320, color_boton); //pierna derecha(femur)
cuadrado5.dibujar(ctx);
let cuadrado6 = new Cuadrado(150, 650, 100, 50, 210, 695, 65, color_boton); //pierna derecha abajo
cuadrado6.dibujar(ctx);
let cuadrado7 = new Cuadrado(450, 580, 100, 50, 550, 475, 40, color_boton); //pierna derecha abajo
cuadrado7.dibujar(ctx);
let cuadrado8 = new Cuadrado(420, 650, 100, 50, 480, 675, 300, color_boton); //pierna derecha abajo
cuadrado8.dibujar(ctx);


//TRIANGULOS
/* let triangulo1 = new Triangulo(310, 200, 320, 215, 300, 215, color_boton); //pierna derecha abajo
triangulo1.dibujar(ctx); */
let triangulo2 = new Triangulo(300, 120, 370, 170, 400, 75, color_boton); //pierna derecha abajo
triangulo2.dibujar(ctx);

/* ctx.beginPath();
//inicio
ctx.moveTo(300, 120);
//fin
ctx.lineTo(370, 170);
ctx.lineTo(400, 75);
ctx.lineTo(300, 120);
ctx.stroke();
ctx.beginPath(); */



lienzo.addEventListener('click', (event) => {
    OjoBocaFijo();
    const rect = lienzo.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(x + "," + y);
    //  console.log(circulo1.clickCirculo(x, y));
    console.log(circulo2.clickCirculo(x, y));
    console.log(circulo3.clickCirculo(x, y));
    console.log(circulo4.clickCirculo(x, y));
    console.log(circulo5.clickCirculo(x, y));
    console.log(circulo6.clickCirculo(x, y));
    console.log(circulo7.clickCirculo(x, y));
    console.log(circulo8.clickCirculo(x, y));
    console.log(circulo9.clickCirculo(x, y));
    console.log(circulo10.clickCirculo(x, y));
    console.log(cuadrado1.clickCuadrado(x, y));
    /*
         console.log(cuadrado2.clickCuadrado(x, y));
         console.log(cuadrado3.clickCuadrado(x, y));
         console.log(cuadrado4.clickCuadrado(x, y));
         console.log(cuadrado5.clickCuadrado(x, y));
         console.log(cuadrado6.clickCuadrado(x, y));
         console.log(cuadrado7.clickCuadrado(x, y));
         console.log(cuadrado8.clickCuadrado(x, y)); 
      console.log(cuadrado1.clickCuadrado(x, y));*/
    console.log(triangulo2.clickTriangulo(x, y));

    OjoBocaFijo();
})









//fijos (ojo boca)
function OjoBocaFijo() {
    ctx.beginPath();
    ctx.arc(285, 180, 15, 0, 2 * Math.PI); //ojo derecho
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(330, 180, 15, 0, 2 * Math.PI); //ojo izquierdo
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(300, 220, 25, 0, Math.PI); //boca
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();

}
//construir cuerpo