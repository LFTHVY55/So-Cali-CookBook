const express = require('express');
const router = express.Router();
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../db/sqlHelperFunctions/recipes');


router.get('/', async (req, res) => {
  try {
    const recipes = await getAllRecipes();
    res.send({ recipes })
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await getRecipeById(id);
    res.send({ recipe })
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.post('/', async (req, res) => {
  const data = { user_id, title, description, ingredients, instructions, cooking_time } = req.body;

  try {
    const recipe = await createRecipe(data);
    res.json({ recipe });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }
});



router.put('/', async (req, res) => {
  const data = { user_id, title, description, ingredients, instructions, cooking_time } = req.body;
  const recipeId = req.body.recipe_id
  try {
    const recipe = await updateRecipe(recipeId, data);
    res.json({ recipe });
  } catch (error) {
    res.status(error.status || 500).json({ error });

  }

});




router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await deleteRecipe(id);
    res.json({ recipe });
  } catch (error) {
    res.status(error.status || 500).json({ error });

  }

});






module.exports = router;
