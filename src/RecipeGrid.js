import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeGrid(props)
{
  const { recipes } = props;
  let cardlist = [];

  recipes.forEach(card =>
  {
    cardlist.push( <RecipeCard key={card.id} cardId={card.id} name={card.name} image={card.image} descript={card.description} /> );
  })
 
  return (
    <div className="RecipeGrid">
      <div className="container row">
        {cardlist}
      </div>
    </div>
  )
}
  
export default RecipeGrid