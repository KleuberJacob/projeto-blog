const { validationResult } = require("express-validator");
const User = require("../models/User");

const userController = {

    admin: (req, res) => {
        try {
            res.send("ROTA ADMIN")
        } catch (error) {
            
        }
    },

    registerAdmin: (req, res) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({msg: errors.array()[0].msg})         
        }
        
        try {
            const {name, email, password} = req.body

            User.create({
                name: name,
                email: email,
                password: password
            }).then(() => {
                return res.status(200).json({msg: "Usuário cadastrado com sucesso!"}) 
            })
        } catch (error) {
            
        }                      
    },

    loginAdmin: (req, res) => {
        try {
            res.send("ROTA LOGIN ADMIN")
        } catch (error) {
            
        }
    },


}

module.exports = userController;