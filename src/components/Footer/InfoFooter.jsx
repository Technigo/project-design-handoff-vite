//Mounted in pages: AboutP.jsx and LandingP.jsx
//"Information-menu" with translation keys to fetch translated content from the translation files. 

import "./infofooter.css"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"


export const InfoFooter = () => {
    const { t } = useTranslation()

    return <div className="infofooter">
        <div className="infofooter-text">
            <h3><Link to="/about">{t("InfoFooter.h31")}</Link></h3>
            <h3>+</h3>
        </div>

        <div className="infofooter-text">
            <h3>{t("InfoFooter.h32")}</h3>
            <h3>+</h3>
        </div>

        <div className="infofooter-text">
            <h3>{t("InfoFooter.h33")}</h3>
            <h3>+</h3></div>

        <div className="infofooter-text">
            <h3>{t("InfoFooter.h34")}</h3>
            <h3>+</h3></div>

        <div className="infofooter-join">
            <h3>{t("InfoFooter.h35")}</h3>
            <p>{t("InfoFooter.p")}</p></div>
        <button>{t("InfoFooter.button")}</button>
        <div className="infofooter-social-img">
            <img src="../socialinsta.svg" alt="Instagram"></img>
            <img src="../socialfb.svg" alt="Facebook"></img>
        </div>
    </div>
}