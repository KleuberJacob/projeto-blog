const { validationResult } = require("express-validator");
const Article = require("../models/Article");

const articleController = {

    createNewArticle: (req, res) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({msg: errors.array()[0].msg})         
        }

        try {
            const {title, description, categorieId} = req.body

            Article.create({
                title: title,
                description: description,
                categorieId: categorieId
            }).then(() => {
                return res.status(200).json({msg: "Artigo cadastrado com sucesso!"})  
            })
        } catch (error) {
            
        }              
    }

}

module.exports = articleController;