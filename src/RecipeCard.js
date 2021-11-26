import React from 'react';
import image from './images/cupcake.png';

function RecipeCard()
{
  return (
    <div className="RecipeCard col s12 m2">
      <div class="card medium hoverable yellow lighten-4">
        <div class="card-image">
          <img className="centre-align" src={image} alt="alt text"/>
        </div>
        <div class="card-title center-align">Recipe Name</div>
        <div class="card-content deep-purple-text">
          <p>Recipe description</p>
        </div>
      </div>
    </div>
  )
}
  
export default RecipeCard