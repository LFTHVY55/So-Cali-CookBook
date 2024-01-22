const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } = require('../db/sqlHelperFunctions/user');


router.get('/', async (req, res) => {

  try {
    const users = await getAllUsers();
    res.send({ users })
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.send({ user })
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.post('/', async (req, res) => {
  const data = { username, email, password } = req.body;
  try {

    const user = await createUser(data);
    res.json({ user });

  } catch (error) {
    res.status(error.status || 500).json({ error });
  }
});


router.put('/', async (req, res) => {
  const data = { username, email, password } = req.body;
  const userId = req.body.user_id
  try {
    const user = await updateUser(userId, data);
    res.json({ user });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await deleteUser(id);
    res.json({ user });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});


router.post('/login', async (req, res) => {
  const data = { email, password } = req.body;


  try {
    const user = await loginUser(data, res);
    res.json({ user });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }


});




module.exports = router;