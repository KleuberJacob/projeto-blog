const { body } = require("express-validator");

const validator = {

    validateDataCreateUser: () => {
        return [
            body("name").isLength({min: 2}).withMessage("O nome deve possuir no mínimo 2 digitos!"),
            body("email").isEmail().withMessage("Por favor, informe um e-mail válido!"),
            body("password").isLength({min: 6}).withMessage("A senha deve possuir no mínimo 6 digitos!")
        ]
    },

    validateDataCreateCategorie: () => {
        return [
            body("categorie").isLength({min: 5}).withMessage("O nome da categoria deve possuir no mínimo 5 digitos!")
        ]
    },

    validateDataCreateArticle: () => {
        return [
            body("title").isLength({min: 5}).withMessage("O titulo deve possuir no mínimo 5 digitos!"),
            body("description").isLength({min: 5}).withMessage("A descrição deve possuir no mínimo 5 digitos!"),
            body("categorieId").isLength({min: 1}).withMessage("Sem mensagem!")
        ]
    },
    
}


module.exports = validator;