/*Programacion de JavaScript*/


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    var piezas = document.getElementsByClassName('movil');
    /* 
    var tamWidh = [134, 192, 134, 163, 134, 163];
    var tamHeight = [163, 134, 163, 134, 192, 134]; */
    
    
    /* var tamWidh = [144, 202, 144, 173, 144, 173, 124, 202, 134];
    var tamHeight = [163, 134, 183, 134, 192, 134, 173, 134, 163]; */
    
    var acu = 0;
    for (var i = 0; i < piezas.length; i++) {
        acu = acu + 100;
        piezas[i].setAttribute("width", 300);
        piezas[i].setAttribute("height", 250);
        piezas[i].setAttribute("x", 20);
        piezas[i].setAttribute("y", 100 + acu);
        piezas[i].setAttribute("ontouchstart", "seleccionarElemento(evt)");
    }
    
    var elementSelect = 0;
    var currentX = 0;
    var currentY = 0;
    var currentPosX = 0;
    var currentPosY = 0;
    
    function seleccionarElemento(evt) {
        elementSelect = reordenar(evt);
        currentX = evt.touches[0].clientX;
        currentY = evt.touches[0].clientY;
        currentPosx = parseFloat(elementSelect.getAttribute("x"));
        currentPosy = parseFloat(elementSelect.getAttribute("y"));
        elementSelect.setAttribute("ontouchmove", "moverElemento(evt)");
    }
    
    function moverElemento(evt) {
        var dx = evt.touches[0].clientX - currentX;
        var dy = evt.touches[0].clientY - currentY;
        currentPosx = currentPosx + dx;
        currentPosy = currentPosy + dy;
        elementSelect.setAttribute("x", currentPosx);
        elementSelect.setAttribute("y", currentPosy);
        currentX = evt.touches[0].clientX;
        currentY = evt.touches[0].clientY;
        elementSelect.setAttribute("ontouchcancel", "deseleccionarElemento(evt)");
        elementSelect.setAttribute("ontouchend", "deseleccionarElemento(evt)");
        iman();
    }
    
    function deseleccionarElemento(evt) {
        testing();
        if (elementSelect != 0) {
            elementSelect.removeAttribute("ontouchmove");
            elementSelect.removeAttribute("ontouchcancel");
            elementSelect.removeAttribute("ontouchend");
            elementSelect = 0;
        }
    }
    
    var entorno = document.getElementById('entorno');
    
    function reordenar(evt) {
        var padre = evt.target.parentNode;
        var clone = padre.cloneNode(true);
        var id = padre.getAttribute("id");
        entorno.removeChild(document.getElementById(id));
        entorno.appendChild(clone);
        return entorno.lastChild.firstChild;
    }
    
    var origX = [350, 750, 350, 750];
    var origY = [275, 275, 550, 550];
    
    function iman() {
        for (var i = 0; i < piezas.length; i++) {
            if (Math.abs(currentPosx - origX[i]) < 30 && Math.abs(currentPosy - origY[i]) < 30) {
                elementSelect.setAttribute("x", origX[i]);
                elementSelect.setAttribute("y", origY[i]);
            }
        }
    }
    
    var win = document.getElementById("win");
    var win1 = document.getElementById("win1");
    var lose = document.getElementById("lose");
    
    
     function testing() {
        var bien_ubicada = 0;
        var mal_ubicada = 0;
        var padres = document.getElementsByClassName('padre');
        for (var i = 0; i < piezas.length; i++) {
            var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
            var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
            ide = padres[i].getAttribute("id");
            if (origX[ide] == posx ) {
                bien_ubicada = bien_ubicada + 1;
                mal_ubicada = mal_ubicada +1;
                
            } else {
                mal_ubicada = mal_ubicada + 1;
                console.log(mal_ubicada);
                if (mal_ubicada == 4)
                {
                    lose.play();
                }
            }
            }
        
        if (bien_ubicada == 4) {
      console.log("gana")
            win.play();
            win1.style.display = 'block'; 
    
        }
    } 
    
    
 
    

}else
{
var piezas = document.getElementsByClassName('movil');
/* 
var tamWidh = [134, 192, 134, 163, 134, 163];
var tamHeight = [163, 134, 163, 134, 192, 134]; */


/* var tamWidh = [144, 202, 144, 173, 144, 173, 124, 202, 134];
var tamHeight = [163, 134, 183, 134, 192, 134, 173, 134, 163]; */

var acu = 0;
for (var i = 0; i < piezas.length; i++) {
    acu = acu + 100;
    piezas[i].setAttribute("width", 300);
    piezas[i].setAttribute("height", 250);
    piezas[i].setAttribute("x", 20);
    piezas[i].setAttribute("y", 100 + acu);
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt) {
    elementSelect = reordenar(evt);
    currentX = evt.clientX;
    currentY = evt.clientY;
    currentPosx = parseFloat(elementSelect.getAttribute("x"));
    currentPosy = parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt) {
    var dx = evt.clientX - currentX;
    var dy = evt.clientY - currentY;
    currentPosx = currentPosx + dx;
    currentPosy = currentPosy + dy;
    elementSelect.setAttribute("x", currentPosx);
    elementSelect.setAttribute("y", currentPosy);
    currentX = evt.clientX;
    currentY = evt.clientY;
    elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    iman();
}

function deseleccionarElemento(evt) {
    testing();
    if (elementSelect != 0) {
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect = 0;
    }
}

var entorno = document.getElementById('entorno');

function reordenar(evt) {
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");
    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;
}

var origX = [350, 750, 350, 750];
var origY = [275, 275, 550, 550];

function iman() {
    for (var i = 0; i < piezas.length; i++) {
        if (Math.abs(currentPosx - origX[i]) < 25 && Math.abs(currentPosy - origY[i]) < 25) {
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
        }
    }
}

var win = document.getElementById("win");
var win1 = document.getElementById("win1");
var lose = document.getElementById("lose");


 function testing() {
    var bien_ubicada = 0;
    var mal_ubicada = 0;
    var padres = document.getElementsByClassName('padre');
    for (var i = 0; i < piezas.length; i++) {
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        ide = padres[i].getAttribute("id");
        if (origX[ide] == posx ) {
            bien_ubicada = bien_ubicada + 1;
            mal_ubicada = mal_ubicada +1;
            
        } else {
            mal_ubicada = mal_ubicada + 1;
            console.log(mal_ubicada);
            if (mal_ubicada == 4)
            {
                lose.play();
            }
        }
        }
    
    if (bien_ubicada == 4) {
  console.log("gana")
        win.play();
        win1.style.display = 'block'; 

    }
} 


}




