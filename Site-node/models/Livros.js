'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Livros = sequelize.define('Livros',{	
		idLivro: {
			field: 'idLivro',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nomeLivro: {
			field: 'nomeLivro',
			type: DataTypes.STRING,
			allowNull: false
		},
		temaLivro: {
			field: 'temaLivro',
			type: DataTypes.STRING,
			allowNull: false
		},
		Paginas: {
			field: 'numeroPaginas',
			type: DataTypes.INTEGER, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		linkImagem: {
			field: 'linkImagem',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		fkAutor: {
			field: 'fkAutor',
			type: DataTypes.INTEGER, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		linkLivro: {
			field: 'linkLivro',
			type: DataTypes.STRING, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		}
	}, 
	{
		tableName: 'tbLivros', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Livros;
};
