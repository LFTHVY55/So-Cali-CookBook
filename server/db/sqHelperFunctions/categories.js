import client from '../DB/client.js';
import util from 'util';

const query = util.promisify(client.query).bind(client);

// Function to create a category
async function createCategory(name) {
  try {
    // Execute SQL query to insert category into the categories table
    const queryString = 'INSERT INTO categories (name) VALUES ($1)';
    const values = [name];
    await query(queryString, values);

    console.log('Category created successfully');
  } catch (error) {
    console.error('Error creating category:', error);
  }
}

// Function to get all categories
async function getAllCategories() {
  try {
    // Execute SQL query to fetch all categories from the categories table
    const queryString = 'SELECT * FROM categories';
    const result = await query(queryString);

    console.log('All categories:', result.rows);
  } catch (error) {
    console.error('Error getting all categories:', error);
  }
}

// Function to get a category by ID
async function getCategoryById(categoryId) {
  try {
    // Execute SQL query to fetch a category by ID from the categories table
    const queryString = 'SELECT * FROM categories WHERE category_id = $1';
    const values = [categoryId];
    const result = await query(queryString, values);

    console.log('Category:', result.rows[0]);
  } catch (error) {
    console.error('Error getting category by ID:', error);
  }
}

// Export the helper functions
export { createCategory, getAllCategories, getCategoryById };
