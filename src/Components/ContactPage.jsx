

import { useNavigate } from "react-router-dom"
import { FooterSec } from "./FooterSec"
import { Header } from "./Header"



export const ContactPage = () => {
    const nav = useNavigate()
  return (
    <div>
        <Header />
        <div className="contact">
           <h3>Contact Information</h3>
           <span><i className="fa-solid fa-phone-volume"></i></span>
           <p>08-66 00 444</p>
           <span><i className="fa-solid fa-envelope"></i></span>
          <p>info@f4lcrossfit.com</p>

        </div>
        <div className="form">
            <form action="" onSubmit={(e) => {
                e.preventDefault()
                nav("/")
            }}>
                <label htmlFor="">First Name
                    <input type="text" />
                </label>
                <label htmlFor="">Last Name
                    <input type="text" />
                </label>
                <label htmlFor="">Email
                    <input type="email" />
                </label>
                <label htmlFor="">Phone Number
                    <input type="number" />
                </label>
                <label htmlFor="">Message
                    <input type="text" placeholder="write your message..." />
                </label>
                <button className="submit-btn" type="submit">Send Message</button>
            </form>

        </div>

        <FooterSec />
        
    </div>
  )
}
