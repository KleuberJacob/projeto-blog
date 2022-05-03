const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const CategorieController = require("../controllers/CategorieController");
const ArticleController = require("../controllers/ArticleController");

const Validator = require("../middleware/validator")


router.get("/admin", UserController.admin); 
router.post("/admin/register", Validator.validateDataCreateUser(), UserController.registerAdmin); 
router.post("/admin/login", UserController.loginAdmin); 
router.post("/admin/create/categorie", Validator.validateDataCreateCategorie(), CategorieController.createNewCategorie); 
router.post("/admin/create/article", Validator.validateDataCreateArticle(), ArticleController.createNewArticle); 
router.get("/categories", CategorieController.getAllCategories); 

module.exports = router;