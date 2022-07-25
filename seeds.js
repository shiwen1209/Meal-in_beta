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
            unit_name: "g",
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
            unit_name: "clove",
            unit_amount: 2
        },
        {
            name: "Bay Leaf",
            unit_amount: 2
        },
        {
            name: "Red Wine",
            unit_name: "mL",
            unit_amount: 200
        },
        {
            name: "water",
            unit_name: "L",
            unit_amount: 2
        },
        {
            name: "mustard",
            unit_name: "tbsp",
            unit_amount: 3
        },
        {
            name: "Salt",
            unit_name: "tbsp",
            unit_amount: 1        
        },
        {
            name: "Pepper",
            unit_name: "tsp",
            unit_amount: .5
        },
        {
            name: "Paprika",
            unit_name: "tsp",
            unit_amount: .5
        },
        {
            name: "Vegetable Oil",
            unit_name: "tbsp",
            unit_amount: 2
        }]
    },

    {
        title: "Pesto Eggs",
        description: "This viral TikTok recipe for pesto eggs is wildly flavorful. The eggs are fried in a layer of pesto sauce and served with a spread of goat cheese on some crusty toast.",
    },

    {
        title: "Folded Kimbap",
        description: "Make these quick and easy nori sandwich by folding a seaweed sheet and filling it with various ingredients of your choice. Trending on social medias these past months, these kimbap are perfect for a different kind of lunch!"
    },

    {
        title: "Baked Feta Pasta",
        description: "Once you try this delectable blend of pasta, roasted tomatoes, feta, and fresh herbs, you’ll know why this Tik Tok baked feta pasta recipe is such a big hit on the internet. Truly yummy!"
    },

    {
        title: "Baked Feta Pasta",
        description: "Once you try this delectable blend of pasta, roasted tomatoes, feta, and fresh herbs, you’ll know why this Tik Tok baked feta pasta recipe is such a big hit on the internet. Truly yummy!"
    },

    {
        title: "Salmon and Rice Bowl",
        description: "tbd"
    },

    {
        title: "Vegan Pici Pasta",
        description: "tbd"
    }


]

const fillRecipeInfo = async function(recipe, AuthorId) {
    let newRecipe = {};
    newRecipe.title = recipe.title;
    console.log("AUTHOR", AuthorId);

    let TrashCodeTime = null;
    
    if(recipe.ingredients && recipe.ingredients.length > 0)
    {
        newRecipe.ingredients = [];
        TrashCodeTime = 0;
        
        for(let i = 0; i<recipe.ingredients.length; i++)
        {
            await RecipeIngredient.create(recipe.ingredients[i]).then((ing) => { //add await here maybe
                newRecipe.ingredients.push(ing);
                TrashCodeTime++;
            }, (err) => console.log(err));
        }
    }

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
    newRecipe.author_id = AuthorId

    if(TrashCodeTime !== null)
    {
        while(TrashCodeTime < recipe.ingredients.length)
        {
            // console.log("waiting for finish...")
        }
    }
    return newRecipe;
  };

const seedDB = async () => {
    await User.deleteMany({});
    await Recipe.deleteMany({});
    await RecipeIngredient.deleteMany({});

    await User.create(UserSeeds); //INSERT MANY
    let TrashCodeTime = 0; //to be replaced with Promise.all
    for(let i = 0; i < RecipeSeeds.length; i++)
    {
        
        let randomUser = User.aggregate([{ $sample: { size: 1 } }]); //WHAT IS THIS STUPID AGGREGATE THING
        let num;
        for await (const brooo of randomUser) { //dont know how to properly extract frmo it
            num = brooo._id;
        }
        let newRecipe = await fillRecipeInfo(RecipeSeeds[i], num);
        await Recipe.create(newRecipe).then(() => TrashCodeTime++); //slow potentially
    }
    while(TrashCodeTime != RecipeSeeds.length)
    {
        // console.log("bad code let's go")
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})