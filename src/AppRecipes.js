import React from 'react';
import AppPageTitle from './AppPageTitle';
import { Link } from "react-router-dom";
import RecipeGrid from './RecipeGrid';
import useFetch from './scripts/useFetch.js';

function AppRecipes() {
  const { response, loading, error } = useFetch("https://p110136416-6.free.beeceptor.com/recipes");

    return (
      <div className="AppRecipeList">
        <AppPageTitle title="Find Great Recipes" />
        <div className="pink lighten-4 deep-purple-text">
          <div>
            <p>Search fields</p>
          </div>

          <div className="container"> 
            <Link to="addRecipe">Contribute a recipe</Link>
            { loading && <p>{loading}</p> } {/* if loading, output loading */}
            { error && <p>{error}</p> } {/* if error, output error */}
            { response && <RecipeGrid cards={response} /> } {/* if loaded, put data into recipe grid as a prop */}
          </div>
        </div>
      </div>
    )
  }
  
  export default AppRecipes