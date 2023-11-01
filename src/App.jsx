import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/Startpage';
import AboutPage from './components/AboutPage/AboutPage';
import WebFont from 'webfontloader';

function App() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Electrolize:regular', 'sans-serif']
          }
        });
      }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;


