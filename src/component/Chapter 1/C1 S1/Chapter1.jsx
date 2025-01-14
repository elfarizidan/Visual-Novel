import React, { useState, useEffect } from 'react';
import './Chapter1.css';
import Chara from '../../../assets/Kawai Girl.png';

const Chapter1 = () => {
  const [showContent, setShowContent] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const textList = [
    "Hah, makhluk apa ini? Mengapa dia berbeda dengan makhluk yang ada di sini?",
    "Aku tidak pernah melihat sesuatu seperti ini sebelumnya. Siapa kamu?",
    "Ayo jelajahi tempat ini bersama dan temukan jawabannya!"
  ];

  useEffect(() => {
    setShowContent(true); // Fade in content when Chapter 1 is mounted
  }, []);

  const handleTextChange = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
  };

  return (
    <div className="page-1">
      <div className="content" style={{ opacity: showContent ? 1 : 0 }}>
        <div className="character">
          <img
            src={Chara}
            alt="Character"
            style={{ opacity: showContent ? 1 : 0 }}
          />
        </div>
        <div className="text-box" style={{ opacity: showContent ? 1 : 0 }}>
          <div className="chara-name">
            <h3>Anime Voice</h3>
          </div>
          <div className="convo-text">
            <p>{textList[textIndex]}</p>
          </div>
        </div>
        <button onClick={handleTextChange} className="change-text-btn">
          Next
        </button>
      </div>
    </div>
  );
};

export default Chapter1;
