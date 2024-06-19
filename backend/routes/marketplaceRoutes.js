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
router.route('/products')
    .post(addNewProduct)
    .get(getAllProducts)
    .delete(deleteAllProducts)

router.route('/products/name')
    .get(findProductsByName)

// product routes with params
router.route('/products/:id')
    .get(getProductById)
    .put(updateProductById)
    .delete(removeProductById)

// category route
router.route('/category')
    .post(addCategory)
    .get(getAllCategories)

module.exports = router;
