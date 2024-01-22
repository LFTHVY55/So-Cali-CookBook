const express = require('express');
const router = express.Router();

// Import the SQL helper functions from your db directory
const { getComment, createComment, updateComment, deleteComment } = require('../db/comment');

// Define routes for the Comment section here

router.get('/', (req, res) => {
  // Handle GET request for all comments
  const comments = getComment();
  res.json(comments);
});

router.get('/:id', (req, res) => {
  // Handle GET request for a specific comment by ID
  const { id } = req.params;
  const comment = getComment(id);
  res.json(comment);
});

router.post('/', (req, res) => {
  // Handle POST request to create a new comment
  const { userId, recipeId, commentText } = req.body;
  const newComment = createComment(userId, recipeId, commentText);
  res.json(newComment);
});

router.put('/:id', (req, res) => {
  // Handle PUT request to update a comment
  const { id } = req.params;
  const { userId, recipeId, commentText } = req.body;
  const updatedComment = updateComment(id, userId, recipeId, commentText);
  res.json(updatedComment);
});

router.delete('/:id', (req, res) => {
  // Handle DELETE request to delete a comment
  const { id } = req.params;
  const deletedComment = deleteComment(id);
  res.json(deletedComment);
});


module.exports = router;
