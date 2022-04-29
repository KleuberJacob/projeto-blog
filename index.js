const express = require("express");
const app = express();
const port = 3000;
const Router = require("./routes");
const sequelizeConnection = require('./database/dbConnection');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

sequelizeConnection.authenticate()
    .then(() => {
        console.log("Connection Database Success!")
    }).catch((error) => {
        console.log(error)
    });

async function syncModelsSequelize() {
    await sequelizeConnection.sync({ force: true })
};

syncModelsSequelize();

app.use("/", Router);

app.listen(port, (req, res) => {
    console.log("App running in port: " + port)
});