export const recipeSelector = (state)=>{
    if (state.entities.recipes.recipes_created && state.entities.recipes.recipes_liked){
        return state.entities.recipes.recipes_created.concat(state.entities.recipes.recipes_liked)
    } else if (state.entities.recipes.recipes_created) { return state.entities.recipes.recipes_created }
    else if (state.entities.recipes.recipes_liked) { return state.entities.recipes.recipes_liked } else{return []}
}