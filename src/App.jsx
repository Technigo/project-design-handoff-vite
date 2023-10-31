import { AboutUs } from './components/AboutUs/AboutUs';
import { AboutUsPage } from './components/AboutUsPage/AboutUsPage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { PlayParkour } from './components/PlayParkour/PlayParkour';
import { WhyPlayParkour } from './components/WhyPlayParkour/WhyPlayParkour';
import { HowToPlayParkour } from './components/HowToPlayParkour/HowToPlayParkour';

export const App = () => {
  return (
  <div>
    <Header/>
    <PlayParkour/>
    <HowToPlayParkour/>
    <WhyPlayParkour/>
    <AboutUs/>
    <Footer/>
  </div>
  );
};
