import LogoBeige from "/assets/Logoimagebeige.png";

export const LogoLight = () => {
  return (
    <div className="lightLogo">
      <img src={LogoBeige} alt="Logo of a horse head made with beige lines" />
      <div className="logoText">
        <p>saddle up</p>
        <p>Yoga studio</p>
      </div>
    </div>
  );
};
