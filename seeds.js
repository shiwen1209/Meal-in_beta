const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;


const Recipe = require('./models/Recipe.js');
const User = require('./models/User.js');
const RecipeIngredient = require('./models/RecipeIngredient.js');
const axios = require("axios")
const parser = require('node-html-parser')
const jsdom = require("jsdom")
const bcrypt = require("bcrypt")

// let obj = require("./recipes.json");

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
    },
    {
        handle: "Alan", email: "alan@test.com", password: "test12"
    },
    {
        handle: "Evie", email: "evie@test.com", password: "test12"
    },
    {
        handle: "Adam", email: "adam@test.com", password: "test12"
    },
    {
        handle: "Richard", email: "richard@test.com", password: "test12"
    },
    {
        handle: "thomas", email: "thomas@test.com", password: "test12"
    },
    {
        handle: "tears", email: "tears@test.com", password: "test12"
    },
    {
        handle: "Chef Boy R. Dee", email: "chefboy@test.com", password: "test12"
    },
    {
        handle: "Ramsay Gordon", email: "ramsay@test.com", password: "test12", bio: "you fookin donkey"
    },
    {
        handle: "Remy", email: "remy@test.com", password: "test12"
    },
    {
        handle: "Auguste Gusteau", email: "ratatouille@test.com", password: "test12"
    },
    {
        handle: "Wendy", email: "wen@test.com", password: "test12"
    },
    {
        handle: "Charlie", email: "char@test.com", password: "test12"
    },
    {
        handle: "alec", email: "alec@test.com", password: "test12"
    },
    {
        handle: "Zuzu", email: "zuzu@test.com", password: "test12"
    },
    {
        handle: "Anthonie", email: "anthonie@test.com", password: "test12"
    },
    {
        handle: "Brian", email: "brian@test.com", password: "test12", bio: "brian eats owner and CEO"
    },
    {
        handle: "Lucy", email: "lucy@test.com", password: "test12"
    },
    {
        handle: "cindy", email: "cindy@test.com", password: "test12"
    },
    {
        handle: "danny", email: "danny@test.com", password: "test12"
    },
    {
        handle: "alex", email: "alex@test.com", password: "test12"
    },
    {
        handle: "jacob", email: "jacob@test.com", password: "test12"
    },
    {
        handle: "peter", email: "peter@test.com", password: "test12"
    },
    {
        handle: "h", email: "h@test.com", password: "test12"
    }
]

// const RecipeSeeds = [
//    {
//         title: "Traditional Croatian Goulash",
//         description: "yummy food",
//         recipe_url: "https://www.allrecipes.com/recipe/17289/chocolate-zucchini-bread-i/",
//         instructions: "Clean the meat from the veins if there are some and cut it into smaller pieces, 3 × 3 cm.\nMarinate the meat in the mustard and spices and let it sit in the refrigerator for one hour Heat one tablespoon of pork fat or vegetable oil in a pot and fry the meat on all sides until it gets browned.\nOnce the meat is cooked, transfer it to a plate and add another tablespoon of fat to the pot Cut the onions very fine, peel the carrots and shred it using a grater.\nCook the onions and carrots over low heat for 15 minutes.\nYou can salt the vegetables a little to make them soften faster Once the vegetables have browned and become slightly mushy, add the meat and bay leaves and garlic.\nPour over with wine and simmer for 10-15 minutes to allow the alcohol to evaporate.\nNow is the right time to add 2/3 the amount of liquid Cover the pot and cook over low heat for an hour, stirring occasionally.\nAfter the first hour, pour over the rest of the water or stock and cook for another 30-45 minutes Allow the stew to cool slightly and serve it with a sprinkle of chopped parsley and few slices of fresh hot pepper if you like to spice it up a bit Slice ​​some fresh bread, season the salad and simply enjoying these wonderful flavors",
//         ingredients:
//         [{
//             name: "Beef",
//             unit_name: "g",
//             unit_amount: 500
//         },
//         {
//             name: "Chopped Onions",
//             unit_amount: 2
//         },
//         {
//             name: "Chopped Carrots",
//             unit_amount: 2
//         },
//         {
//             name: "Garlic",
//             unit_name: "clove",
//             unit_amount: 2
//         },
//         {
//             name: "Bay Leaf",
//             unit_amount: 2
//         },
//         {
//             name: "Red Wine",
//             unit_name: "mL",
//             unit_amount: 200
//         },
//         {
//             name: "water",
//             unit_name: "L",
//             unit_amount: 2
//         },
//         {
//             name: "mustard",
//             unit_name: "tbsp",
//             unit_amount: 3
//         },
//         {
//             name: "Salt",
//             unit_name: "tbsp",
//             unit_amount: 1        
//         },
//         {
//             name: "Pepper",
//             unit_name: "tsp",
//             unit_amount: .5
//         },
//         {
//             name: "Paprika",
//             unit_name: "tsp",
//             unit_amount: .5
//         },
//         {
//             name: "Vegetable Oil",
//             unit_name: "tbsp",
//             unit_amount: 2
//         }]
//     },

