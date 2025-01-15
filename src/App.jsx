import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainMenu from './component/Main Menu/MainMenu';
import Introduction from './component/Introduction/Introduction';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mainmenu" element={<MainMenu />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
};

export default App;
