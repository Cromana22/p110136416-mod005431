import React from 'react';
import useFetch from './scripts/useFetch';
import { useParams } from 'react-router';
import RecipeDetailContent from './RecipeDetailContent';

function RecipeDetail()
{
    const { response, loading, error } = useFetch("https://p110136416-2.free.beeceptor.com/recipes");
    let {id} = useParams();

  return (
    <div className="RecipeDetail pink lighten-4">
        { loading && <p>{loading}</p> } {/* if loading, output loading */}
        { error && <p>{error}</p> } {/* if error, output error */}
        { response &&  <RecipeDetailContent recipes={response} recipeId={id} /> } {/* if loaded, put data .... */}
    </div>
  )
}
  
export default RecipeDetail