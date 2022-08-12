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
//search.js

router.get("/", (req, res) => {
    let filter = {};
    let sortFilter = '';
    let title = req.query.title;
    let budget = parseInt(req.query.budget);
    let category = req.query.category;
    let sortme = req.query.sortme;
    if (title)
        filter.title = { $regex: title, $options: "i" };
    if (budget)
        filter.budget = budget;
    if (category)
        filter.category = category;
    if (sortme) {
        if (sortme === 'popularity') {
            sortFilter = '-num_likes';
        }
        else if (sortme === 'recent') {
            sortFilter = '-createdAt'
        }
    }

    Recipe.find(filter).sort(sortFilter).limit(20).exec().then((result) => {
        return res.json(result);
    });

})

module.exports = router;


     

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






