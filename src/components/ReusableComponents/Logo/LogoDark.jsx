import LogoBlue from "/assets/Logoimageblue.png";

export const LogoDark = () => {
  return (
    <div className="darkLogo">
      <img src={LogoBlue} alt="Logo of a horse head made with blue lines" />
      <div className="logoText">
        <p>saddle up</p>
        <p>Yoga studio</p>
      </div>
    </div>
  );
};
