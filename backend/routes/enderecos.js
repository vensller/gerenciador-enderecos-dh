const express = require("express");
const router = express.Router();
const enderecosController = require("../controllers/enderecosController");
const authMiddleware = require("../middlewares/auth");

/* GET home page. */
router.get("/", authMiddleware.verifyToken, enderecosController.read);
router.post("/", authMiddleware.verifyToken, enderecosController.create);
router.delete("/:id", authMiddleware.verifyToken, enderecosController.delete);
router.put("/:id", authMiddleware.verifyToken, enderecosController.update);

module.exports = router;
