//Mounted in page AboutP

import "./abouttrainers.css"
import { useTranslation } from "react-i18next"

export const AboutTrainers = () => {

    // Using the useTranslation hook to get the 't' function for translation
    const { t } = useTranslation();

    //Rendering component with translated content using "t" function
    return (
        <section className="trainers-section">

            <div className="trainers-headline">
                <h3>{t("AboutTrainers.h3")}</h3>
                <p>{t("AboutTrainers.p1")}</p>
            </div>

            <div className="trainers-wrapper">
                <div className="trainer-card">
                    <div className="trainer-card-content">
                        <img src="/dragana.png" alt="Image of dragana" />
                        <div className="trainer-card-text">
                            <h3>Dragana</h3>
                            <p>{t("AboutTrainers.p2")}</p>
                        </div>
                    </div>
                </div>

                <div className="trainer-card">
                    <div className="trainer-card-content">
                        <img src="/apinya.png" alt="Image of apinya" />
                        <div className="trainer-card-text">
                            <h3>Apinya</h3>
                            <p>{t("AboutTrainers.p3")}</p>
                        </div>
                    </div>
                </div>

                <div className="trainer-card">
                    <div className="trainer-card-content">
                        <img src="/hamza.png" alt="Image of hamza" />
                        <div className="trainer-card-text">
                            <h3>Hamza</h3>
                            <p>{t("AboutTrainers.p4")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}