module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('prospectos', {
        nombre: Sequelize.STRING,
        correo : Sequelize.STRING,
        telefono : Sequelize.STRING,
        mensaje : Sequelize.TEXT
    },{
    	name : {
    		singular: 'prospecto',
    		plural: 'prospectos'
        }
	})

