
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;


const Recipe = require('./models/Recipe.js');
const User = require('./models/User.js');
const RecipeIngredient = require('./models/RecipeIngredient.js');


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully for seeds!"))
    .catch(err => console.log(err));

const UserSeeds = [
    {
        handle: "Jack", email: "jack@test.com", password: "test12"
    },
    {
        handle: "Joe", email: "joe@test.com", password: "test12"
    },
    {
        handle: "James", email: "james@test.com", password: "test12"
    },
    {
        handle: "George", email: "george@test.com", password: "test12"
    },
    {
        handle: "Amanda", email: "amanda@test.com", password: "test12"
    },
    {
        handle: "Cynthia", email: "cynthia@test.com", password: "test12"
    },
    {
        handle: "Bobber", email: "bobber@test.com", password: "test12"
    },
    {
        handle: "Barbara", email: "barbara@test.com", password: "test12", bio: "Aspiring chef"
    }
]

const RecipeSeeds = [
   {
        title: "Traditional Croatian Goulash",
        description: "yummy food",
        instructions: "Clean the meat from the veins if there are some and cut it into smaller pieces, 3 × 3 cm.\nMarinate the meat in the mustard and spices and let it sit in the refrigerator for one hour Heat one tablespoon of pork fat or vegetable oil in a pot and fry the meat on all sides until it gets browned.\nOnce the meat is cooked, transfer it to a plate and add another tablespoon of fat to the pot Cut the onions very fine, peel the carrots and shred it using a grater.\nCook the onions and carrots over low heat for 15 minutes.\nYou can salt the vegetables a little to make them soften faster Once the vegetables have browned and become slightly mushy, add the meat and bay leaves and garlic.\nPour over with wine and simmer for 10-15 minutes to allow the alcohol to evaporate.\nNow is the right time to add 2/3 the amount of liquid Cover the pot and cook over low heat for an hour, stirring occasionally.\nAfter the first hour, pour over the rest of the water or stock and cook for another 30-45 minutes Allow the stew to cool slightly and serve it with a sprinkle of chopped parsley and few slices of fresh hot pepper if you like to spice it up a bit Slice ​​some fresh bread, season the salad and simply enjoying these wonderful flavors",
        ingredients:
        [{
            name: "Beef",
            unit_type: "g",
            unit_amount: 500
        },
        {
            name: "Chopped Onions",
            unit_amount: 2
        },
        {
            name: "Chopped Carrots",
            unit_amount: 2
        },
        {
            name: "Garlic",
            unit_type: "clove",
            unit_amount: 2
        },
        {
            name: "Bay Leaf",
            unit_amount: 2
        },
        {
            name: "Red Wine",
            unit_type: "mL",
            unit_amount: 200
        },
        {
            name: "water",
            unit_type: "L",
            unit_amount: 2
        },
        {
            name: "mustard",
            unit_type: "tbsp",
            unit_amount: 3
        },
        {
            name: "Salt",
            unit_type: "tbsp",
            unit_amount: 1        
        },
        {
            name: "Pepper",
            unit_type: "tsp",
            unit_amount: .5
        },
        {
            name: "Paprika",
            unit_type: "tsp",
            unit_amount: .5
        },
        {
            name: "Vegetable Oil",
            unit_type: "tbsp",
            unit_amount: 2
        }]
    }
]

const fillRecipeInfo = function(recipe, AuthorId) {
    // return db.Ingredient.create(comment).then(docComment => {
    //   console.log("\n>> Created Comment:\n", docComment);
    //   return db.Tutorial.findByIdAndUpdate(
    //     tutorialId,
    //     { $push: { comments: docComment._id } },
    //     { new: true, useFindAndModify: false }
    //   );
    // });
    let newRecipe = {};
    newRecipe.title = recipe.title;

    if(recipe.ingredients && recipe.ingredients.length > 0)
    {
        newRecipe.ingredients = [];
        for(let i = 0; i<recipe.ingredients.length; i++)
        {
            await RecipeIngredient.create(recipe.ingredients[i]).then((ing) => { //add await here maybe
                console.log("Ingredient made: ", ing, "for ", recipe.title);
                newRecipe.ingredients.push(ing);
            })
        }
    }
    //!!!! ABOVE COULD HAVE PROMISE ISSUES... NOT ALL INGREDIENTS DONE?

    if(recipe.description)
    newRecipe.description = recipe.description;
   
    if(recipe.instructions)
    {
        if(Array.isArray(recipe.instructions) )
        {
            newRecipe.instructions = recipe.instructions;
        }
        else if(typeof recipe.instructions === 'string')
        {
            newRecipe.instructions = recipe.instructions.split("\n");
        }
    }
    if(recipe.prep_time)
    newRecipe.prep_time = recipe.prep_time;
    if(recipe.category)
    newRecipe.category = recipe.category;
    if(recipe.meal_type)
    newRecipe.meal_type = recipe.meal_type;
    if(recipe.budget)
    newRecipe.budget = recipe.budget;
    if(recipe.num_ratings)
    newRecipe.num_ratings = recipe.num_ratings;
    if(recipe.num_favorites)
    newRecipe.num_favorites = recipe.num_favorites;
    if(recipe.total_ratings)
    newRecipe.total_ratings = recipe.total_ratings;
    return newRecipe;
  };

const seedDB = async () => {
    // await User.deleteMany({});
    // await Recipe.deleteMany({});
    // await IngredientRecipe.deleteMany({});

    await User.insertMany(UserSeeds);
    for(let i = 0; i < RecipeSeeds.length; i++)
    {
        let randomUser = db.mycoll.aggregate([{ $sample: { size: 1 } }]);
        console.log("ru", randomUser);
        await Recipe.create(fillRecipe(RecipeSeeds[i], randomUser._id)); //slow potentially
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})
