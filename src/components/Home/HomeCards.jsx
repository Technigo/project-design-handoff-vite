import imageHome1 from "../../../public/images/imageHome1.png";
import imageHome2 from "../../../public/images/imageHome2.png";
import imageHome3 from "../../../public/images/imageHome3.png";
import imageHome4 from "../../../public/images/imageHome4.png";
import { H2_Headline } from "../Typography/H2_Headline";
import { HomeCard } from "./HomeCard";




export const HomeCards = () => {
    let h2_headline_2 = "Your Instructors - About the Journey";

    const instructor_home_info = [
        {
            id: "1a",
            image: imageHome1,
            text: [
                "The dance of breath and movement is where magic happens. In each pose, I discovered a piece of my soul. Join me, let's move, let's breathe, and let's find our own unique rhythm.", "Lisa ・Ashtanga"
            ],
            alt: 'Woman in a one-legged bridge yoga pose',
        },
        {
            id: "2a",
            image: imageHome2,
            text: [
                "Meditation is the art of unveiling our true selves. Through the chaos of life, I found stillness. Through stillness, I found strength. Join me, and let's embark on this sacred journey together.", "Arlette ・Meditation"
            ],
            alt: 'Close-up of a woman in a pose with her palms together and eyes closed',
        },
        {
            id: "3a",
            image: imageHome3,
            text: [
                "Life's greatest gift is the present moment. Through meditation, I found the gateway to inner peace. Join me, and let's embrace the beauty of now, together.", "Kori ・Meditation"
            ],
            alt: 'Woman stretching her arms with her hands together and leaning her upper body backward',
        },
        {
            id: "4a",
            image: imageHome4,
            text: [
                "Yoga is a mirror reflecting our inner world. Through years of practice, I've learned that strength arises from vulnerability. Come, let's discover the power within you.", "Anna・Yin"
            ],
            alt: 'Woman in a modified Warrior II yoga pose, one arm resting on a bent knee and the other arm extended to the side',
        }
    ];

    return (
        <div className="home-card-container">
            <H2_Headline h2_headline={h2_headline_2} />
            {instructor_home_info.map((instructor_home) => (
                <div className="home-card-wrapper" key={instructor_home.id}>
                    <HomeCard
                        articleImage={instructor_home.image}
                        imageAltText={instructor_home.alt}
                        instructorCardText={instructor_home.text}
                    />
                </div>
            ))
            }
        </div>
    )
}
