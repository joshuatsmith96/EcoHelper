import React, { useState } from 'react';
import SkillTile from './SkillTile';
import './styles.css';
import MainImage from './Images/recipe_icons/Carpentry/Level1/main_image.png';


const Home = (props) => {

    const Skills = props.Skills;
    const Descriptions = props.Descriptions;
    const ImageSrc = props.ImageSrc;
    const Recipes = props.Recipes;

    const homeDescription = [
        {
            id: "FE" + new Date().getTime(),
            Name: "What is Eco?",
            Description: "Eco is a community-based game; the players develop laws, government, and an economy to determine the success of their world.",
            Icon: MainImage,
            RecipeImage: null
        }
    ]

    const [description, setDescription] = useState("Click on the buttons above to view the different skills.");
    const [header, setHeader] = useState("Welcome to the Eco description and skill recipes application!");
    const [image, setImage] = useState();
    const [display, setDisplay] = useState("none");
    const [recipe, setRecipe] = useState(homeDescription);

    function clickHandler(e){
        const id = e.target.value - 1
        console.log(id)
        setHeader(Skills[id])
        setDescription(Descriptions[id])
        setImage(ImageSrc[id].photo)
        setDisplay("block");
        setRecipe(Recipes[0][id+1])
        console.log(homeDescription);
        console.log(Recipes[0][1])
    }

    return(
        <div className="Home">
            <h1>Eco Descriptions and Skill Recipes</h1>
            <div className="buttonContainer">
                <button onClick={clickHandler} value={1}>Carpentry</button>
                <button onClick={clickHandler} value={2}>Masonry</button>
                <button onClick={clickHandler} value={3}>Engineering</button>
                <button onClick={clickHandler} value={4}>Campfire Cooking</button>
                <p></p>
            </div>
            <SkillTile header={header} description={description} ImageSrc={image} display={display} Recipes={recipe}/>
        </div>
    )
}

export default Home;