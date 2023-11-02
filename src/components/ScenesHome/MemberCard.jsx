import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./Membership.css";

export const MemberCard = () => {
    const { t, ready } = useTranslation();

    const offersArray = t("home.membership.offers", {returnObjects: true})

    if (!ready) return "loading translations...";

    return (
        <>
            {offersArray.map((data, index) => {
                return (
                    <div className="membership-card" key={index}>
                        <img
                            className="membership-icon"
                            src={data.icon}
                            alt={data.iconAlt}
                        />
                        <h2 className="membership-card-h2">{data.heading}</h2>
                        <p>{data.description}</p>
                        <Button>{data.btnText}</Button>
                    </div>
                );
            })}
        </>
    );
};
