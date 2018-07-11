module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('apartados', {
        fecha: Sequelize.DATE
    },{
    	name : {
    		singular: 'apartado',
    		plural: 'apartados'
        }
	})

