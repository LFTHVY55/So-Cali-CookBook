const express = require('express');
const router = express.Router();
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../db/sqlHelperFunctions/categories');


router.get('/', async (req, res) => {
  try {
    const categories = await getAllCategories();
    res.send({ categories })
  } catch (error) {
    res.status(error.status || 500).json({ error });

  }

});


router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const category = await getCategoryById(id);
    res.send({ category })
  } catch (error) {
    res.status(error.status || 500).json({ error });

  }

});



router.post('/', async (req, res) => {
  const data = { name } = req.body;
  try {
    const category = await createCategory(data);
    res.json({ category });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.put('/', async (req, res) => {
  const data = { name } = req.body;
  const categoryId = req.body.category_id
  try {
    const category = await updateCategory(categoryId, data);
    res.json({ category });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const category = await deleteCategory(id);
    res.json({ category });
  } catch (error) {
    res.status(error.status || 500).json({ error });

  }

});


module.exports = router;
