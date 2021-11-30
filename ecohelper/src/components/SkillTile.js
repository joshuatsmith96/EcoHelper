import React, { useState } from 'react';
import RecipeTile from './RecipeTile';
import './styles.css';


const SkillTile = (props) => {
    const header = props.header;
    const description = props.description;
    const ImageSrc = props.ImageSrc;
    const display = props.display;

    return(
        <div className="SkillTile">
            <h2>{header}</h2>
            <img style={{display: display}}src={ImageSrc} />
            <p>{description}</p>
        </div>
    )
}

export default SkillTile;