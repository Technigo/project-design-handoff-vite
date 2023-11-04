import "./facilities.css"
import { useTranslation } from "react-i18next"

export const Facilities = () => {
    const { t } = useTranslation()



  return (
    <section className="facilities-section">
<div className="facilities-text-section">
    <div className="facilities-headline">
    <h1>{t("Facilities.h1")}</h1>
    <p>{t("Facilities.facilitiesText")}</p>
    </div>
</div>

<div className="facilities-card-wrapper">

    <div className="facilities-card">
        <img src="/Images/facilities-img-1.png" alt="" />
    </div>

    <div className="facilities-card">
        <img src="/Images/facilities-img-2.png" alt="" />
    </div>

    <div className="facilities-card">
        <img src="/Images/facilities-img-3.png" alt="" />
    </div>

    <div className="facilities-card">
        <img src="/Images/facilities-img-4.png" alt="" />
    </div>
    

</div>

    </section>
  )
}
