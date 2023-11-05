import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import { AboutUs } from "./components/aboutUs.jsx";
import { NavBar } from "./components/navBarlist.jsx";
// import { OurYoga } from "./components/ouryoga.jsx";
// import { ThreeCards } from "./components/threeCards.jsx";
// import { RecentPost } from "./components/recentPost.jsx";
// import { StayInTouch } from "./components/stayinTouch.jsx";
// import { ContactFootNote } from "./components/contactFootNote.jsx";
// import { LayoutWithoutNavBar } from "./components/layoutwithoutNavBar.jsx";
// import { AboutUsImage } from "./components/aboutUsImage.jsx";
// import { MissionValues } from "./components/missionValues.jsx";
// import { OurStory } from "./components/ourStory.jsx";
// import { OurStudio } from "./components/ourStudio.jsx";
// import { WeHere } from "./components/weHere.jsx";
// import { HomePage } from "./components/homePage.jsx";
// import { NotFoundPage } from "./components/notFoundPage.jsx";
import { AboutUsIndex } from "./components/aboutUsIndex.jsx";
import { HomePageIndex } from "./components/homePageIndex.jsx";

export const App = () => {
  return (
    
      <BrowserRouter>
        <NavBar />
        <Routes>
          
          <Route path="/">
            <Route path="/" element={<HomePageIndex />}/>
          </Route> 
          <Route path="/AboutUs" element={<AboutUsIndex />}>
      
          </Route>
          
        
        {/* <NavBar />
        <HomePage />
        <AboutUs />
        <OurYoga />
        <ThreeCards />
        <RecentPost />
        <StayInTouch />
        <ContactFootNote /> */}
        
        </Routes>
      </BrowserRouter>
      
    
  );
};

