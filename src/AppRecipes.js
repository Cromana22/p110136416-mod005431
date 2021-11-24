import React from 'react';
import AppPageTitle from './AppPageTitle';
import { Link, Outlet } from "react-router-dom";

function AppRecipes() {
    return (
      <div className="AppRecipeList">
        <AppPageTitle title="Find Great Recipes" />
        <p>Search fields</p>
        <Link to="addRecipe">Contribute a recipe</Link>
        <Outlet />
      </div>
    )
  }
  
  export default AppRecipes