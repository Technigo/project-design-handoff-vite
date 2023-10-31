import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
        <li>HOME</li>
        </Link>
        <Link to="/about">
        <li>ABOUT</li>
        </Link>
        <li>WHAT WE OFFER</li>
        <li>FIRST-TIMER</li>
        <li>CONTACT</li>
        <div>
          <p>EN</p>
          <p>SE</p>
        </div>
      </ul>
    </div>
  )
}
