const express = require('express');
const router = express.Router();

const { getAllComments, getCommentsByRecipeId, createComments, deleteComment, updateComment } = require('../db/sqlHelperFunctions/comments');




router.get('/', async (req, res) => {
  try {
    const comments = await getAllComments();
    res.send({ comments })    
  } catch (error) {
    res.status(error.status || 500).json({ error });
    
  }

});


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await getCommentsByRecipeId(id);
    res.json({ comment });    
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});


router.post('/', async (req, res) => {
  const data = { user_id, recipe_id, comment_text } = req.body;
  try {
    const comment = await createComments(data);
    res.json({ comment });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.put('/', async (req, res) => {
  const data = { user_id, recipe_id, comment_text } = req.body;
  const commentId = req.body.comment_id
  try {
    const comment = await updateComment(commentId, data);
    res.json({ comment });
  } catch (error) {
    res.status(error.status || 500).json({ error });
  }

});



router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await deleteComment(id);
    res.json({ comment });    
  } catch (error) {
    res.status(error.status || 500).json({ error });
    
  }

});






module.exports = router;
