module.exports = (sequelize, DataTypes) => {
    let Autor = sequelize.define("Autor",{	
		idAutor: {
			field: "idAutor",
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
		nomeAutor: {
			field: "nomeAutor",
			type: DataTypes.STRING,
			allowNull: false
		},
		nascimento: {
			field: "nascimento",
			type: DataTypes.DATEONLY,
			allowNull: false
		},
		morte: {
			field: "morte",
			type: DataTypes.DATEONLY, // NÃO existe DATETIME. O tipo DATE aqui já tem data e hora
			allowNull: false
		},
		
	}, 
	{
		tableName: "tbAutores", 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Autor;
};