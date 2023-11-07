import { useTranslation } from "react-i18next";
import imageHome1 from "../../assets/images_mobile/imageHome1.png";
import imageHome2 from "../../assets/images_mobile/imageHome2.png";
import imageHome3 from "../../assets/images_mobile/imageHome3.png";
import imageHome4 from "../../assets/images_mobile/imageHome4.png";
import "../css_card_styling/card.css";
import { H2_Headline } from "../Typography/H2_Headline";
import { HomeCard } from "./HomeCard";

export const HomeContainer = () => {
    const { t } = useTranslation();
    let h2_headline = t("homecontainer.h2");

    const instructor_home_info = [
        {
            id: "1a",
            image: imageHome1,
            className: "homecard1",
            text: [
                t("homecontainer.instructors.instructor1.0"),
                t("homecontainer.instructors.instructor1.1")
            ],
            alt: 'Woman in a one-legged bridge yoga pose',
        },
        {
            id: "2a",
            image: imageHome2,
            className: "homecard2",
            text: [
                t("homecontainer.instructors.instructor2.0"),
                t("homecontainer.instructors.instructor2.1")
            ],
            alt: 'Close-up of a woman in a pose with her palms together and eyes closed',
        },
        {
            id: "3a",
            image: imageHome3,
            className: "homecard3",
            text: [
                t("homecontainer.instructors.instructor3.0"),
                t("homecontainer.instructors.instructor3.1")
            ],
            alt: 'Woman stretching her arms with her hands together and leaning her upper body backward',
        },
        {
            id: "4a",
            image: imageHome4,
            className: "homecard4",
            text: [
                t("homecontainer.instructors.instructor4.0"),
                t("homecontainer.instructors.instructor4.1")
            ],
            alt: 'Woman in a modified Warrior II yoga pose, one arm resting on a bent knee and the other arm extended to the side',
        }
    ];

    return (
        <section className="card-page-container">
            <H2_Headline h2_headline={h2_headline} />
            <div className="card-container">
                {instructor_home_info.map((instructor_home) => (
                    <div
                        className="home-card card"
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
        </section>
    )
}
