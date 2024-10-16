const Category = require('../models/categories');
const allowedCategories = ["men", "women", "teens"];

// Add a new category
const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!allowedCategories.includes(name.toLowerCase())) {
    return res.status(400).json({ error: "Categories can only include Men, Women, or Teens" });
  }

  try {
    const existingCategory = await Category.findOne({ name: name.toLowerCase() });
    if (existingCategory) {
      return res.status(400).json({ error: "This category already exists" });
    }

    // Create new category
    const category = new Category({ name: name.toLowerCase() });
    await category.save();

    return res.status(201).json({ message: "Category created successfully", category });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(204).json({ message: "No categories found!" });
    }

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Get category by ID
const getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found!" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update category by ID
const updateCategoryById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  if (!allowedCategories.includes(name.toLowerCase())) {
    return res.status(400).json({ error: "Categories can only include Men, Women, or Teens" });
  }

  try {
    const category = await Category.findByIdAndUpdate(id, { name: name.toLowerCase() }, { new: true });
    if (!category) {
      return res.status(404).json({ error: "Category not found!" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete category by ID
const deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found!" });
    }
    return res.status(200).json({ message: "Category deleted successfully!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById
};
