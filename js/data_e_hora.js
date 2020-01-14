var datahora = document.getElementById("data-hora");

var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function atualizar_data_e_hora(){
    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes     = data.getMonth();          // 0-11 (zero=janeiro)
    var ano4    = data.getFullYear();       // 4 dígitos
    var hora    = data.getHours();          // 0-23
    var min     = data.getMinutes();        // 0-59
    var seg     = data.getSeconds();        // 0-59
    var tz      = data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + ' de ' + meses[mes] + ' de ' + ano4;
    var str_hora;
    if(hora < 10)
        str_hora = "0" + hora + ":";
    else
        str_hora = hora + ":";

        if(min < 10)
        str_hora += "0" + min + ":";
    else
        str_hora += min + ":";

        if(seg < 10)
        str_hora += "0" + seg;
    else
        str_hora += seg;

        datahora.innerHTML = str_data.concat(" ", str_hora);
}

atualizar_data_e_hora();
setInterval(atualizar_data_e_hora, 500);  //atualizar a data e hora de 500 em 500 milisegundos