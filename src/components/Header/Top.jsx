import searchIcon from '/assets/search-icon.svg'
import menuIcon from '/assets/menu-icon.svg'

export const Top = () => {
  return (
    <div className="z-2 flex flex-row justify-between items-center m-4 box-border">
      <div className="flex flex-col justify-center items-center text-darkblue">
        <div className="text-4xl md:7xl lg:text-8xl font-medium font-Roboto">Y</div>
        <div className="text-sm md:text-2xl lg:text-3xl font-Roboto">Studio</div>
      </div>

      <div className="flex">
        <div className="flex flex-row gap-5">
          <div className="cursor-pointer">
            <img src={searchIcon} alt="search-icon" className="w-6 md:w-8 lg:w-10" />
          </div>
          <div className="cursor-pointer">
            <img src={menuIcon} alt="menu-icon" className="w-6 md:w-8 lg:w-10" />
          </div>
        </div>
      </div>
</div>

  )}