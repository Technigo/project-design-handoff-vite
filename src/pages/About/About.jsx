import { Footer } from "../Home/SectionsHome/Footer";
import { BackButton } from "./SectionsAbout/BackButton";
import { LetsGetInTouch } from "./SectionsAbout/LetsGetInTouch";
import { OrangeTextArea } from "./SectionsAbout/OrangeTextArea";
import { ThreePoints } from "./SectionsAbout/ThreePoints";
import { WhatIfYouCould } from "./SectionsAbout/WhatIfYouCould";

export const About = () => {
    return (
        <>
        <BackButton />
        <WhatIfYouCould />
        <ThreePoints />
        <OrangeTextArea />
        <LetsGetInTouch />
        <Footer />
        </>
    );
};