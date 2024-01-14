import React from 'react';
import WelcomePage from './WelcomePage';
import Offerings from './Offerings'
import OurYoga from './OurYoga';
import Boxes from './Boxes';
import NewYoga from './NewYoga';
import AboutUs from './AboutUs';
import RecentPosts from './RecentPosts';
import InTouch from './InTouch';

const StartPage = () => {
  return (
    <div>
      <WelcomePage />
      <Offerings />
      <OurYoga />
      <Boxes />
      <NewYoga />
      <AboutUs />
      <RecentPosts />
      <InTouch />
    </div>
  );
};

export default StartPage;
