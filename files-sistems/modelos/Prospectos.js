module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('prospectos', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'prospecto',
    		plural: 'prospectos'
        }
	})

