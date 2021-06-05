function sair() {
    confirmacaoSaida = confirm("Deseja mesmo sair")
    if (confirmacaoSaida == true) {
        
        window.location.href = 'index.html';
        sessionStorage.clear();
    } else {

    }
}