//     {
//         title: "Pesto Eggs",
//         description: "This viral TikTok recipe for pesto eggs is wildly flavorful. The eggs are fried in a layer of pesto sauce and served with a spread of goat cheese on some crusty toast.",
//     },

//     {
//         title: "Folded Kimbap",
//         description: "Make these quick and easy nori sandwich by folding a seaweed sheet and filling it with various ingredients of your choice. Trending on social medias these past months, these kimbap are perfect for a different kind of lunch!"
//     },

//     {
//         title: "Baked Feta Pasta",
//         description: "Once you try this delectable blend of pasta, roasted tomatoes, feta, and fresh herbs, you’ll know why this Tik Tok baked feta pasta recipe is such a big hit on the internet. Truly yummy!"
//     },

//     {
//         title: "Baked Feta Pasta",
//         description: "Once you try this delectable blend of pasta, roasted tomatoes, feta, and fresh herbs, you’ll know why this Tik Tok baked feta pasta recipe is such a big hit on the internet. Truly yummy!"
//     },

//     {
//         title: "Salmon and Rice Bowl",
//         description: "tbd"
//     },

//     {
//         title: "Vegan Pici Pasta",
//         description: "tbd"
//     }


// ]



// const fillRecipeInfo = async function(recipe, AuthorId) {
// const fillRecipeInfo = async function(recipe) {

//     let newRecipe = {};
//     newRecipe.title = recipe.title;

//     let TrashCodeTime = null;
    
//     if(recipe.ingredients && recipe.ingredients.length > 0)
//     {
//         newRecipe.ingredients = [];
//         TrashCodeTime = 0;
        
//         for(let i = 0; i<recipe.ingredients.length; i++)
//         {
//             await RecipeIngredient.create(recipe.ingredients[i]).then((ing) => { //add await here maybe
//                 newRecipe.ingredients.push(ing);
//                 TrashCodeTime++;
//             }, (err) => console.log(err));
//         }
//     }

//     if(recipe.description)
//     newRecipe.description = recipe.description;
   
//     if(recipe.instructions)
//     {
//         if(Array.isArray(recipe.instructions) )
//         {
//             newRecipe.instructions = recipe.instructions;
//         }
//         else if(typeof recipe.instructions === 'string')
//         {
//             newRecipe.instructions = recipe.instructions.split("\n");
//         }
//     }

//     if(recipe.recipe_url)
//     {
//         // console.log("hi?");
//         // console.log(recipe.recipe_url);
       
