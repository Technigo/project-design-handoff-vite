import mainImg from "/assets/main-image.svg"
import searchIcon from '/assets/search-icon.svg'
import menuIcon from '/assets/menu-icon.svg'

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center w-screen">
        <div className="grid grid-cols-6 min-h-[375px] min-w-[320px] auto-rows-auto md:pb-[500px] lg:pb-[500px]" style={{
          backgroundImage: `url(${mainImg})`,
          backgroundPosition: 'left center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

        }}>
          <div className="flex justify-start col-start-1 font-Roboto font-semi-bold ">
            <div className="text-center md:px-5  lg:px-7">
              <h1 className="ml-3 text-[40px] mb-[-15px] md:text-[78px] md:mt-[-10px]  lg:text-[120px] lg:mb-[-45px]" >Y</h1>
              <h4 className="ml-3 text-[10px] md:text-[20px] md:mt-[-30px] lg:text-[40px] mt-0">Studio</h4>
            </div>
          </div>


          <div className="col-start-6 row-start-1 ">
            <div className="flex justify-end mr-3 mt-3 lg:px-7 lg:py-7  ">
              <img className="w-[19px] md:w-[24px] lg:w-[38px]" src={searchIcon} alt="search-icon" /> <img className="w-[19px] md:w-[33px] lg:w-[38px]" src={menuIcon} alt="menu-icon" />
            </div>
          </div>

          <div className=" font-roboto  grid-row-start-3 col-start-1 col-span-2 w-96 ml-16 md:mt-[100px] lg:mt-40">
            <h1 className="text-[28px] md:ml-16 md:text-[36px] lg:text-[82px] lg:font-bold lg:min-w-[600px]  ">Find your power</h1>
            <h3 className="text-[17px] md:ml-16  md:text-[25px] lg:text-[49px] lg:min-w-[600px]">Anywhere. Anytime.</h3>
            <button className="text-[11px] md:ml-16 md:mt-2 md:text-[15px] lg:text-[35px] bg-darkblue hover:bg-steelblue  active:bg-[#909394] text-yogawhite font-bold px-3 py-1 rounded-[15px] lg:rounded-[40px] lg:py-2 lg:px-5 lg:mt-2">Book now</button>
          </div>
        </div>
      </div>

    </>

  )
}
