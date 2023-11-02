import { TextImageComponent } from "../components/TextImageComponent/TextImageComponent";
import { SubHeroComponent } from "../components/SubHeroComponent/SubHeroComponent";
import { MeetTheTeam } from "../components/MeetTheTeam/MeetTheTeam";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import "./pages.css";

// A tiny styled component to remove the button from this component
const SubHeroCompStyle = styled.section`
    button {
        display: none;
    }
`

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="about-us-wrapper">
                <TextImageComponent
                    className="about-us-background"
                    imageOnLeft={false}
                    src={"./assets/images/yoga-studio-image4.jpg"}
                    altText={"Image of a woman meditating"}
                    textImageHeading={t("aboutUs.topContent.h1")}
                    textImageParagraph={t("aboutUs.topContent.aboutUsParagraph")} />
            </div>
            <SubHeroCompStyle><SubHeroComponent text={t("aboutUs.missionParagraph")} /></SubHeroCompStyle>
            <MeetTheTeam />
            <ContactUs />
        </section>
    )
}
