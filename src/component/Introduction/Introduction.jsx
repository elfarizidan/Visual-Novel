import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Introduction.css';

const Introduction = () => {
  const navigate = useNavigate();

  const handleBackToMenu = () => {
    navigate('/'); 
  };

  return (
    <div className="introduction">
      <div className="background"></div>
      <div className="content">
        <h1 className="title">Introduction</h1>
        <p className="description">
          Welcome to My Visual Novel! Here you can learn about the story, characters, and world.
        </p>
        <button className="menu-button" onClick={handleBackToMenu}>
          Back to Menu
        </button>
      </div>
    </div>
  );
};

export default Introduction;
