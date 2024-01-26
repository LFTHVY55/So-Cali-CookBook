const client = require("../client");

// Function to retrieve all recipes from the database
async function getAllRecipes() {
  const query = `
  SELECT
    r.*,
    u.username AS user_username
  FROM
    recipes r
    LEFT JOIN users u ON r.user_id = u.user_id
`;

  try {

    const result = await client.query(query);

    const recipes = result?.rows;
    if (!recipes) {

      throw { message: `Error Getting Recipes`, status: 404 };
    }


    return recipes;


  } catch (error) {
    throw error;
  }

}

// Function to retrieve a recipe by its ID
async function getRecipeById(recipeId) {

  const query = `
    SELECT
      r.*,
      u.username AS user_username
    FROM
      recipes r
      LEFT JOIN users u ON r.user_id = u.user_id
    WHERE
      r.recipe_id = $1
  `;
  const values = [recipeId];

  try {
    const result = await client.query(query, values);

    const recipe = result?.rows[0];
    if (!recipe) {

      throw { message: `Not found`, status: 404 };
    }
    return recipe;
  } catch (error) {
    throw error;
  }

}



// Function to retrieve a recipe by USER ID
async function getRecipeByUserId(userId) {

  const query = `
  SELECT
  recipe_id,
  title,
  description,
  ingredients,
  instructions,
  image,
  cooking_time
FROM
  recipes
WHERE
  user_id = $1;
  `;
  const values = [userId];

  try {
    const result = await client.query(query, values);

    const recipes = result?.rows;
    if (!recipes) {

      throw { message: `Not found`, status: 404 };
    }
    return recipes;
  } catch (error) {
    throw error;
  }

}



async function createRecipe(data) {
  const { user_id, title, description, ingredients, instructions, cooking_time, image } = data;

  const query = 'INSERT INTO Recipes(user_id, title, description, ingredients, instructions, cooking_time, image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
  const values = [user_id, title, description, ingredients, instructions, cooking_time, image];

  try {
    const result = await client.query(query, values);

    const recipe = result?.rows[0];
    if (!recipe) {
      throw { message: `Error Creating Recipe`, status: 500 };
    }
    return recipe;
  } catch (error) {
    throw error;
  }
}


async function updateRecipe(recipeId, data) {
  const { user_id, title, description, ingredients, instructions, cooking_time, image } = data;

  const query = `
    UPDATE Recipes
    SET user_id = $1, title = $2, description = $3, ingredients = $4, instructions = $5, cooking_time = $6, image=$7
    WHERE recipe_id = $8
    RETURNING *`;

  const values = [user_id, title, description, ingredients, instructions, cooking_time, image, recipeId];

  try {
    const result = await client.query(query, values);

    const updatedRecipe = result?.rows[0];
    if (!updatedRecipe) {
      throw { message: `Recipe with ID ${recipeId} not found`, status: 404 };
    }


    return updatedRecipe;
  } catch (error) {
    throw error;
  }
}



async function deleteRecipe(recipeId) {
  const query = 'DELETE FROM Recipes WHERE recipe_id = $1 RETURNING *';
  const values = [recipeId];

  try {
    const result = await client.query(query, values);

    // Check if a row was affected (recipe was deleted)
    if (result?.rows?.length === 0) {
      throw { message: `Recipe with ID ${recipeId} not found`, status: 404 };
    }
    return result?.rows[0];
  } catch (error) {
    throw error;
  }
}




// Export all the functions
module.exports = {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  getRecipeByUserId,
  getRecipeById,
  deleteRecipe,
};