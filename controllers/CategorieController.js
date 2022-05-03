const { validationResult } = require("express-validator");
const Categorie = require("../models/Categorie");

const categorieController = {

    createNewCategorie: (req, res) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({msg: errors.array()[0].msg})         
        }
        
        try {
            const {categorie} = req.body

            Categorie.create({
                categorie: categorie
            }).then(() => {
                return res.status(200).json({msg: "Categoria cadastrada com sucesso!"}) 
            })
        } catch (error) {
            
        }                  
    },

    getAllCategories: (req, res) => {       
        try {            
            Categorie.findAll().then((categories) => {
                return res.status(200).json({categories: categories}) 
            })
        } catch (error) {
            
        }                  
    },

}

module.exports = categorieController;
