var win = document.getElementById("win");


var leon = 0;
var elefante = 0;
var jirafa = 0;
var hormiga  = 0; 
var raton = 0;
var pajaro = 0;

$(document).ready(function() {
    $('body').on('click', '.leon', function() {

       var c = document.getElementById($(this).attr('id'));
       var d = c.id;
        var tem = false;
        var tem1 = false;
       console.log(d)
       if ((d == "leon1"))
       { if (tem == false)
        {tem = true}
        else{
            tem = false
        }}
        
        console.log(tem)
        if ((d == "leon2"))
        { if (tem1 == false)
         {tem1 = true}
         else{
             tem1 = false
         }}
         
         console.log(tem1)
         console.log(tem)
         if (tem == true && tem1 == true)
         {leon = 2}
        console.log(leon);
        elefante = 0;
        jirafa = 0;
        hormiga = 0;
        raton = 0;
        pajaro = 0;
        if (leon == 2)
        {console.log("pareo");
        var a = document.getElementById("leon1");
        var b = document.getElementById("leon2");
        a.style.display = 'none';
        b.style.display = 'none';
    }
        else{
            console.log("no");
        }
            console.log(leon); 
            BuscarPares()
    }
   )
} )



$(document).ready(function() {
    $('body').on('click', '.hormiga', function() {
        console.log(leon);
        hormiga = hormiga + 1
/*         console.log(leon);
        elefante = 0;
        jirafa = 0;
        leon = 0;
        raton = 0;
        pajaro = 0;
        if (hormiga == 2)
        {console.log("pareo");
        var a = document.getElementById("hormiga1");
        var b = document.getElementById("hormiga2");
        a.style.display = 'none';
        b.style.display = 'none';
    }
        else{
            console.log("no");
        }
            console.log(hormiga); */
            BuscarPares()
    }
   )
})




$(document).ready(function() {
    $('body').on('click', '.jirafa', function() {
        console.log(jirafa);
        jirafa = jirafa + 1
/*         console.log(jirafa);
        elefante = 0;
        raton = 0;
        leon = 0;
        hormiga = 0;
        pajaro = 0;
        if (jirafa == 2)
        {console.log("pareo");
        var a = document.getElementById("jirafa1");
        var b = document.getElementById("jirafa2");
        a.style.display = 'none';
        b.style.display = 'none';
    }
        else{
            console.log("no");
        }
            console.log(jirafa); */
            BuscarPares()
    }
   )
})

$(document).ready(function() {
    $('body').on('click', '.pajaro', function() {
        console.log(pajaro);
        pajaro = pajaro + 1
/*         console.log(jirafa);
        elefante = 0;
        raton = 0;
        leon = 0;
        jirafa = 0;
        hormiga = 0;
        if (pajaro == 2)
        {console.log("pareo");
        var a = document.getElementById("pajaro1");
        var b = document.getElementById("pajaro2");
        a.style.display = 'none';
        b.style.display = 'none';
    }
        else{
            console.log("no");
        }
            console.log(jirafa); */
            BuscarPares()
    }
   )
})

$(document).ready(function() {
    $('body').on('click', '.elefante', function() {
        elefante = elefante + 1
      /*   jirafa = 0;
        hormiga = 0;
        leon = 0;
        raton = 0;
        pajaro = 0;
        if (elefante == 2)
        {console.log("pareo");
        var a = document.getElementById("elefante1");
        var b = document.getElementById("elefante2");
        a.style.display = 'none';
        b.style.display = 'none';
    }
        else{
            console.log("no");
        }
            console.log(elefante); */
            BuscarPares()
    }
   )
})


$(document).ready(function() {
    $('body').on('click', '.raton', function() {

        raton = raton + 1
        /* 
        jirafa = 0;
        hormiga = 0;
        leon = 0;
        elefante = 0;
        pajaro = 0;
        if (raton == 2)
        {console.log("pareo");
        var a = document.getElementById("raton1");
        var b = document.getElementById("raton2");
        a.style.display = 'none';
        b.style.display = 'none';
    }
        else{
            console.log("no");
        }
            console.log(elefante); */
            BuscarPares()
    }
   )
})
function BuscarPares()
{
    if ((leon == 1 && jirafa == 1) || (leon == 1 && hormiga == 1)  || (leon == 1 && elefante == 1)  || (leon == 1 && pajaro == 1) || (leon == 1 && raton == 1))
   { console.log("mal");
    elefante = 0;
    jirafa = 0;
    leon = 0;
    raton = 0;
    pajaro = 0;
    hormiga = 0;}
    if ((raton == 1 && jirafa == 1) || (raton == 1 && hormiga == 1)  || (raton == 1 && elefante == 1)  || (raton== 1 && pajaro == 1))
    { console.log("mal");
     elefante = 0;
     jirafa = 0;
     leon = 0;
     raton = 0;
     pajaro = 0;
     hormiga = 0;}
     if ((jirafa == 1 && hormiga == 1)  || (jirafa == 1 && elefante == 1)  || (jirafa== 1 && pajaro == 1))
     { console.log("mal");
      elefante = 0;
      jirafa = 0;
      leon = 0;
      raton = 0;
      pajaro = 0;
      hormiga = 0;}
      if ((hormiga == 1 && elefante == 1)  || (hormiga == 1 && pajaro == 1))
      { console.log("mal");
       elefante = 0;
       jirafa = 0;
       leon = 0;
       raton = 0;
       pajaro = 0;
       hormiga = 0;}
       if ((elefante == 1 && pajaro == 1))
       { console.log("mal");
        elefante = 0;
        jirafa = 0;
        leon = 0;
        raton = 0;
        pajaro = 0;
        hormiga = 0;}
    

}