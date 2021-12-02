import React, { useState } from 'react';
import ButcheryTable from './Images/recipe_icons/Carpentry/Level1/butchery_table_recipe.png';
import './styles.css';


const RecipeTile = (props) => {

    const Recipes = props.Recipes;

    return(
        <div className="RecipeTile">
                        {Recipes.map((Recipe) => {
                return(
                    <div className="MappedRecipes">
                        <h2>{Recipe.Name}</h2>
                        <img className="recipeIcon" src={Recipe.Icon} />
                        <img className="recipeImage" src={Recipe.RecipeImage} />
                        <h3>Description</h3>
                        <p>{Recipe.Description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RecipeTile;