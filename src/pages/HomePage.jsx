
import "./homePage.css"
import { HomeContainer } from "../components/Home/HomeContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { H2_Headline } from "../components/Typography/H2_Headline";

import { PText } from "../components/Typography/PText";
import { useTranslation } from "react-i18next";
import { Button } from "../components/Buttons/Button";

export const HomePage = () => {

    const { t } = useTranslation();

    let h2_headline = t("homepage.hero1");
    let h1_headline = t("homepage.hero2");
    let text_trial = t("homepage.hero3");

    return (
        <div className="home-page-wrapper">
            <div className="hero-content">
                <div className="hero-text">
                    <div className="headline-wrapper">
                        <div className="hero_h2">
                            <H2_Headline
                                className="brown-text"
                                h2_headline={h2_headline}
                            />
                        </div>
                        <H1_Headline
                            h1_headline={h1_headline}
                            className="brown-text new_line"
                        />
                    </div>
                    <div className={`trial-wrapper`}>
                        <div className="trial-text">
                            <PText
                                className="brown-text paragraph-text"
                                text={text_trial}
                            />
                        </div>
                        <Button
                            text={t("homepage.button")}
                        />
                    </div>
                </div>
                <HomeContainer />
            </div>
        </div>
    )
}
