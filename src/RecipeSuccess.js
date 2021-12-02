import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeSuccess.css';

function RecipeSuccess()
{
  return (
    <div name="RecipeSuccess">
      <div className="pink lighten-4 deep-purple-text tall valign-wrapper">
        <br />
        <p className="container center-align">Thank you for your submission!<br />
        Your recipe will be listed following our review and approval process.<br />
        <br />
        <Link to="/recipes"><strong>Back To Recipes</strong></Link>
        <br /></p>
      </div>
    </div>
  )
}
  
export default RecipeSuccess