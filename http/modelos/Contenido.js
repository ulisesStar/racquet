module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('contenidos', {
        resena: {
            type: Sequelize.TEXT('long')
        },
        descripcion: {
            type: Sequelize.TEXT('long')
        }
    },{
    	name : {
    		singular: 'contenido',
    		plural: 'contenido'
        }
	})
