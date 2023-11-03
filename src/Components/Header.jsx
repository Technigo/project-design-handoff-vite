import { useState } from "react"
import { useNavigate} from "react-router-dom"


export const Header = () => {
    const nav = useNavigate()
    const [ open, setOpen ] = useState(false)
 
  return (
    <div className="header">
        <div className="logo-container">
        <img onClick={()=>{nav("/")}} className="logo" src="/LOGO.svg" alt="logo" />

        </div>
       <nav className="navbar">
       <ul className='nav-list'>

            <li><a href="">GET STARTED</a></li>
            <li><a href="">MEMBERSHIP</a></li>
            <li><a href="">INDIVIDUAL COACHING</a></li>
            <li><a href="">NUTRITION</a></li>
            <li><a href="">CORPORATE</a></li>
            <li><a href="">COACHES</a></li>
        </ul>
        <button onClick={()=>{nav("/contact")}} className="trial-btn">BOOK A FREE TRIAL</button>


       </nav>
        <div className="bar-container">
            <i className="fa-solid fa-bars bar-btn" onClick={() => setOpen( (open) => !open)} ></i>
        </div>
        <div className={`menu ${open? "open" : "close"}`}>
        <ul className='nav-list'>
        <i className="fa-solid fa-xmark" onClick={() => setOpen( (open) => !open)} ></i>
            <li><a href="">GET STARTED</a></li>
            <li><a href="">MEMBERSHIP</a></li>
            <li><a href="">INDIVIDUAL COACHING</a></li>
            <li><a href="">NUTRITION</a></li>
            <li><a href="">CORPORATE</a></li>
            <li><a href="">FIT4LIFE PROGRAMMING</a></li>
            <li><a href="">COACHES</a></li>
            <li><a href="">SCHEDULE</a></li>
        </ul>
        </div>
        
    </div>
  )
}
