import { Button } from "./Button"


export const FooterSec = () => {
  return (
    <div className="footer">
        <div className="frame">
        <img className="logo" src="/LOGO.svg" alt="logo" />
        <p>Join our community and keep up to date</p>
        <input type="email" name="" id="" placeholder="Email" />
        <Button label={"JOIN NOW"}  size="small" />

        </div>
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
            <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href=""><i className="fa-brands fa-youtube"></i></a></li>


        </ul>

    </div>
  )
}
