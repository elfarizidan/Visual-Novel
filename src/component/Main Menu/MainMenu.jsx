import React from 'react';
import './MainMenu.css'; 
import Hana from '../../assets/Character/Hana.png'

const MainMenu = () => {
  const handleStart = () => {
    console.log("Game started!");
  };

  const handleIntroduction = () => {
    console.log("Introduction shown!");
  };

  return (
    <div className="main-menu">
      <div className="background"></div>
      <div className="content">
        <h1 className="title">My Visual Novel</h1>
        <div className="menu-options">
          <button className="menu-button" onClick={handleStart}>
            Start
          </button>
          <button className="menu-button" onClick={handleIntroduction}>
            Introduction
          </button>
        </div>
        <img src={Hana} alt="Character" className="character-image" />
      </div>
    </div>
  );
};

export default MainMenu;
