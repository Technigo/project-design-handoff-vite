import { Link } from "react-router-dom";
import "./header.css";

// Component for the logo that is used both in the header and the footer
export const Logo = ({ text }) => {
  return (
    <Link to={"/"} className="logo">{text}</Link>
  )
}
