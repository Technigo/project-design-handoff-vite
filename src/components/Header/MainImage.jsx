import mainImg from "/assets/main-image.svg"

export const MainImage = () => {
  return (
    <div className="w-full relative">
      <img src={mainImg} alt="yogo-image" className="w-full object-cover" />
    </div>
  )}