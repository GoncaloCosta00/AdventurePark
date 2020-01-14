var menu_conteudo = [
        [{Titulo:"Espetáculos", Link:"#"}, [{Titulo:"Cinema", Link:"cinema.html"}, {Titulo:"Aquáticos", Link:"aquaticos.html"}, {Titulo:"Temáticos", Link:"tematicos.html"}]],
        [{Titulo:"Nosso parques", Link:"#"}, [{Titulo:"Viseu Park", Link:"Viseu_Park.html"}, {Titulo:"Adventure Park", Link:"Adventure_Park.html"}, {Titulo:"Ferrari Park", Link:"Ferrari_Park.html"}]],
        [{Titulo:"Reservar quarto", Link:"reservar_quarto.html"}, null],
        [{Titulo:"Bilheteira", Link:"bilheteira.html"}, null],
        [{Titulo:"Quem somos", Link:"about.html"}, null],
        [{Titulo:"Contacto", Link:"contacto.html"}, null]
    ];

var caracteristicas =   {
                            menu:{caixa: "menu", elemento:"elemento_menu", texto: "amenu"},
                            submenu:{caixa: "submenu", elemento:"elemento_submenu", texto: "asub"},
                            icone_menu:{imagem: "imagens/menu/menu.png", design: "imagem_menu"}
                        };


//construcao do menu                   
function criar_sub_menu(submenus)
{
    if(submenus == null)
        return null;

    return React.createElement("div", {className:caracteristicas.submenu.caixa},  /*cria a caixa do submenu */
        submenus.map((submenu) => {
            return React.createElement("div", {className:caracteristicas.submenu.elemento}, React.createElement("a", {href:submenu.Link, className:caracteristicas.submenu.texto}, submenu.Titulo));
        })
    );
}

function criar_menu(menu)
{
    return menu.map((menus) => {
        return React.createElement("div", {className:caracteristicas.menu.elemento}, React.createElement("a", {href:menus[0].Link, className:caracteristicas.menu.texto}, menus[0].Titulo), criar_sub_menu(menus[1]));
    })
}

function criar_botao_menu(){
    return React.createElement("div", {id:"botaomenu"}, React.createElement("img", {id:caracteristicas.icone_menu.design, src:caracteristicas.icone_menu.imagem}, null), React.createElement("nav", {id:caracteristicas.menu.caixa}, criar_menu(menu_conteudo)));
}

function renderizar_menu()
{ 
    ReactDOM.render(criar_botao_menu(), document.getElementById("menudiv"));
}


//executado quando o site carrega
renderizar_menu();

