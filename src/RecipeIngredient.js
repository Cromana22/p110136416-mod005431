import React from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

function RecipeIngredient(props)
{
  const { number } = props
  const ingName = "ingredient"+number
  const numName = "num"+number
  const measureName = "measure"+number

  return (
    <div className="center-align">
      {number}. 
      <div className="input-field inline">
        <select name={ingName} className="browser-default yellow lighten-4 deep-purple-text" defaultValue="">
          <option value="" disabled>Select an ingredient</option>
          <option value="Meat">Meat</option>
          <option value="Fish">Fish</option>
          <option value="Vegetable">Vegetable</option>
          <option value="Fruit">Fruit</option>
        </select>
      </div>
        
      <div className="input-field inline">
        <label for={numName} className="active">Amount</label>
        <input type="number" name={numName} placeholder="0" className="right-align"></input>
      </div>

      <div className="input-field inline">
        <select name={measureName} className="browser-default yellow lighten-4 deep-purple-text" defaultValue="">
          <option value="" disabled>Select a measurement</option>
          <option value="g">g</option>
          <option value="ml">ml</option>
          <option value="each">each</option>
        </select>
      </div>

      <br />
    </div>
  )
}
  
export default RecipeIngredient