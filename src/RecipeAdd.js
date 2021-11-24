import React from 'react';
import { useState } from 'react/cjs/react.development';
import RecipeIngredient from './RecipeIngredient';
import RecipeStep from './RecipeStep';

function RecipeAdd()
{
  const [ingredientCounter, setiCount] = useState(1);
  const [stepCounter, setsCount] = useState(1);
  let ingredientList = [];
  let stepList = [];
  const [iList, setiList] = useState();
  const [sList, setsList] = useState();


  function ingPlus1()
  {
    setiCount(ingredientCounter + 1);
    console.log(ingredientCounter);
    for (let index = 0; index < ingredientCounter; index++)
    { ingredientList.push( <RecipeIngredient key={index} number={index+1} /> ); };
    setiList(ingredientList);
  }

  function stepPlus1()
  {
    setsCount(stepCounter + 1);
    console.log(stepCounter);
    for (let index = 0; index < stepCounter; index++)
    { stepList.push( <RecipeStep key={index} number={index+1} /> ); };
    setsList(stepList);
  }

  return (
    <>
      <div name="tabs">
        <ul>
          <li>Main Details</li>
          <li>Ingredients</li>
          <li>Steps</li>
        </ul>
      </div>

      <div name="recipe">
        <form method="POST">
          <fieldset>
            <legend>Main Details</legend>
            Name: <input type="text"></input>
            Description: <input type="text"></input>
            Contributed By: <input type="text"></input>
            Prep Time: <input type="text"></input>
            Cook Time: <input type="text"></input>
            Servings: <input type="number"></input>
            Image: <input type="file"></input>
          </fieldset>

          <fieldset>
            <legend>Ingredients</legend>
            {iList}
            <input type="button" value="+" onClick={ingPlus1} />
          </fieldset>

          <fieldset>
            <legend>Steps</legend>
            {sList}
            <input type="button" value="+" onClick={stepPlus1} />
          </fieldset>
        </form>
      </div>
    </>
  )
}
  
export default RecipeAdd