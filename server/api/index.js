const express = require('express');
const commentRoutes = require('./comment');
const categoryRoutes = require('./category');
const recipeRoutes = require('./recipe');
const userRoutes = require('./user');

const router = express.Router();
router.use(express.json());



// User routes
router.use('/user', userRoutes);

// Recipe routes
router.use('/recipe', recipeRoutes);

// Category routes
router.use('/category', categoryRoutes);

// Comment routes
router.use("/comment", commentRoutes)



module.exports = router;