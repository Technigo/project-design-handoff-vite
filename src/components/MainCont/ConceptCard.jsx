//Mounted in MainCont.jsx

//Scrolling section.

import "./conceptcard.css"

import { useTranslation } from "react-i18next"

export const ConceptCard = () => {
    const { t } = useTranslation()

    return <div className="conceptcard-scroll">
        <img src="./conceptcard1.png" alt="jedi" />

        <img src="./conceptcard2.png" alt="image" />

        <img src="./conceptcard3.png" alt="image" />

    </div>
}

//Commented out this since I wasn't sure of the design.
{/* 
<h3>{t("ConceptCard.h31")}</h3>
<h3>{t("ConceptCard.h32")}</h3>
<h3>{t("ConceptCard.h33")}</h3> */}
