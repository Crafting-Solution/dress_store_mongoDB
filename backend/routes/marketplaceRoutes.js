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
    getAllCategories,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById
} = require('../controllers/categoryController');

// Product routes
router.route('/products')
    .post(addNewProduct)    
    .get(getAllProducts)    
    .delete(deleteAllProducts); 

router.route('/products/name')
    .get(findProductsByName); 

router.route('/products/:id')
    .get(getProductById)   
    .put(updateProductById) 
    .delete(removeProductById); 

// Category routes
router.route('/categories')
    .post(addCategory)    
    .get(getAllCategories)

router.route('/categories/:id')
    .get(getCategoryById) 
    .put(updateCategoryById) 
    .delete(deleteCategoryById); 

module.exports = router;
