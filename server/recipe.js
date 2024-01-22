const express = require('express');
const router = express.Router();

// Import the SQL helper functions from your db directory
const { getRecipe, createRecipe, updateRecipe, deleteRecipe } = require('../db/recipe');

// Define routes for the Recipe section here
router.get('/', (req, res) => {
    // Handle GET request for all recipes
    const recipes = getRecipe();
    res.json(recipes);
  });
  
  router.get('/:id', (req, res) => {
    // Handle GET request for a specific recipe by ID
    const { id } = req.params;
    const recipe = getRecipe(id);
    res.json(recipe);
  });
  
  router.post('/', (req, res) => {
    // Handle POST request to create a new recipe
    const { userId, title, description, ingredients, instructions, cookingTime } = req.body;
    const newRecipe = createRecipe(userId, title, description, ingredients, instructions, cookingTime);
    res.json(newRecipe);
  });
  
  router.put('/:id', (req, res) => {
    // Handle PUT request to update a recipe
    const { id } = req.params;
    const { userId, title, description, ingredients, instructions, cookingTime } = req.body;
    const updatedRecipe = updateRecipe(id, userId, title, description, ingredients, instructions, cookingTime);
    res.json(updatedRecipe);
  });
  
  router.delete('/:id', (req, res) => {
    // Handle DELETE request to delete a recipe
    const { id } = req.params;
    const deletedRecipe = deleteRecipe(id);
    res.json(deletedRecipe);
  });
  

module.exports = router;
