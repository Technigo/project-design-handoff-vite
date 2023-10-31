import { TextImageComponent } from "../components/TextImageComponent/TextImageComponent";
import { SubHeroComponent } from "../components/SubHeroComponent/SubHeroComponent";
import { CardsSectionHeader } from "../components/CardsSectionHeader";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

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
            <TextImageComponent
                imageOnLeft={false}
                src={"./assets/images/yoga-studio-image4.jpg"}
                altText={"Image of a woman meditating"}
                textImageHeading={t("aboutUs.topContent.h1")}
                textImageParagraph={t("aboutUs.topContent.aboutUsParagraph")} />
            <SubHeroCompStyle><SubHeroComponent className="aboutUsParagraph" text={t("aboutUs.missionParagraph")} /></SubHeroCompStyle>
            <CardsSectionHeader heading={t("aboutUs.ourPeople.h2")} text={t("aboutUs.ourPeople.firstParagraph")} button={t("aboutUs.ourPeople.button")} />
        </section>
    )
}
