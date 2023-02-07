const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");
const authMiddleware = require("../middlewares/auth");

/* GET home page. */
router.get("/", authMiddleware.verifyToken, usuariosController.read);
router.post("/", usuariosController.create);
router.delete("/:id", authMiddleware.verifyToken, usuariosController.delete);
router.put("/:id", authMiddleware.verifyToken, usuariosController.update);
router.post("/login", usuariosController.login);

module.exports = router;
