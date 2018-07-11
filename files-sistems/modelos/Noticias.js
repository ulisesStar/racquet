module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('noticias', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'noticia',
    		plural: 'noticias'
        }
	})

