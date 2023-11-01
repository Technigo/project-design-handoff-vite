import "./Hamburger.css";

export const Hamburger = () => {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          {/* A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it. */}

          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <a href="#">
              <li>Membership</li>
            </a>
            <a href="#">
              <li>MiniFit</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};
