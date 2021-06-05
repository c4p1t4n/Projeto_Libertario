
    // busca de livros dentro do select por tema
    function buscaLivroTema() {
        var tema = slcTema.value

        fetch(`/livro//buscaLivrosTema/${tema}`)
            .then(resposta => {
                if (resposta.ok) {
                    resposta.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        if (resposta.length != 0) {

                            LivroslistaTema(resposta);
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







    // busca todos os livros do banco
    function buscaLivroBanco() {
        fetch("/livro/Livros")
            .then(resposta => {
                if (resposta.ok) {
                    resposta.json().then(function (resposta) {
                        console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                        if (resposta.length != 0) {

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
    var listaLivros = []
    // adiciona os Livros a lista listaLivros
    function LivroslistaPesquisa(resposta) {

        for (let index = 0; index <= resposta.length - 1; index++) {
            nome = resposta[index].nomeLivro;

            listaLivros.push(nome);


        }
        buscaLivroPagina()


    }
    function LivroslistaTema(resposta) {

        for (let index = 0; index <= resposta.length - 1; index++) {
            nome = resposta[index].nomeLivro;

            listaLivros.push(nome);


        }
        LivroslistaBusca(resposta);


    }
    // busca os livros solicitados na barra pesquisar

    function buscaLivroPagina() {
        var buscaNomeLivro = inputBuscaNomeLivro.value;
        fetch(`/livro/buscaLivros/${buscaNomeLivro}`)
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








    // adiciona os livros a pagina
    var listaLivrosBusca = [];
    var listaImagens = [];
    var listaAutor = []
    var listaId = []
    var listaLinkLivro = []
    var listaFinalizado = []
    function LivroslistaBusca(resposta) {
        trPrimeira.innerHTML = "";
        trSegunda.innerHTML = "";
        trTerceira.innerHTML = "";
        listaLivrosBusca = [];
        listaImagens = [];
        listaAutor = [];
        listaId = [];
        listaFinalizado = [];
        listaLinkLivro = [];
        for (let index = 0; index <= resposta.length - 1; index++) {
            var nome = resposta[index].nomeLivro;
            var imagem = resposta[index].linkImagem;
            var nomeAutor = resposta[index].nomeAutor;
            var idLivro = resposta[index].idLivro;
            var linkLivro = resposta[index].linkLivro
            
            listaLivrosBusca.push(nome);
            listaImagens.push(imagem)
            listaAutor.push(nomeAutor)
            listaId.push(idLivro)
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
            var idLivro = listaId[index];
            var linkLivro = listaLinkLivro[index]
           
            console.log(nomeAutor)
            if (index <= 3) {

                trPrimeira.innerHTML += `<td id="livroOqueDeveSerFeito" class="livro">
                        <center><img
                                src="${imagem}">
                            <h4 class="titulo"><a href="${linkLivro}">${nome} </a></h4>
                            <h5 class="nome_autor">Autor:${nomeAutor}</h5>
                            <button  onclick="Favorito(${idLivro})" class="classe-botoes" >Adicionar no Favoritos</button>
                        </center>
                    </td>`
            }
            else if (index <= 8) {
                
                trSegunda.innerHTML += `<td id="livroOqueDeveSerFeito" class="livro">
                        <center><img
                                src="${imagem}">
                            <h4 class="titulo"><a href="${linkLivro}">${nome} </a></h4>
                            <h5 class="nome_autor">Autor:${nomeAutor}</h5>
                            <button  onclick="Favorito(${idLivro})" class="classe-botoes" >Adicionar no Favoritos</button>
                        </center>
                    </td> `

            }
            else {

                trTerceira.innerHTML += `<td id="livroOqueDeveSerFeito" class="livro">
                        <center><img
                                src="${imagem}">
                            <h4 class="titulo"><a href="${linkLivro}">${nome} </a></h4>
                            <h5 class="nome_autor">Autor:${nomeAutor}</h5>
                            <button onclick="Favorito(${idLivro})" class="classe-botoes" >Adicionar no Favoritos</button>
                        </center>
                    </td> `

            }

        }





    }

    var listaLivrosFavoritos = []
    function Favorito(LivroFavorito) {
        listaLivrosFavoritos = []
        listaLivrosFavoritos.push(LivroFavorito)
        var idUsuario = sessionStorage.id_usuario_meuapp
        console.log(idUsuario)
       

            for (let index = 0; index <= listaLivrosFavoritos.length - 1; index++) {
                var livroFav = listaLivrosFavoritos[index]

                fetch(`/livro/livrosFavoritos/${livroFav}/${idUsuario}`, {
                    method: "POST",
                }).then(function (response) {

                    if (response.ok) {

                        alert("livro adicionado com sucesso")

                    } else {
                        alert("Livro ja adicionado aos favoritos")
                        console.log('Erro de cadastro!');
                        response.text().then(function (resposta) {
                            div_erro.innerHTML = resposta;
                        });

                    }
                });

                return false;
            }

            

        }