import React from 'react';
import { useState } from 'react/cjs/react.development';
import RecipeIngredient from './RecipeIngredient';
import RecipeStep from './RecipeStep';
import 'materialize-css';
import {Collapsible, CollapsibleItem } from 'react-materialize';
import AppPageTitle from './AppPageTitle';

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
    for (let index = 0; index < ingredientCounter; index++)
    { ingredientList.push( <RecipeIngredient key={index} number={index+1} /> ); };
    setiList(ingredientList);
  }

  function stepPlus1()
  {
    setsCount(stepCounter + 1);
    for (let index = 0; index < stepCounter; index++)
    { stepList.push( <RecipeStep key={index} number={index+1} /> ); };
    setsList(stepList);
  }

  return (
    <div name="RecipeAdd" >
      <AppPageTitle title="Contribute to our recipe collection!" />
      <div className="pink lighten-4 deep-purple-text">
        <div className="container">
          <br />
          <form method="POST">
            <Collapsible className="yellow lighten-4 deep-purple-text">
              <CollapsibleItem expanded={true} header="Main Details" node="div">
                Name: <input type="text" name="name"></input>
                Description: <input type="text" name="description"></input>
                Contributed By: <input type="text" name="contributor"></input>
                Prep Time: <input type="text" name="prepTime"></input>
                Cook Time: <input type="text" name="cookTime"></input>
                Servings: <input type="number" name="servings"></input>
                <div class="file-field input-field">
                  <div class="waves-effect waves-light btn deep-purple accent-1">
                    <span>Image</span>
                    <input type="file"></input>
                  </div>
                  <div class="file-path-wrapper">
                    <input class="file-path validate" type="text"></input>
                  </div>
                </div>
                Image: <input type="file" name="image"></input>
              </CollapsibleItem>

              <CollapsibleItem expanded={false} header="Ingredients" node="div">
                {iList}
                <div className="center-align">
                  <button type="button" className="waves-effect waves-light btn deep-purple accent-1" onClick={ingPlus1}>
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </CollapsibleItem>

              <CollapsibleItem expanded={false} header="Steps" node="div">
                {sList}
                <div className="center-align">
                  <button type="button" className="waves-effect waves-light btn deep-purple accent-1" onClick={stepPlus1}>
                    <i className="material-icons">add</i>
                  </button>
                </div>
              </CollapsibleItem>
            </Collapsible>

            <div className="center-align">
              <button class="btn waves-effect waves-light deep-purple accent-1" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </form>
          <br /><br />
        </div>
      </div>
    </div>
  )
}
  
export default RecipeAdd