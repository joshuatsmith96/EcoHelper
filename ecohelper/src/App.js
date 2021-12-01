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
      id: "FE" + new Date().getTime(),
      Name: "Butchery Table",
      Description: "Butchery tables are crafting tables used by Butchers and Hunters. It is used to process and harvest animals.",
      Photo: null
    },
    {
      id: "FE" + new Date().getTime()+1,
      Name: "Hewn Chair",
      Description: "To sit on?",
      Photo: HewnChair
    }
  ]

  const MasonryRecipes = [
    {
      id: "FE" + new Date().getTime(),
      Name: "Mortared Stone",
      Description: "This and that",
      Photo: null
    },
    {
      id: "FE" + new Date().getTime()+1,
      Name: "Kiln",
      Description: "To smelt things?",
      Photo: null
    }
  ]

  const EngineeringRecipes = [
    {
      id: "FE" + new Date().getTime(),
      Name: "Stone Road Tool",
      Description: "To Make Roads",
      Photo: null
    },
    {
      id: "FE" + new Date().getTime()+1,
      Name: "Wind Mill",
      Description: "For Power.",
      Photo: null
    }
  ]

  const CampfireCookingRecipes = [
    {
      id: "FE" + new Date().getTime(),
      Name: "Salad",
      Description: "Some delicious edible (maybe) leaves.",
      Photo: null
    },
    {
      id: "FE" + new Date().getTime()+1,
      Name: "Burger",
      Description: "Delicious burger that isn't really even in the game. Just some dummy text.",
      Photo: null
    }
  ]

  const Recipes = [{
    "1": CarpentryRecipes,
    "2": MasonryRecipes,
    "3": EngineeringRecipes,
    "4": CampfireCookingRecipes
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
