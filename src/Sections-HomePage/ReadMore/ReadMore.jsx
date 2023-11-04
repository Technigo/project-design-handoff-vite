import { Button } from "../../Components/Reusable/Buttons/Button"
import "./readmore.css"
import { useTranslation } from "react-i18next"

export const ReadMore = () => {
const { t } = useTranslation()


  return (
 <section className="readMore-section">
  <div className="readMore-wrapper">
  <div className="readMore-text-container">
  <h1>{t("ReadMore.h1")}</h1>
  <p>{t("ReadMore.ourClanText")} </p>
  </div>

<div>
  <Button buttonText={t("ReadMore.button")} buttonClass={"read-more-btn"} />
</div>

<div className="readMore-text-container">
  <h1>{t("ReadMore.h12")}</h1>
  <p>{t("ReadMore.ourConceptText")}</p>
</div>
</div>
    </section>
  )
}
