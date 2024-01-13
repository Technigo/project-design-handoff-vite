import React from 'react';
import WelcomePage from './WelcomePage';
import OurYoga from './OurYoga';
import Boxes from './Boxes';
import AboutUs from './AboutUs';
import RecentPosts from './RecentPosts';
import InTouch from './InTouch';

const StartPage = () => {
  return (
    <div>
      <WelcomePage />
      <OurYoga />
      <Boxes />
      <AboutUs />
      <RecentPosts />
      <InTouch />
    </div>
  );
};

export default StartPage;
