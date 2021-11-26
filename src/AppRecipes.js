import React from 'react';
import AppPageTitle from './AppPageTitle';
import { Link } from "react-router-dom";
import RecipeGrid from './RecipeGrid';

function AppRecipes() {
    return (
      <div className="AppRecipeList">
        <AppPageTitle title="Find Great Recipes" />
        <div className="pink lighten-4 deep-purple-text">
          <div className="container"> 
            <p>Search fields</p>
            <Link to="addRecipe">Contribute a recipe</Link>
            <RecipeGrid cards={12} />
          </div>
        </div>
      </div>
    )
  }
  
  export default AppRecipes