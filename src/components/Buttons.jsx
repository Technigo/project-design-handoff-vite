import seeMore from "/button-see-more.svg"

export const BtnProgram = () => {
  return (
      <div className="ml-auto">
        <button className="inline-flex gap-4 items-center py-4 m-5">
          <span className="text-darkBlue text-lg font-medium font-inter">
            Alla program
          </span>
          <div className="w-8 h-8 md:w-20 md:h-20 p-2 bg-coral hover:bg-amber hover:scale-105 rounded-full flex justify-center items-center">
            <img src={seeMore} alt="all programs-button"  className="h-10"/>
          </div>
        </button>
      </div>
  )
}

export const BtnIntroduction = () => {
  return (
      <div className=" ml-auto">
        <button className="inline-flex gap-4 items-center py-4 m-5">
          <span className="text-darkBlue text-lg font-medium font-inter">
            Läs mer
          </span>
          <div className="w-8 h-8 md:w-20 md:h-20 p-2 bg-darkBlue hover:bg-hoverBlue  hover:scale-105 rounded-full flex justify-center items-center">
            <img src={seeMore} alt="see all-button"  className="h-10 invert hover:invert-0"/>
          </div>
        </button>
      </div>
  )
}
