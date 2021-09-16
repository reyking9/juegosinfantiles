var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d"); //Retornas un contexto de dibujo en el lienzo

ctx.lineWidth = 4;
var color_boton = "white";

class Flecha_derecha {
    constructor(punto_x, punto_y, punto_1, punto_2, punto_3, punto_4, punto_5, punto_6, punto_7, punto_8, punto_9, punto_10, punto_11, punto_12, punto_13, punto_14, color) {
        this.punto_x = punto_x;
        this.punto_y = punto_y;
        this.punto_1 = punto_1;
        this.punto_2 = punto_2;
        this.punto_3 = punto_3;
        this.punto_4 = punto_4;
        this.punto_5 = punto_5;
        this.punto_6 = punto_6;
        this.punto_7 = punto_7;
        this.punto_8 = punto_8;
        this.punto_9 = punto_9;
        this.punto_10 = punto_10;
        this.punto_11 = punto_11;
        this.punto_12 = punto_12;
        this.punto_13 = punto_13;
        this.punto_14 = punto_14;
        this.color = color;
    }
    dibujar(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.punto_x, this.punto_y);
        ctx.lineTo(this.punto_1, this.punto_2);
        ctx.lineTo(this.punto_3, this.punto_4);
        ctx.lineTo(this.punto_5, this.punto_6);
        ctx.lineTo(this.punto_7, this.punto_8);
        ctx.lineTo(this.punto_9, this.punto_10);
        ctx.lineTo(this.punto_11, this.punto_12);
        ctx.lineTo(this.punto_13, this.punto_14);
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

class Flecha_izquierda {
    constructor(punto_x, punto_y, punto_1, punto_2, punto_3, punto_4, punto_5, punto_6, punto_7, punto_8, punto_9, punto_10, punto_11, punto_12, punto_13, punto_14, color) {
        this.punto_x = punto_x;
        this.punto_y = punto_y;
        this.punto_1 = punto_1;
        this.punto_2 = punto_2;
        this.punto_3 = punto_3;
        this.punto_4 = punto_4;
        this.punto_5 = punto_5;
        this.punto_6 = punto_6;
        this.punto_7 = punto_7;
        this.punto_8 = punto_8;
        this.punto_9 = punto_9;
        this.punto_10 = punto_10;
        this.punto_11 = punto_11;
        this.punto_12 = punto_12;
        this.punto_13 = punto_13;
        this.punto_14 = punto_14;
        this.color = color;
    }
    dibujar(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.punto_x, this.punto_y);
        ctx.lineTo(this.punto_1, this.punto_2);
        ctx.lineTo(this.punto_3, this.punto_4);
        ctx.lineTo(this.punto_5, this.punto_6);
        ctx.lineTo(this.punto_7, this.punto_8);
        ctx.lineTo(this.punto_9, this.punto_10);
        ctx.lineTo(this.punto_11, this.punto_12);
        ctx.lineTo(this.punto_13, this.punto_14);
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
        /*        clickTriangulo(mouse_x, mouse_y) {
                    if (mouse_x > (this.punto_x && this.punto_y))
            
                        {
                            this.cambiarColor("blue");
            
                            return true;
                        } else {
                            return false;
                        } {
            
                        }
                    }*/

}


//flechas derechas
let flecha1 = new Flecha_derecha(100, 100, 100, 150, 200, 150, 200, 175, 250, 125, 200, 75, 200, 100, 100, 100, color_boton);
flecha1.dibujar(ctx);
let flecha2 = new Flecha_derecha(100, 300, 100, 350, 200, 350, 200, 375, 250, 325, 200, 275, 200, 300, 100, 300, color_boton);
flecha2.dibujar(ctx);
let flecha3 = new Flecha_derecha(100, 500, 100, 550, 200, 550, 200, 575, 250, 525, 200, 475, 200, 500, 100, 500, color_boton);
flecha3.dibujar(ctx);
let flecha4 = new Flecha_derecha(100, 700, 100, 750, 200, 750, 200, 775, 250, 725, 200, 675, 200, 700, 100, 700, color_boton);
flecha4.dibujar(ctx);




//flechas izquierdas
let flecha_1 = new Flecha_izquierda(400, 450, 400, 500, 300, 500, 300, 525, 250, 475, 300, 425, 300, 450, 400, 450, color_boton);
flecha_1.dibujar(ctx);








lienzo.addEventListener('click', (event) => {
    const rect = lienzo.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(x + "," + y);
    //  console.log(circulo1.clickCirculo(x, y));
    // console.log(circulo2.clickCirculo(x, y));
})