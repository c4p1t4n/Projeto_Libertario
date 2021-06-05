function verificaoCadastrar(){
    var email = inputEmail.value;
    console.log(email)
    var confirmacaoEmail = inputConfirmacaoEmail.value;
    var senha = inputSenha.value;
    var confirmacaoSenha = inputConfirmacaoSenha.value;
    if (email != confirmacaoEmail){
        if (email.indexOf("@") == -1 && email.indexOf(".com") == -1 || confirmacaoEmail.indexOf(".com") && confirmacaoEmailindexOf("@") ){
            alert("Digite um email valido")
            
        }else{
        alert("Emails não coincidem")
        
        }
        
    }
    else if(senha != confirmacaoSenha){
        alert("Senhas não coincidem")
        
       
    }
    else{
        
        cadastrar()
    }
}
function cadastrar() {
    console.log
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        
        if (response.ok) {

            window.location.href='./login.html';

        } else {
            
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            
            
        }
    });

    return false;
}
