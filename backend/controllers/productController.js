const Product = require('../models/productModel');
const allowedCategories = ["men", "women", "teens"];

const addNewProduct = async (req, res) => {
    const { name, description, price, quantity, category } = req.body;

    if (!allowedCategories.includes(category.toLowerCase())) {
        return res.status(400).json({ error: "Categories can only include men, women, or teens" });
    }

    try {
        const product = new Product({ name, description, price, quantity, category });
        await product.save();
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        if (!products) {
            return res.status(500).json({ message: "Products not found!" });
        }
        res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const product = await Product.findById(id)
        if (!product) {
            return res.status(500).json({ error: "Product not found!" });
        }
        res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updateProductById = async (req, res) => {
    const { id } = req.params
    const { name, description, price, quantity, category } = req.body;

    if (!allowedCategories.includes(category.toLowerCase())) {
        return res.status(400).json({ error: "Categories can only include men, women, or teens" });
    }
    try {
        const product = await Product.findByIdAndUpdate(
            id, 
            { name, description, price, quantity, category }, 
            { new: true },
        )
        if (!product) {
            return res.status(500).json({ error: "Product not found!" });
        }
        res.status(200).json(product)
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

const removeProductById = async(req, res) => {
    const {id} = req.params

    try {
        const product = await Product.findByIdAndDelete(id)
        if(!product) {
            return res.json({ message: `Item with the id ${id} is already deleted!` })
        }
        res.status(200).json(product)
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}
const deleteAllProducts = async(req, res) => {
    try {
        const product = await Product.deleteMany()
        res.status(200).json({ message: "All products successfully deleted!"})
        res.status(200).json(product)
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}

const findProductsByName = async(req, res) => {
    const {name} = req.query;
    try {
        const products = await Product.find({ "name": new RegExp(name, 'i')})
        if (!products || products.length === 0) {
            return (
                res.status(500)
                .json({ message: `No product matches the name ${name.charAt(0).toUpperCase() + name.slice(1)} in our database!` })
            )
        }
        res.status(200).json(products)
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = {
    addNewProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    removeProductById,
    deleteAllProducts,
    findProductsByName
};
