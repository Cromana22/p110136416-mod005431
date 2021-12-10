import React from 'react';
import AppPageTitle from './AppPageTitle';
import { Link } from "react-router-dom";
import RecipeGrid from './RecipeGrid';
import useFetch from './scripts/useFetch.js';
import './AppRecipes.css';
import {Collapsible, CollapsibleItem, Icon } from 'react-materialize';
import { useState } from 'react/cjs/react.development';

function AppRecipes() {
  let { response, loading, error } = useFetch("https://p110136416-1.free.beeceptor.com/recipes");
  const [state, setState] = useState(
    {
      rname: "",
      author: "",
      preptime: 300,
      cooktime: 300,
      difficulty: "",
      ingredients: ""
    }
  );

  function search(item)
  {
    if (item.name.includes(state.rname) &&
      item.author.includes(state.author) &&
      item.preptime < state.preptime+1 &&
      item.cooktime < state.cooktime+1 &&
      item.difficulty.includes(state.difficulty) &&
      item.ingredients.some(ingredient => ingredient.name.includes(state.ingredients))
      )
    { return true }
    return false;
  }

  function handleChange(evt)
  {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

    return (
      <div className="AppRecipeList">
        <AppPageTitle title="Find Great Recipes" />
        <div className="pink lighten-4 deep-purple-text">

          <div className="valign-wrapper">
            <p className=" container center-align padding" width="100%"><strong>Have a recipe to share? 
            <Link to="addRecipe"> <u>Contribute here!</u></Link></strong></p>
          </div>

          <Collapsible className="pink lighten-5 deep-purple-text">
              <CollapsibleItem expanded={false} header="Search" node="div" icon={<Icon>search</Icon>}>
                <form id="searchfields">
                  <div className="row">
                    <div className="col s12 m3"><label className="label">Name</label> 
                      <div className="input-field "><input type="text" name="rname" value={state.rname} onChange={handleChange}></input></div>
                    </div>

                    <div className="col s12 m3"><label className="label">Author</label> 
                      <div className="input-field"><input type="text" name="author" value={state.author} onChange={handleChange}></input></div>
                    </div>

                    <div className="col s12 m3"><label className="label">Difficulty</label> 
                      <div className="input-field">
                        <select name="difficulty" className="browser-default pink lighten-5 deep-purple-text" value={state.difficulty} onChange={handleChange}>
                          <option value="">Any</option>
                          <option value="Easy">Easy</option>
                          <option value="Medium">Medium</option>
                          <option value="Hard">Hard</option>
                        </select>
                      </div>
                    </div>

                    <div className="col s12 m3"><label className="label">Ingredients</label> 
                      <div className="input-field">
                        <select name="ingredients" className="browser-default pink lighten-5 deep-purple-text" value={state.ingredients} onChange={handleChange}>
                          <option value="">Any</option>
                          <option value="Baking Powder">Baking Powder</option>
                          <option value="Berries">Berries</option>
                          <option value="Box of Spice Cake Mix">Box of Spice Cake Mix</option>
                          <option value="Box of Vanilla Pudding Mix">Box of Vanilla Pudding Mix</option>
                          <option value="Butter">Butter</option>
                          <option value="Chocolate (chopped">Chocolate (chopped)</option>
                          <option value="Chocolate Chips">Chocolate Chips</option>
                          <option value="Cocoa Powder">Cocoa Powder</option>
                          <option value="Coffee Creamer">Coffee Creamer</option>
                          <option value="Cream Cheese">Cream Cheese</option>
                          <option value="Cream of Tartar">Cream of Tartar</option>
                          <option value="Double Cream">Double Cream</option>
                          <option value="Egg White">Egg White</option>
                          <option value="Eggs">Eggs</option>
                          <option value="Flour">Flour</option>
                          <option value="Greek Yoghurt">Greek Yoghurt</option>
                          <option value="Icing Sugar">Icing Sugar</option>
                          <option value="Juice of a Blood Orange">Juice of a Blood Orange</option>
                          <option value="Light Brown Sugar">Light Brown Sugar</option>
                          <option value="Oil">Oil</option>
                          <option value="Peanut Butter Chips">Peanut Butter Chips</option>
                          <option value="Pumpkin Puree">Pumpkin Puree</option>
                          <option value="Pumpkin Spice">Pumpkin Spice</option>
                          <option value="Salt">Salt</option>
                          <option value="Salted Peanuts">Salted Peanuts</option>
                          <option value="Sour Cream">Sour Cream</option>
                          <option value="Sugar">Sugar</option>
                          <option value="Unsalted Peanuts">Unsalted Peanuts</option>
                          <option value="Vanilla Extra">Vanilla Extra</option>
                          <option value="Vanilla Extract">Vanilla Extract</option>
                          <option value="White Almond Bark">White Almond Bark</option>
                          <option value="White Sugar">White Sugar</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </CollapsibleItem>
          </Collapsible>

          <div> 
            { loading && <p>{loading}</p> } {/* if loading, output loading */}
            { error && <p>{error}</p> } {/* if error, output error */}
            { response && <RecipeGrid recipes={response.filter(search)} /> } {/* if loaded, put data into recipe grid as a prop */}
          </div>

        </div>
      </div>
    )
  }
  
  export default AppRecipes