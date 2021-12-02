import React from 'react';
import './RecipeDetailContent.css';

function RecipeDetailContent(props)
{
    const { recipes, recipeId } = props;

    let name = "";
    let author = "";
    let socials = "";
    let difficulty = "";
    let cooktime = "";
    let preptime = "";
    let yields = "";
    let description = "";
    let image = "";
    let ingredients = [];
    let steps = [];

    recipes.forEach(recipe =>
    {
        if (recipe.id === recipeId)
        {
            name = recipe.name;
            author = recipe.author;
            socials = recipe.socials;
            difficulty = recipe.difficulty;
            cooktime = recipe.cooktime;
            preptime = recipe.preptime;
            yields = recipe.yields;
            description = recipe.description;
            image = recipe.image;
            ingredients = recipe.ingredients;
            steps = recipe.steps;
        }
    })
      
  
  return (
    <div className="RecipeDetailContent deep-purple-text container">
        <div className="row"></div>

        <div className="pink lighten-5 pad-left pad-bottom pad-right">
            <h3 className="pad-top">{name}</h3>
            <h6>Contributed by: <a href={socials}>{author}</a></h6>

            <br />
            <button className="btn small waves-effect waves-light deep-purple accent-1" type="button" name="print">Print
                    <i className="material-icons right">print</i>
            </button>
        </div>

        <div className="row"></div>

        <div className="row valign-wrapper pad-top pad-bottom pink lighten-5">
            <div className="col s4"><img className="responsive-img left-align" src={image} alt="Recipe result." /></div>
            <p className="col s8 flow-text">{description}</p>
        </div>

        <div className="row valign-wrapper pink lighten-5 flow-text">
            <p className="col s3 center-align"><strong>Difficulty :</strong> {difficulty}</p>
            <p className="col s3 center-align"><strong>Prep Time :</strong> {preptime}mins</p>
            <p className="col s3 center-align"><strong>Cook Time :</strong> {cooktime}mins</p>
            <p className="col s3 center-align"><strong>Serves :</strong> {yields}</p>
        </div>

        <div className="row valign-wrapper pink lighten-5 flow-text">
            <div className="col s4 right-border center-align">
                <h6 className="center-align lighter-text"><strong><u>Ingredients</u></strong></h6>
                <ul list-style-type="none">
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.name}>{ingredient.name} - {ingredient.quantity} {ingredient.measure} </li>
                    ))}
                </ul>
            </div>
            <div className="col s8 left-border pad-left">
                <h6 className="center-align lighter-text"><strong><u>Steps</u></strong></h6>
                <ul list-style-type="none">
                    {steps.map((step) => (
                        <li className="pad-left" key={step.number}>{step.number}. {step.step}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="row"></div>

    </div>
  )
}
  
export default RecipeDetailContent