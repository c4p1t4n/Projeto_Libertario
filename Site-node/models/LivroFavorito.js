module.exports = (sequelize, DataTypes) => {
    let LivroFavorito = sequelize.define('LivroFavorito',{	
		fkUsuario: {
			field: 'fkUsuario',
			type: DataTypes.INTEGER,
			primaryKey: true
		},	
		fkLivro: {
			field: 'fkLivro',
			type: DataTypes.INTEGER,
			primaryKey: true
		},
			
	}, 
	{
		tableName: 'tbLivrosFavoritos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return LivroFavorito;
};