import "./ourVision.css"
import { useTranslation } from "react-i18next"

export const OurVision = () => {
   const { t } = useTranslation()


  return (
   <section className="our-vision-section">

      <div className="our-vision-wrapper">
      <div className="our-vision-text-wrapper">
          <h1>{t("OurVision.h1")}</h1>
          <p>{t("OurVision.p")}</p>
      </div>
    

      <div className="our-vision-img">
         <img className="dart-vader-img" src="/Images/ourVision-vader.png" alt="image of dart vader" />
      </div>
</div>
   </section>
  )
}
