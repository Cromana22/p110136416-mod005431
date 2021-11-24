import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeGrid(props)
{
  let cardlist = [];

  for (let index = 0; index < props.cards; index++) //props is an object, cards is one of the values
  {
    cardlist.push( <RecipeCard key={index} /> );
  };

  console.log(cardlist);

  return (
    <div className="RecipeGrid">
    {cardlist}
    </div>
  )
}
  
export default RecipeGrid