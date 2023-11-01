import imageHome1 from "../../assets/images_mobile/imageHome1.svg";
import imageHome2 from "../../assets/images_mobile/imageHome2.svg";
import imageHome3 from "../../assets/images_mobile/imageHome3.svg";
import imageHome4 from "../../assets/images_mobile/imageHome4.svg";
import "../css_card_styling/card.css"
import { H2_Headline } from "../Typography/H2_Headline";
import { HomeCard } from "./HomeCard";




export const HomeContainer = () => {
    let h2_headline = "Your Instructors - About the Journey";

    const instructor_home_info = [
        {
            id: "1a",
            image: imageHome1,
            className: "homecard1",
            text: [
                `"The dance of breath and movement is where magic happens. In each pose, I discovered a piece of my soul. Join me, let's move, let's breathe, and let's find our own unique rhythm."`,
                "Lisa ・Ashtanga"
            ],
            alt: 'Woman in a one-legged bridge yoga pose',
        },
        {
            id: "2a",
            image: imageHome2,
            className: "homecard2",
            text: [
                `"Meditation is the art of unveiling our true selves. Through the chaos of life, I found stillness. Through stillness, I found strength. Join me, and let's embark on this sacred journey together."`,
                "Arlette ・Meditation"
            ],
            alt: 'Close-up of a woman in a pose with her palms together and eyes closed',
        },
        {
            id: "3a",
            image: imageHome3,
            className: "homecard3",
            text: [
                `"Life's greatest gift is the present moment. Through meditation, I found the gateway to inner peace. Join me, and let's embrace the beauty of now, together."`,
                "Kori ・Meditation"
            ],
            alt: 'Woman stretching her arms with her hands together and leaning her upper body backward',
        },
        {
            id: "4a",
            image: imageHome4,
            className: "homecard4",
            text: [
                `"Yoga is a mirror reflecting our inner world. Through years of practice, I've learned that strength arises from vulnerability. Come, let's discover the power within you."`,
                "Anna・Yin"
            ],
            alt: 'Woman in a modified Warrior II yoga pose, one arm resting on a bent knee and the other arm extended to the side',
        }
    ];


    return (
        <div className="card-page-container">
            <H2_Headline h2_headline={h2_headline} />
            <div className="card-container">
                {instructor_home_info.map((instructor_home) => (
                    <div
                        className="home-card-wrapper"
                        key={instructor_home.id}
                    >
                        <HomeCard
                            articleImage={instructor_home.image}
                            imageAltText={instructor_home.alt}
                            instructorCardText={instructor_home.text}
                            className={instructor_home.className}
                        />
                    </div>
                ))
                }
            </div>
        </div>
    )
}
