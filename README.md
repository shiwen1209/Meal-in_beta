# Meal'in

[Meal'in Live](https://meal-in.herokuapp.com/#/)

Meal'in is a recipe and mealplan app. User can select from 200+ recipes on the app. The mealplan tool allow user to customize weekly mealplan with automated nutrition dahsboard. It also auto-generates a grocery shopping list once the mealplan is finalzied. 

# Technologies Used

 ## Hosting & Server
  * Heroku
  * AWS
 ## Backend
 * MongoDB
 * Express.js
 * Node.js
 ## Frontend
 * React
 * Redux
 * Chart.js
 
 # Features Summary
 ## User authentication and profile CRUD
* User authentication, sign in and sign up
* User profile CRUD
 ## Recipes CRUD, recipes ratings CRUD and recipes likes CRUD
  * User can see posts from all of their connections
  * User can comment on the posts
  * User can like a post or a comment 
 ## Recipes search
 * User can search recipes by one or a combination of the following filters
   * Meal category (breakfast, lunch or dinner)
   * Budget
   * Dish name
* User can also sort the search result by most recent or most popular
 ## Mealplans CRUD, with auto-generated nutrition dashboard and shopping list
* User can user a 7-day mealplan tool to by populating the mealplan with the recipes that they've liked
* The mealplan tool offers live and real-time nutrition dashboard, so user can be mindful when populating the mealplan with the recipe choices
* Once the mealplan is finalized, user can see a auto-generated grocery shopping list that compiles all the ingredients required to cook all the recipes on the 

 # Features Spotlight
 ## Recipes Search
  * User can search recipes by one or a combination of the following filters
   * Meal category (breakfast, lunch or dinner)
   * Budget
   * Dish name
   
https://user-images.githubusercontent.com/39010644/184064469-ac92d8c7-ba59-4800-8312-aad94e888baa.mov

```js
//mainpage.js
 router.get("/", async (req, res) => {
    Recipe.find({})
        .populate('author', '-password -email -recipes_liked -recipes_rated')
        .then(async (recipes) => {
            let ans = [];
            let categories = {
                "appetizers-and-snacks": 0,
                "breakfast-and-brunch": 0,
                "desserts": 0,
                "drinks": 0,
                "main-dish": 0,
                "meat-and-poultry": 0,
                "salad": 0,
                "world-cuisine": 0
            };

            let category_names = Object.keys(categories);

            for (let i = 0; i < recipes.length; i++) {
                if (category_names.includes(recipes[i].category) && categories[recipes[i].category] < 8) {
                    let newRecipe = {};
                    newRecipe.title = recipes[i].title;
                    newRecipe._id = recipes[i]._id;
                    newRecipe.id = recipes[i].id;
                    newRecipe.prep_time = recipes[i].prep_time;
                    newRecipe.num_likes = recipes[i].num_likes;
                    newRecipe.author = recipes[i].author;
                    newRecipe.num_ratings = recipes[i].num_ratings;

                    newRecipe.total_rating = recipes[i].total_rating;
                    newRecipe.category = recipes[i].category;
                    newRecipe.image_url = recipes[i].image_url;
                    categories[recipes[i].category] += 1;
                    ans.push(newRecipe);
                }
            }
            return res.json(ans);
        })
        .catch(err => console.log(err));
})
```
 ## Mealplan
 * User can user a 7-day mealplan tool to by populating the mealplan with the recipes that they've liked

https://user-images.githubusercontent.com/39010644/184064919-8cf00de0-7fec-4d11-a9eb-7abe60f2e493.mov

```js
//mealplan.js
const DaysOfWeek = {
    Monday: 'mon',
    Tuesday: 'tue',
    Wednesday: 'wed',
    Thursday: 'thu',
    Friday: 'fri',
    Saturday: 'sat',
    Sunday: 'sun',
}

const MealType = {
    Breakfast: 'breakfast',
    Lunch: 'lunch',
    Dinner: 'dinner'
}

const MealDay = new Schema({
    day: {
        type: String,
        required: true,
        enum: Object.values(DaysOfWeek)
    },
    meal_type: {
        type: String,
        required: true,
        enum: Object.values(MealType)
    },
    recipe_id: {
        type: ObjectId,
        ref: "Recipe"
    },
    recipe_title: {
        type: String,
        required: true,
    }
})


function validateMealDayArray(arr) {
    return arr.length <= 7 * 3 && arr.length >= 1
}

const MealPlanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner_id: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    meals: {
        type: [MealDay],
        required: true,
        validate: [validateMealDayArray, '{PATH} exceeds max size of 21']
    },
})
```






