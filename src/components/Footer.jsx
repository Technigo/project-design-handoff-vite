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

      <ul className="m-auto grid grid-cols-2 gap-x-10 gap-y-4 font-montserrat text-sm px-8 tablet:grid-cols-3">
        {getLinks(0, 10)}
      </ul>
      <select className="mt-10 absolute right-4 mr-2.5 text-base font-montserrat">
        <option className="p-4">ENG</option>
        <option>SWE</option>
      </select>

      <p className="flex justify-center my-20 mx-4 text-xs text-center font-montserrat">
        © 2024 Urban Spin. All rights reserved.
        <a className="px-4">Privacy Policy</a>
        <a>Terms of Service</a>
      </p>
    </>
  );
};
