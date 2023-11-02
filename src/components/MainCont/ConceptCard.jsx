//Mounted in MainCont.jsx

import "./conceptcard.css"

import { useTranslation } from "react-i18next"

export const ConceptCard = () => {
    const { t } = useTranslation()

    return <div className="conceptcard-scroll">
        <img src="./conceptcard1.png" alt="jedi" />
        <h3>{t("ConceptCard.h31")}</h3>
        <img src="./conceptcard2.png" alt="image" />
        <h3>{t("ConceptCard.h32")}</h3>
        <img src="./conceptcard3.png" alt="image" />
        <h3>{t("ConceptCard.h33")}</h3>
    </div>
}


