import "./Top.css"
import searchIcon from '/assets/search-icon.svg'
import menuIcon from '/assets/menu-icon.svg'

export const Top = () => {
  return (
    <div className="z-2 flex flex-row m-4">
      <div className="flex flex-col absolute top-0 left-10  first:justify-center items-center text-darkblue">
        <div className="m-0 text-8xl font-medium font-Roboto leading-12 ">Y</div>
        <div className="m-0 text-3xl font-Roboto">Studio</div>
      </div>

      <div className="w-fit-content flex flex-row flex-nowrap absolute m-5 right-10 top-0">
        <div className = "flex flex-row gap-5">
          <div className="cursor-pointer">
            <img src={searchIcon} alt="search-icon" className="w-10 mt-1" />
          </div>
          <div className = "cursor-pointer">
            <img src={menuIcon} alt = "menu-icon" className="w-12" />
          </div>
        </div>
      </div>

    </div>
  )
}
