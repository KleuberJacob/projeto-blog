require('dotenv').config();
const {Sequelize} = require("sequelize");

const connection = new Sequelize(process.env.DATA_BASE, process.env.DATA_BASE_USER, process.env.DATA_BASE_PASSWORD, {
    host: "localhost",
    dialect: "mysql"
})

module.exports = connection;
