import React, { useState } from 'react';
import RecipeTile from './RecipeTile';
import './styles.css';


const SkillTile = (props) => {
    const header = props.header;
    const description = props.description;
    const ImageSrc = props.ImageSrc;
    const display = props.display;
    const Recipes = props.Recipes;


    function Practice(){
        console.log(Recipes);
    }


    return(
        <div className="SkillTile">
            <h2>{header}</h2>
            <img style={{display: display}}src={ImageSrc} />
            <p>{description}</p>
            <RecipeTile Recipes={Recipes}/>
            <button onClick={Practice}>SkillTilePractice</button>
        </div>
    )
}

export default SkillTile;