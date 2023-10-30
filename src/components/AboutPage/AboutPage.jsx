import React from 'react';
import HeroPhoto from './HeroPhoto';
import Description from './Description';
import TeamMemberCard from './TeamMemberCard';
import ContactPrompt from './ContactPrompt';
import AddressCard from './AddressCard';
import NavBar from './NavBar';
import Footer from '../Footer';

const AboutPage = () => {
    return (
        <div>
            <NavBar />
            <HeroPhoto />
            <Description />
            <TeamMemberCard />
            <ContactPrompt />
            <AddressCard />
            <Footer />
        </div>
    );
};

export default AboutPage;
