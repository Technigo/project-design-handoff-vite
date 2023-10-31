import logo from "/favicon.svg";
export const Footer = () => {
  return (
    <section className="bg-lime-green">
      <div>
        <div className="font-bold flex flex-row gap-x-10">
          <p>ABOUT US</p>
          <p>FAQ</p>
          <select>
            <option value="English">English</option>
            <option value="Swedish">Swedish</option>
          </select>
        </div>
        <p className="font-bold">JOIN OUR COMMUNITY</p>
      </div>
      <div></div>
      <img src={logo} alt="bottom logo" />
    </section>
  );
};
