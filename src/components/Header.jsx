import LogoWhiteMobile from "../assets/logo/Logo-white-Desktop.svg";
import MenuIconMobile from "../assets/icons/Menu-mobile.svg";
// import LogoWhiteDesktop from "../assets/Logo-white-Desktop.svg"

export const Header = () => {
  return (
    <>
      <nav className="mx-[24px] pt-1 md:mx-2 lg:mx-[112px]">
        <div className="flex items-center justify-between">
          <img
            src={LogoWhiteMobile}
            alt="Logo of the zumba hall"
            className="h-[45px] w-[91px] lg:h-max lg:w-max"
          />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center justify-self-end text-sm lg:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <img
              src={MenuIconMobile}
              alt="Hamburger Menu Icon"
              className="md:h-[35px] md:w-[52.5px] lg:hidden"
            />
          </button>
          <div className="hidden w-full lg:block lg:w-auto lg:text-base">
            <ul className=" mt-1 flex flex-col lg:flex-row lg:gap-2 ">
              <li>
                <a href="#" className=" block rounded text-white">
                  What is Zumba?
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <input type="text" className="h-[30px] w-[204px] text-black" />
              <li>
                <a href="#" className="text-yellow">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
