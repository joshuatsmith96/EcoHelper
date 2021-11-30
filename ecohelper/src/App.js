import React from 'react';
import Home from './components/Home';
import carpentryIcon from './components/Images/carpentry_icon.png';
import './App.css'

function App() {

  const Skills = [
    "Carpentry",
    "Masonry",
    "Engineering",
    "Campfire Cooking",
  ]

  const Descriptions = [
    "Description for the Carpentry Skill",
    "Description for the Masonry Skill",
    "Description for the Engineering Skill",
    "Description for the Campfire Cooking skill",
  ]

  const ImageSrc = [
    {carpentryIcon}
  ]

  return (
    <div className="App">
      <div className="bg_image">
      </div>
      <div className="HomeContainer">
        <Home Skills = {Skills} Descriptions = {Descriptions} ImageSrc={ImageSrc}/>
      </div>
    </div>
  );
}

export default App;
