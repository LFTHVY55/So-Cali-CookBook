const client = require("../client");
// const util = require('../util');

// Function to retrieve all comments from the database
async function getAllComments() {
  const query = 'SELECT * FROM Comments';
  const result = await client.query(query);
  return result.rows;
}

// Function to retrieve comments for a specific recipe
async function getCommentsByRecipeId(recipeId) {
  const query = 'SELECT * FROM Comments WHERE comment_id = $1';
  const values = [recipeId];
  const result = await client.query(query, values);
  return result.rows;
}


async function createComments(data) {
  const { user_id, recipe_id, comment_text } = data;

  const query = 'INSERT INTO Comments(user_id, recipe_id, comment_text) VALUES($1, $2, $3) RETURNING *';
  const values = [user_id, recipe_id, comment_text];

  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    // Handle error, e.g., duplicate key violation, etc.
    console.error("Error creating Comment:", error);
    throw error;
  }
}




async function updateComment(recipeId, data) {
  const { user_id, recipe_id, comment_text } = data;

  const query = `
    UPDATE Comments
    SET user_id = $1, recipe_id = $2, comment_text = $3
    WHERE comment_id = $4
    RETURNING *`;

    const values = [user_id, recipe_id, comment_text, recipeId];

  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    // Handle error, e.g., if the specified recipeId does not exist
    console.error("Error updating recipe:", error);
    throw error;
  }
}




async function deleteComment(commentId) {
  const query = 'DELETE FROM Comments WHERE comment_id = $1 RETURNING *';
  const values = [commentId];

  try {
    const result = await client.query(query, values);

    // Check if a row was affected (recipe was deleted)
    if (result?.rows?.length === 0) {
      throw new Error(`Comment with ID ${recipeId} not found`);
    }
    return result?.rows[0];
  } catch (error) {
    // Handle error, e.g., if the specified recipeId does not exist
    console.error("Error deleting comment:", error);
    throw error;
  }
}



// Export all the functions
module.exports = {
  getAllComments,
  getCommentsByRecipeId,
  updateComment,
  deleteComment,
  createComments,
};
