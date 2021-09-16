/* var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d"); //Retornas un contexto de dibujo en el lienzo */
/* var img_rojo = new Image();
var img_verde = new Image();
var img_azul = new Image();
var img_celeste = new Image();
var img_naranja = new Image();
var img_amarillo = new Image();

img_rojo.src = "../img/Pintar_1/COLORES/Rojo.png";
img_verde.src = "../img/Pintar_1/COLORES/Verde.png";
img_azul.src = "../img/Pintar_1/COLORES/Azul.png";
img_celeste.src = "../img/Pintar_1/COLORES/Celeste.png";
img_naranja.src = "../img/Pintar_1/COLORES/Naranja.png";
img_amarillo.src = "../img/Pintar_1/COLORES/Amarillo.png";

img_rojo.onload = function() {
    ctx.drawImage(img_rojo, 180, 65, 84, 66);
}
img_verde.onload = function() {
    ctx.drawImage(img_verde, 180, 165, 84, 66);
}
img_azul.onload = function() {
    ctx.drawImage(img_azul, 180, 265, 84, 66);
}
img_celeste.onload = function() {
    ctx.drawImage(img_celeste, 180, 365, 84, 66);
}
img_naranja.onload = function() {
    ctx.drawImage(img_naranja, 180, 465, 84, 66);
}
img_amarillo.onload = function() {
    ctx.drawImage(img_amarillo, 180, 565, 84, 66);
}
 */
/*c tx.lineWidth = 4;
//---------------------------------------------------
//barra lateral de indicaciones
//circulo
ctx.beginPath();
ctx.arc(075, 100, 30, 0, 2 * Math.PI); //ojo derecho
ctx.stroke();
//cuadrado
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rect(050, 175, 50, 50);
ctx.stroke();

//triangulo
//lineas
ctx.beginPath();
//inicio
ctx.moveTo(75, 275);
ctx.lineTo(100, 325);
ctx.lineTo(50, 325);
ctx.lineTo(75, 275);
ctx.stroke();

//rectangulo
ctx.strokeStyle = "rgb(0,0,0,1)";
ctx.rect(20, 375, 100, 50);
ctx.stroke();
//elipse
ctx.beginPath();
ctx.ellipse(75, 500, 25, 37, Math.PI, 0, 2 * Math.PI);
ctx.stroke();

//rombo
ctx.beginPath();
//inicio
ctx.moveTo(75, 550);
//fin
ctx.lineTo(100, 600);
ctx.lineTo(75, 650);
ctx.lineTo(50, 600);
ctx.lineTo(75, 550);

ctx.stroke();
//igual_1
ctx.beginPath();
//inicio
ctx.moveTo(140, 90);
ctx.lineTo(170, 90);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 110);
ctx.lineTo(170, 110);
ctx.stroke();
//---------
//igual_2
ctx.beginPath();
//inicio
ctx.moveTo(140, 190);
ctx.lineTo(170, 190);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 210);
ctx.lineTo(170, 210);
ctx.stroke();
//---------
//igual_3
ctx.beginPath();
//inicio
ctx.moveTo(140, 290);
ctx.lineTo(170, 290);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 310);
ctx.lineTo(170, 310);
ctx.stroke();
//---------
//igual_4
ctx.beginPath();
//inicio
ctx.moveTo(140, 390);
ctx.lineTo(170, 390);

ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 410);
ctx.lineTo(170, 410);
ctx.stroke();
//---------
//igual_5
ctx.beginPath();
//inicio
ctx.moveTo(140, 490);
ctx.lineTo(170, 490);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 510);
ctx.lineTo(170, 510);
ctx.stroke();
//---------
//igual_6
ctx.beginPath();
//inicio
ctx.moveTo(140, 590);
ctx.lineTo(170, 590);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(140, 610);
ctx.lineTo(170, 610);

ctx.stroke(); */
//---------
var Color_boton = "white";

function Rojo() {
    Color_boton = "Red";
}

function Verde() {
    Color_boton = "rgb(0,255,0)";
}


function Azul() {
    Color_boton = "blue";
}


function Celeste() {
    Color_boton = "rgb(0,255,255)";
}


function Naranja() {
    Color_boton = "rgb(255,128,0)";
}


function Amarillo() {
    Color_boton = "Yellow";
}


var ganar= 0;

var win = document.getElementById("win");
var lose = document.getElementById("lose");

var win1 = document.getElementById("win1");

$(document).ready(function() {
    $('body #contenedor').on('click', '.circulo', function() {
        if (Color_boton != "Red") {
            console.log("MAL")
            lose.play();
        } else {
           /*  if(document.getElementById($(this).attr('id')).attr("fill", "Red") == 'true')
            {
                (console.log("si es rojo"))
            }else
            { */
        //      console.log(document.getElementById($(this).attr('id')).attr("fill"));
            document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
            document.getElementById($(this).removeClass("circulo"));

            ganar = ganar + 1 ;
            verificar_si_gano()}

        
    })
})

$(document).ready(function() {
    $('body #contenedor').on('click', '.cuadrado', function() {
        if (Color_boton != "rgb(0,255,0)") {
            console.log("MAL")
            lose.play();

        } else {
        document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
        document.getElementById($(this).removeClass("cuadrado"));

        ganar = ganar + 1 ;
        verificar_si_gano()

    }
    })
})
$(document).ready(function() {
    $('body #contenedor').on('click', '.elipse', function() {
        if (Color_boton != "rgb(255,128,0)") {
            console.log("MAL")
            lose.play();

        } else {
        document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
        document.getElementById($(this).removeClass("elipse"));

        ganar = ganar + 1 ;
        verificar_si_gano()

        }
    })
})

$(document).ready(function() {
    $('body #contenedor').on('click', '.triangulo', function() {
        if (Color_boton != "blue") {
            console.log("MAL")
            lose.play();

        } else {
        document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
        document.getElementById($(this).removeClass("triangulo"));

        ganar = ganar + 1 ;
        verificar_si_gano()

        }
    })
})

$(document).ready(function() {
    $('body #contenedor').on('click', '.rectangulo', function() {
        if (Color_boton != "rgb(0,255,255)") {
            console.log("MAL")
            lose.play();

        } else {
        document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
        document.getElementById($(this).removeClass("rectangulo"));
        ganar = ganar + 1 ;
        verificar_si_gano()

    }
    })
})


$(document).ready(function() {
    $('body #contenedor').on('click', '.rombo', function() {
        if (Color_boton != "Yellow") {
            console.log("MAL")
            lose.play();

        } else {
        document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
        document.getElementById($(this).removeClass("rombo"));

        ganar = ganar + 1 ;
        verificar_si_gano()

    }
    })
})


/* var gano = document.getElementById("ganadorr"); */
function verificar_si_gano()
{ console.log(ganar);
    if (ganar == "25" ){
    win1.style.display = 'block'; 
    win.play();
    console.log("gano") }
}