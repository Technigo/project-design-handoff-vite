import { Link } from "react-router-dom";
import "./header.css";

export const Logo = ({ text }) => {
  return (
    <Link to={"/"} className="logo">{text}</Link>
  )
}
