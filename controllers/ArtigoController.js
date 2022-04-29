const Artigo = require("../models/Artigo");

const artigoController = {

    getDataIndex: (req, res) => {
        try {
            res.send("teste de acesso com controller")
        } catch (error) {
            
        }   
    }

}

module.exports = artigoController;