const express = require('express');
const router = express.Router();

// Import the SQL helper functions from your db directory
const { getCategory, createCategory, updateCategory, deleteCategory } = require('../db/category');

// Define routes for the Category section here

router.get('/', (req, res) => {
    // Handle GET request for all categories
    const categories = getCategory();
    res.json(categories);
  });
  
  router.get('/:id', (req, res) => {
    // Handle GET request for a specific category by ID
    const { id } = req.params;
    const category = getCategory(id);
    res.json(category);
  });
  
  router.post('/', (req, res) => {
    // Handle POST request to create a new category
    const { name } = req.body;
    const newCategory = createCategory(name);
    res.json(newCategory);
  });
  
  router.put('/:id', (req, res) => {
    // Handle PUT request to update a category
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = updateCategory(id, name);
    res.json(updatedCategory);
  });
  
  router.delete('/:id', (req, res) => {
    // Handle DELETE request to delete a category
    const { id } = req.params;
    const deletedCategory = deleteCategory(id);
    res.json(deletedCategory);
  });
  

module.exports = router;
