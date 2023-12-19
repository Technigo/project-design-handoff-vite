import { AboutUs } from './components/AboutUs/AboutUs';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { PlayParkour } from './components/PlayParkour/PlayParkour';
import { WhyPlayParkour } from './components/WhyPlayParkour/WhyPlayParkour';
import { HowToPlayParkour } from './components/HowToPlayParkour/HowToPlayParkour';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Translate/i18next';


export const App = () => {

  
  

  return (
    <Router>
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={
          <>
                <PlayParkour />
                <HowToPlayParkour />
                <WhyPlayParkour />
                <AboutUs />
            </>
        } />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  );
};
