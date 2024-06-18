const express = require('express');
const router = express.Router();
const { 
    addNewProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    removeProductById,
    deleteAllProducts,
    findProductsByName
} = require('../controllers/productController');
const { 
    addCategory, 
    getAllCategories 
} = require('../controllers/categoryController');

// product routes
router.route('/product')
    .post(addNewProduct)
    .get(getAllProducts)
    .delete(deleteAllProducts)

router.route('/product/name')
    .get(findProductsByName)

// product routes with params
router.route('/product/:id')
    .get(getProductById)
    .put(updateProductById)
    .delete(removeProductById)

// category route
router.route('/category')
    .post(addCategory)
    .get(getAllCategories)

module.exports = router;
