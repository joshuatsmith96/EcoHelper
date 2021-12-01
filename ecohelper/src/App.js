import React from 'react';
import Home from './components/Home';
import carpentryIcon from './components/Images/carpentry_icon.png';
import masonryIcon from './components/Images/masonry_icon.png';
import basicEngineeringIcon from './components/Images/basic_engineering_icon.png';
import campfireCooking from './components/Images/campfire_cooking_icon.png';
import HewnChair from './components/Images/recipe_icons/Carpentry/Level1/hewn_chair_recipe.png';
import './App.css'

function App() {

  const Skills = [
    "Carpentry",
    "Masonry",
    "Engineering",
    "Campfire Cooking",
  ]

  const Descriptions = [
    "Carpenters use harvested logs to craft a variety of useful products. Wood is an excellent source of building materials and furniture for homes.",
    "Rocks and mortar can provide a suitable building material alternative to wood. Level by crafting related recipes.",
    "Basic Engineering allows for the easier construction of roads and early forms of mechanical power. Level by crafting related recipes.",
    "Advanced techniques for producing food over a campfire with a little less burned and a little more golden brown. Level by crafting campfire recipes.",
  ]

  const CarpentryRecipes = [
    {
      Name: "Butchery Table",
      Description: "Butchery tables are crafting tables used by Butchers and Hunters. It is used to process and harvest animals.",
      Photo: null
    },
    {
      Name: "Hewn Chair",
      Description: "To sit on?",
      Photo: HewnChair
    }
  ]

  const MasonryRecipes = [
    {
      Name: "Mortared Stone",
      Description: "This and that",
      Photo: null
    },
    {
      Name: "Kiln",
      Description: "To smelt things?",
      Photo: null
    }
  ]

  const EngineeringRecipes = [
    {
      Name: "Stone Road Tool",
      Description: "To Make Roads",
    },
    {
      Name: "Wind Mill",
      Description: "For Power."
    }
  ]

  const Recipes = [{
    "1": CarpentryRecipes,
    "2": MasonryRecipes,
    "3": EngineeringRecipes
  }];

  const ImageSrc = [
    {
    photo: carpentryIcon
    //<img src={ImageSrc[0].photo} />
    },
    {
    photo: masonryIcon
    },
    {
      photo: basicEngineeringIcon
    },
    {
      photo: campfireCooking
    }
]

  return (
    <div className="App">
      <div className="bg_image">
      </div>
      <div className="HomeContainer">
        <Home Skills = {Skills} Descriptions = {Descriptions} ImageSrc={ImageSrc} Recipes={Recipes}/>
      </div>
    </div>
  );
}

export default App;
