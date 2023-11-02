import { Link, useNavigate } from "react-router-dom";
import { NavigationMenu } from "../NavigationComponents/NavigationMenu";
import { AboutText } from "./AboutText";
import { Footer } from "../Footer/Footer";
import { VisitUs } from "./VisitUsComponents/VisitUs";
import BackIcon from "../assets/Back.svg"


export const About = () => {
    const navigate = useNavigate();

    const backButton = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col">
            <div className="m-6">

                <button className="hover:shadow-yellow-box border-2 p-1 border-black flex" type="button" onClick={backButton}> <img className="pt-1" src={BackIcon} alt="" />Home </button>
                <div className="flex justify-center">
                    <NavigationMenu />
                </div>
            </div>

            <div className="relative bg-header bg-cover h-auto w-full lg:h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20357.png?v=1698745283957)` }}>
                <AboutText />
                <VisitUs />
                <Footer />
            </div>
        </div>
    );
};
