var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

var PosicionesN = [];
var PosicionesO = [];



var win = document.getElementById("win");
var lose = document.getElementById("lose");
var win1 = document.getElementById("ganadorr");



var PosY = 0;
var PosX = 0;
var PosRy = 0;
var PosRx = 0;
var PosXN = 0;
var PosYN = 0;
var id_1 = 0;
var id_2 = 0;
var temp_1 = 0;
var temp_2 = 0;
var temp_11 = 0;

var eliminar = false;
var temporal_img = [1,2,3,4,5,6];
var temporal_img2;
var removidos = [];
var gana = 0;

var valida = 1;
var numeros = document.getElementsByClassName('numeros');
var objetivo = document.getElementsByClassName('objetivo');

var pressing = false;
//var piezasArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var piezasArray = [0,1,2,3,4,5];
var piezasArray2 = [2,3,5,1,0,4];
function desordenarArrays(arrayX){
    let arrayReacomodado = arrayX.sort(function(){return Math.random() -0.5});
    return arrayReacomodado;
}
let piezasTemporal = desordenarArrays(piezasArray);
let piezasTemporal2 = desordenarArrays(piezasArray2);


for (var i = 0; i < numeros.length; i++) {
    numeros[i].setAttribute("width", 120);
    numeros[i].setAttribute("height", 120);
    numeros[i].setAttribute("x", 50);
    numeros[i].setAttribute("y", piezasTemporal[i]*150 );
    PosicionesN.push(piezasTemporal[i]*150);
}

for (var i = 0; i < objetivo.length; i++) {
    objetivo[i].setAttribute("width", 120);
    objetivo[i].setAttribute("height", 120);
    objetivo[i].setAttribute("x", 750);
    objetivo[i].setAttribute("y", piezasTemporal2[i]*150 );
    PosicionesO.push(piezasTemporal2[i]*150);
}
function oMousePosSVG(e) {
    var p = entorno.createSVGPoint();
    p.x = e.clientX;
    p.y = e.clientY;
    var ctm = entorno.getScreenCTM().inverse();
    return p.matrixTransform(ctm);
  }
  
/*   $(document).ready(function() {
    $('body #entorno').on('mousemove', ' .objetos', function move(e) {
        if (pressing) {
            var m = oMousePosSVG(e);
            PosRx = parseInt(m.x); 
            PosRy = parseInt(m.y);
            document.getElementById("lineaT").setAttribute("x2",PosRx);
            document.getElementById("lineaT").setAttribute("y2",PosRy);
            console.log("move del jquery")
        }
    })
})   */

$(document).ready(function() {
    $('body #entorno .objetos').on('click', '.numeros', function(e) {
        var elementSelect= document.getElementById($(this).attr('id'));
        id_1 = document.getElementById($(this).attr('id'));
           temp_11 = document.getElementById($(this).attr('id'));
        temp_11 = ($(this))
        temp_1 = document.getElementById($(this).attr('id'));
        var ruta = parseInt(temp_1.id)+12;
        var ruta2= "../img/UNIR CON LINEAS/"+ruta+".png";
         document.getElementById($(this).attr('id')).setAttribute("xlink:href",ruta2);
         for (i = 0; i < temporal_img.length; i++)
         {                  
            temporal_img2 = temporal_img[i]+12;   
             if (ruta != temporal_img[i]+12 )
             {  
                if (removidos.indexOf(temporal_img2) > -1  )
                { }  
                else {let a = i+1;
                    console.log(removidos)
                    console.log(temporal_img2)
                    console.log(removidos.indexOf(temporal_img2) > -1)
                    document.getElementById(a).setAttribute("xlink:href","../img/UNIR CON LINEAS/"+a+".png");}
              
           
         }
        }
        PosXN=PosicionesN[elementSelect.id-1]+75;
        PosYN= "100";
        var linea= document.getElementById("lineaT");
        id_1 = parseInt(id_1.id);
        linea.style.display = "block" 
        pressing = true;
        var linea= document.getElementById("lineaT");
        linea.style.display = "block"
        document.getElementById("lineaT").setAttribute("x1",PosYN);
        document.getElementById("lineaT").setAttribute("y1",PosXN);
        document.getElementById("lineaT").setAttribute("x2",PosYN);
        document.getElementById("lineaT").setAttribute("y2",PosXN);

    })
})
$(document).ready(function() {
    $('body #entorno .objetos').on('click', '.objetivo', function stop(e) {
        pressing = false;
        var elementSelect1= document.getElementById($(this).attr('id'));
        id_2 = document.getElementById($(this).attr('id'));
        id_2 = parseInt(id_2.id);
        temp_2 = document.getElementById($(this).attr('id'));
        PosX=PosicionesO[elementSelect1.id-7]+75;
        PosY= "780";
         var linea= document.getElementById("lineaT");
        linea.setAttribute("y2", 0);
        linea.setAttribute("x2", 0);
        linea.style.display = "none"
        if (id_1 +6 == id_2)
        {
        var empieza = `<line id="linea" x1="`+PosYN+`"  y1="`+PosXN+`" x2="`+PosY+`"  y2="`+PosX+`" style='stroke:rgb(0,0,0);stroke-width:3' />`
        entorno.insertAdjacentHTML("afterbegin",empieza);
        document.getElementById($(this).removeClass("objetivo"));
        console.log(temp_11);
        document.getElementById(temp_11.removeClass("numeros"));
        var ruta = parseInt(temp_2.id)+24;
        var auxii = parseInt(temp_1.id) + 12;
        removidos.push(auxii);
        console.log(removidos);
        var ruta2= "../img/UNIR CON LINEAS/"+ruta+".png";
        var ruta3 = parseInt(temp_1.id)+24;
        var ruta4= "../img/UNIR CON LINEAS/"+ruta3+".png";
        console.log(temp_1)
         document.getElementById(temp_1.id).setAttribute("xlink:href",ruta4);
         document.getElementById(temp_2.id).setAttribute("xlink:href",ruta2);
            gana = gana + 1;
            console.log(gana);
        }
        else{console.log("mal");
        lose.play();
    }
    verficar_sin_gano()


    })
})
function verficar_sin_gano()
{
    if (gana == 6)
    {
        console.log("gano");
        win1.style.display = 'block'; 
        win.play();
    }
}
/*  $(document).ready(function() {
    $('body #entorno ').on('click', '.objetos', function() {
        var elementSelect= document.getElementById("lineaT");
        document.getElementById("lineaT").setAttribute("x1",PosYN);
        document.getElementById("lineaT").setAttribute("y1",PosXN);
        elementSelect.style.display = "block"
    })
})  */

/* entorno.addEventListener("mousedown", e => {

  }); */
/* entorno.addEventListener("mousemove", function move(e) {
   
  }); */
/*   entorno.addEventListener("mouseup", function stop(e) {
  
  }); 
 */