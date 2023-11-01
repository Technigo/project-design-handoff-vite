import { CardsSectionHeader } from "../Content/CardsSectionHeader";
import { ImageOnTopComponent } from "../MeetTheTeam/ImageOnTopComponent";
import { useTranslation } from "react-i18next";

export const MeetTheTeam = () => {
    const { t } = useTranslation();

    return (
        <section>
            <CardsSectionHeader heading={t("aboutUs.ourPeople.h2")} text={t("aboutUs.ourPeople.firstParagraph")} button={t("aboutUs.ourPeople.button")} />
            <section className="teacher-cards">
                <ImageOnTopComponent src={"./assets/images/tamara-profile.jpg"} name={t("aboutUs.ourPeople.teachers.tamara")} altText={"Image of teacher Tamara"} description={t("aboutUs.ourPeople.teachers.tamaraDescription")} />
                <ImageOnTopComponent src={"./assets/images/becky-profile.jpg"} name={t("aboutUs.ourPeople.teachers.becky")} altText={"Image of teacher Becky"} description={t("aboutUs.ourPeople.teachers.beckyDescription")} />
                <ImageOnTopComponent src={"./assets/images/roberto-profile.jpg"} name={t("aboutUs.ourPeople.teachers.roberto")} altText={"Image of teacher Roberto"} description={t("aboutUs.ourPeople.teachers.robertoDescription")} />
                <ImageOnTopComponent src={"./assets/images/ellen-profile.jpg"} name={t("aboutUs.ourPeople.teachers.ellen")} altText={"Image of teacher Ellen"} description={t("aboutUs.ourPeople.teachers.ellenDescription")} />
            </section>
        </section>
    )
}
