const Category = require('../models/categoryModel');
const allowedCategories = ["men", "women", "teens"];

const addCategory = async (req, res) => {
  const { name } = req.body;

  if (!allowedCategories.includes(name.toLowerCase())) {
    return res.status(400).json({ error: "Categories can only include men, women, or teens" });
  }
  try {
    const category = new Category({ name });
    await category.save();
    return res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAllCategories = async(req, res) => {
    try {
        const categories = await Category.find();
        if(categories.length === 0) {
            res.status(204).json({ error: "No category found!" });
        }
        res.status(200).json(categories);
    } catch(error) {
        return res.status(400).json({ error: error.message });
    }
}

module.exports = {
  addCategory,
  getAllCategories
};
