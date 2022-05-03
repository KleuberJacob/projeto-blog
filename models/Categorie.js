const {Sequelize} = require("sequelize");
const database = require("../database/dbConnection");
const Article = require("./Article")

const Categorie = database.define("categorie", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categorie: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Categorie.hasMany(Article)
Article.belongsTo(Categorie)

module.exports = Categorie;

