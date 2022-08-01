// const Faker = require('@faker-js/faker')
// const db = require('./config/keys').mongoURI;
// const MealPlan = require('./models/Mealplan1.js')
// const User = require('./models/User.js');
// const Recipe = require('./models/Recipe.js')

// // let obj = require("./recipes.json");

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

// function createMealDays(recipes) {
//     let numDays = getRandomInt(1, 6)
//     let days = Object.values(MealPlan.DaysOfWeek).slice(numDays)
//     let meals = Object.values(MealPlan.MealType)
//     let mealDays = []
//     for (const day of days) {
//         let numMeals = getRandomInt(1, 4)
//         for (let i = 0; i < numMeals; ++i) {
//             let recipe = recipes[getRandomInt(0, recipes.length)]
//             mealDays.push({
//                 day: day,
//                 meal_type: meals[i],
//                 recipe_id: recipe._id,
//                 recipe_title: Faker.faker.random.words(),
//             })
//         }
//     }
//     return mealDays
// }

// const seedDB = async () => {
//     try {
//         await MealPlan.MealPlan.collection.drop();
//         console.log("Meal plan cleared")
//     } catch (e) {
//         console.log("Failed to clear meal plan")
//     }

//     let recipes = await Recipe.find({}).sort().limit(100)
//     let users = await User.find({}).sort().limit(100)

//     let mealDocs = []
//     for (let i = 3; i < users.length; ++i) {
//         mealDocs.push({
//             name: Faker.faker.random.words(),
//             owner_id: users[i]._id,
//             meals: createMealDays(recipes)
//         })
//     }

//     for (let i = 0; i < 3; ++i) {
//         // console.log(users[i]._id)
//     }

//     // console.log(JSON.stringify(mealDocs[0]))
//     try {
//         await MealPlan.MealPlan.insertMany(mealDocs)
//     } catch (e) {
//         console.log("ERROR", e)
//     }
// }

// module.exports = seedDB