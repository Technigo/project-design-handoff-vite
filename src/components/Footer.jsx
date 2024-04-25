import data from "../json/links.json"

export const Footer = () => {
  const getLinks = (startIndex, endIndex) => {
    return data.links
      .slice(startIndex, endIndex)
      .map((link, index) => <li  key={index}>{link}</li>)
  }
  return (
    <>
      <div className="flex justify-center mt-20 mb-10">
        <img alt="Facebook" src="./Facelogo-mobile.png" />
        <img alt="Instagram" className="mx-10" src="./Instalogo-mobile.png" />
        <img alt="Spotify" src="./Spotlogo-mobile.png" />
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 text-sm">
        <ul className="m-auto">{getLinks(0, 4)}</ul>
        <ul className="m-auto">{getLinks(4, 9)}</ul>
      </div>
      <select className="mt-10 absolute right-0 mr-2.5 text-base font-montserrat">
        <option>ENG</option>
        <option>SWE</option>
      </select>

      <p className="flex justify-center mt-20 mb-20 mx-4 text-xs text-center font-montserrat">
        © 2024 Urban Spin. All rights reserved.
        <a>Privacy Policy</a>
        <a>Terms of Service</a>
      </p>
    </>
  )
}
