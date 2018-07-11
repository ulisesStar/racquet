module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('eventos', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'evento',
    		plural: 'eventos'
        }
	})

