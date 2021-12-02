import React from 'react';
import AppPageTitle from './AppPageTitle';
import { Link } from "react-router-dom";
import RecipeGrid from './RecipeGrid';
import useFetch from './scripts/useFetch.js';
import './AppRecipes.css';
import {Collapsible, CollapsibleItem, Icon } from 'react-materialize';

function AppRecipes() {
  const { response, loading, error } = useFetch("https://p110136416-2.free.beeceptor.com/recipes");

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
                <form>
                  <div className="row valign-wrapper">
                    <div className="col s12 m3">Name: 
                      <div className="input-field inline"><input type="text" name="name"></input></div>
                    </div>

                    <div className="col s12 m3">Author: 
                      <div className="input-field inline"><input type="text" name="author"></input></div>
                    </div>

                    <div className="col s12 m3">Prep Time (mins): 
                      <div className="input-field inline"><input type="number" name="preptime"></input></div>
                    </div>

                    <div className="col s12 m3">Cook Time (mins): 
                      <div className="input-field inline"><input type="number" name="cooktime"></input></div>
                    </div>
                  </div>

                  <div className="row valign-wrapper">
                    <div className="col s12 m3">Difficulty: 
                      <div className="input-field inline">
                        <select name="difficulty" className="browser-default pink lighten-5 deep-purple-text" defaultValue="">
                          <option value="">Any</option>
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </select>
                      </div>
                    </div>

                    <div className="col s12 m3">Ingredients: 
                      <div className="input-field inline">
                        <select name="ingredients" className="browser-default pink lighten-5 deep-purple-text" defaultValue="">
                          <option value="">Any</option>
                          <option value="Meat">Meat</option>
                          <option value="Fish">Fish</option>
                          <option value="Vegetable">Vegetable</option>
                          <option value="Fruit">Fruit</option>
                        </select>
                      </div>
                    </div>

                    <div className="col s12 m3">
                      <button className="btn waves-effect waves-light deep-purple accent-1" type="submit" name="action">Search
                        <i className="material-icons right">search</i>
                      </button>
                    </div>
                  </div>
                </form>
              </CollapsibleItem>
          </Collapsible>

          <div> 
            { loading && <p>{loading}</p> } {/* if loading, output loading */}
            { error && <p>{error}</p> } {/* if error, output error */}
            { response && <RecipeGrid recipes={response} /> } {/* if loaded, put data into recipe grid as a prop */}
          </div>

        </div>
      </div>
    )
  }
  
  export default AppRecipes