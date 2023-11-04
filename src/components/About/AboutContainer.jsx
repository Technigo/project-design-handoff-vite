import imageAbout1 from "../../assets/images_mobile/imageAbout1.png";
import imageAbout2 from "../../assets/images_mobile/imageAbout2.png";
import imageAbout3 from "../../assets/images_mobile/imageAbout3.png";
import imageAbout4 from "../../assets/images_mobile/imageAbout4.png";
import "../css_card_styling/card.css"
import "../../pages/about.css"
import { H2_Headline } from "../Typography/H2_Headline";
import { AboutCard } from "./AboutCard";
import { ClientQuotes } from "./ClientQuotes";
import { useTranslation } from "react-i18next";




export const AboutContainer = () => {

    const { t } = useTranslation();
    let h2_headline_1 = t("aboutcontainer.h2.0");
    let h2_headline_2 = t("aboutcontainer.h2.1");

    const about_studio_info = [
        {
            id: "1b",
            image: imageAbout1,
            headline: "Our Mission",
            className: "aboutcard1",
            "text": [
                "At YOMY, we're dedicated to creating a sanctuary where individuals can find strength, balance, and inner harmony.",
                "Our online platform ensures you can embark on this transformative journey anytime, from the comfort of your own space.",
            ],
            studio_employee: "Agnes・Co-Founder",
            alt: "Joyful woman sitting cross-legged on lush grass beside a lake, framed by majestic mountains in the background.",
        },
        {
            id: "2b",
            image: imageAbout2,
            headline: "Our Philosophy",
            className: "aboutcard2",
            text: [
                "We believe that true wellness encompasses the integration of mind, body, and soul.",
                "Through the practices of yoga and meditation, we strive to empower individuals to discover their inner strength, achieve balance, and foster a deep sense of well-being.",
                "Your journey starts here, and it continues with you, wherever you are.",
            ],
            studio_employee: "Cecilia・Co-Founder",
            alt: "Woman outdoors, eyes closed, left hand placed on her heart",
        },
        {
            id: "3b",
            image: imageAbout3,
            headline: "Our Instructors",
            className: "aboutcard3",
            text: [
                "Our diverse team of experienced instructors brings a wealth of knowledge and passion to each class.",
                "With specialized expertise in various forms of yoga and meditation, they are dedicated to creating a nurturing environment for your personal growth and transformation.",
            ],
            studio_employee: "Linn・Team leader",
            alt: "Woman standing in a tree pose outdoors.",
        },
        {
            id: "4b",
            image: imageAbout4,
            headline: "Our Online Studio",
            className: "aboutcard4",
            text: [
                "Our online studio creates flexibility to practice from any location and fits into your schedule.",
                "Access a variety of classes and instructors and eliminate commuting time and expenses. Join a inclusive community that connecting practitioners worldwide.",
            ],
            studio_employee: "Lora Site・Manager",
            alt: "Woman seated by a lake, with her eyes closed and her hands in her lap.",
        }
    ];

    const client_quotes = [
        {
            id: "1c",
            text:
                `"The online platform provides flexibility, and the instructors radiate positivity and expertise. I've found a deeper sense of balance and strength in both my body and mind."`,
            name: "Emily",
            className: "aboutclient1",
        },
        {
            id: "2c",
            text:
                `"I've tried many yoga studios, but YOMY stands out. The instructors are truly passionate about what they do, and it shows in every class."`,
            name: "David",
            className: "aboutclient2",
        },
        {
            id: "3c",
            text:
                `"I can't recommend YOMY enough. The community is so welcoming, and the classes are diverse and challenging. This studio has helped me find a sense of calm and strength that I never thought possible."`,
            name: "Sarah",
            className: "aboutclient3",
        },
    ];

    return (
        <section className="card-page-container">
            <H2_Headline h2_headline={h2_headline_1} />
            <div className="about-card-container">
                <div className="card-container">
                    {about_studio_info.map((about_studio) => (
                        <div className="about-card card" key={about_studio.id}>
                            <AboutCard
                                headline={about_studio.headline}
                                articleImage={about_studio.image}
                                imageAltText={about_studio.alt}
                                studioCardText={about_studio.text}
                                studio_employee={about_studio.studio_employee}
                                className={about_studio.className}
                            />
                        </div>
                    ))
                    }
                </div>
                <div className="client-quote-wrapper">
                    <H2_Headline h2_headline={h2_headline_2} />
                    <div className="about-client-wrapper">
                        {client_quotes.map((client) => (
                            <div className="quote-wrapper" key={client.id}>
                                <ClientQuotes
                                    clientQuote={client.text}
                                    clientName={client.name}
                                    className={client.className}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
