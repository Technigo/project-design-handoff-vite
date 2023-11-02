//Mounted in MainCont.jsx

import "./memberships.css"

import { useTranslation } from "react-i18next"

export const Memberships = () => {
    const { t } = useTranslation()

    return <div className="memberships">

        <h2>{t("Memberships.h2")}</h2>
        <div className="membership-image">
            <img src="./membership.png" alt="membership" />
        </div>
        <p>{t("Memberships.p")}</p>
    </div>
}
