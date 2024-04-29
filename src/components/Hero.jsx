import searchIcon from '/assets/search-icon.svg'
import menuIcon from '/assets/menu-icon.svg'
import { Link } from 'react-scroll';

export const Hero = ({ heroImg, mainText, subText, }) => {
  return (
    <>

      <div className=" flex flex-wrap justify-center w-screen ">
        <div className=" pl-0 ml-0 grid grid-cols-6 min-h-[375px] min-w-[320px] auto-rows-auto md:pb-[500px] lg:pb-[500px]" style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="flex flex-wrap justify-start col-start-1 font-Roboto font-semi-bold ">
            <div className="text-center md:px-5  lg:px-7">
            <a className='cursor-pointer' href="#">
              <h1 className="ml-3 text-[40px] mb-[-15px] md:text-[78px] md:mt-[-10px]  lg:text-[120px] lg:mb-[-45px]" >Y</h1>
              <h4 className="ml-3 text-[10px] md:text-[20px] md:mt-[-30px] lg:text-[40px] mt-0">Studio</h4>
              </a>
            </div>
          </div>

          <div className="col-start-6 row-start-1 ">
            <div className="flex flex-wrap justify-end mr-3 mt-3  lg:py-7  ">
              <img className="w-[19px] md:w-[26px] lg:w-[44px] cursor-pointer" src={searchIcon} alt="search-icon" /> 
              <img className="w-[24px] md:w-[33px] lg:w-[57px] cursor-pointer" src={menuIcon} alt="menu-icon" />
            </div>
          </div>
          <div className=" font-roboto  grid-row-start-3 col-start-1 col-span-2  min-w-60  md:min-w-80 lg:min-w-96 ml-16 md:mt-[100px] lg:mt-40">
          <Link to="Philosophy" smooth={true} duration={500}>
            <h1 className="cursor-pointer text-[28px] md:ml-16 md:text-[36px] lg:text-[70px] lg:font-bold lg:min-w-[600px]  ">{mainText}</h1>
            </Link>
            <h3 className="text-[21px] md:ml-16  md:text-[25px] lg:text-[49px] lg:min-w-[600px]">{subText}</h3>
            <button className=" cursor-pointer text-[11px] md:ml-16 md:mt-2 md:text-[15px] lg:text-[35px] bg-darkblue hover:bg-steelblue  active:bg-[#909394] text-yogawhite font-bold px-3 py-1 rounded-[15px] lg:rounded-[40px] lg:py-2 lg:px-5 lg:mt-2" onClick={() => alert("Sorry we are full at the moment - please try again later 🙏🏽 ")}
>Book now</button>
          </div>
        </div>
</div>
    </>
  )
}
