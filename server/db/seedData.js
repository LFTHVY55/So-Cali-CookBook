// Dummy data for User entity
const users = [
    { id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
    { id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
    // Add more user objects as needed
  ];
  
  // Dummy data for Recipe entity
  const recipes = [
    { id: 1, userId: 1, title: 'Recipe 1', description: 'This is recipe 1', ingredients: ['ingredient1', 'ingredient2'], instructions: 'Step 1, Step 2', cookingTime: 30 },
    { id: 2, userId: 2, title: 'Recipe 2', description: 'This is recipe 2', ingredients: ['ingredient3', 'ingredient4'], instructions: 'Step 1, Step 2', cookingTime: 45 },
    // Add more recipe objects as needed
  ];
  
  // Dummy data for Category entity
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add more category objects as needed
  ];
  
  // Dummy data for Comment entity
  const comments = [
    { id: 1, userId: 1, recipeId: 1, commentText: 'This is a comment' },
    { id: 2, userId: 2, recipeId: 2, commentText: 'Another comment' },
    // Add more comment objects as needed
  ];
  
  export { users, recipes, categories, comments };
  