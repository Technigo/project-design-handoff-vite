import "./homePage.css"
import { HomeContainer } from "../components/Home/HomeContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { H2_Headline } from "../components/Typography/H2_Headline";

import { PText } from "../components/Typography/PText";

export const HomePage = () => {
    let h2_headline = "Online Yoga and Meditation";
    let h1_headline = "Elevate Your Body, Mind, and Spirit";
    let text_trial = "Free trial ➤";
    let text_button = "Join the journey";

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
                            className="brown-text"
                        />
                    </div>
                    <div className="trial-wrapper">
                        <div className="trial-text">
                            <PText
                                className="brown-text paragraph-text"
                                text={text_trial}
                            />
                        </div>
                        <button className="trial_btn">
                            <PText
                                className="trial_btn_text brown-text"
                                text={text_button}
                            />
                        </button>
                    </div>
                </div>
                <section className="home-card-page-wrapper">
                    <HomeContainer />
                </section>
            </div>
        </div>
    )
}
