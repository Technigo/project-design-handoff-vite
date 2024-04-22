import LogoWhiteMobile from "../assets/logo/Logo-white-TabletMobile1.svg";
import MenuIconMobile from "../assets/icons/Menu-mobile.svg";
// import LogoWhiteDesktop from "../assets/Logo-white-Desktop.svg"

export const Header = () => {
  return (
    <>
      <div className="z-0 mx-[24px] flex justify-between pt-1 md:mx-2">
        <img src={LogoWhiteMobile} alt="Logo of the zumba hall" />
        <img src={MenuIconMobile} alt="Hamburger Menu Icon" />
      </div>
      {/* <div className='invisible -z-10 flex justify-between mx-[112px] lg:visible'>
        <img
          src={LogoWhiteDesktop}
          alt='Logo of The Zumba Hall'
        />
        <nav className='flex gap-1'>
          <p>
            <a href=''>What is Zumba?</a>
          </p>
          <p>
            <a href=''>About Us</a>
          </p>
          <input
            type='text'
            className='w-[204px] h-[30px]'
          />
          <p>
            <a href=''>Log in</a>
          </p>
        </nav>
      </div> */}
    </>
  );
};

// export const HeaderDesktop = () => {
//   return (
//     <div className='invisible flex justify-between mx-[112px] lg:visible'>
//       <img
//         src={LogoWhiteDesktop}
//         alt='Logo of The Zumba Hall'
//       />
//       <nav className='flex gap-1'>
//         <p>
//           <a href=''>What is Zumba?</a>
//         </p>
//         <p>
//           <a href=''>About Us</a>
//         </p>
//         <input
//           type='text'
//           className='w-[204px] h-[30px]'
//         />
//         <p>
//           <a href=''>Log in</a>
//         </p>
//       </nav>
//     </div>
//   )
// }
