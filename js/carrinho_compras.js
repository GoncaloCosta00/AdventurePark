
var preco_final=0; // preço total -> adiciona o preco de todos os bilhetes comprados
function mostrar(){  
   
    var carrinho=JSON.parse(localStorage.getItem('carrinho-compras'));
    var lista = [];
    for(i=0;i<carrinho.length;i++)
    {    

        //guarda em variáveis os dados que estão no localstorage
        var tipo_bilhete_carrinho= "tipo de bilhete: " +carrinho[i].tipo_de_bilhete;
        var dias_carrinho="dias: "+carrinho[i].dias;
        var nome_carrinho="nome: "+carrinho[i].nome_t;
        var nadultos_carrinho="númeor de adultos: "+carrinho[i].numero_adultos;
        var ncriancas_carrinho="número de crianças: "+carrinho[i].numero_criancas;
        var preco_carrinho="preço do bilhete: "+carrinho[i].preco_total; // preço do bilhete em causa
        preco_final +=carrinho[i].preco_total; // preço total -> adiciona o preco de todos os bilhetes comprados
       
        // Guarda todas as variáveis num array e converte numa lista pela função map
        var compra=[tipo_bilhete_carrinho,dias_carrinho,nome_carrinho,nadultos_carrinho,ncriancas_carrinho,preco_carrinho];
        lista.push(React.createElement("ul", {id:"lista_compras"},
                 compra.map( (compra) => React.createElement("li", null, compra)),
                 React.createElement("hr",null,"")
             ));
        
        //hr tag que define mudança temática -> adiciona uma linha  
    }
    // para mostrar todos os elementos da key carrinho de compras.
    // se não usássemos isto em baixo, apenas aparecia os dados do último elemento do array
    ReactDOM.render(
        React.createElement("div", null, lista),
        document.getElementsByClassName("itens")[0]
    );
    document.getElementById('preco_total').innerHTML= "Preço total: "+preco_final; // preço de todas as compras de bilhetes
   
}

function apagar(){
    localStorage.removeItem('carrinho-compras'); //apaga o carrinho de compras
    document.getElementsByClassName('itens')[0].innerHTML="";// apaga o conteudo da div, de modo a não mostrar nada no ecrã
    document.getElementById('preco_total').innerHTML= ""; // apaga o conteudo da div do preço total
}



function carrinhocompras()
{
    window.location.href="carrinho_de_compras.html";
}


function gotobilheteira(){
    window.location.href="bilheteira.html";
}