import { useTranslation } from "react-i18next"
import "./Founder.css"

export const Founder = () => {

  const { t } = useTranslation()
  return (
    <section className="founder-section">
      <div className="founder-wrapper">
    <h2>{t("about.founder.heading")}</h2>
    <h3>Nita Svensson</h3>
    <img src={t("about.founder.founderImage")} alt={t("about.founder.founderImageAlt")} />
    <p>{t("about.founder.text")}</p>
    </div>
    </section>
  )
}