//         await axios.get(recipe.recipe_url).then(resp => {
//             // console.log("dont test me")
//             let dom = new jsdom.JSDOM(resp.data)
//             // console.log("dom", dom);
//             // Selector when there is a video
//             let pic = dom.window.document.querySelector('body > div.docked-sharebar-content-container > div > main > div.recipe-container.two-col-container > div.content.two-col-main-content.karma-content-container > div.recipe-content.two-col-content.karma-main-column > div.two-col-content-wrapper > div.recipe-content-container > div.lead-content-wrapper.two-col-style > div.lead-content-aside-wrapper.video-with-tout-image > aside > div')
//             if (!pic) {
//                 // No video
//                 pic = dom.window.document.querySelector('div[data-main-recipe=true]')
//             }
//             if (!pic) {
//                 console.log("nope");
//                 return ""
//             }
//             let ans = pic.getAttribute('data-src');
//             console.log(ans);
//             newRecipe.image_url = ans;
//             TrashCodeTime++;
//         })
//     }
//     if(recipe.prep_time)
//     newRecipe.prep_time = recipe.prep_time;
//     if(recipe.category)
//     newRecipe.category = recipe.category;
//     if(recipe.meal_type)
//     newRecipe.meal_type = recipe.meal_type;
//     if(recipe.budget)
//     newRecipe.budget = recipe.budget;
//     if(recipe.num_ratings)
//     newRecipe.num_ratings = recipe.num_ratings;
//     if(recipe.num_favorites)
//     newRecipe.num_favorites = recipe.num_favorites;
//     if(recipe.total_ratings)
//     newRecipe.total_ratings = recipe.total_ratings;
//     if(recipe.category)
//     newRecipe.category = recipe.category;
//     if(recipe.prep_time)
//     newRecipe.prep_time = recipe.prep_time;


//     newRecipe.author_id = AuthorId

//     if(TrashCodeTime !== null) //Should be promise.all
//     {
//         while(TrashCodeTime < recipe.ingredients.length + 1)
//         {
//             // console.log("waiting for finish...")
//         }
//     }
//     return newRecipe;
//   };


//for these fake dudes, if they favorited it, they also rated it 4 or 5. but dont need both at same time in general 
const addRecipeToUserFavorite = async function(userId, recipe) {
return await User.findByIdAndUpdate(
    userId,
    { $push: { recipes_liked: recipe._id, recipes_rated: { rating: Math.floor(Math.random()*2) + 4, recipe: recipe._id}}},
    { new: true, useFindAndModify: false }
);
};
  

