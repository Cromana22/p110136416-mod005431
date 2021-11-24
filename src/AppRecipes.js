import React from 'react';
import AppPageTitle from './AppPageTitle';
import RecipeGrid from './RecipeGrid';

function AppRecipes() {
    return (
      <div className="AppRecipeList">
        <AppPageTitle title="Find Great Recipes" />
        <p>Search fields</p>
        <RecipeGrid cards={3} />
      </div>
    )
  }
  
  export default AppRecipes