import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import MyRecipesContainer from './user/my_recipes_container';
import MyMealplansContainer from './user/my_mealplans_container';
import RecipeContainer from './recipes/recipes_container';
import HomePageContainer from './recipes/home_page_container';
import HowItWorks from './how_it_works';


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>    
            <Route exact path="/" component={RecipeIndexContainer} />
            <Route exact path="/recipes/:recipeId" component={RecipeContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/myrecipes/:userId" component={MyRecipesContainer} />
            <Route exact path="/mymealplans/:userId" component={MyMealplansContainer} />
            <Route exact path="/recipes" component={HomePageContainer} />
            <Route path="/howitworks" component={HowItWorks} />
            {/* <Route path="/recipes" component={RecipeIndexContainer} /> */}
        </Switch>
    </div>
);

export default App;