import { Hero } from "../components/Hero/Hero";
import { SubHeroComponent } from "../components/SubHeroComponent/SubHeroComponent";
import { FindYourPerfectClass } from "../components/VideoCards/FindYourPerfectClass";
import { TextImageComponent } from "../components/TextImageComponent/TextImageComponent";
import { useTranslation } from "react-i18next";

// Component for the Landing page/Startpgae
export const LandingPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Hero />
            <SubHeroComponent text={t("landingPage.subhero.subheroParagraph")} />
            <FindYourPerfectClass />
            {/* By not passing a prop here, the component reverts to the default value, which is left */}
            <TextImageComponent
                src={"./assets/images/yoga-studio-image3.jpg"}
                linkTo={"/classes"}
                altText={"Image of a woman in a bridge yoga pose"}
                textImageHeading={t("landingPage.inPersonClasses.h2")}
                textImageParagraph1={t("landingPage.inPersonClasses.inPersonClassesParagraph1")}
                textImageParagraph2={t("landingPage.inPersonClasses.inPersonClassesParagraph2")}
                textImageParagraph3={t("landingPage.inPersonClasses.inPersonClassesParagraph3")}
                className={"green thick"}
                textImageButton={t("landingPage.inPersonClasses.inPersonClassesButton")} />
            {/* By passing the imageOnLeft prop false here, the component will render with the image on the right */}
            <TextImageComponent
                imageOnLeft={false}
                linkTo={"/virtual-classes"}
                src={"./assets/images/yoga-studio-image4.jpg"}
                altText={"Image of a woman meditating"}
                textImageHeading={t("landingPage.virtualClasses.h2")}
                textImageParagraph1={t("landingPage.virtualClasses.virtualClassesParagraph1")}
                textImageParagraph2={t("landingPage.virtualClasses.virtualClassesParagraph2")}
                className={"brown-to-green thick"}
                textImageButton={t("landingPage.virtualClasses.virtualClassesButton")} />
        </>
    )
}