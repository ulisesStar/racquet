module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('imagenes', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'imagen',
    		plural: 'imagenes'
        }
	})

