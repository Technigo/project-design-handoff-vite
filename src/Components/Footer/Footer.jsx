import "./footer.css"
import { Button } from "../Reusable/Buttons/Button"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer-wrapper">

        <section className="footer-menu">

          <div className="footer-menu-text-wrapper">

          <div className="footer-menu-text-container">
        <Link to={"/about"}>
        <h1>{t("Footer.h1")}</h1>
        </Link>
        <h1>+</h1>
        
        </div>

        <div className="footer-menu-text-container">
        <h1>{t("Footer.h12")}</h1>
        <h1>+</h1>
        </div>

        <div className="footer-menu-text-container">
        <h1>{t("Footer.h13")}</h1>
        <h1>+</h1>
        </div>

        <div className="footer-menu-text-container">
        <h1>{t("Footer.h14")}</h1>
        <h1>+</h1>
        </div>

        <div className="footer-menu-join-container">
        <h1>{t("Footer.h15")}</h1>
        <p>{t("Footer.p1")}</p>
        </div>

        </div>

        <div className="register-btn-container">
        <Button buttonText={t("Footer.button")} buttonClass={"register-btn"}/>
        </div>  
        

        <div className="social-icons-wrapper">
        <img src="/icons/facebook.svg" alt="facebook icon" className="social-icon" />
         <img src="/icons/instagram.svg" alt="instagram icon" className="social-icon" />
        </div>

      </section>

        <section className="footer-logo">
          <Link to={"/"}>
        <img className="galactic-logo" src="/glactic-logo.svg" alt="galactic fitness logo" />
        </Link>
        <div className="footer-logo-text">
        <h1>{t("Footer.p2")}
          <span className="rotopi-designs"> 
              <a href="https://www.figma.com/file/sV17gc9PG4pSotLdU9CtLt/Esra-Designer-Developer-Handover?type=design&node-id=0-1&mode=design&t=d7V4ZpKx9Gx5845a-0">
                {t("Footer.p3")}
              </a>
          </span>
         </h1>
        
        </div>
        </section>



    </footer>
  )
}
