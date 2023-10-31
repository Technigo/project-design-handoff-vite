import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
    </div>
  )
}
