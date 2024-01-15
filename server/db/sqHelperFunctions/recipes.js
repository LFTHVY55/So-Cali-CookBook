import client from '../DB/client.js';
import util from 'util';

const query = util.promisify(client.query).bind(client);

// Function to create a recipe
async function createRecipe(userId, title, description, ingredients, instructions, cookingTime) {
  try {
    // Execute SQL query to insert recipe into the recipes table
    const queryString = 'INSERT INTO recipes (user_id, title, description, ingredients, instructions, cooking_time) VALUES ($1, $2, $3, $4, $5, $6)';
    const values = [userId, title, description, ingredients, instructions, cookingTime];
    await query(queryString, values);

    console.log('Recipe created successfully');
  } catch (error) {
    console.error('Error creating recipe:', error);
  }
}

// Function to get all recipes
async function getAllRecipes() {
  try {
    // Execute SQL query to fetch all recipes from the recipes table
    const queryString = 'SELECT * FROM recipes';
    const result = await query(queryString);

    console.log('All recipes:', result.rows);
  } catch (error) {
    console.error('Error getting all recipes:', error);
  }
}

// Function to get a recipe by ID
async function getRecipeById(recipeId) {
  try {
    // Execute SQL query to fetch a recipe by ID from the recipes table
    const queryString = 'SELECT * FROM recipes WHERE recipe_id = $1';
    const values = [recipeId];
    const result = await query(queryString, values);

    console.log('Recipe:', result.rows[0]);
  } catch (error) {
    console.error('Error getting recipe by ID:', error);
  }
}

// Export the helper functions
export { createRecipe, getAllRecipes, getRecipeById };
