const {Sequelize} = require("sequelize");
const database = require("../database/dbConnection");

const Artigo = database.define("artigo", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descrição: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
});

module.exports = Artigo;