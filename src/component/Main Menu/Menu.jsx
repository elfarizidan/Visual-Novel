import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Chara from '../../assets/Kawai Girl.png';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <div className="content">
        <div className="character">
          <img src={Chara} alt="Character" />
        </div>
        <button>
          <Link to="/chapter1">Start</Link>
        </button>
      </div>
    </div>
  );
};

export default MainMenu;
