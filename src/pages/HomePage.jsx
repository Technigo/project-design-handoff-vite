import { HomeCards } from "../components/Home/HomeCards";
import { H2_Headline } from "../components/Typography/H2_Headline"
import { PText } from "../components/Typography/PText";

export const HomePage = () => {
    let h2_headline_1 = "Online Yoga and Meditation";
    let text = "Free trial ➤";

    return (
        <div className="home-page-wrapper">
            <div className="headline-wrapper">
                <H2_Headline h2_headline={h2_headline_1} />
                <h1>
                    Elevate Your Body, Mind, and Spirit
                </h1>
            </div>
            <PText text={text} />
            <section className="card-page-wrapper">
              <HomeCards />
            </section>
        </div>
    )
}
