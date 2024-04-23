import "./MainImage.css"
import mainImg from "/assets/main-image.svg"

export const MainImage = () => {
  return (
    <div className="image-container">
      <img src={mainImg} alt="yogo-image" className="main-image" />
    </div>
  )
}
