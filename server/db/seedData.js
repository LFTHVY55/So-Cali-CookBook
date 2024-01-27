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
    title: 'Chicken Flautas',
    description: 'Chicken wrapped in Fried *click for instructions*',
    ingredients: [
      '4 cups shredded cooked chicken',
      '1 cup shredded cheddar cheese',
      '1 can (4 ounces) chopped green chiles',
      '1/2 cup salsa',
      '1/2 teaspoon salt',
      '1/4 teaspoon pepper',
      '16 flour tortillas (6 inches)',
      'Oil for deep-fat frying',
      'Optional toppings: Guacamole, shredded lettuce, sour cream and pico de gallo'
    ],
    instructions: 'Flautas are typically fried, but if you love making air-fryer recipes, you can air fry these flautas, too. Preheat the air fryer to 350°. Arrange the flautas in a single layer and spritz them with cooking spray. Cook until golden brown, for 11 to 13 minutes, turning once. You can also bake chicken flautas. Preheat the oven to 425°. Arrange them in a single layer in a greased 15x10x1-in. baking sheet. Brush with oil or melted butter. Bake, uncovered, until heated through, for 20 to 25 minutes. If you want them a little more golden brown, broil for an additional 2 to 3 minutes.',
    cookingTime: 45,
    image: "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-chicken-flautas-recipe.jpg",
    userId: 1
  },
  {
    title: 'Pressure Cooker Beef Carnitas Tacos',
  description: 'Beef Soft tacos *click for instructions*',
  ingredients: [
    '2 tablespoons kosher salt',
    '2 tablespoons packed brown sugar',
    '1 tablespoon ground cumin',
    '1 tablespoon smoked paprika',
    '1 tablespoon chili powder',
    '1 teaspoon garlic powder',
    '1 teaspoon ground mustard',
    '1 teaspoon dried oregano',
    '1 teaspoon cayenne pepper',
    '1 boneless beef chuck roast (3 pounds)',
    '3 tablespoons canola oil',
    '2 large sweet onion, thinly sliced',
    '3 poblano peppers, seeded and thinly sliced',
    '2 chipotle peppers in adobo sauce, finely chopped',
    '1 jar (16 ounces) salsa',
    '16 flour tortillas (8 inches), warmed',
    '3 cups crumbled queso fresco or shredded Monterey Jack cheese',
    'Optional toppings: Cubed avocado, sour cream and minced fresh cilantro'
  ],
  instructions: 'Mix the first 9 ingredients. Cut roast in half; rub with 1/4 cup spice mixture. Cover remaining mixture and store in a cool dry place. (Mix will keep for up to 1 year.). Select saute or browning setting on a 6-qt. electric pressure cooker. Adjust for medium heat; add half the oil. When oil is hot, brown one roast half on all sides. Remove; repeat with remaining beef and oil. Press cancel. Return all to pressure cooker. Place onions and peppers on meat. Top with salsa. Lock lid; close pressure-release valve. Adjust to pressure-cook on high for 40 minutes. Let pressure release naturally for 10 minutes; quick-release any remaining pressure. Remove roast; shred with 2 forks. Skim fat from cooking juices. Return meat to pressure cooker; heat through. Using a slotted spoon, place 1/2 cup meat mixture on each tortilla. Sprinkle with cheese. Add toppings of your choice.',
  cookingTime: 60,
  image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Cooker-Beef-Carnitas_EXPS_THCA17_76880_A6_01_3b.jpg",
  userId: 2
  },
  {
    title: 'Guacamole',
    description: 'Fresh homemade guacamole *click for instructions*',
    ingredients: [
        '3 medium ripe avocados, peeled and cubed',
        '1 garlic clove, minced',
        '1/4 to 1/2 teaspoon salt',
        '1 small onion, finely chopped',
        '1 to 2 tablespoons lime juice',
        '1 tablespoon minced fresh cilantro',
        '2 medium tomatoes, seeded and chopped (optional)',
        '1/4 cup mayonnaise (optional)'
    ],
    instructions: 'Mash avocados with garlic and salt. Stir in remaining ingredients, adding tomatoes and mayonnaise if desired. You can use lemon and lime juice interchangeably in this recipe to achieve a different flavor. To substitute orange, though, you’ll need to keep a little lemon or lime to spark up the flavor.',
    cookingTime: 15,
    image: "https://www.ambitiouskitchen.com/wp-content/uploads/fly-images/31819/Best-Guacamole-Youll-Ever-Eat-4sq-500x500-c.jpg",
    userId: 1
  },
  {
    title: 'Lime Margarita',
    description: 'Fresh Lime Margarita *click here for instructions*',
    ingredients: [
        '1/2 cup tequila',
        '1/4 cup Triple Sec',
        '1/4 cup lime juice',
        '1/4 cup lemon juice',
        '2 tablespoons superfine sugar',
        '4 lime wedges',
        '1 tablespoon kosher salt',
        '1-1/3 cups crushed ice'
    ],
    instructions: 'In a pitcher, combine the first 5 ingredients; stir until sugar is dissolved. Moisten rims of 4 margarita or cocktail glasses with lime wedges. Sprinkle salt on a plate; dip rims in salt. Serve over crushed ice in prepared glasses.',
    cookingTime: 10,
    image: "https://www.seriouseats.com/thmb/rkmijvOtxOQyH3D8n2q8uc67XNk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__04__20150323-cocktails-vicky-wasik-margarita-c84b154e757d43688de15dc8f8ca0de9.jpg",
    userId: 2
  },
  {
    title: 'Street Corn',
    description: 'Mexican style street corn *click here for instructions*',
    ingredients: [
        '6 medium ears sweet corn',
        '1/4 cup sour cream',
        '1/4 cup mayonnaise',
        '1/4 cup minced fresh cilantro',
        '1 teaspoon grated lime zest',
        '2 tablespoons lime juice',
        '2 garlic cloves, minced',
        '6 tablespoons Cotija cheese',
        '2 to 3 teaspoons chili powder'
    ],
    instructions: 'Step 1: Peel back the husks. Carefully peel back the corn husks until they’re about 1 inch away from the bottoms. Remove the silk by either using a produce brush and brushing the silks away under running water or rubbing the cob with a gloved hand until the silk falls off. Step 2: Wrap the corn. Rewrap each ear of corn in its husk and secure with butcher’s twine. You need butcher’s twine for this step because it’s oven-safe—regular string won’t work. You don’t want to worry about anything burning while your corn is cooking.Step 3: Soak the corn. In a Dutch oven, cover the corn with cold water. Let soak for 20 minutes and then drain. Step 4: Grill the corn While you’re waiting for the corn to soak, preheat your grill to medium heat (or 350°F). If you’re using a charcoal grill, cook the corn over direct heat. Place the corn on the grill and cover. Cook for 25 to 30 minutes, until the corn is tender, turning the ears of corn often. Step 5: Make the elotes mixture In a medium bowl, combine the sour cream, mayonnaise, cilantro, lime zest and juice. Peel back the husk on each ear of corn and spread the mixture generously over the kernels. Step 6: Top with Cotija and chili powder Sprinkle each ear of corn with Cotija cheese and chili powder and serve on a platter, or let everyone assemble an ear of corn so the toppings are to their liking. Elotes are best served immediately so the mixture remains nice and warm on the crisp corn.',
    cookingTime: 60,
    image: "https://themodernnonna.com/wp-content/uploads/2022/06/Elotes-PNG.png",
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