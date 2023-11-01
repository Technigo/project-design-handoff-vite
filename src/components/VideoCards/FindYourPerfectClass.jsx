import { useEffect, useState } from "react";
import { CardsSectionHeader } from "../Content/CardsSectionHeader"
import { VideoCard } from "./VideoCard"
import { useTranslation } from "react-i18next";
import "./videos-section.css";

export const FindYourPerfectClass = () => {
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

    const videoData = [
        {
            src: "./assets/images/yoga-studio-image1.jpg",
            altText: "Image of Avery doing Vinyasa Flow",
            time: "20 minutes",
            title: t("landingPage.findClass.video1.video1Heading"),
            name: t("landingPage.findClass.video1.instructor"),
            type: t("landingPage.findClass.video1.typeOfYoga"),
        },
        {
            src: "./assets/images/yoga-studio-image2.jpg",
            altText: "Image of Jacey doing Power flow",
            time: "45 minutes",
            title: t("landingPage.findClass.video2.video2Heading"),
            name: t("landingPage.findClass.video2.instructor"),
            type: t("landingPage.findClass.video2.typeOfYoga"),
        },
        {
            src: "./assets/images/yoga-studio-image5.jpg",
            altText: "Image of Ashley doing Vinyasa Flow",
            time: "60 minutes",
            title: t("landingPage.findClass.video3.video3Heading"),
            name: t("landingPage.findClass.video3.instructor"),
            type: t("landingPage.findClass.video3.typeOfYoga"),
        },
    ];

    // Conditionally renders the videos based on screen size
    const visibleVideos = windowWidth >= 1512 ? videoData : videoData.slice(0, 2);

    return (
        <section>
            <CardsSectionHeader heading={t("landingPage.findClass.h2")} button={t("landingPage.findClass.classesButton")} />
            <section className="videos-section">
                {visibleVideos.map((video, index) => (
                    <VideoCard
                        key={index}
                        src={video.src}
                        altText={video.altText}
                        time={video.time}
                        title={video.title}
                        name={video.name}
                        type={video.type}
                    />
                ))}
            </section>
        </section>
    );
}