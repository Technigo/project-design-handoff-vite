import { create } from 'zustand';

const useContentStore = create((set) => ({
    textContent: [
        {
            title: "Breakfast",
            description: "Start your day with our breakfast buffet starting from 5:00 AM, including a juice bar and a Protein Bar for post-workout energy.",
        },

        // Add more text content objects as needed
    ],
    imageContent: {
        imageUrl: "https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/jlz1000_88870_photo-realistic_image_of_a_gym_with_a_lounge_area_ec9e24eb-e19b-46e7-8449-97ca3e3d8892_upscayl_4x_realesrgan-x4plus-anime.png?v=1698691615805",
    },

}));

export { useContentStore };
