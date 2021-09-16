var Color_boton = "white";

function Rojo() {
    Color_boton = "Red";
}
function Azul() {
    Color_boton = "blue";
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
            document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
            document.getElementById($(this).removeClass("circulo"));

            ganar = ganar + 1 ;
            verificar_si_gano()}
    })
})

$(document).ready(function() {
    $('body #contenedor').on('click', '.cuadrado', function() {
        if (Color_boton != "Yellow") {
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
/* var gano = document.getElementById("ganadorr"); */
function verificar_si_gano()
{ console.log(ganar);
    if (ganar == "17" ){
    win1.style.display = 'block'; 
    win.play();
    console.log("gano") }
}