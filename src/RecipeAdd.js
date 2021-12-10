import React from 'react';
import { useState } from 'react/cjs/react.development';
import RecipeIngredient from './RecipeIngredient';
import RecipeStep from './RecipeStep';
import 'materialize-css';
import {Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import AppPageTitle from './AppPageTitle';
import RecipeDetailContent from './RecipeDetailContent';

function RecipeAdd()
{
  const [ingredientCounter, setiCount] = useState(1);
  const [stepCounter, setsCount] = useState(1);
  const [iList, setiList] = useState();
  const [sList, setsList] = useState();
  let ingredientList = [];
  let stepList = [];

  const [json1, setJson] = useState();
  let jsonStr = "";
  const rid = 1;

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

  function onSubmit()
  {
    let nameStr = document.getElementsByName("name")[0].value;
    let descriptStr = document.getElementsByName("rdescription")[0].value;
    let authorStr = document.getElementsByName("contributor")[0].value;
    let socialStr = document.getElementsByName("website")[0].value;
    let prepStr = document.getElementsByName("prepTime")[0].value;
    let cookStr = document.getElementsByName("cookTime")[0].value;
    let yieldsStr = document.getElementsByName("servings")[0].value;
    let imageStr = document.getElementsByName("image")[0].value;

    let ingElements = document.querySelectorAll('[name^="ingredient"]');
    let qtyElements = document.querySelectorAll('[name^="num"]');
    let measureElements = document.querySelectorAll('[name^="measure"]');
    let ingredientString = [];

    for (let i = 0; i < ingElements.length; i++)
    {
      let ingredient = { name: ingElements[i].value, quantity: qtyElements[i].value, measure: measureElements[i].value };
      ingredientString.push(ingredient);
    }

    let stpElements = document.querySelectorAll('[name^="step"]');
    let stepString = [];

    for (let i = 0; i < stpElements.length; i++)
    {
      let step = { number: i, step: stpElements[i].value };
      stepString.push(step);
    }

    console.log(ingredientString);
    console.log(stepString);

    jsonStr = [{ id: 1, author: authorStr, socials: socialStr, name: nameStr, difficulty: 'Medium', cooktime: cookStr, preptime: prepStr, yields: yieldsStr, description: descriptStr, image: imageStr, ingredients: ingredientString, steps: stepString }];

    setJson(jsonStr);
    console.log(jsonStr);
  }

  if (json1 == null)
  {
    return (
      <div name="RecipeAdd" >
        <AppPageTitle title="Contribute to our recipe collection!" />
        <div className="pink lighten-4 deep-purple-text">
          <div className="container">
            <br />
            <form action="./recipe-success">
              <Collapsible className="yellow lighten-4 deep-purple-text">
                <CollapsibleItem expanded={true} header="Main Details" node="div" icon={<Icon>expand_more</Icon>}>
                  Name: <input type="text" name="name"></input>
                  Description: <input type="text" name="rdescription"></input>
                  Contributed By: <input type="text" name="contributor"></input>
                  Socials: <input type="text" name="website"></input>
                  Prep Time: <input type="text" name="prepTime"></input>
                  Cook Time: <input type="text" name="cookTime"></input>
                  Servings: <input type="number" name="servings"></input>
                  <div className="file-field input-field">
                    <div className="waves-effect waves-light btn deep-purple accent-1">
                      <span>Image</span>
                      <input type="file"></input>
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" name="image"></input>
                    </div>
                  </div>
                </CollapsibleItem>
  
                <CollapsibleItem expanded={false} header="Ingredients" node="div" icon={<Icon>expand_more</Icon>}>
                  {iList}
                  <div className="center-align">
                    <button type="button" className="waves-effect waves-light btn deep-purple accent-1" id="ingplus" onClick={ingPlus1}>
                      <i className="material-icons">add</i>
                    </button>
                  </div>
                </CollapsibleItem>
  
                <CollapsibleItem expanded={false} header="Steps" node="div" icon={<Icon>expand_more</Icon>}>
                  {sList}
                  <div className="center-align">
                    <button type="button" className="waves-effect waves-light btn deep-purple accent-1" id="stepplus" onClick={stepPlus1}>
                      <i className="material-icons">add</i>
                    </button>
                  </div>
                </CollapsibleItem>
              </Collapsible>
  
              <div className="center-align">
                <button className="btn waves-effect waves-light deep-purple accent-1" type="button" name="action" onClick={onSubmit}>Submit
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
            <br /><br />
          </div>
        </div>
      </div>
    )
  }
  else
  {
    return (
      <div name="RecipeSuccess">
        <div className="deep-purple-text container">
          <div className="row"></div>
          <div className="pink lighten-4 deep-purple-text tall valign-wrapper">
            <p className="row container center-align"><br /><strong>Thank you for your submission!<br />
            Your recipe will be listed following our review and approval process.</strong><br /></p>
          </div>
        </div>
        <RecipeDetailContent recipes={json1} recipeId={rid} />
      </div>
    )
  }

}
  
export default RecipeAdd