import { useState, useEffect } from "react";
import { CardsSectionHeader } from "../Content/CardsSectionHeader";
import { ImageOnTopComponent } from "../MeetTheTeam/ImageOnTopComponent";
import { useTranslation } from "react-i18next";
import "./meet-the-team.css";

export const MeetTheTeam = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { t } = useTranslation();

    // Add event listener to update windowWidth in state when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section>
            <CardsSectionHeader linkTo={"/meet-the-teachers"} heading={t("aboutUs.ourPeople.h2")} text={t("aboutUs.ourPeople.firstParagraph")} button={t("aboutUs.ourPeople.button")} />
            <section className="teacher-cards">
                <ImageOnTopComponent src={"./assets/images/tamara-profile.jpg"} name={t("aboutUs.ourPeople.teachers.tamara")} altText={"Image of teacher Tamara"} description={t("aboutUs.ourPeople.teachers.tamaraDescription")} />
                <ImageOnTopComponent src={"./assets/images/becky-profile.jpg"} name={t("aboutUs.ourPeople.teachers.becky")} altText={"Image of teacher Becky"} description={t("aboutUs.ourPeople.teachers.beckyDescription")} />
                {/* Code to hide the last two cards on smaller screens according to sketch */}
                {windowWidth >= 1512 ?
                    <>
                        <ImageOnTopComponent src={"./assets/images/roberto-profile.jpg"} name={t("aboutUs.ourPeople.teachers.roberto")} altText={"Image of teacher Roberto"} description={t("aboutUs.ourPeople.teachers.robertoDescription")} />
                        <ImageOnTopComponent src={"./assets/images/ellen-profile.jpg"} name={t("aboutUs.ourPeople.teachers.ellen")} altText={"Image of teacher Ellen"} description={t("aboutUs.ourPeople.teachers.ellenDescription")} />
                    </> : null

                }
            </section>
        </section>
    )
}
