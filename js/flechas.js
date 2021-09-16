var Color_boton = "white";

function Morado() {
    Color_boton = "rgb(89,32,182)";
}

function Verde() {
    Color_boton = "rgb(61,205,25)";
}
var contador_izquierda = 0;
var contador_derecha = 0;
$(document).ready(function() {
    $('body').on('click', '.izquierda', function() {
        if (Color_boton != "rgb(61,205,25)") {
            console.log("MAL")
            lose.play();
        } else {
            document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
            console.log($(this).attr('id'))
            document.getElementById($(this).removeClass("izquierda"));
            contador_izquierda = contador_izquierda + 1;
            console.log(contador_izquierda)
            verificar_si_gano()
        }
    })
})


$(document).ready(function() {
    $('body').on('click', '.derecha', function() {
        if (Color_boton != "rgb(89,32,182)") {
            console.log("MAL")
            lose.play();
        } else {
            document.getElementById($(this).attr('id')).setAttribute("fill", Color_boton);
            console.log($(this).attr('id'))
            document.getElementById($(this).removeClass("derecha"));
            contador_derecha = contador_derecha + 1;
            console.log(contador_derecha)
            verificar_si_gano()
        }
    })
})
var win = document.getElementById("win");
var lose = document.getElementById("lose");

var gano = document.getElementById("ganadorr");

function verificar_si_gano() {
    if (contador_izquierda == 7 && contador_derecha == 6) {
        gano.style.display = 'block'; 
        win.play();
        console.log("gano") } 
        else
        (console.log("todavia no >:v"))
}