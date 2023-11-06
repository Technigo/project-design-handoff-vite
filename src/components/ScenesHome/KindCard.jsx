import { useTranslation } from "react-i18next";

import "./KindWords.css";

export const KindCard = () => {
    const { t, ready } = useTranslation();

    const reviewArray = t("home.kindwords.reviews", {returnObjects: true})

    if (!ready) return "loading translations...";

    return (
        <>
            {reviewArray.map((review) => {
                return (
                    <div className="kind-card" key={review.id}>
                        <div
                            className="kind-image"
                            style={{
                                backgroundImage: `url(${review.imageUrl})`,
                            }}
                        ></div>
                        <p>"{review.text}"</p>
                    </div>
                );
            })}
        </>
    );
};

