const { Product } = require("../models/Product.js");

const productController = {
    createProduct: async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.redirect("/dashboard");
        } catch (error) {
            console.log(error);
            res.status(501).send({message: "There was a problem trying to create the product"});
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(201).json(products);
        } catch (error) {
            console.log(error);
            res.status(501).send({message: "There was a problem trying to get all products"});
        }
    },
    getProductById: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            if (!product) {
                res.status(404).send({message: "There is no product with that id"});
            }
            res.status(201).send(product);
        } catch (error) {
            console.log(error);
            res.status(501).send({message: "There was a problem trying to get the product"});
        }
    },
    updateProduct: async (req, res) => {
        const id = req.params.id;
        console.log("=== UPDATE PRODUCT ===");
        console.log("ID:", id);
        console.log("Method:", req.method);
        console.log("Body:", req.body);
        try {
            const task = await Product.findByIdAndUpdate(id, req.body);
            if (!task) {
                return res.status(404).send({message: "There is no product with that id"});
            }
        } catch (error) {
            console.log(error);
            res.status(501).send({message: "There was a problem trying to update the product"});
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            if (!product) {
                res.status(404).send({message: "There is no product with that id"});
            }
            const deleteCount = await Product.deleteOne({_id: id});
            res.status(201).send({message: "Product successfully deleted", deleteCount: deleteCount});
        } catch (error) {
            console.log(error);
            res.status(501).send({message: "There was a problem trying to delete the product"});
        }
    },
};

module.exports = productController;