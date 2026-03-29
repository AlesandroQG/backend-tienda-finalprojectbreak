const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController.js");

router.post("/create", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.put("/update/:id", productController.updateProduct);
router.delete("/delete/:id/:user", productController.deleteProduct);

module.exports = router;