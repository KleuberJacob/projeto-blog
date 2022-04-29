const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/UsuarioController");
const CategoriaController = require("../controllers/CategoriaController");
const PostController = require("../controllers/ArtigoController");
const { body } = require("express-validator");

router.get("/admin", UsuarioController.admin); 
router.post("/admin/register", [
    body("nome").isLength({min: 2}).withMessage("O nome deve possuir no mínimo 2 digitos!"),
    body("email").isEmail().withMessage("Por favor, informe um e-mail válido!"),
    body("senha").isLength({min: 6}).withMessage("A senha deve possuir no mínimo 6 digitos!")
], UsuarioController.registerAdmin); 
router.post("/admin/login", UsuarioController.loginAdmin); 

module.exports = router;