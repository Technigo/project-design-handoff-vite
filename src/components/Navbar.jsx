import "./navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="/">
            <img src="/src/assets/logo/logo_phone.svg" alt="logo" />
          </a>
        </li>
        <li>Courses for kids</li>
        <li>Info for adults</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
