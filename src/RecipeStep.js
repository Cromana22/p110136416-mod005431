import React from 'react';

function RecipeStep(props)
{
  const { number } = props

  return (
    <>
      {number}.<input type="text"></input>
    </>
  )
}
  
export default RecipeStep