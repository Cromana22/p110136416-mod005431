import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard(props)
{
  const { cardId, name, image, descript } = props;
  let cardlink = "./"+cardId;

  return (
    <div className="RecipeCard col s12 m3">
      <Link to={cardlink}>
        <div className="card small hoverable yellow lighten-4 deep-purple-text">
          <div className="card-image">
            <img className="centre-align" src={image} alt="alt text" width="100px" />
          </div>
          <div className="card-content">
            <span className="card-title"><strong>{name}</strong></span>
            <p>{descript.substring(0,50)}...</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
  
export default RecipeCard