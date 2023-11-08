import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/Startpage';
import AboutPage from './components/AboutPage/AboutPage';
import WebFont from 'webfontloader';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Electrolize:regular', 'sans-serif']
      }
    });
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
}

export default App;



