
import { HomeContainer } from "../components/Home/HomeContainer";
import { H1_Headline } from "../components/Typography/H1_Headline";
import { H2_Headline } from "../components/Typography/H2_Headline";

import { PText } from "../components/Typography/PText";

export const HomePage = () => {
    let h2_headline = "Online Yoga and Meditation";
    let h1_headline = "Elevate Your Body, Mind, and Spirit";
    let text = "Free trial ➤";

    return (
        <div className="home-page-wrapper">
            <div className="headline-wrapper">
                <H2_Headline h2_headline={h2_headline} />
                <H1_Headline h1_headline={h1_headline} />
            </div>
            <PText text={text} />
            <section className="home-card-page-wrapper">
              <HomeContainer />
            </section>
        </div>
    )
}
