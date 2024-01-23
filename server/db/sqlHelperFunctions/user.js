const client = require("../client");
const bcrypt = require('bcrypt');
const { handleUniqueKeyErrors } = require("../errorHandlers")

// Function to retrieve all users from the database
async function getAllUsers() {
  const query = 'SELECT * FROM users';

  try {
    const result = await client.query(query);
    const users = result?.rows;
    if (!users) {

      throw { message: `Error Getting Users`, status: 404 };
    }
    return users;
  } catch (error) {
    throw error;

  }

}

// Function to retrieve a user by their ID
async function getUserById(userId) {
  const query = 'SELECT * FROM users WHERE user_id = $1';
  const values = [userId];

  try {
    const result = await client.query(query, values);
    const user = result?.rows[0];
    if (!user) {

      throw { message: `Not found`, status: 404 };
    }
    return user;

  } catch (error) {
    throw error;

  }

}





async function createUser(data) {
  const { username, email, password } = data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING *';
  const values = [username, email, hashedPassword];

  try {
    const result = await client.query(query, values);
    const updatedUser = result?.rows[0];
    if (!updatedUser) {
      throw { message: `Error Creating User`, status: 404 };
    }

    return updatedUser;

  } catch (error) {
    handleUniqueKeyErrors(error, "User");
  }
}


async function updateUser(userId, data) {
  const { username, email, password } = data;

  const query = `
      UPDATE users
      SET username = $1, email = $2, password = $3
      WHERE user_id = $4
      RETURNING *`;

  const values = [username, email, password, userId];

  try {
    const result = await client.query(query, values);
    const updatedUser = result?.rows[0];
    if (!updatedUser) {

      throw { message: `User with ID ${userId} not found`, status: 404 };
    }

    return updatedUser;
  } catch (error) {

    throw error;
  }
}


async function deleteUser(userId) {
  const query = 'DELETE FROM users WHERE user_id = $1 RETURNING *';
  const values = [userId];

  try {
    const result = await client.query(query, values);

    // Check if a row was affected (recipe was deleted)
    if (result?.rows?.length === 0) {
      throw { message: `User with ID ${userId} not found`, status: 404 };
    }
    return result?.rows[0];

  } catch (error) {

    throw error;
  }
}


async function loginUser(data) {
  const { email, password } = data
  const query = 'SELECT * FROM users WHERE email = $1';
  const values = [email];

  try {
    const result = await client.query(query, values);
    const user = result?.rows[0];

    if (!user) {
      throw { message: "No User Found", status: 401 };
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw { message: "Incorrect password", status: 401 };
    }

    // If both email and password are correct, return the user
    return user;
  } catch (error) {
    throw (error)
  }
}


// Export all the functions
module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  getUserById,
  loginUser,
};