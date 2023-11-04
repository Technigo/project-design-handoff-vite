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
            headline: t("aboutcontainer.about_studio.headline.0"),
            className: "aboutcard1",
            text: [
                t("aboutcontainer.about_studio.about1.0"),
                t("aboutcontainer.about_studio.about1.1"),
            ],
            studio_employee: t("aboutcontainer.studio_employee.0"),
            alt: "Joyful woman sitting cross-legged on lush grass beside a lake, framed by majestic mountains in the background.",
        },
        {
            id: "2b",
            image: imageAbout2,
            headline: t("aboutcontainer.about_studio.headline.1"),
            className: "aboutcard2",
            text: [
                t("aboutcontainer.about_studio.about2.0"),
                t("aboutcontainer.about_studio.about2.1"),
            ],
            studio_employee: t("aboutcontainer.studio_employee.1"),
            alt: "Woman outdoors, eyes closed, left hand placed on her heart",
        },
        {
            id: "3b",
            image: imageAbout3,
            headline: t("aboutcontainer.about_studio.headline.2"),
            className: "aboutcard3",
            text: [
                t("aboutcontainer.about_studio.about3.0"),
                t("aboutcontainer.about_studio.about3.1"),
            ],
            studio_employee: t("aboutcontainer.studio_employee.2"),
            alt: "Woman standing in a tree pose outdoors.",
        },
        {
            id: "4b",
            image: imageAbout4,
            headline: t("aboutcontainer.about_studio.headline.3"),
            className: "aboutcard4",
            text: [
                t("aboutcontainer.about_studio.about4.0"),
                t("aboutcontainer.about_studio.about4.1"),
            ],
            studio_employee: t("aboutcontainer.studio_employee.3"),
            alt: "Woman seated by a lake, with her eyes closed and her hands in her lap.",
        }
    ];

    const client_quotes = [
        {
            id: "1c",
            text: t("aboutcontainer.client_quotes.text.emily"),
            name: t("aboutcontainer.client_quotes.name.name1"),
            className: "aboutclient1",
        },
        {
            id: "2c",
            text: t("aboutcontainer.client_quotes.text.david"),
            name: t("aboutcontainer.client_quotes.name.name2"),
            className: "aboutclient2",
        },
        {
            id: "3c",
            text: t("aboutcontainer.client_quotes.text.sarah"),
            name: t("aboutcontainer.client_quotes.name.name3"),
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
