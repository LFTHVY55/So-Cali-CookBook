import client from './db/client.js';
import { users, recipes, categories, comments } from './db/seedData.js';

//creating a function to drop existing tables
async function dropTables() {
    try {
      await client.connect();
  
      // Drop tables
      await client.query('DROP TABLE IF EXISTS comments CASCADE');
      await client.query('DROP TABLE IF EXISTS recipes CASCADE');
      await client.query('DROP TABLE IF EXISTS categories CASCADE');
      await client.query('DROP TABLE IF EXISTS users CASCADE');
  
      console.log('Tables dropped successfully');
    } catch (error) {
      console.error('Error dropping tables:', error);
    } finally {
      await client.end();
    }
  }
  //Creating  a function to create tables with the right data types and restrictions:
  async function createTables() {
    try {
      await client.connect();
  
      // Create tables
      await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL
        )
      `);
      await client.query(`
        CREATE TABLE IF NOT EXISTS recipes (
          id SERIAL PRIMARY KEY,
          userId INTEGER REFERENCES users(id),
          title VARCHAR(255) NOT NULL,
          description TEXT,
          ingredients TEXT[],
          instructions TEXT,
          cookingTime INTEGER
        )
      `);
      await client.query(`
        CREATE TABLE IF NOT EXISTS categories (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `);
      await client.query(`
        CREATE TABLE IF NOT EXISTS comments (
          id SERIAL PRIMARY KEY,
          userId INTEGER REFERENCES users(id),
          recipeId INTEGER REFERENCES recipes(id),
          commentText TEXT
        )
      `);
  
      console.log('Tables created successfully');
    } catch (error) {
      console.error('Error creating tables:', error);
    } finally {
      await client.end();
    }
  }
  
//Create a function to populate the tables:

  async function populateTables() {
    try {
      await client.connect();
  
      // Import functions and routes for populating tables
      // Example:
      // await import('./DB/populateUsers.js').then((module) => module.default());
      // await import('./DB/populateRecipes.js').then((module) => module.default());
      // await import('./DB/populateCategories.js').then((module) => module.default());
      // await import('./DB/populateComments.js').then((module) => module.default());
  
      console.log('Tables populated successfully');
    } catch (error) {
      console.error('Error populating tables:', error);
    } finally {
      await client.end();
    }
  }

  //Call the functions in the desired order:
  async function seed() {
    await dropTables();
    await createTables();
    await populateTables();
  }
  
  seed();
  
  