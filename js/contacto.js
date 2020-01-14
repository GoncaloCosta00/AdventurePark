var Formatacao = {
    nome: "Introduza o seu nome",
    email: "exemplo@exemplo.com",
    motivo: ["Bilhetes", "Reembolso", "Reservar Quartos"],
    sel_motivo: "Selecione um motivo",
    telefone: "961234567",
    mensagem: "Conte-nos o seu problema em 250 caracteres!"
}
var labels = {
    nome: "Nome *",
    email: "Email *",
    motivo:"Motivo de contacto *",
    telefone: "Telefone",
    mensagem: "Mensagem *",
    aviso: "* Campos de preenchimento obrigatório",
    submeter: "Submeter",
    limpar: "Limpar"
}
var mensagem_campo_nao_p = "Falta preencher este campo!";
var erro_no_email = "O seu email tem de conter um caracter @";
var erro_no_telefone = "O Contacto deve conter somente 9 dígitos!";
var mensagem_submetida = "Mensagem submetida com sucesso!\nIremos contactá-lo em breve";
var limite_chars = 250;

var Registos;
var select_motivo;

function set_mensagens_erro()
{ 
    document.getElementById("nome").setCustomValidity('');
    document.getElementById("email").setCustomValidity('');
    document.getElementById("telefone").setCustomValidity('');
    document.getElementById("motivo").setCustomValidity('');
    document.getElementById("mensagem").setCustomValidity('');

	document.getElementById("mensagem").setAttribute("oninvalid", "setCustomValidity(\"" + mensagem_campo_nao_p + "\")");
	document.getElementById("nome").setAttribute("oninvalid", "setCustomValidity(\"" + mensagem_campo_nao_p + "\")");
	document.getElementById("motivo").setAttribute("oninvalid", "setCustomValidity(\"" + mensagem_campo_nao_p + "\")");
	document.getElementById("telefone").setAttribute("oninvalid", "setCustomValidity(\"" + erro_no_telefone + "\")");

    if(document.getElementById("email").value == "")
        document.getElementById("email").setAttribute("oninvalid", "setCustomValidity(\"" + mensagem_campo_nao_p + "\")");
    else
        document.getElementById("email").setAttribute("oninvalid", "setCustomValidity(\"" + erro_no_email + "\")");
}

class form_contacto extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            nome: "",
            motivo: "",
            email: "",
            telefone: "",
            mensagem: ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.submeter_formulario = this.submeter_formulario.bind(this);
        this.limpar_formulario = this.limpar_formulario.bind(this);
    }

    handleChange(event){
        switch(event.target.id)
        {
            case "nome":
                this.setState({nome: event.target.value});
                break;

            case "email":
                this.setState({email: event.target.value});
                break;

            case "motivo":
                this.setState({motivo: event.target.children[select_motivo.selectedIndex].textContent});
                break;

            case "telefone":
                this.setState({telefone: event.target.value});
                break;

            case "mensagem":
                this.setState({mensagem: event.target.value});
                break;
        }
    }

    submeter_formulario(){
        if (localStorage.hasOwnProperty("Dados_form_contacto_ant")) {
            Registos = JSON.parse(localStorage.getItem("Dados_form_contacto_ant"))
        }
        else
            Registos = new Array();

        var contacto = {
            nome: this.state.nome,
            motivo: this.state.motivo,
            email: this.state.email,
            telefone: this.state.telefone,
            mensagem: this.state.mensagem
        }
    
        Registos.push(contacto);
    
        localStorage.setItem("Dados_form_contacto_ant", JSON.stringify(Registos));
        alert(mensagem_submetida);
    }

    limpar_formulario(){
        this.setState({
            nome: "",
            motivo: "",
            email: "",
            telefone: "",
            mensagem: ""
        });
    }

    render(){
        return (
            React.createElement("form", {id: "formulario_contacto", onSubmit: this.submeter_formulario}, [
                React.createElement("h2", {id: "titulo"}, "Contacte-nos"),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("label", null, labels.nome),
                    React.createElement("input", {id: "nome", type: "text", required:"required", value: this.state.nome, onChange: this.handleChange, placeholder:Formatacao.nome}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("label", null, labels.email),
                    React.createElement("input", {id: "email", type: "email", willValidate: "true", required:"required", value: this.state.email, onChange: this.handleChange, placeholder:Formatacao.email}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("label", null, labels.telefone),
                    React.createElement("input", {id: "telefone", pattern: "[0-9]{9}", maxLength: "9", type: "text", value: this.state.telefone, onChange: this.handleChange, placeholder:Formatacao.telefone}, null)
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("label", null, labels.motivo),
                    React.createElement("select", {id: "motivo", value: this.state.motivo, required:"required", onChange: this.handleChange}, [
                        React.createElement("option", {hidden:"hidden", value: ""}, Formatacao.sel_motivo),
                        Formatacao.motivo.map((aux) => {
                        return React.createElement("option", {value: aux}, aux)
                        })
                    ])
                ]),
                React.createElement("div", {className:"dados"}, [
                    React.createElement("label", null, labels.mensagem),
                    React.createElement("textarea", {id: "mensagem", type: "text", maxLength: "" + limite_chars, required:"required", value: this.state.mensagem, onChange: this.handleChange, placeholder:Formatacao.mensagem}, null)
                ]),
                React.createElement("p", {id: "aviso"}, labels.aviso),
                React.createElement("div", {className:"botoes"}, [
                    React.createElement("input", {type: "submit", value: labels.submeter, onClick: set_mensagens_erro}, null),
                    React.createElement("input", {type: "reset", value: labels.limpar, onClick: this.limpar_formulario}, null)
                ])

            ])
        );
    }

}

ReactDOM.render(React.createElement(form_contacto), document.getElementById("formulario_contacto_div"));

select_motivo = document.getElementById("motivo");