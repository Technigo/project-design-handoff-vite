//Mounted in App.jsx

import { Logo } from "../ReusableComp/Logo"
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="by"><h6>GALACTIC FITNESS 2023 BY RODOPI DESIGNS</h6></div>
    </div>
  )
}