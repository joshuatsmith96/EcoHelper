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
                        <p>{Recipe.Description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default RecipeTile;