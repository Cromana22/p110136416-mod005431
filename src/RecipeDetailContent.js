import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="RecipeDetailContent">
        <div id="no-print" className="deep-purple-text container">
            <div className="row"></div>

            <div className="pink lighten-5 pad-left pad-bottom pad-right">
                <h3 className="pad-top">{name}</h3>
                <h6>Contributed by: <a href={socials}>{author}</a></h6>
                <br />
                <button className="btn small waves-effect waves-light deep-purple accent-1" type="button" name="print" onClick={() => window.print()}>Print
                        <i className="material-icons right">print</i>
                </button>
                <span> </span>
                <Link to="/recipes" className="btn small waves-effect waves-light">Back</Link>
            </div>

            <div className="row"></div>

            <div className="row pad-top pad-bottom pink lighten-5">
                <div className="col s12 m4"><img className="responsive-img left-align" src={image} alt="Recipe result." /></div>
                <p className="col s12 m8 flow-text">{description}</p>
            </div>

            <div className="row pink lighten-5 flow-text">
                <p className="col s6 m3 center-align"><strong>Difficulty :</strong> {difficulty}</p>
                <p className="col s6 m3 center-align"><strong>Prep Time :</strong> {preptime}mins</p>
                <p className="col s6 m3 center-align"><strong>Cook Time :</strong> {cooktime}mins</p>
                <p className="col s6 m3 center-align"><strong>Serves :</strong> {yields}</p>
            </div>

            <div className="row pink lighten-5 flow-text">
                <div className="col s12 m4 right-border center-align">
                    <h6 className="center-align lighter-text"><strong><u>Ingredients</u></strong></h6>
                    <ul list-style-type="none">
                        {ingredients.map((ingredient) => (
                            <li>{ingredient.name} - {ingredient.quantity} {ingredient.measure} </li>
                        ))}
                    </ul>
                </div>
                <div className="col s12 m8 left-border pad-left">
                    <h6 className="center-align lighter-text"><strong><u>Steps</u></strong></h6>
                    <ol>
                        {steps.map((step) => (
                            <li className="pad-left" key={step.number}>{step.step}</li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="row"></div>
        </div>

        <div id="no-screen" className="container">
            <h3 className="center-align">{name}</h3>
            <h6 className="center-align">Contributed by: {author} ({socials})</h6>
            <br />
            <div className="row" name="image">
                <div className="col s3"></div>
                <div className="container col s6">
                    <img className="responsive-img center-align" src={image} alt="Recipe result." />
                </div>
                <div className="col s3"></div>
            </div>
            <br />
            <div className="flow-text">{description}</div>
            <br />
            <div className="row valign-wrapper flow-text center-align">
                <p className="col"><strong>Difficulty :</strong> {difficulty}</p>
                <p className="col"><strong>Prep Time :</strong> {preptime}mins</p>
                <p className="col"><strong>Cook Time :</strong> {cooktime}mins</p>
                <p className="col"><strong>Serves :</strong> {yields}</p>
            </div>

            <div className="flow-text">
                <h6><u>Ingredients</u></h6>
                <ul list-style-type="disc">
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.name}>{ingredient.name} - {ingredient.quantity} {ingredient.measure} </li>
                    ))}
                </ul>
            </div>
            <br />
            <div className="flow-text">
                <h6><u>Steps</u></h6>
                <ul list-style-type="none">
                    {steps.map((step) => (
                        <li className="pad-left" key={step.number}>{step.number}.  {step.step}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
  
export default RecipeDetailContent