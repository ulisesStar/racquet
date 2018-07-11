module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('noticias', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'noticia',
    		plural: 'noticias'
        }
	})

