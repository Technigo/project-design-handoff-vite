import React from 'react';
import { TripleSlideshow } from './TripleSlideshow'; // Import the TripleSlideshow component
import memberCardsData from './MemberCardsData.json';

export const Member = () => {
    return (
        <div className="bg-header bg-cover h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/jlz1000_88870_photo-realistic_image_of_a_gym_with_a_lounge_area_ec9e24eb-e19b-46e7-8449-97ca3e3d8892_upscayl_4x_realesrgan-x4plus-anime.png?v=1698691615805)` }}>
            <h1 className="text-white text-6xl text-center mb-16 pt-4">Become a Member</h1>
            <TripleSlideshow data={memberCardsData} /> {/* Use the TripleSlideshow component here */}
        </div>
    );
};

