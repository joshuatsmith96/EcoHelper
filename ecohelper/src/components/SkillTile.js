import React, { useState } from 'react';
import './styles.css';


const SkillTile = (props) => {

    const header = props.header;
    const description = props.description;
    const ImageSrc = props.ImageSrc;

    return(
        <div className="SkillTile">
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
    )
}

export default SkillTile;