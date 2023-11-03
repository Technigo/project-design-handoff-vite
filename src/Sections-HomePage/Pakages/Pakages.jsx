import "./pakages.css"
import { useTranslation } from "react-i18next"

export const Pakages = () => {
  const { t } = useTranslation()

  return (
    <section className="pakages-section">

        <div className="pakages-wrapper">

            <div className="pakage-img-container">
                
            <img className="become-jedi"  src="/Images/pakage-become-jedi.png" alt="" />
            <p>{t("Pakages.p1")}</p>
            </div>          

            <div className="pakage-img-container">
                {/* <p>{t("Pakages.p2")}</p>    */}
            <img className="join-darkside" src="/Images/pakage-darkside.png" alt="" />   
            </div>  

            <div className="pakage-img-container">
                {/* <p>{t("Pakages.p3")}</p> */}
            <img className="way-mandalore" src="/Images/pakage-mandelore.png" alt="" />     
            </div>

        </div>
    </section>
  )
}
