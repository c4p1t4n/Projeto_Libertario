
var listaLivros = [];
function LivroslistaPesquisa(resposta) {

    for (let index = 0; index <= resposta.length - 1; index++) {
        nome = resposta[index].nomeLivro;
        listaLivrosFavoritos.push(nome);


    }
    LivroslistaBusca(resposta)


}



// busca todos os livros Favoritos
function buscaLivroFavoritos() {
    var idUsuarioFav = sessionStorage.id_usuario_meuapp;


    fetch(`/livro/buscaLivrosFavoritos/${idUsuarioFav}`)
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    if (resposta.length !== 0) {

                        LivroslistaPesquisa(resposta);
                    }
                    else {
                        alert("Nenhum Livro encontrado")
                    }


                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção Dos Livros: ${error.message}`);
        });
}

// busca de livros dentro do select por tema
function buscaLivroTema() {
    var idUsuarioFav = sessionStorage.id_usuario_meuapp
    var tema = slcTema.value

    fetch(`/livro/buscaLivrosFavoritosTema/${idUsuarioFav}/${tema}`)
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    if (resposta.length != 0) {

                        LivroslistaBusca(resposta);
                    }
                    else {
                        alert("Nenhum Livro encontrado")
                    }


                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção Dos Livros: ${error.message}`);
        });


}








// busca os livros solicitados na barra pesquisar

function buscaLivroPagina() {
    var idUsuarioFav = sessionStorage.id_usuario_meuapp
    var buscaNomeLivro = inputBuscaNomeLivro.value;
    fetch(`/livro/buscaLivrosFavoritosBarra/${idUsuarioFav}/${buscaNomeLivro}`)
        .then(resposta => {
            if (resposta.ok) {
                resposta.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                    if (resposta.length != 0) {
                        LivroslistaBusca(resposta);
                    }
                    else {
                        alert("Nenhum Livro encontrado")
                    }


                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção Dos Livros: ${error.message}`);
        });
}


var listaLivrosFavoritos = [];
// adiciona os Livros a lista listaLivros






// adiciona os livros a pagina
var listaLivrosBusca = [];
var listaImagens = [];
var listaAutor = [];
var listaLinkLivro = []

function LivroslistaBusca(resposta) {
    trPrimeira.innerHTML = "";
    trSegunda.innerHTML = "";
    trTerceira.innerHTML = "";
    listaLivrosBusca = [];
    listaImagens = [];
    listaAutor = [];
    listaLinkLivro = [];
    for (let index = 0; index <= resposta.length - 1; index++) {
        var nome = resposta[index].nomeLivro;
        var imagem = resposta[index].linkImagem;
        var nomeAutor = resposta[index].nomeAutor;
        var linkLivro = resposta[index].linkLivro
        listaLivrosBusca.push(nome);
        listaImagens.push(imagem)
        listaAutor.push(nomeAutor)
        listaLinkLivro.push(linkLivro)


    }



    console.log(listaLivrosBusca)
    for (let index = 0; index <= listaLivrosBusca.length - 1; index++) {
        console.log(index)
        var nome = listaLivrosBusca[index];
        console.log(nome)
        var imagem = listaImagens[index];
        console.log(imagem)
        var nomeAutor = listaAutor[index];
        console.log(nomeAutor)
        var linkLivro = listaLinkLivro[index];
        if (index <= 3) {

            trPrimeira.innerHTML +=
                `<td id="livroOqueDeveSerFeito" class="livro">
         <center><img
                 src="${imagem}">
             <h4 class="titulo"><a href="${linkLivro}">${nome} </a></h4>
             <h5 class="nome_autor">Autor:${nomeAutor}</h5>
          
            
         </center>
     </td>`
        }
        else if (index <= 8) {
            alert("ultimo")
            trSegunda.innerHTML +=
                `<td id="livroOqueDeveSerFeito" class="livro">
         <center><img
                 src="${imagem}">
             <h4 class="titulo"><a href="${linkLivro}">${nome} </a></h4>
             <h5 class="nome_autor">Autor:${nomeAutor}</h5>
        
            
         </center>
     </td> `

        }
        else {

            trTerceira.innerHTML +=
                `<td id="livroOqueDeveSerFeito" class="livro">
         <center><img
                 src="${imagem}">
             <h4 class="titulo"><a href="${linkLivro}">${nome} </a></h4>
             <h5 class="nome_autor">Autor:${nomeAutor}</h5>
             
             
         </center>
     </td> `

        }

    }



}









function load() {
    var idUsuario = sessionStorage.id_usuario_meuapp
    if (idUsuario == null) {
        alert("Efetue  login")
        window.location.href = 'login.html';
    }
    else {
        menu.innerHTML = `  <div class="itens_menu">
                 <a class="menu_titulo" href="./index.html">Home</a>
                 <ul class="list_itens" >
                     <li class="li_item item_divisor"><a class="link_ancor" href="./favoritos.html">Favorites</a>                    
                     <li class="li_item item_divisor"><a class="link_ancor" href="./library.html">Library</a></li>
                     <li class="li_item "><a class="link_ancor" href="./timeline.html">Timeline</a></li>                                                   
                     <li class="li_item "><a class="link_ancor" href="./metricas.html">Analitics</a></li>
                     <li class="li_item "><a class="link_ancor" onclick="sair()" >Exit</a></li>
                 </ul>
             </div>
             
              `

        buscaLivroFavoritos()


    }
}
function sair() {
    confirmacaoSaida = confirm("Deseja mesmo sair")
    if (confirmacaoSaida == true) {
        sessionStorage.clear();
        window.location.href = 'index.html';
    } else {

    }


}
