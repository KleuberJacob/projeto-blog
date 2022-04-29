const {Sequelize} = require("sequelize");
const database = require("../database/dbConnection");
const Artigo = require("./Artigo")

const Categoria = database.define("categoria", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Categoria.hasMany(Artigo)
Artigo.belongsTo(Categoria)

module.exports = Categoria;

