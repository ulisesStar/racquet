module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('salones', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'salon',
    		plural: 'salones'
        }
	})

