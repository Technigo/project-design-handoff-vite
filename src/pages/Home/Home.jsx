import "./home.css";
import { Link } from "react-router-dom";
import { LottieComponent } from "../../components/LottieComponent";
import { TranslationComponent } from "../../components/TranslationComponent";
import { Hero } from "./SectionsHome/Hero";
import { LookingForMore} from "./SectionsHome/LookingForMore"

export const Home = () => {
    return (
        <>
        <LottieComponent />
        <TranslationComponent />
        <Hero />
        <LookingForMore />
        </>

    );
};