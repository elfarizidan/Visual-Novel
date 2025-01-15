import React from 'react';
import { Link } from "react-router-dom";
import './MainMenu.css'; 
import Hana from '../../assets/Character/Hana.png'

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="background"></div>
      <div className="content">
        <h1 className="title">My Visual Novel</h1>
        <div className="menu-options">
          <button className="menu-button">
            Start <Link to = '../../Component/Chapter 1/Chapter1.jsx'/>
          </button>
          <button className="menu-button" onClick={handleIntroduction}>
            Introduction<Link to = '../../Component/Chapter 1/Chapter1.jsx'/>
          </button>
        </div>
        <img src={Hana} alt="Character" className="character-image" />
      </div>
    </div>
  );
};

export default MainMenu;
