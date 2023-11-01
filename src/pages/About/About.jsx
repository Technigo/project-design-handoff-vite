//import { BackButton } from "./SectionsAbout/BackButton";
//import { Form } from "./SectionsAbout/Form";
import { Footer } from "../Home/SectionsHome/Footer";
import { LetsGetInTouch } from "./SectionsAbout/LetsGetInTouch";
import { OrangeTextArea } from "./SectionsAbout/OrangeTextArea";
import { ThreePoints } from "./SectionsAbout/ThreePoints";
import { WhatIfYouCould } from "./SectionsAbout/WhatIfYouCould";

export const About = () => {
    return (
        <>
        <WhatIfYouCould />
        <ThreePoints />
        <OrangeTextArea />
        <LetsGetInTouch />
        <Footer />
        </>
    );
};