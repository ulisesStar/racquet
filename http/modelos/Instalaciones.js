module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('instalaciones', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'instalacion',
    		plural: 'instalaciones'
        }
	})

