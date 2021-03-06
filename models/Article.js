const {Sequelize} = require("sequelize");
const database = require("../database/dbConnection");

const Article = database.define("article", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false 
    }    
});

module.exports = Article;