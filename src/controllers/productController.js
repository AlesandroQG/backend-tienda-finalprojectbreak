const { Product } = require("../models/Product.js");

const productController = {
    createProduct: async (req, res) => {
        try {
            if (!req.body?.user) {
                return res.status(403).json({message: "Action restricted"});
            }
            const product = await Product.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to create the product"});
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.status(201).json(products);
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to get all products"});
        }
    },
    getProductById: async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Product.findById(id);
            if (!product) {
                res.status(404).json({message: "There is no product with that id"});
            }
            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to get the product"});
        }
    },
    updateProduct: async (req, res) => {
        const id = req.params.id;
        try {
            if (!req.body?.user) {
                return res.status(403).json({message: "Action restricted"});
            }
            const product = await Product.findByIdAndUpdate(id, req.body);
            if (!product) {
                return res.status(404).json({message: "There is no product with that id"});
            }
            res.status(201).json(product);
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to update the product"});
        }
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            if (!req.params?.user) {
                return res.status(403).json({message: "Action restricted"});
            }
            const product = await Product.findById(id);
            if (!product) {
                res.status(404).send({message: "There is no product with that id"});
            }
            const deleteCount = await Product.deleteOne({_id: id});
            res.status(201).json({message: "Product successfully deleted", deleteCount: deleteCount});
        } catch (error) {
            console.error(error);
            res.status(501).json({message: "There was a problem trying to delete the product"});
        }
    },
};

module.exports = productController;