import imageAbout1 from "../../../public/images/imageAbout1.png";
import imageAbout2 from "../../../public/images/imageAbout2.png";
import imageAbout3 from "../../../public/images/imageAbout3.png";
import imageAbout4 from "../../../public/images/imageAbout4.png";
import { H2_Headline } from "../Typography/H2_Headline";
import { AboutCard} from "./AboutCard";




export const AboutContainer = () => {
    let h2_headline = "About YOMY";

    const about_studio_info = [
        {
            id: "1b",
            image: imageAbout1,
            "text": [
                "Our Mission",
                "At YOMY, we're dedicated to creating a sanctuary where individuals can find strength, balance, and inner harmony.",
                "Our online platform ensures you can embark on this transformative journey anytime, from the comfort of your own space.",
                "Agnes・Co-Founder"
            ],
            alt: "Joyful woman sitting cross-legged on lush grass beside a lake, framed by majestic mountains in the background.",
        },
        {
            id: "2b",
            image: imageAbout2,
            text: [
                "Our Philosophy",
                "We believe that true wellness encompasses the integration of mind, body, and soul.", 
                "Through the practices of yoga and meditation, we strive to empower individuals to discover their inner strength, achieve balance, and foster a deep sense of well-being.", 
                "Your journey starts here, and it continues with you, wherever you are.", 
                "Cecilia・Co-Founder"
            ],
            alt: "Woman outdoors, eyes closed, left hand placed on her heart",
        },
        {
            id: "3b",
            image: imageAbout3,
            text: [
                "Our Instructors",
                "Our diverse team of experienced instructors brings a wealth of knowledge and passion to each class.",
                "With specialized expertise in various forms of yoga and meditation, they are dedicated to creating a nurturing environment for your personal growth and transformation.", 
                "Linn・Team leader"
            ],
            alt: "Woman standing in a tree pose outdoors.",
        },
        {
            id: "4b",
            image: imageAbout4,
            text: [
                "Our Online Studio",
                "Our online studio creates flexibility to practice from any location and fits into your schedule.",
                "Access a variety of classes and instructors and eliminate commuting time and expenses. Join a inclusive community that connecting practitioners worldwide.", 
                "Lora Site・Manager",
            ],
            alt: "Woman seated by a lake, with her eyes closed and her hands in her lap.",
        }
    ];

    return (
        <div className="about-card-container">
            <H2_Headline h2_headline={h2_headline} />
            {about_studio_info.map((about_studio) => (
                <div className="about-card-wrapper" key={about_studio.id}>
                    <AboutCard
                        articleImage={about_studio.image}
                        imageAltText={about_studio.alt}
                        studioCardText={about_studio.text}
                    />
                </div>
            ))
            }
        </div>
    )
}
