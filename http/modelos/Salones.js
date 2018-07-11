module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('salones', {
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT
    },{
    	name : {
    		singular: 'salon',
    		plural: 'salones'
        }
	})

