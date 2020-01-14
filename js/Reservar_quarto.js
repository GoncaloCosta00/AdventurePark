
//              DATA LOCAL DO SISTEMA PARA COLOCAR COMO MIN NO INPUT DATE CHECK_IN

function data_do_sistema()
{
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    // formato da data -> aaaa-mm-dd
 
    var date = "" + ano + "-"; // adiciona - para a seguir colocar o mês

    if(mes < 10) // se o mês entre 1 a 9, adiciona 0 -> 01,02 etc e o - para dps adicionar o dia
        date += "0" + mes + "-";
    else
        date += mes + "-";
 
    if(dia < 10) // se o dia entre 1 a 9, adiciona 0 -> 01,02 etc 
        date += "0" + dia;
    else
        date += dia;
    return date;
    
}

function local()
{
  var x = data_do_sistema();
  document.getElementById("data_check_in").min=x; // restringe a data mínima de check-in ao dia atual
}



function restricao_data(){  //restringe a data do check-out. Não pode ser uma data anterior à do check-in
  var data_check_in = document.getElementById("data_check_in").value;
  if(data_check_in=='') //o cliente não introduziu data de check-in
  {
    alert("introduza primeiro a data de check-in")
    return;
  }
  document.getElementById("data_check_out").min=data_check_in; // restringe a data min check-out -> valor min é a data check-in
}


// Vai mostrar as opções do tipo de quarto que a pessoa escolheu.
function mostrar_quartos(){
  var data_check_in = document.getElementById("data_check_in").value;
  var data_check_out = document.getElementById("data_check_out").value;

  if(data_check_in=="") // não selecionou data de check-in
  {
     alert("Seleciona uma data de Check-in");
     return;
  }
  else   if(data_check_out=="") // não selecionou data de check-out
  {
     alert("Seleciona uma Data Check-out");
     return;
  }
  // document.getElementsByClassName('reserva_de_quarto')[0].style.display = "none"; // se já tivermos o form e quisermos ver outro tipo de quarto, apaga o form
  document.getElementsByClassName('informacoes_reserva')[0].style.display="none";
  document.getElementById('informacoes_quarto').style.display="none";
  document.getElementById('formulario_reserva').style.display="none";
  // se já tivermos informação de um tipo de quarto e quisermos ver outro tipo de quarto, tem de se ocultar a div do primeiro tipo de quarto
  document.getElementsByClassName('total_escolha_quarto_individual')[0].style.display = "none"; 
  document.getElementsByClassName('total_escolha_quarto_duplo')[0].style.display = "none";
  document.getElementsByClassName('total_escolha_quarto_familiar')[0].style.display = "none";

  //----------------------------------------------------------------------------------------------------
  var x=document.getElementById("tipos_de_quarto").value;
  if (x==="Individual")
  {   
    document.getElementsByClassName('total_escolha_quarto_individual')[0].style.display = "block";  //ClassName retorna uma coleção. [] é o item da coleção
    window.location.href='#escolha1';// ancora -> ao clicar no botão, vai para esta div
    //document.getElementById('escolha1').id="escolha"; // muda o id para se usar a ancora

    // pode ser feito com window.location.href="#escolha1"; e elimina se a linha 79.
  }
  if (x==="Duplo")
  {   
    document.getElementsByClassName('total_escolha_quarto_duplo')[0].style.display = "block";  //ClassName retorna uma coleção. [] é o item da coleção
    window.location.href="#escolha2"; // ancora -> ao clicar no botão, vai para esta div
    //document.getElementById('escolha2').id="escolha";// muda o id para se usar a ancora
  }
  
  if (x==="Familiar")
  {   
    document.getElementsByClassName('total_escolha_quarto_familiar')[0].style.display = "block";  //ClassName retorna uma coleção. [] é o item da coleção
    window.location.href="#escolha3";// ancora -> ao clicar no botão, vai para esta div
    //document.getElementById('escolha3').id="escolha";// muda o id para se usar a ancora
  }
}


//                                        APARECER O FORMULÁRIO NA PÁGINA

