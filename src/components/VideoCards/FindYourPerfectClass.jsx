import { CardsSectionHeader } from "../Content/CardsSectionHeader"
import { VideoCard } from "./VideoCard"
import { useTranslation } from "react-i18next";

export const FindYourPerfectClass = () => {
    const { t } = useTranslation();

    return (
        <section>
            <CardsSectionHeader heading={t("landingPage.findClass.h2")} button={t("landingPage.findClass.classesButton")} />
            <VideoCard
                time={"20 minutes"}
                title={t("landingPage.findClass.video1.video1Heading")}
                name={t("landingPage.findClass.video1.instructor")}
                type={t("landingPage.findClass.video1.typeOfYoga")}
            />
            <VideoCard
                time={"45 minutes"}
                title={t("landingPage.findClass.video2.video2Heading")}
                name={t("landingPage.findClass.video2.instructor")}
                type={t("landingPage.findClass.video2.typeOfYoga")}
            />
            <VideoCard
                time={"60 minutes"}
                title={t("landingPage.findClass.video3.video3Heading")}
                name={t("landingPage.findClass.video3.instructor")}
                type={t("landingPage.findClass.video3.typeOfYoga")}
            />
        </section>
    )
}