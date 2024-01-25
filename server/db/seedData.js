const users = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1'
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2'
  }
];

const recipes = [
  {
    title: 'Carnitas Tacos',
    description: 'This is recipe 1 description',
    ingredients: 'ingredients 1',
    instructions: 'instructions 1',
    cookingTime: 30,
    userId: 1
  },
  {
    title: 'Recipe 2',
    description: 'This is recipe 2 description',
    ingredients: 'ingredients 2',
    instructions: 'instructions 2',
    cookingTime: 60,
    userId: 2
  },
  {
    title: 'Recipe 3',
    description: 'This is recipe 3 description',
    ingredients: 'ingredients 2',
    instructions: 'instructions 2',
    cookingTime: 90,
    userId: 1
  },
  {
    title: 'Recipe 4',
    description: 'This is recipe 4 description',
    ingredients: 'ingredients 2',
    instructions: 'instructions 2',
    cookingTime: 120,
    userId: 2
  },
  {
    title: 'Recipe 5',
    description: 'This is recipe 5 description',
    ingredients: 'ingredients 2',
    instructions: 'instructions 2',
    cookingTime: 60,
    userId: 1
  }
];

const categories = [
  { name: 'Category 1' },
  { name: 'Category 2' },
  { name: 'Category 3' }
];

const comments = [
  {
    commentText: 'Comment 1 on Recipe 1',
    userId: 1,
    recipeId: 1
  },
  {
    commentText: 'Comment 2 on Recipe 1',
    userId: 2,
    recipeId: 1
  },
  {
    commentText: 'Comment 1 on Recipe 2',
    userId: 1,
    recipeId: 2
  }
];

module.exports = {
  users,
  recipes,
  categories,
  comments
};