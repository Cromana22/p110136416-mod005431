import React from 'react';

function RecipeStep(props)
{
  const { number } = props
  const name = "step"+number
  const placeholder = "Step "+number

  return (
    <div className="input-field center-align">
      <label for={name} className="active">{number}. </label>
      <input type="text" name={name} placeholder={placeholder}></input>
    </div>
  )
}
  
export default RecipeStep