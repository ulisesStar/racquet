module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('instalaciones', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'instalacion',
    		plural: 'instalaciones'
        }
	})

