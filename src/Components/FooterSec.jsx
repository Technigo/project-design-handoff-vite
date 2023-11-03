import { Button } from "./Button"
import { useNavigate} from "react-router-dom"

export const FooterSec = () => {
    const nav = useNavigate()
  return (
    <div className="footer">
        <div className="frame">
        <img onClick={()=>{nav("/")}} className="logo" src="/LOGO.svg" alt="logo" />
        <p>Join our community and keep up to date</p>
        <input type="email" name="" id="" placeholder="Email" />
        <Button label={"JOIN NOW"}  size="small" />

        </div>
        <div className="pro-med">
        <ul className="properties">
            <li><a href="">GET STARTED</a></li>
            <li><a href="">MEMBERSHIP</a></li>
            <li><a href="">INDIVIDUAL COACHING</a></li>
            <li><a href="">NUTRITION</a></li>
            <li><a href="">CORPORATE</a></li>
            <li><a href="">FIT4LIFE PROGRAMMING</a></li>
            <li><a href="">COACHES</a></li>
            <li><a href="">SCHEDULE</a></li>


        </ul>
        <ul className="medias">
            <li><a href="www.instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="www.facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="www.youtube.com"><i className="fa-brands fa-youtube"></i></a></li>


        </ul>

            
        </div>
       
    </div>
  )
}
