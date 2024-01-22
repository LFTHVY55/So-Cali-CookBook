const client = require("../client");

// Function to retrieve all categories from the database
async function getAllCategories() {
  const query = 'SELECT * FROM Categories';
  const result = await client.query(query);
  return result.rows;
}

// Function to retrieve a category by its ID
async function getCategoryById(categoryId) {
  const query = 'SELECT * FROM Categories WHERE category_id = $1';
  const values = [categoryId];
  const result = await client.query(query, values);
  return result.rows[0];
}




async function createCategory(data) {
  const { name } = data;

  const query = 'INSERT INTO Categories(name) VALUES($1) RETURNING *';
  const values = [name];

  try {
    const result = await client.query(query, values);
    return result?.rows[0];
  } catch (error) {
    // Handle error, e.g., duplicate key violation, etc.
    console.error("Error creating category:", error);
    throw error;
  }
}




async function updateCategory(categoryId, data) {
  const { name } = data;

  const query = `
    UPDATE Categories
    SET name = $1
    WHERE category_id = $2
    RETURNING *`;

  const values = [name, categoryId];

  try {
    const result = await client.query(query, values);
    return result?.rows[0];
  } catch (error) {
    // Handle error, e.g., if the specified recipeId does not exist
    console.error("Error updating category:", error);
    throw error;
  }
}





async function deleteCategory(categoryId) {
  const query = 'DELETE FROM Categories WHERE category_id = $1 RETURNING *';
  const values = [categoryId];

  try {
    const result = await client.query(query, values);

    // Check if a row was affected (recipe was deleted)
    if (result?.rows?.length === 0) {
      throw new Error(`Category with ID ${categoryId} not found`);
    }
    return result?.rows[0];
  } catch (error) {
    // Handle error, e.g., if the specified recipeId does not exist
    console.error("Error deleting category:", error);
    throw error;
  }
}




// Export all the functions
module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
