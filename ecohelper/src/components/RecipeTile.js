import React, { useState } from 'react';
import ButcheryTable from './Images/recipe_icons/Carpentry/Level1/butchery_table_recipe.png';
import './styles.css';


const RecipeTile = (props) => {
    const Recipes = props.Recipes;

    function Practice() {
        console.log(Recipes[1]);
    }

    return(
        <div className="RecipeTile">
            <h2>Crafting Recipes</h2>
            <h3>{Recipes[1].Name}</h3>
            <img src={Recipes[1].Photo} />
            <h3>Description</h3>
            <p>{Recipes[1].Description}</p>
            <button onClick={Practice}>Practice</button>
        </div>
    )
}

export default RecipeTile;