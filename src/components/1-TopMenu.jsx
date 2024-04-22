import "./1-TopMenu.css";

export const TopMenu = () => {
  return (
    <div className="topmenu-div">
      <div className="logo">
        <img
          className="logo-phone"
          src="./src/assets/icons/topmenu/LogoPhone.png"
        />
        <img
          className="logo-tablet"
          src="./src/assets/icons/topmenu/LogoTablet.png"
        />
        <img
          className="logo-desktop"
          src="./src/assets/icons/topmenu/LogoDesktop.png"
        />
      </div>
      <div className="menu-text-section">
        <p className="menu-text">First Timers</p>
        <p className="menu-text">Schedule</p>
        <p className="buy">Buy Sessions</p>
      </div>
      <div className="user-menu-div">
        <div className="user">
          <img
            className="user-phone"
            src="./src/assets/icons/topmenu/UserPhone.png"
          />
          <img
            className="user-phone-click"
            src="./src/assets/icons/topmenu/UserPhoneClick.png"
          />
          <img
            className="user-desktop"
            src="./src/assets/icons/topmenu/UserDefault.png"
          />
          <img
            className="user-desktop-hover"
            src="./src/assets/icons/topmenu/UserTablClick.png"
          />
        </div>
        <div className="menu">
          <img
            className="menu-phone"
            src="./src/assets/icons/topmenu/MenuPhone.png"
          />
          <img
            className="menu-phone-click"
            src="./src/assets/icons/topmenu/MenuPhoneClick.png"
          />
          <img
            className="menu-desktop"
            src="./src/assets/icons/topmenu/MenuDefault.png"
          />
          <img
            className="menu-desktop-hover"
            src="./src/assets/icons/topmenu/MenuTablHoverClick.png"
          />
        </div>
      </div>
    </div>
  );
};
