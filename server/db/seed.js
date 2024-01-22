//seed.js

const client = require('./client');
const { users, recipes, categories, comments } = require('./seedData');

const dropTables = `
  DROP TABLE IF EXISTS comments CASCADE;
  DROP TABLE IF EXISTS recipes CASCADE;
  DROP TABLE IF EXISTS categories CASCADE;
  DROP TABLE IF EXISTS users CASCADE;
`;

const createTables = `
  CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  CREATE TABLE recipes (
    recipe_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    cooking_time INTEGER NOT NULL
  );

  CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
  );

  CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id) NOT NULL,
    recipe_id INTEGER REFERENCES recipes(recipe_id) NOT NULL,
    comment_text TEXT NOT NULL
  );
`;

const populateTables = `
  INSERT INTO users (username, email, password)
  VALUES ${users.map((user) => `('${user.username}', '${user.email}', '${user.password}')`).join(',')};

  INSERT INTO categories (name)
  VALUES ${categories.map((category) => `('${category.name}')`).join(',')};

  INSERT INTO recipes (user_id, title, description, ingredients, instructions, cooking_time)
  VALUES ${recipes.map((recipe) => `(${recipe.userId}, '${recipe.title}', '${recipe.description}', '${recipe.ingredients}', '${recipe.instructions}', ${recipe.cookingTime})`).join(',')};

  INSERT INTO comments (user_id, recipe_id, comment_text)
  VALUES ${comments.map((comment) => `(${comment.userId}, ${comment.recipeId}, '${comment.commentText}')`).join(',')};
`;

// client.connect();

client.query(dropTables)
  .then(() => client.query(createTables))
  .then(() => client.query(populateTables))
  .then(() => console.log('Tables seeded'))
  .catch((err) => console.error(err))
  .finally(() => client.end());