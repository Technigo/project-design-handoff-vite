import logoStudioMama from "/logo-studio-mama.svg";
import hamburgerMenu from "/icon-hamburger.svg";

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logoStudioMama} alt="Studio Mama Logo" />
      </div>
      <div className="mobile-nav">
        <img src={hamburgerMenu} alt="Nav menu" />
      </div>
      <ul className="navigation">
        <li>
          <a href="#program">Program</a>
        </li>
        <li>
          <a href="#om">Om Studio Mama</a>
        </li>
        <li>
          <a href="#logga-in">Logga in</a>
        </li>
      </ul>
    </nav>
  );
};
