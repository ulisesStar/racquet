module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('instructores', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'instructor',
    		plural: 'instructores'
        }
	})

