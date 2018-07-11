module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('servicios', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'servicio',
    		plural: 'servicios'
        }
	})

