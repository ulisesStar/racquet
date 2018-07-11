module.exports = ({Sequelize, sequelize } = conector) =>
    sequelize.define('tags', {
        nombre: Sequelize.STRING
    },{
    	name : {
    		singular: 'tag',
    		plural: 'tags'
        }
	})

