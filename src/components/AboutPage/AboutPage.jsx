import React from 'react';
import HeroPhoto from './HeroPhoto';
import Description from './Description';
import TeamMembers from './TeamMembers';
import ContactPrompt from './ContactPrompt';
import Adresses from './Adresses';
import NavBar from './NavBar';
import Footer from '../Footer';


const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <HeroPhoto />
            <Description />
            <TeamMembers />
            <ContactPrompt />
            <Adresses />
            <Footer />
        </div>
    );
};

export default AboutPage;
