module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('noticias', {
        nombre: Sequelize.STRING,
        resena: Sequelize.TEXT,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'noticia',
    		plural: 'noticias'
        }
	})

