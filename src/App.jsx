import React from 'react';
import WelcomePage from './Components/WelcomePage';
import OurYoga from './Components/OurYoga';
import Boxes from './Components/Boxes';
import AboutUs from './Components/AboutUs';
import RecentPosts from './Components/RecentPosts';
import InTouch from './Components/InTouch';
import Footer from './Components/Footer';


export const App = () => {
  return (
    <div>
      <WelcomePage />
      <OurYoga />
      <Boxes />
      <AboutUs />
      <RecentPosts />
      <InTouch />
      <Footer />
    </div>
  );
};


