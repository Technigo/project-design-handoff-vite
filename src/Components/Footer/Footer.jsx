import "./footer.css"
import { Button } from "../Reusable/Buttons/Button"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="footer-wrapper">

        <section className="footer-menu">

          <div className="footer-menu-text-wrapper">

          <div className="footer-menu-text-container">
        <Link to={"/about"}>
        <h1>ABOUT US</h1>
        </Link>
        <h1>+</h1>
        
        </div>

        <div className="footer-menu-text-container">
        <h1>WHAT WE OFFER</h1>
        <h1>+</h1>
        </div>

        <div className="footer-menu-text-container">
        <h1>READ MORE</h1>
        <h1>+</h1>
        </div>

        <div className="footer-menu-text-container">
        <h1>CONTACT</h1>
        <h1>+</h1>
        </div>

        <div className="footer-menu-join-container">
        <h1>JOIN OUR CLAN!</h1>
        <p>You are not yet a member of Galactic Fitness, please register yourself to the force!</p>
        </div>

        </div>

        <div className="register-btn-container">
        <Button buttonText={"REGISTER NOW"} buttonClass={"register-btn"}/>
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
        <h1>GALACTIC FITNESS ©2023 BY <span className="rotopi-designs">RODOPI DESIGNS</span></h1>
        
        </div>
        </section>



    </footer>
  )
}
