var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Livros = require('../models').Livros;
var LivroFavorito = require('../models').LivroFavorito;


// Pesquisa na library

router.get('/Livros', function (req, res, next) {
    console.log('Recuperando todos os Livros');

    let instrucaoSql = `SELECT * FROM tbLivros`;

    sequelize.query(instrucaoSql, {
        model: Livros,
        mapToModel: true
    })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});

router.get('/buscaLivros/:buscaNomeLivro', function (req, res, next) {

    var buscaNomeLivro = req.params.buscaNomeLivro;

    console.log(buscaNomeLivro);

    let instrucaoSql = `select tbLivros.*,tbAutores.nomeAutor
                                            from tbLivros
                                            inner join tbAutores on 
                                            idAutor=fkAutor where nomeLivro like '${buscaNomeLivro}%' ;`;

    sequelize.query(instrucaoSql, {
        model: Livros,
        mapToModel: true
    })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});


router.get('/buscaLivrosTema/:tema', function (req, res, next) {

    var tema = req.params.tema

    console.log(tema);

    let BuscaLivroTema = `select tbLivros.*,tbAutores.nomeAutor
                                            from tbLivros
                                            inner join tbAutores on 
                                            idAutor=fkAutor where temaLivro='${tema}' ;`;

    sequelize.query(BuscaLivroTema, {
        model: Livros,
        mapToModel: true
    })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});
//  Pesquisa livros Favoritos
router.post('/livrosFavoritos/:livroFav/:idUsuario', function (req, res, next) {

    var idUsuario = req.params.idUsuario;
    var livroFav = req.params.livroFav;




    LivroFavorito.create({

        fkUsuario: idUsuario,
        fkLivro: livroFav

    }).then(resultado => {
        console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
    }).catch(erro => {

        console.error(erro);
        res.status(500).send(erro.message);
    });

});

// busca todos os livros Favoritos
router.get('/buscaLivrosFavoritos/:idUsuarioFav', function (req, res, next) {

    var idUsuarioFav = req.params.idUsuarioFav;
   
    let instrucaoSql = `select tbLivrosFavoritos.* ,
                                tbLivros.* ,
                                tbUsuarios.* ,
                                tbAutores.*
                                from tbLivrosFavoritos
                                inner join tbUsuarios on fkUsuario = ${idUsuarioFav} and idUsuario=${idUsuarioFav}
                                inner join tbLivros on fkLivro = idLivro
                                left join tbAutores on fkAutor = idAutor ;`
                                ;    
     
                                           

    sequelize.query(instrucaoSql, {
        model: Livros,
        mapToModel: true
    })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});


router.get('/buscaLivrosFavoritosTema/:idUsuarioFav/:tema', function (req, res, next) {

    var idUsuarioFav = req.params.idUsuarioFav;
    var tema = req.params.tema;
    let BuscaLivroFavoritoTemaSql = `select tbLivrosFavoritos.* ,
                                tbLivros.* ,
                                tbUsuarios.* ,
                                tbAutores.*
                                from tbLivrosFavoritos
                                inner join tbUsuarios on fkUsuario = ${idUsuarioFav} and idUsuario=${idUsuarioFav}
                                inner join tbLivros on fkLivro = idLivro
                                left join tbAutores on fkAutor = idAutor where temaLivro = '${tema}' ;`
                                ;    
     
                                           

    sequelize.query(BuscaLivroFavoritoTemaSql, {
        model: Livros,
        mapToModel: true
    })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});


router.get('/buscaLivrosFavoritosBarra/:idUsuarioFav/:buscaNomeLivro', function (req, res, next) {

    var idUsuarioFav = req.params.idUsuarioFav;
    var buscaNomeLivro = req.params.buscaNomeLivro;
    let buscaLivrosFavoritosSql = `select tbLivrosFavoritos.* ,
                                tbLivros.* ,
                                tbUsuarios.* ,
                                tbAutores.*
                                from tbLivrosFavoritos
                                inner join tbUsuarios on fkUsuario = ${idUsuarioFav} and idUsuario=${idUsuarioFav}
                                inner join tbLivros on fkLivro = idLivro
                                left join tbAutores on fkAutor = idAutor where nomeLivro  like '${buscaNomeLivro}%' ;`
                                ;    
     
                                           

    sequelize.query(buscaLivrosFavoritosSql, {   
        model: Livros,
        mapToModel: true
    })
        .then(resultado => {
            console.log(`Encontrados: ${resultado.length}`);
            res.json(resultado);
        }).catch(erro => {
            console.error(erro);
            res.status(500).send(erro.message);
        });
});







module.exports = router;



