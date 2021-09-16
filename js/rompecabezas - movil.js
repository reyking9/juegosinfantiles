/*Programacion de JavaScript*/
function disableScroll(){  
    window.scrollTo(0, 0);
  }
 
  window.addEventListener('scroll', disableScroll);
  window.removeEventListener('scroll', disableScroll);

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    function disableScroll() {
        if (window.addEventListener) // FF más viejo
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // estándar moderno
        window.onmousewheel = document.onmousewheel = preventDefault; // navegadores más antiguos, IE
        window.ontouchmove  = preventDefault; // móvil
        document.onkeydown  = preventDefaultForScrollKeys;
      }
    $('body').addClass('stop-scrolling')
    $('body').bind('touchmove', function(e){e.preventDefault()}) 
var piezas = document.getElementsByClassName('movil');
var svg = document.getElementById('entorno');
var reintentar = document.getElementById('reintentar');
var retroceder = document.getElementById('regresar');
svg.setAttribute("width", "700");
svg.setAttribute("height", "500");
var fondo = document.getElementById('fondo_ro');
fondo.firstChild.setAttribute("width", "400");
fondo.firstChild.setAttribute("height", "400");
fondo.firstChild.setAttribute("x", "200");
fondo.firstChild.setAttribute("y", "0");
reintentar.firstChild.setAttribute("x","610");
reintentar.firstChild.setAttribute("y","120");
reintentar.firstChild.setAttribute("height","40");
reintentar.firstChild.setAttribute("width","40");

retroceder.firstChild.setAttribute("x","610");
retroceder.firstChild.setAttribute("y","220");
retroceder.firstChild.setAttribute("height","40");
retroceder.firstChild.setAttribute("width","40");

var tamWidh = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];


/* var tamWidh = [144, 202, 144, 173, 144, 173, 124, 202, 134];
var tamHeight = [163, 134, 183, 134, 192, 134, 173, 134, 163]; */





for (var i = 0; i < piezas.length; i++) {
    piezas[i].setAttribute("width", tamWidh[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
    piezas[i].setAttribute("y", Math.floor((Math.random() * 309) + 1));
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

var origX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
var origY = [0, 0, 0, 133, 104, 133, 237, 266, 237];


function iman() {
    for (var i = 0; i < piezas.length; i++) {
        if (Math.abs(currentPosx - origX[i]) < 15 && Math.abs(currentPosy - origY[i]) < 15 ) {
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
        }
    }
}

var win = document.getElementById("win");
win.volumen = 0.2;
var gano = document.getElementById("win1");
var gano2 = document.getElementById("win2");
var gano3 = document.getElementById("win3");
var lose = document.getElementById("lose");

function testing() {
    var bien_ubicada = 0;
    var mal_ubicada= 0;
    var padres = document.getElementsByClassName('padre');
    for (var i = 0; i < piezas.length; i++) {
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        ide = padres[i].getAttribute("id");
        if (origX[ide] == posx && origY[ide] == posy) {
            bien_ubicada = bien_ubicada + 1;
            mal_ubicada = mal_ubicada +1;
        }else{
           mal_ubicada = mal_ubicada + 1;
            console.log(mal_ubicada);
            if (mal_ubicada == 9)
            {
                lose.play();
            }
        }
    }

    if (bien_ubicada == 9) {
        win.play();
       gano.style.display = 'block'; 
       gano2.style.display = 'block'; 
       gano3.style.display = 'block'; 

    }
}
}
else{
    /*Programacion de JavaScript*/

var piezas = document.getElementsByClassName('movil');
var svg = document.getElementById('entorno');
var reintentar = document.getElementById('reintentar');
var retroceder = document.getElementById('regresar');
svg.setAttribute("width", "900");
svg.setAttribute("height", "900");
var fondo = document.getElementById('fondo_ro');
fondo.firstChild.setAttribute("width", "600");
fondo.firstChild.setAttribute("height", "600");
fondo.firstChild.setAttribute("x", "300");
fondo.firstChild.setAttribute("y", "0");
reintentar.firstChild.setAttribute("x","600");
reintentar.firstChild.setAttribute("y","620");
reintentar.firstChild.setAttribute("height","100");
reintentar.firstChild.setAttribute("widths","100");
retroceder.firstChild.setAttribute("x","730");
retroceder.firstChild.setAttribute("y","620");
retroceder.firstChild.setAttribute("height","100");
retroceder.firstChild.setAttribute("width","100");


var tamWidh = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];


/* var tamWidh = [144, 202, 144, 173, 144, 173, 124, 202, 134];
var tamHeight = [163, 134, 183, 134, 192, 134, 173, 134, 163]; */


for (var i = 0; i < piezas.length; i++) {
    piezas[i].setAttribute("width", tamWidh[i]*1.5);
    piezas[i].setAttribute("height", tamHeight[i]*1.5);
    piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
    piezas[i].setAttribute("y", Math.floor((Math.random() * 309) + 1));
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

var origX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
var origY = [100, 100, 100, 233, 204, 233, 337, 366, 337];

var origX = [300, 456, 699, 300, 499.5, 655.5, 300, 456, 699];
var origY = [0, 0, 0, 200, 156, 200, 355.5, 399, 355.5];


function iman() {
    for (var i = 0; i < piezas.length; i++) {
        if (Math.abs(currentPosx - origX[i]) < 15 && Math.abs(currentPosy - origY[i]) < 15 ) {
            elementSelect.setAttribute("x", origX[i]);
            elementSelect.setAttribute("y", origY[i]);
        }
    }
}

var win = document.getElementById("win");
win.volumen = 0.2;
var gano = document.getElementById("win1");
var gano2 = document.getElementById("win2");
var gano3 = document.getElementById("win3");
var lose = document.getElementById("lose");

function testing() {
    var bien_ubicada = 0;
    var mal_ubicada= 0;
    var padres = document.getElementsByClassName('padre');
    for (var i = 0; i < piezas.length; i++) {
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        ide = padres[i].getAttribute("id");
        if (origX[ide] == posx && origY[ide] == posy) {
            bien_ubicada = bien_ubicada + 1;
            mal_ubicada = mal_ubicada +1;
        }else{
           mal_ubicada = mal_ubicada + 1;
            console.log(mal_ubicada);
            if (mal_ubicada == 9)
            {
                lose.play();
            }
        }
    }

    if (bien_ubicada == 9) {
        win.play();
       gano.style.display = 'block'; 
       gano2.style.display = 'block'; 
       gano3.style.display = 'block'; 

    }
}
}