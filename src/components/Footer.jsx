import data from "../json/links.json"

export const Footer = () => {
  const getLinks = (startIndex, endIndex) => {
    return data.links
      .slice(startIndex, endIndex)
      .map((link, index) => <li key={index}>{link}</li>)
  }
  return (
    <>
      <div className="flex justify-center mt-20 mb-10 tablet:mb-16">
        <img
          alt="Facebook"
          className="w-6 h-6 desktop:w-14 desktop:h-14 tablet:w-10 tablet:h-10"
          src="./Facelogo.png"
        />
        <img
          alt="Instagram"
          className="w-6 h-6 mx-10  tablet:w-10 tablet:h-10 desktop:w-14 desktop:h-14 desktop:mx-20"
          src="./Instalogo.png"
        />
        <img
          alt="Spotify"
          className="w-6 h-6 desktop:w-14 desktop:h-14 tablet:w-10 tablet:h-10"
          src="./Spotlogo.png"
        />
      </div>

      <ul className="m-auto grid grid-cols-2 gap-x-10 gap-y-4 font-montserrat text-sm px-8 tablet:grid-cols-3 tablet:mx-16 desktop:mx-32 desktop:gap-x-40 desktop:text-lg">
        {getLinks(0, 10)}
      </ul>
      <select className="mt-10 absolute right-4 mr-2.5 text-base font-montserrat tablet:mr-16">
        <option>ENG</option>
        <option>SWE</option>
      </select>

      <p className="flex justify-center my-20 mx-4 text-xs text-center font-montserrat desktop:text-base">
        © 2024 Urban Spin. All rights reserved.
        <a className="px-4">Privacy Policy</a>
        <a>Terms of Service</a>
      </p>
    </>
  )
}
