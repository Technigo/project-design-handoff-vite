import memberships from "../../data/memberdata.json";
import { Button } from "../Button/Button";
import "./Membership.css"

export const MemberCard = () => {
    return (
        <>
            {memberships.map((data, index) => {
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
