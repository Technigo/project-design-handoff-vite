import logo from "/favicon.svg";
import hamburger from "/icons/hamburger.svg";
import arrowDown from "/icons/arrowDown.svg";

export const Header = () => {
  return (
    <header>
      <nav className="flex flex-row flex-1 items-center justify-between w-full h-[4rem] bg-lime-green lg:h-[16vh] md:h-[11vh]">
        <a href="/">
          <img
            src={logo}
            alt="header logo"
            className=" my-3 ml-4 text-color-blue w-[93px] h-[40px] md:w-[156px] md:h-[67px] lg:w-[231px] lg:h-[99px]"
          />
        </a>
        <ul className="flex flex-1 flex-row justify-end items-center gap-16 text-[26px] font-bold max-lg:hidden mr-11">
          <li className="flex flex-row items-center hover:text-persian-blue hover:underline">
            CLASSES
            <img
              src={arrowDown}
              alt="arrow down"
              width={24}
              height={24}
              className="border-none"
            />
          </li>
          <li className=" hover:text-persian-blue hover:underline">ABOUT US</li>
          <li>
            <button
              type="button"
              className="border-2 border-solid text-persian-blue border-persian-blue rounded-[30px] py-4 px-5 hover:text-primary underline"
            >
              LOG IN
            </button>
          </li>
          <li>
            <button
              type="button"
              className="border-2 border-solid text-half-yellow bg-persian-blue border-persian-blue rounded-[30px] py-4 px-5 hover:bg-primary hover:text-persian-blue hover:border-none hover:border-half-yellow"
            >
              SIGN UP
            </button>
          </li>
        </ul>
        <div className=" mr-6 lg:hidden  ">
          <img
            src={hamburger}
            alt="hamburger"
            className="w-[24px] h-[14px] md:w-[53px] md:h-[29px]"
          />
        </div>
      </nav>
    </header>
  );
};
