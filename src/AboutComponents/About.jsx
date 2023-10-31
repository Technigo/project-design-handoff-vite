import { Link, useNavigate } from "react-router-dom";
import { NavigationMenu } from "../NavigationComponents/NavigationMenu";
import { AboutText } from "./AboutText";


export const About = () => {
    const navigate = useNavigate();

    const backButton = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col">
            <div className=" p-4">
                <button className="mr-4" type="button" onClick={backButton}>Back</button>
                <div className="flex justify-center">
                    <NavigationMenu />
                </div>
            </div>

            <div className="relative bg-header bg-cover h-screen w-full" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/Rectangle%20357.png?v=1698745283957)` }}>
                <AboutText />

            </div>
        </div>
    );
};
