import { Hero } from "../components/Hero/Hero";
import { SubHeroComponent } from "../components/SubHeroComponent/SubHeroComponent";
import { FindYourPerfectClass } from "../components/VideoCards/FindYourPerfectClass";
import { TextImageComponent } from "../components/TextImageComponent/TextImageComponent";
import { useTranslation } from "react-i18next";

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
                altText={"Image of a woman in a bridge yoga pose"}
                textImageHeading={t("landingPage.inPersonClasses.h2")}
                textImageParagraph={t("landingPage.inPersonClasses.inPersonClassesParagraph")}
                className={"green thick"}
                textImageButton={t("landingPage.inPersonClasses.inPersonClassesButton")} />
            {/* By passing the imageOnLeft prop false here, the component will render with the image on the right */}
            <TextImageComponent
                imageOnLeft={false}
                src={"./assets/images/yoga-studio-image4.jpg"}
                altText={"Image of a woman meditating"}
                textImageHeading={t("landingPage.virtualClasses.h2")}
                textImageParagraph={t("landingPage.virtualClasses.virtualClassesParagraph")}
                className={"brown-to-green thick"}
                textImageButton={t("landingPage.virtualClasses.virtualClassesButton")} />
        </>
    )
}

// imageOnLeft = true, // imageOnLeft is a prop that defaults to true
//      src,
// altText,
// h2,
// inPersonClassesParagraph,
// className,
// inPersonClassesButton,


// {imageOnLeft && (
//     <img src="./assets/images/yoga-studio-image3.jpg" alt="Image of a woman in a bridge yoga pose" />
// )}
// <article>
//     <h2>{t("landingPage.inPersonClasses.h2")}</h2>
//     <p>{t("landingPage.inPersonClasses.inPersonClassesParagraph")}</p>
//     <Button className={"green"} text={t("landingPage.inPersonClasses.inPersonClassesButton")} />
// </article>
// {/* Image will be to the right, when left "isn't true" */}
// {!imageOnLeft && (
//     <img src="./assets/images/yoga-studio-image3.jpg" alt="Image of a woman in a bridge yoga pose" />
// )}