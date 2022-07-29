import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import RecipeIndexContainer from './recipes/recipe_index_container';
import MyMealplansContainer from './user/my_mealplans_container';
import RecipeContainer from './recipes/recipes_container';
import UserShowPageContainer from './user/user_show_page_container';
import HomePageContainer from './recipes/home_page_container';
import HowItWorks from './how_it_works';
import Modal from './modal'
import ShoppingList from './shopping_list/shopping_list'


import SearchContainer from "./search/search_bar_container"

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>   
      <Route exact path="/recipes/:recipeId" component={RecipeContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/recipes" component={HomePageContainer} />
      <ProtectedRoute
        exact
        path="/mymealplans/:userId"
        component={MyMealplansContainer}
      />
      <ProtectedRoute
        exact
        path="/myprofile/:userId"
        component={UserShowPageContainer}
      />

      
      
      <Route exact path="/howitworks" component={HowItWorks} />
      <Route  exact path='/shopping_list' component={ShoppingList} />
      <Route path="/search" component={SearchContainer} />
      <Route exact path="/" component={RecipeIndexContainer} />

    </Switch>
  </div>
);

export default App;