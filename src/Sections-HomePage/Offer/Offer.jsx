import "./offer.css"
import { useTranslation } from "react-i18next"

export const Offer = () => {
  const { t } = useTranslation()

  return (
    <section className="offer-section">
      <div className="offer-text-wrapper">
        <h1>{t("Offer.h1")}</h1>
        <p>{t("Offer.p")}</p>
       </div>
    </section>
  )
}
