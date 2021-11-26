import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeGrid(props)
{
  const { cards } = props
  let cardlist = [];

  for (let index = 0; index < cards; index++) //props is an object, cards is one of the values
  {
    cardlist.push( <RecipeCard key={index} /> );
  };

  console.log(cardlist);

  return (
    <div className="RecipeGrid">
      <div className="row">
        {cardlist}
      </div>
    </div>
  )
}
  
export default RecipeGrid