function formulario(num)
{ 
  document.getElementsByClassName('informacoes_reserva')[0].style.display="flex";
  document.getElementById('informacoes_quarto').style.display="flex";
  document.getElementById('formulario_reserva').style.display="block";

  document.getElementsByClassName('reserva_de_quarto')[0].style.display = "flex";
  window.location.href="#data"; // ancora -> ao clicar no botão, vai para esta div
  window.scrollBy(0,-60);
  var data_check_in = document.getElementById("data_check_in").value;
  var data_check_out = document.getElementById("data_check_out").value;
  document.getElementsByClassName('data_reserva')[0].innerHTML="reserva desde "+ data_check_in + " até " + data_check_out;
  
  // vai alterar os dados que aparecem no formulário de acordo com a escolha do tipo de quarto
  if(num==1) // Q.Indivudual s/ peq.almoço
  {
    document.getElementById('tipo_quarto_reserva').innerHTML="Quarto Individual";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço não incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="70€";
  }
  if(num==2)// Q.Indivudual c/ peq.almoço
  {

    document.getElementById('tipo_quarto_reserva').innerHTML="Quarto Individual";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="80€";
  }
  if(num==3 || num== 6) //Suite
  {
    document.getElementById('tipo_quarto_reserva').innerHTML="Suite";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="130€";
  }
  if(num==4) // Q.Duplo s/ peq.almoço
  {
    document.getElementById('tipo_quarto_reserva').innerHTML="Quarto Duplo";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço não incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="85€";
  }
  if(num==5) // Q.Duplo c/ peq.almoço
  {
    document.getElementById('tipo_quarto_reserva').innerHTML="Quarto Duplo";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="95€";
  }

  if(num==7) // Q.Familiar s/ peq.almoço
  {
    document.getElementById('tipo_quarto_reserva').innerHTML="Quarto Familiar";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço não incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="70€";
  }
  if(num==8)// Q.Familiar c/ peq.almoço
  {
    document.getElementById('tipo_quarto_reserva').innerHTML="Quarto Familiar";
    document.getElementById('peq_almoco').innerHTML="Pequeno almoço incluido";
    document.getElementsByClassName('preco_quarto_reserva')[0].innerHTML="80€";
  }

}

//                                         FORMULÁRIO DE RESERVA  -> validação 

function validar_submissao(){
  // registo dos dados em variáveis para depois os dados serem guardados em local storage
  var nome_pessoa = document.getElementById('nome_completo').value;
  var morada_pessoa = document.getElementById('morada_pessoa').value;
  var nif_pessoa = document.getElementById('nif_pessoa').value;
  var email_pessoa = document.getElementById('email_pessoa').value;
  var telefone_pessoa = document.getElementById('telefone_pessoa').value;
  var tipo_quarto = document.getElementById('tipo_quarto_reserva').innerHTML;
  // Pega a lista já cadastrada, se não houver vira um array vazio
  var lista_reservas = JSON.parse(localStorage.getItem('lista-reservas') || '[]');
   // Adiciona reserva
   lista_reservas.push({
    Nome: nome_pessoa,
    Morada: morada_pessoa,
    NIF: nif_pessoa,
    Email: email_pessoa,
    Telefone: telefone_pessoa,
    Tipo_Quarto: tipo_quarto
  });
  // Salva a lista alterada
  localStorage.setItem("lista-reservas", JSON.stringify(lista_reservas));
  alert("Reserva efetuada com sucesso");
  
}



//                  VALIDAÇÃO DOS NÚMEROS DE TELEMÓVEL INTRODUZIDOS -> ALTERAÇÃO DO PATTERN
function validar_telefone()
{
  var x=document.getElementById('selecao_telemovel').value;
  if(x==="brasil")
  {
    document.getElementById('telefone_pessoa').placeholder="ex: 6792012010";
    document.getElementById('telefone_pessoa').pattern = "[0-9]{2}[789][0-9]{6}";
  }
  if(x==="chile")
  {

    document.getElementById('telefone_pessoa').placeholder="ex: 870654826";
    document.getElementById('telefone_pessoa').pattern = "[0-9]{2}[789][0-9]{6}";

  }
  if(x==="espanha")
  {

    document.getElementById('telefone_pessoa').placeholder="ex: 610765705";
    document.getElementById('telefone_pessoa').pattern = "6[0-9]{8}";

  }
  if(x==="franca")
  {

    document.getElementById('telefone_pessoa').placeholder="ex: 612851765";
    document.getElementById('telefone_pessoa').pattern = "6[0-9]{8}";
  }
  if(x==="luxemburgo")
  {
    document.getElementById('telefone_pessoa').placeholder="ex: 621526456";
    document.getElementById('telefone_pessoa').pattern = "6[269][18][0-9]{6}";
  }
  if(x==="portugal")
  {
    document.getElementById('telefone_pessoa').placeholder="ex: 961202548";
    document.getElementById('telefone_pessoa').pattern = "9[1236][0-9]{7}";
  }
  if(x==="reino_unido")
  {
    document.getElementById('telefone_pessoa').placeholder="ex: 7592012010";
    document.getElementById('telefone_pessoa').pattern = "7[5789][0-9]{8}";
  }
  if(x==="suica")
  {
    document.getElementById('telefone_pessoa').placeholder="ex: 741235462";
    document.getElementById('telefone_pessoa').pattern = "7[46789][0-9]{7}";
  }
}