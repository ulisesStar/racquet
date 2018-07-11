module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('instrucciones', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'instruccion',
    		plural: 'instrucciones'
        }
	})

