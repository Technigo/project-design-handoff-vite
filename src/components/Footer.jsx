import data from "../json/links.json";
import { FooterCard } from "./FooterCard";

export const Footer = () => {
  const getLinks = () => {
    return data.links.map((linkList, index) => (
      <FooterCard items={linkList.items} key={index} />
    ));
  };
  return (
    <>
      <img src="./Facelogo-mobile.png" />
      <img src="./Instalogo-mobile.png" />
      <img src="./Spotlogo-mobile.png" />
      <div>{getLinks()}</div>
      <select>
        <option>ENG</option>
        <option>SWE</option>
      </select>
      <p>
        © 2024 Urban Spin. All rights reserved.
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
      </p>
    </>
  );
};
