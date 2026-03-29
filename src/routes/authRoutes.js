const express = require("express");
const router = express.Router();
const userController = require("../controllers/authController.js");

router.post("/create", userController.createUser);
router.post("/login", userController.login);
router.put("/update/:id", userController.updateUser);

module.exports = router;