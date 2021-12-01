import React, { useState } from 'react';
import ButcheryTable from './Images/recipe_icons/Carpentry/Level1/butchery_table_recipe.png';
import './styles.css';


const RecipeTile = (props) => {

    const Recipes = props.Recipes;
    const Name = Recipes[0].Name;
    const Description = Recipes[0].Description;

    return(
        <div className="RecipeTile">
            <h2>Crafting Recipes</h2>
            <h3>{Name}</h3>
            <h3>Description</h3>
            <p>{Description}</p>
        </div>
    )
}

export default RecipeTile;