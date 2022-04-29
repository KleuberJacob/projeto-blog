const { validationResult } = require("express-validator");
const Usuario = require("../models/Usuario");

const usuarioController = {

    admin: (req, res) => {
        try {
            res.send("ROTA ADMIN")
        } catch (error) {
            
        }
    },

    registerAdmin: (req, res) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            res.status(400).json({msg: errors.array()[0].msg})         
        }
        res.send("Validou sim")                      
    },

    loginAdmin: (req, res) => {
        try {
            res.send("ROTA LOGIN ADMIN")
        } catch (error) {
            
        }
    },


}

module.exports = usuarioController;