import React from 'react';

function RecipeIngredient(props)
{
  const { number } = props

  return (
    <>
      {number}.
      <select name="ingredient" id="ingredient" className="browser-default">
        <option value="Meat">Meat</option>
        <option value="Fish">Fish</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Fruit">Fruit</option>
      </select>
      <br />
      Quantity: <input type="text"></input>
    </>
  )
}
  
export default RecipeIngredient