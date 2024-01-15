import client from '../DB/client.js';
import util from 'util';

const query = util.promisify(client.query).bind(client);

// Function to create a comment
async function createComment(userId, recipeId, commentText) {
  try {
    // Execute SQL query to insert comment into the comments table
    const queryString = 'INSERT INTO comments (user_id, recipe_id, comment_text) VALUES ($1, $2, $3)';
    const values = [userId, recipeId, commentText];
    await query(queryString, values);

    console.log('Comment created successfully');
  } catch (error) {
    console.error('Error creating comment:', error);
  }
}

// Function to get all comments
async function getAllComments() {
  try {
    // Execute SQL query to fetch all comments from the comments table
    const queryString = 'SELECT * FROM comments';
    const result = await query(queryString);

    console.log('All comments:', result.rows);
  } catch (error) {
    console.error('Error getting all comments:', error);
  }
}

// Function to get a comment by ID
async function getCommentById(commentId) {
  try {
    // Execute SQL query to fetch a comment by ID from the comments table
    const queryString = 'SELECT * FROM comments WHERE comment_id = $1';
    const values = [commentId];
    const result = await query(queryString, values);

    console.log('Comment:', result.rows[0]);
  } catch (error) {
    console.error('Error getting comment by ID:', error);
  }
}

// Export the helper functions
export { createComment, getAllComments, getCommentById };