const fillScrapedRecipeInfo = async function(recipe, author) {

    let newRecipe = {};
    newRecipe.title = recipe.name;

    // let TrashCodeTime = 0;
    
    if(recipe.ingredients) //NEEDS REFACTORING INTO INGRDIENTSSCHEMA... units are big problem
    {
        // newRecipe.ingredients = [];
        // TrashCodeTime = 0;
        
        let ans = recipe.ingredients.split(' ; ');

        // for(let i = 0; i<ans.length; i++)
        // {
        //     await RecipeIngredient.create(ans[i]).then((ing) => { //add await here maybe
        //         newRecipe.ingredients.push(ing);
        //         TrashCodeTime++;
        //     }, (err) => console.log(err));
        // }
        newRecipe.ingredients = ans;
    }

    
    if(recipe.summary)
        newRecipe.description = recipe.summary;
   
    if(recipe.directions)
    {
        if(Array.isArray(recipe.directions) )
        {
            newRecipe.instructions = recipe.directions;
        }
        else if(typeof recipe.directions === 'string')
        {
            newRecipe.instructions = recipe.directions.split(". ");
        }
    }

    if(recipe.url)
    {
        // console.log("hi?");
        // console.log(recipe.recipe_url);
       
        await axios.get(recipe.url).then(resp => {
            // console.log("dont test me")
            let dom = new jsdom.JSDOM(resp.data)
            // console.log("dom", dom);
            // Selector when there is a video
            let pic = dom.window.document.querySelector('body > div.docked-sharebar-content-container > div > main > div.recipe-container.two-col-container > div.content.two-col-main-content.karma-content-container > div.recipe-content.two-col-content.karma-main-column > div.two-col-content-wrapper > div.recipe-content-container > div.lead-content-wrapper.two-col-style > div.lead-content-aside-wrapper.video-with-tout-image > aside > div')
            if (!pic) {
                // No video
                pic = dom.window.document.querySelector('div[data-main-recipe=true]')
            }
            if (!pic) {
                console.log("nope");
                return ""
            }
            let ans = pic.getAttribute('data-src');
            console.log(ans);
            newRecipe.image_url = ans;
        })
    }
    if(recipe.total)
    newRecipe.prep_time = recipe.total;
    if(recipe.category)
    newRecipe.category = recipe.category;
    if(recipe.budget)
        newRecipe.budget = recipe.budget;
    else
        newRecipe.budget = Math.floor(Math.random()* 4) +1;
    if(recipe.rating_count)
    newRecipe.num_ratings = recipe.rating_count;
    if(recipe.review_count)
    {
        newRecipe.num_favorites = recipe.review_count + Math.floor(Math.random() * 15);
    }
    else
    {
        newRecipe.num_favorites = Math.floor(Math.random() * 15);
    }
    if(recipe.rating && recipe.rating_count)
        newRecipe.total_rating = recipe.rating * recipe.rating_count;
   
    if(recipe.yield)
    newRecipe.yield = recipe.yield;

    if(author) //ignore Recipe Author
    {
        let existingUser = await User.findOne({handle: author.handle}).exec()
        if(existingUser)
        {
            newRecipe.author = existingUser._id;
            // newRecipe.author_pfp_url = existingUser.pfp_url;
            // newRecipe.author_handle = existingUser.handle;
        }
        else
        {
            let newUser = new User({handle: author.handle, email: author.email, password: "pass123"});
            await newUser.save().then( (res) => 
            {
                newRecipe.author = res._id;
                // newRecipe.author_pfp_url = res.pfp_url;
                // newRecipe.author_handle = res.handle;
            })
        }
    }

    return newRecipe;
  };

const seedDB = async () => {
    await User.deleteMany({});
    await Recipe.deleteMany({});
    await RecipeIngredient.deleteMany({});

    const RecipeBigSeeds = obj.slice(0, 200);

    let newUserSeeds = await Promise.all(UserSeeds.map(async(user) => {
       let newUser = Object.assign({}, user);
       newUser.password = null;
       newUser.password = await bcrypt.hash(user.password, 10);
       return newUser;
      })
    );

    await User.create(newUserSeeds);


    let TrashCodeTime = 0; //to be replaced with Promise.all
    for(let i = 0; i < RecipeBigSeeds.length; i++)
    {
       ////
        let randomUser = User.aggregate([{ $sample: { size: 1 } }]); //WHAT IS THIS STUPID AGGREGATE THING
        let usr;
        for await (const brooo of randomUser) { //dont know how to properly extract frmo it
            usr = brooo;
        }

        // let newRecipe = await fillRecipeInfo(RecipeSeeds[i], num);
        ///////
    
        let newRecipe = await fillScrapedRecipeInfo(RecipeBigSeeds[i], usr);
        await Recipe.create(newRecipe).then(async res => 
        {
            let randomUsers = User.aggregate([{ $sample: { size: 4 } }]); 
            (await randomUsers).forEach( async (a_user) => { 
                // await addUserFavoriteToRecipe(res._id, a_user);
                console.log(a_user);
                await addRecipeToUserFavorite(a_user._id, res);
            }) 

            TrashCodeTime++
        }, (errs) => 
        {
            console.log(errs);
            TrashCodeTime++;
        }); //slow potentially
    }
    while(TrashCodeTime != RecipeBigSeeds.length)
    {
        // console.log("bad code let's go")
    }

}

seedDB().then(() => {
    mongoose.connection.close();
})