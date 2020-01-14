function compra_bilhete(n)
{



// tipos de bilhetes (espetáculos e parques)
if(n==1)
{
    var tipo_bilhete= "espetáculo";
    ndias=1;
    var nome=document.getElementById('tipo_b1').innerHTML;
    var nadultos=document.getElementById('a_b1').value;
    var ncriancas=document.getElementById('c_b1').value;
    if(nadultos==0 & ncriancas==0) // se no bilhete estiver 0 crianças e 0 adultos
    {
        alert("numero de pessoas inválido");
        return
    }
    preco_dia= 10*nadultos + 5*ncriancas;
    precoTotal=preco_dia *ndias;
    
}  else  if(n==2)
{
    var tipo_bilhete= "espetáculo";
    ndias=1;
    var nome=document.getElementById('tipo_b2').innerHTML;
    var nadultos=document.getElementById('a_b2').value;
    var ncriancas=document.getElementById('c_b2').value;
    if(nadultos==0 & ncriancas==0)
    {
        alert("numero de pessoas inválido");
        return
    }
    preco_dia= 10*nadultos + 5*ncriancas;
    precoTotal=preco_dia *ndias;
}
else  if(n==3)
{
    var tipo_bilhete= "espetáculo";
    ndias=1;
    var nome=document.getElementById('tipo_b3').innerHTML;
    var nadultos=document.getElementById('a_b3').value;
    var ncriancas=document.getElementById('c_b3').value;
    if(nadultos==0 & ncriancas==0)
    {
        alert("numero de pessoas inválido");
        return
    }
    preco_dia= 10*nadultos + 5*ncriancas;
    precoTotal=preco_dia *ndias;
}

else  if(n==5)
{
    var tipo_bilhete= "Parque";
    var ndias=document.getElementById('dias_p1').value;
    var nome=document.getElementById('tipo_p1').innerHTML;
    var nadultos=document.getElementById('a_p1').value;
    var ncriancas=document.getElementById('c_p1').value;
    if(nadultos==0 & ncriancas==0)
    {
        alert("numero de pessoas inválido");
        return
    }
    preco_dia= 40*nadultos + 25*ncriancas;
    precoTotal=preco_dia *ndias;
}
else  if(n==6)
{
    var tipo_bilhete= "Parque";
    var ndias=document.getElementById('dias_p2').value;
    var nome=document.getElementById('tipo_p2').innerHTML;
    var nadultos=document.getElementById('a_p2').value;
    var ncriancas=document.getElementById('c_p2').value;
    if(nadultos==0 & ncriancas==0)
    {
        alert("numero de pessoas inválido");
        return
    }
    preco_dia= 40*nadultos + 25*ncriancas;
    precoTotal=preco_dia *ndias;
}
else  if(n==7)
{
    var tipo_bilhete= "Parque";
    var ndias=document.getElementById('dias_p3').value;
    var nome=document.getElementById('tipo_p3').innerHTML;
    var nadultos=document.getElementById('a_p3').value;
    var ncriancas=document.getElementById('c_p3').value;
    if(nadultos==0 & ncriancas==0)
    {
        alert("numero de pessoas inválido");
        return
    }
    preco_dia= 40*nadultos + 25*ncriancas;
    precoTotal=preco_dia *ndias;
}


    // Pega a lista já registada, se não houver cria
    var carrinho_de_compras = JSON.parse(localStorage.getItem('carrinho-compras') || '[]');
    // Adiciona reserva
    carrinho_de_compras.push({
     tipo_de_bilhete: tipo_bilhete,
     dias: ndias,
     nome_t:nome,
     numero_adultos: nadultos,
     numero_criancas: ncriancas,
     preco_total: precoTotal
    });
    // Salva a lista alterada
    localStorage.setItem("carrinho-compras", JSON.stringify(carrinho_de_compras));
    alert("Bilhete adicionado ao carrino de compras");

}

function carrinho_compras(){
    window.location.href="carrinho_de_compras.html";
}
    