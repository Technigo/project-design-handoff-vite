import "./home.css";
import { Link } from "react-router-dom";
import { LottieComponent } from "../../components/LottieComponent";
//import { TranslationComponent } from "../../components/TranslationComponent";
import { Hero } from "./SectionsHome/Hero";
import { LookingForMore} from "./SectionsHome/LookingForMore"
import { BlackAndWhiteImg } from "./SectionsHome/BlackAndWhiteImg";
import { Days40 } from "./SectionsHome/Days40";
import { ImgSection2 } from "./SectionsHome/ImgSection2";
import { KundaliniYoga } from "./SectionsHome/KundaliniYoga";
import { ImgSection3 } from "./SectionsHome/ImgSection3";
import { Love } from "./SectionsHome/Love";
import { Footer } from "./SectionsHome/Footer";

export const Home = () => {
    return (
        <>
       {/* LottieComponent */}
        <Hero />
        <LookingForMore />
        <BlackAndWhiteImg />
        <Days40 />
        <ImgSection2 />
        <KundaliniYoga />
        <ImgSection3 />
        <Love />
        <Footer />
       
        </>

    );
};