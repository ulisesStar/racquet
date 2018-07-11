module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('eventos', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'evento',
    		plural: 'eventos'
        }
	})

