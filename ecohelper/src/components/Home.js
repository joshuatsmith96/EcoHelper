import React, { useState } from 'react';
import SkillTile from './SkillTile';
import './styles.css';

const Home = (props) => {

    const Skills = props.Skills;
    const Descriptions = props.Descriptions;
    const ImageSrc = props.ImageSrc;

    const [description, setDescription] = useState("Click on the buttons above to view the different skills.");
    const [header, setHeader] = useState("Welcome to the Eco description and skill recipes application!");
    const [image, setImage] = useState();

    function clickHandler(e){
        const id = e.target.value - 1
        console.log(id)
        setHeader(Skills[id])
        setDescription(Descriptions[id])
        setImage(ImageSrc[id])
    }

    return(
        <div className="Home">
            <h1>Eco Descriptions and Skill Recipes</h1>
            <div>
                <button onClick={clickHandler} value={1}>Carpentry</button>
                <button onClick={clickHandler} value={2}>Masonry</button>
                <button onClick={clickHandler} value={3}>Engineering</button>
                <button onClick={clickHandler} value={4}>Campfire Cooking</button>
            </div>
            <SkillTile header={header} description={description} ImageSrc={ImageSrc}/>
        </div>
    )
}

export default Home;