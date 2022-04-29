const Categoria = require("../models/Categoria");

const categoriaController = {

    getDataIndex: (req, res) => {
        try {
            res.send("teste de acesso com controller")
        } catch (error) {
            
        }
    }

}

module.exports = categoriaController;
