import data from "../json/links.json";

export const Footer = () => {
  const getLinks = (startIndex, endIndex) => {
    return data.links
      .slice(startIndex, endIndex)
      .map((link, index) => <li key={index}>{link}</li>);
  };
  return (
    <>
      <div className="flex justify-center mt-20 mb-10">
        <img alt="Facebook" src="./Facelogo-mobile.png" />
        <img alt="Instagram" className="mx-10" src="./Instalogo-mobile.png" />
        <img alt="Spotify" src="./Spotlogo-mobile.png" />
      </div>
      <ul>{getLinks(0, 4)}</ul>
      <ul>{getLinks(4, 9)}</ul>
      <select className="mt-10 flex items-end">
        <option>ENG</option>
        <option>SWE</option>
      </select>
      <p className="flex justify-center mt-20 mb-10 text-xs">
        © 2024 Urban Spin. All rights reserved.
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
      </p>
    </>
  );
};
