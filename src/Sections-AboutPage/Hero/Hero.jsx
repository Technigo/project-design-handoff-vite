import "./heroAbout.css"
import { useTranslation } from "react-i18next"

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="hero-about-section">
        <h1>{t("AboutHero.h1")}</h1>
        <p>{t("AboutHero.p")}</p>
    </section>
  )
}
