import React from 'react';
import TeamMemberCard from './TeamMemberCard'; 


const membersData = [
    {
        name: "Kaelana Bambridge",
        description: "Kaelana is a long standing member of Legs pun intended, very fashionable and voted prettiest female in all of Tera. She is our marketing specialist.",
        image: "'../../assets/kaelana.png'"
    },
    {
        name: "Marcus Ax",
        description: "Chief Decorator Extraordinaire. Thanks to Marcus's efforts and patience any headquarters we move to becomes a sublime resting area.",
        image: "'../../assets/Marcus.png'"
    },
    {
        name: "Delisha Mathis",
        description: "Most gracious helpful Craft Master General. Deli is always willing to give a hand.",
        image: "'../../assets/Delisha.png'"
    },
    {
        name: "Moxxi Read",
        description: "Sleepy Helper and Headquarters defender.",
        image: "'../../assets/MoxxiRead.png'"
    },
    {
        name: "Chevalier Noir",
        description: "Chief Officer of Cheerfulness. She keeps the office positive. Pet her for good luck.",
        image: "'../../assets/Chevalier.png'"
    },
    {
        name: "Aliasse Thassalia",
        description: "Second in command. Ali is always there to help with a smile and her spiffing looks.",
        image: "'../../assets/Aliasse.png'"
    },
    {
        name: "Moxxi Onefang",
        description: "Panic cat, dizzy, dozy and forgetful so dont forget to remind her of things that need to be done.",
        image: "'../../assets/MoxxiOnefang.png'"
    },
    {
        name: "Feira",
        description: "Our Extraordinary chef and Barista, keeps us at our peak with her delicious creations.",
        image: "'../../assets/Feira.png'"
    },
];

function TeamMemberGrid() {
    return (
        <div className="members-grid">
            {membersData.map(member => (
                <TeamMemberCard 
                    key={member.name}
                    name={member.name}
                    description={member.description}
                    image={member.image}
                />
            ))}
        </div>
    );
}

export default TeamMemberGrid;
