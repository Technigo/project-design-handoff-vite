import MenuIconMobile from "../assets/icons/Menu-mobile.svg";
import { LogoLight } from "./Logo";
import SearchIcon from "../assets/icons/magnifier.svg";

export const Header = () => {
  return (
    <>
      <nav className="mx-[24px] pt-1 md:mx-2 lg:mx-[112px] lg:pt-2">
        <div className="flex items-center justify-between">
          <LogoLight />
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
            <ul className=" mt-1 flex flex-col gap-2 lg:mt-[0px] lg:flex-row ">
              <li>
                <a href="#" className=" block rounded text-white">
                  What is Zumba?
                </a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <div className="flex bg-white pr-[10px]">
                <input
                  type="text"
                  className="h-[30px] w-[200px] pl-[5px] text-black"
                />
                <button>
                  <img
                    src={SearchIcon}
                    alt="search icon"
                    className="pl-[5px]"
                  />
                </button>
              </div>
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
