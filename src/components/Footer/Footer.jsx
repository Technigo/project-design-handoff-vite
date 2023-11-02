//Mounted in App.jsx

import { Logo } from "../ReusableComp/Logo"
import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="by"><h6><a href="https://www.figma.com/file/sV17gc9PG4pSotLdU9CtLt/Esra-Designer-Developer-Handover?type=design&node-id=0-1&mode=design&t=d7V4ZpKx9Gx5845a-0">GALACTIC FITNESS 2023 BY RODOPI DESIGNS</a></h6></div>
    </div>
  )
}