function verificaoCadastrar() {
    verificarEmail();
    verificarSenha()
    
   
}

function verificarEmail() {
    var email = inputEmail.value;
    var confirmacaoEmail = inputConfirmacaoEmail.value;
    if (email != confirmacaoEmail) {
        if (email.indexOf("@") == -1 && email.indexOf(".com") == -1 || confirmacaoEmail.indexOf(".com") && confirmacaoEmail.indexOf("@")) {
            alert("Digite um email valido")

        } else {
            alert("Emails não coincidem")

        }

    }
    else{
        verificarSenha();
    }

}

function verificarSenha(){
    var senha = inputSenha.value;
    var confirmacaoSenha = inputConfirmacaoSenha.value;
    if (senha !== confirmacaoSenha) {
        alert("Senhas não coincidem")


    }
    else {

        cadastrar();
    }

}

function cadastrar() {

    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {

        if (response.ok) {

            window.location.href = './login.html';

        } 
    });

    return false;
}
