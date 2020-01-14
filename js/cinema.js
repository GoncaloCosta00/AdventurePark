function MudarSala() //função para comparar as horas; ao mudar as horas, muda a sala em que é apresentado o filme
{
    var data = new Date();
    var hora2 = data.getHours();
    /*var min2 = data.getMinutes();*/
    if(hora2 >=0 && hora2 < 8) 
    {
        document.getElementById("cartaz1").innerHTML = "Sala 1";
        document.getElementById("cartaz2").innerHTML = "Sala 2";
        document.getElementById("cartaz3").innerHTML = "Sala 3";
        document.getElementById("cartaz4").innerHTML = "Sala 4";
    }
    if(hora2 >=8 && hora2 < 13)
    {
        document.getElementById("cartaz1").innerHTML = "Sala 2";
        document.getElementById("cartaz2").innerHTML = "Sala 3";
        document.getElementById("cartaz3").innerHTML = "Sala 4";
        document.getElementById("cartaz4").innerHTML = "Sala 1";
    }
    if(hora2 >=13 && hora2 < 18)
    {
        document.getElementById("cartaz1").innerHTML = "Sala 3";
        document.getElementById("cartaz2").innerHTML = "Sala 4";
        document.getElementById("cartaz3").innerHTML = "Sala 1";
        document.getElementById("cartaz4").innerHTML = "Sala 2";
    }
    if(hora2 >=18 && hora2 <=23)
    {
        document.getElementById("cartaz1").innerHTML = "Sala 4";
        document.getElementById("cartaz2").innerHTML = "Sala 1";
        document.getElementById("cartaz3").innerHTML = "Sala 2";
        document.getElementById("cartaz4").innerHTML = "Sala 3";
    }

    setTimeout('MudarSala()',500);
}

