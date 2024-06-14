const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');

const allowedCategories = ["men", "women", "teens"];

router.post('/', async (req, res) => {
  console.log("Add new product")
  const { name, description, price, quantity, category } = req.body;

  if (!allowedCategories.includes(category.toLowerCase())) {
    return res.status(400).json({ error: "Categories can only include men, women, or teens" });
  }

  try {
    const product = new Product({ name, description, price, quantity, category });
    await product.save();
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post('/category', async (req, res) => {
  const { name } = req.body;

  if (!allowedCategories.includes(name.toLowerCase())) {
    return res.status(400).json({ error: "Categories can only include men, women, or teens" });
  }

  try {
    const category = new Category({ name });
    await category.save();
    return res.status(201).json(category);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
router.get('/', (req, res) => {
    console.log("get all products")
})
router.get('/:id', (req, res) => {
    console.log("get product by id")
})
router.put('/:id', (req, res) => {
    console.log("update product by id")
})
router.delete('/:id', (req, res) => {
    console.log("remove product by id")
})
router.delete('/', (req, res) => {
    console.log("remove all products")
})
router.get('/name=[/kw/]', (req, res) => {
    console,log("Find all products which name contains 'kw' ")
})

module.exports = router;
